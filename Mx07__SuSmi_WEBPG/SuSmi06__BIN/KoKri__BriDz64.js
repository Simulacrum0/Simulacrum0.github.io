// include: shell.js
// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(moduleArg) => Promise<Module>
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module != "undefined" ? Module : {};

// The way we signal to a worker that it is hosting a pthread is to construct
// it with a specific name.
var ENVIRONMENT_IS_WASM_WORKER = globalThis.name == "em-ww";

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).
// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window == "object";

var ENVIRONMENT_IS_WORKER = typeof WorkerGlobalScope != "undefined";

// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = typeof process == "object" && process.versions?.node && process.type != "renderer";

var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
var arguments_ = [];

var thisProgram = "./this.program";

var quit_ = (status, toThrow) => {
  throw toThrow;
};

// In MODULARIZE mode _scriptName needs to be captured already at the very top of the page immediately when the page is parsed, so it is generated there
// before the page load. In non-MODULARIZE modes generate it here.
var _scriptName = typeof document != "undefined" ? document.currentScript?.src : undefined;

if (ENVIRONMENT_IS_WORKER) {
  _scriptName = self.location.href;
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = "";

function locateFile(path) {
  if (Module["locateFile"]) {
    return Module["locateFile"](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var readAsync, readBinary;

if (ENVIRONMENT_IS_SHELL) {
  const isNode = typeof process == "object" && process.versions?.node && process.type != "renderer";
  if (isNode || typeof window == "object" || typeof WorkerGlobalScope != "undefined") throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
} else // Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  try {
    scriptDirectory = new URL(".", _scriptName).href;
  } catch {}
  if (!(typeof window == "object" || typeof WorkerGlobalScope != "undefined")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  {
    // include: web_or_worker_shell_read.js
    if (ENVIRONMENT_IS_WORKER) {
      readBinary = url => {
        var xhr = new XMLHttpRequest;
        xhr.open("GET", url, false);
        xhr.responseType = "arraybuffer";
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */ (xhr.response));
      };
    }
    readAsync = async url => {
      assert(!isFileURI(url), "readAsync does not work with file:// URLs");
      var response = await fetch(url, {
        credentials: "same-origin"
      });
      if (response.ok) {
        return response.arrayBuffer();
      }
      throw new Error(response.status + " : " + response.url);
    };
  }
} else {
  throw new Error("environment detection error");
}

var out = console.log.bind(console);

var err = console.error.bind(console);

var IDBFS = "IDBFS is no longer included by default; build with -lidbfs.js";

var PROXYFS = "PROXYFS is no longer included by default; build with -lproxyfs.js";

var WORKERFS = "WORKERFS is no longer included by default; build with -lworkerfs.js";

var FETCHFS = "FETCHFS is no longer included by default; build with -lfetchfs.js";

var ICASEFS = "ICASEFS is no longer included by default; build with -licasefs.js";

var JSFILEFS = "JSFILEFS is no longer included by default; build with -ljsfilefs.js";

var OPFS = "OPFS is no longer included by default; build with -lopfs.js";

var NODEFS = "NODEFS is no longer included by default; build with -lnodefs.js";

// perform assertions in shell.js after we set up out() and err(), as otherwise
// if an assertion fails it cannot print the message
assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add `node` to `-sENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");

// end include: shell.js
// include: preamble.js
// === Preamble library stuff ===
// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html
var wasmBinary;

if (typeof WebAssembly != "object") {
  err("no native wasm support detected");
}

// Wasm globals
// For sending to workers.
var wasmModule;

//========================================
// Runtime essentials
//========================================
// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

// In STRICT mode, we only define assert() when ASSERTIONS is set.  i.e. we
// don't define it at all in release modes.  This matches the behaviour of
// MINIMAL_RUNTIME.
// TODO(sbc): Make this the default even without STRICT enabled.
/** @type {function(*, string=)} */ function assert(condition, text) {
  if (!condition) {
    abort("Assertion failed" + (text ? ": " + text : ""));
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.
/**
 * Indicates whether filename is delivered via file protocol (as opposed to http/https)
 * @noinline
 */ var isFileURI = filename => filename.startsWith("file://");

// include: runtime_common.js
// include: runtime_stack_check.js
// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // If the stack ends at address zero we write our cookies 4 bytes into the
  // stack.  This prevents interference with SAFE_HEAP and ASAN which also
  // monitor writes to address zero.
  if (max == 0) {
    max += 4;
  }
  // The stack grow downwards towards _emscripten_stack_get_end.
  // We write cookies to the final two words in the stack and detect if they are
  // ever overwritten.
  (growMemViews(), HEAPU32)[((max) / 4)] = 34821223;
  (growMemViews(), HEAPU32)[(((max) + (4)) / 4)] = 2310721022;
  // Also test the global address 0 for integrity.
  (growMemViews(), HEAPU32)[((0) / 4)] = 1668509029;
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  // See writeStackCookie().
  if (max == 0) {
    max += 4;
  }
  var cookie1 = (growMemViews(), HEAPU32)[((max) / 4)];
  var cookie2 = (growMemViews(), HEAPU32)[(((max) + (4)) / 4)];
  if (cookie1 != 34821223 || cookie2 != 2310721022) {
    abort(`Stack overflow! Stack cookie has been overwritten at ${ptrToString(max)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(cookie2)} ${ptrToString(cookie1)}`);
  }
  // Also test the global address 0 for integrity.
  if ((growMemViews(), HEAPU32)[((0) / 4)] != 1668509029) {
    abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
  }
}

// end include: runtime_stack_check.js
// include: runtime_exceptions.js
// end include: runtime_exceptions.js
// include: runtime_debug.js
var runtimeDebug = true;

// Switch to false at runtime to disable logging at the right times
// Used by XXXXX_DEBUG settings to output debug messages.
function dbg(...args) {
  if (!runtimeDebug && typeof runtimeDebug != "undefined") return;
  // TODO(sbc): Make this configurable somehow.  Its not always convenient for
  // logging to show up as warnings.
  console.warn(...args);
}

// Endianness check
(() => {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 25459;
  if (h8[0] !== 115 || h8[1] !== 99) abort("Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)");
})();

function consumedModuleProp(prop) {
  if (!Object.getOwnPropertyDescriptor(Module, prop)) {
    Object.defineProperty(Module, prop, {
      configurable: true,
      set() {
        abort(`Attempt to set \`Module.${prop}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`);
      }
    });
  }
}

function makeInvalidEarlyAccess(name) {
  return () => assert(false, `call to '${name}' via reference taken before Wasm module initialization`);
}

function ignoredModuleProp(prop) {
  if (Object.getOwnPropertyDescriptor(Module, prop)) {
    abort(`\`Module.${prop}\` was supplied but \`${prop}\` not included in INCOMING_MODULE_JS_API`);
  }
}

// forcing the filesystem exports a few things by default
function isExportedByForceFilesystem(name) {
  return name === "FS_createPath" || name === "FS_createDataFile" || name === "FS_createPreloadedFile" || name === "FS_preloadFile" || name === "FS_unlink" || name === "addRunDependency" || // The old FS has some functionality that WasmFS lacks.
  name === "FS_createLazyFile" || name === "FS_createDevice" || name === "removeRunDependency";
}

/**
 * Intercept access to a symbols in the global symbol.  This enables us to give
 * informative warnings/errors when folks attempt to use symbols they did not
 * include in their build, or no symbols that no longer exist.
 *
 * We don't define this in MODULARIZE mode since in that mode emscripten symbols
 * are never placed in the global scope.
 */ function hookGlobalSymbolAccess(sym, func) {
  if (typeof globalThis != "undefined" && !Object.getOwnPropertyDescriptor(globalThis, sym)) {
    Object.defineProperty(globalThis, sym, {
      configurable: true,
      get() {
        func();
        return undefined;
      }
    });
  }
}

function missingGlobal(sym, msg) {
  hookGlobalSymbolAccess(sym, () => {
    warnOnce(`\`${sym}\` is no longer defined by emscripten. ${msg}`);
  });
}

missingGlobal("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");

missingGlobal("asm", "Please use wasmExports instead");

function missingLibrarySymbol(sym) {
  hookGlobalSymbolAccess(sym, () => {
    // Can't `abort()` here because it would break code that does runtime
    // checks.  e.g. `if (typeof SDL === 'undefined')`.
    var msg = `\`${sym}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`;
    // DEFAULT_LIBRARY_FUNCS_TO_INCLUDE requires the name as it appears in
    // library.js, which means $name for a JS name with no prefix, or name
    // for a JS name like _name.
    var librarySymbol = sym;
    if (!librarySymbol.startsWith("_")) {
      librarySymbol = "$" + sym;
    }
    msg += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${librarySymbol}')`;
    if (isExportedByForceFilesystem(sym)) {
      msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
    }
    warnOnce(msg);
  });
  // Any symbol that is not included from the JS library is also (by definition)
  // not exported on the Module object.
  unexportedRuntimeSymbol(sym);
}

function unexportedRuntimeSymbol(sym) {
  if (!Object.getOwnPropertyDescriptor(Module, sym)) {
    Object.defineProperty(Module, sym, {
      configurable: true,
      get() {
        var msg = `'${sym}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
        if (isExportedByForceFilesystem(sym)) {
          msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
        }
        abort(msg);
      }
    });
  }
}

/**
 * Override `err`/`out`/`dbg` to report thread / worker information
 */ function initWorkerLogging() {
  function getLogPrefix() {
    if (wwParams?.wwID) {
      return `ww:${wwParams?.wwID}:`;
    }
    return `ww:0:`;
  }
  // Prefix all dbg() messages with the calling thread info.
  var origDbg = dbg;
  dbg = (...args) => origDbg(getLogPrefix(), ...args);
}

initWorkerLogging();

// end include: runtime_debug.js
// Support for growable heap + pthreads, where the buffer may change, so JS views
// must be updated.
function growMemViews() {
  // `updateMemoryViews` updates all the views simultaneously, so it's enough to check any of them.
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
}

// include: wasm_worker.js
var wwParams;

/**
 * Called once the intiial message has been recieved from the creating thread.
 * The `props` object is property bag sent via postMessage to create the worker.
 *
 * This function is called both in normal wasm workers and in audio worklets.
 */ function startWasmWorker(props) {
  wwParams = props;
  wasmMemory = props.wasmMemory;
  updateMemoryViews();
  wasmModule = props.wasm;
  createWasm();
  run();
  // Drop now unneeded references to from the Module object in this Worker,
  // these are not needed anymore.
  props.wasm = props.memMemory = 0;
}

if (ENVIRONMENT_IS_WASM_WORKER) {
  onmessage = d => {
    // The first message sent to the Worker is always the bootstrap message.
    // Drop this message listener, it served its purpose of bootstrapping
    // the Wasm Module load, and is no longer needed. Let user code register
    // any desired message handlers from now on.
    /** @suppress {checkTypes} */ onmessage = null;
    startWasmWorker(d.data);
  };
}

// end include: wasm_worker.js
// Memory management
var wasmMemory;

var /** @type {!Int8Array} */ HEAP8, /** @type {!Uint8Array} */ HEAPU8, /** @type {!Int16Array} */ HEAP16, /** @type {!Uint16Array} */ HEAPU16, /** @type {!Int32Array} */ HEAP32, /** @type {!Uint32Array} */ HEAPU32, /** @type {!Float32Array} */ HEAPF32, /** @type {!Float64Array} */ HEAPF64;

// BigInt64Array type is not correctly defined in closure
var /** not-@type {!BigInt64Array} */ HEAP64, /* BigUint64Array type is not correctly defined in closure
/** not-@type {!BigUint64Array} */ HEAPU64;

var runtimeInitialized = false;

function updateMemoryViews() {
  var b = wasmMemory.buffer;
  HEAP8 = new Int8Array(b);
  HEAP16 = new Int16Array(b);
  Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
  Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
  HEAP32 = new Int32Array(b);
  Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
  Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
  Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
  HEAP64 = new BigInt64Array(b);
  Module["HEAPU64"] = HEAPU64 = new BigUint64Array(b);
}

// In non-standalone/normal mode, we create the memory here.
// include: runtime_init_memory.js
// Create the wasm memory. (Note: this only applies if IMPORTED_MEMORY is defined)
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
function initMemory() {
  if ((ENVIRONMENT_IS_WASM_WORKER)) {
    return;
  }
  if (Module["wasmMemory"]) {
    wasmMemory = Module["wasmMemory"];
  } else {
    var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
    assert(INITIAL_MEMORY >= 8388608, "INITIAL_MEMORY should be larger than STACK_SIZE, was " + INITIAL_MEMORY + "! (STACK_SIZE=" + 8388608 + ")");
    /** @suppress {checkTypes} */ wasmMemory = new WebAssembly.Memory({
      "initial": BigInt(INITIAL_MEMORY / 65536),
      // In theory we should not need to emit the maximum if we want "unlimited"
      // or 4GB of memory, but VMs error on that atm, see
      // https://github.com/emscripten-core/emscripten/issues/14130
      // And in the pthreads case we definitely need to emit a maximum. So
      // always emit one.
      "maximum": BigInt(262144),
      "shared": true,
      "address": "i64"
    });
  }
  updateMemoryViews();
}

// end include: runtime_init_memory.js
// include: memoryprofiler.js
// end include: memoryprofiler.js
// end include: runtime_common.js
assert(typeof Int32Array != "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined, "JS engine does not provide full typed array support");

function preRun() {
  if (Module["preRun"]) {
    if (typeof Module["preRun"] == "function") Module["preRun"] = [ Module["preRun"] ];
    while (Module["preRun"].length) {
      addOnPreRun(Module["preRun"].shift());
    }
  }
  consumedModuleProp("preRun");
  // Begin ATPRERUNS hooks
  callRuntimeCallbacks(onPreRuns);
}

function initRuntime() {
  assert(!runtimeInitialized);
  runtimeInitialized = true;
  if (ENVIRONMENT_IS_WASM_WORKER) return _wasmWorkerInitializeRuntime();
  checkStackCookie();
  // No ATINITS hooks
  wasmExports["__wasm_call_ctors"]();
}

function preMain() {
  checkStackCookie();
}

function postRun() {
  checkStackCookie();
  if ((ENVIRONMENT_IS_WASM_WORKER)) {
    return;
  }
  // PThreads reuse the runtime from the main thread.
  if (Module["postRun"]) {
    if (typeof Module["postRun"] == "function") Module["postRun"] = [ Module["postRun"] ];
    while (Module["postRun"].length) {
      addOnPostRun(Module["postRun"].shift());
    }
  }
  consumedModuleProp("postRun");
  // Begin ATPOSTRUNS hooks
  callRuntimeCallbacks(onPostRuns);
}

/** @param {string|number=} what */ function abort(what) {
  Module["onAbort"]?.(what);
  what = "Aborted(" + what + ")";
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);
  ABORT = true;
  if (what.indexOf("RuntimeError: unreachable") >= 0) {
    what += '. "unreachable" may be due to ASYNCIFY_STACK_SIZE not being large enough (try increasing it)';
  }
  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.
  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // definition for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */ var e = new WebAssembly.RuntimeError(what);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// show errors on likely calls to FS when it was not included
var FS = {
  error() {
    abort("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM");
  },
  init() {
    FS.error();
  },
  createDataFile() {
    FS.error();
  },
  createPreloadedFile() {
    FS.error();
  },
  createLazyFile() {
    FS.error();
  },
  open() {
    FS.error();
  },
  mkdev() {
    FS.error();
  },
  registerDevice() {
    FS.error();
  },
  analyzePath() {
    FS.error();
  },
  ErrnoError() {
    FS.error();
  }
};

function createExportWrapper(name, nargs) {
  return (...args) => {
    assert(runtimeInitialized, `native function \`${name}\` called before runtime initialization`);
    var f = wasmExports[name];
    assert(f, `exported native function \`${name}\` not found`);
    // Only assert for too many arguments. Too few can be valid since the missing arguments will be zero filled.
    assert(args.length <= nargs, `native function \`${name}\` called with ${args.length} args but expects ${nargs}`);
    return f(...args);
  };
}

var wasmBinaryFile;

function findWasmBinary() {
  return locateFile("KoKri__BriDz64.wasm");
}

function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
    return readBinary(file);
  }
  // Throwing a plain string here, even though it not normally adviables since
  // this gets turning into an `abort` in instantiateArrayBuffer.
  throw "both async and sync fetching of the wasm failed";
}

async function getWasmBinary(binaryFile) {
  // If we don't have the binary yet, load it asynchronously using readAsync.
  if (!wasmBinary) {
    // Fetch the binary using readAsync
    try {
      var response = await readAsync(binaryFile);
      return new Uint8Array(response);
    } catch {}
  }
  // Otherwise, getBinarySync should be able to get it synchronously
  return getBinarySync(binaryFile);
}

async function instantiateArrayBuffer(binaryFile, imports) {
  try {
    var binary = await getWasmBinary(binaryFile);
    var instance = await WebAssembly.instantiate(binary, imports);
    return instance;
  } catch (reason) {
    err(`failed to asynchronously prepare wasm: ${reason}`);
    // Warn on some common problems.
    if (isFileURI(binaryFile)) {
      err(`warning: Loading from a file URI (${binaryFile}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);
    }
    abort(reason);
  }
}

async function instantiateAsync(binary, binaryFile, imports) {
  if (!binary) {
    try {
      var response = fetch(binaryFile, {
        credentials: "same-origin"
      });
      var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
      return instantiationResult;
    } catch (reason) {
      // We expect the most common failure cause to be a bad MIME type for the binary,
      // in which case falling back to ArrayBuffer instantiation should work.
      err(`wasm streaming compile failed: ${reason}`);
      err("falling back to ArrayBuffer instantiation");
    }
  }
  return instantiateArrayBuffer(binaryFile, imports);
}

function getWasmImports() {
  assignWasmImports();
  // instrumenting imports is used in asyncify in two ways: to add assertions
  // that check for proper import use, and for ASYNCIFY=2 we use them to set up
  // the Promise API on the import side.
  Asyncify.instrumentWasmImports(wasmImports);
  // prepare imports
  return {
    "env": wasmImports,
    "wasi_snapshot_preview1": wasmImports
  };
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
async function createWasm() {
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/ function receiveInstance(instance, module) {
    wasmExports = instance.exports;
    wasmExports = Asyncify.instrumentWasmExports(wasmExports);
    wasmExports = applySignatureConversions(wasmExports);
    wasmTable = wasmExports["__indirect_function_table"];
    assert(wasmTable, "table not found in wasm exports");
    // We now have the Wasm module loaded up, keep a reference to the compiled module so we can post it to the workers.
    wasmModule = module;
    assignWasmExports(wasmExports);
    removeRunDependency("wasm-instantiate");
    return wasmExports;
  }
  addRunDependency("wasm-instantiate");
  // Prefer streaming instantiation if available.
  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
    trueModule = null;
    return receiveInstance(result["instance"], result["module"]);
  }
  var info = getWasmImports();
  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  if (Module["instantiateWasm"]) {
    return new Promise((resolve, reject) => {
      try {
        Module["instantiateWasm"](info, (mod, inst) => {
          resolve(receiveInstance(mod, inst));
        });
      } catch (e) {
        err(`Module.instantiateWasm callback failed with error: ${e}`);
        reject(e);
      }
    });
  }
  if ((ENVIRONMENT_IS_WASM_WORKER)) {
    // Instantiate from the module that was recieved via postMessage from
    // the main thread. We can just use sync instantiation in the worker.
    assert(wasmModule, "wasmModule should have been received via postMessage");
    var instance = new WebAssembly.Instance(wasmModule, getWasmImports());
    return receiveInstance(instance, wasmModule);
  }
  wasmBinaryFile ??= findWasmBinary();
  var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info);
  var exports = receiveInstantiationResult(result);
  return exports;
}

// end include: preamble.js
// Begin JS library code
class ExitStatus {
  name="ExitStatus";
  constructor(status) {
    this.message = `Program terminated with exit(${status})`;
    this.status = status;
  }
}

var _wasmWorkerDelayedMessageQueue = [];

var handleException = e => {
  // Certain exception types we do not treat as errors since they are used for
  // internal control flow.
  // 1. ExitStatus, which is thrown by exit()
  // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
  //    that wish to return to JS event loop.
  if (e instanceof ExitStatus || e == "unwind") {
    return EXITSTATUS;
  }
  checkStackCookie();
  if (e instanceof WebAssembly.RuntimeError) {
    if (_emscripten_stack_get_current() <= 0) {
      err("Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 8388608)");
    }
  }
  quit_(1, e);
};

var runtimeKeepaliveCounter = 0;

var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;

var _proc_exit = code => {
  EXITSTATUS = code;
  if (!keepRuntimeAlive()) {
    Module["onExit"]?.(code);
    ABORT = true;
  }
  quit_(code, new ExitStatus(code));
};

/** @suppress {duplicate } */ /** @param {boolean|number=} implicit */ var exitJS = (status, implicit) => {
  EXITSTATUS = status;
  checkUnflushedContent();
  // if exit() was called explicitly, warn the user if the runtime isn't actually being shut down
  if (keepRuntimeAlive() && !implicit) {
    var msg = `program exited (with status: ${status}), but keepRuntimeAlive() is set (counter=${runtimeKeepaliveCounter}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;
    err(msg);
  }
  _proc_exit(status);
};

var _exit = exitJS;

var maybeExit = () => {
  if (!keepRuntimeAlive()) {
    try {
      _exit(EXITSTATUS);
    } catch (e) {
      handleException(e);
    }
  }
};

var callUserCallback = func => {
  if (ABORT) {
    err("user callback triggered after runtime exited or application aborted.  Ignoring.");
    return;
  }
  try {
    func();
    maybeExit();
  } catch (e) {
    handleException(e);
  }
};

var wasmTableMirror = [];

/** @type {WebAssembly.Table} */ var wasmTable;

var getWasmTableEntry = funcPtr => {
  // Function pointers should show up as numbers, even under wasm64, but
  // we still have some places where bigint values can flow here.
  // https://github.com/emscripten-core/emscripten/issues/18200
  funcPtr = Number(funcPtr);
  var func = wasmTableMirror[funcPtr];
  if (!func) {
    /** @suppress {checkTypes} */ wasmTableMirror[funcPtr] = func = wasmTable.get(BigInt(funcPtr));
  }
  /** @suppress {checkTypes} */ assert(wasmTable.get(BigInt(funcPtr)) == func, "JavaScript-side Wasm function table mirror is out of date!");
  return func;
};

var _wasmWorkerRunPostMessage = e => {
  // '_wsc' is short for 'wasm call', trying to use an identifier name that
  // will never conflict with user code
  let data = e.data;
  let wasmCall = data["_wsc"];
  wasmCall && callUserCallback(() => getWasmTableEntry(wasmCall)(...data["x"]));
};

var _wasmWorkerAppendToQueue = e => {
  _wasmWorkerDelayedMessageQueue.push(e);
};

var _wasmWorkerInitializeRuntime = () => {
  assert(wwParams);
  assert(wwParams.wwID);
  assert(wwParams.stackLowestAddress % 16 == 0);
  assert(wwParams.stackSize % 16 == 0);
  // Wasm workers basically never exit their runtime
  noExitRuntime = 1;
  // Run the C side Worker initialization for stack and TLS.
  __emscripten_wasm_worker_initialize(wwParams.stackLowestAddress, wwParams.stackSize);
  // Write the stack cookie last, after we have set up the proper bounds and
  // current position of the stack.
  writeStackCookie();
  // The Wasm Worker runtime is now up, so we can start processing
  // any postMessage function calls that have been received. Drop the temp
  // message handler that queued any pending incoming postMessage function calls ...
  removeEventListener("message", _wasmWorkerAppendToQueue);
  // ... then flush whatever messages we may have already gotten in the queue,
  //     and clear _wasmWorkerDelayedMessageQueue to undefined ...
  _wasmWorkerDelayedMessageQueue = _wasmWorkerDelayedMessageQueue.forEach(_wasmWorkerRunPostMessage);
  // ... and finally register the proper postMessage handler that immediately
  // dispatches incoming function calls without queueing them.
  addEventListener("message", _wasmWorkerRunPostMessage);
};

var callRuntimeCallbacks = callbacks => {
  while (callbacks.length > 0) {
    // Pass the module as the first argument.
    callbacks.shift()(Module);
  }
};

var onPostRuns = [];

var addOnPostRun = cb => onPostRuns.push(cb);

var onPreRuns = [];

var addOnPreRun = cb => onPreRuns.push(cb);

var runDependencies = 0;

var dependenciesFulfilled = null;

var runDependencyTracking = {};

var runDependencyWatcher = null;

var removeRunDependency = id => {
  runDependencies--;
  Module["monitorRunDependencies"]?.(runDependencies);
  assert(id, "removeRunDependency requires an ID");
  assert(runDependencyTracking[id]);
  delete runDependencyTracking[id];
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback();
    }
  }
};

var addRunDependency = id => {
  runDependencies++;
  Module["monitorRunDependencies"]?.(runDependencies);
  assert(id, "addRunDependency requires an ID");
  assert(!runDependencyTracking[id]);
  runDependencyTracking[id] = 1;
  if (runDependencyWatcher === null && typeof setInterval != "undefined") {
    // Check for missing dependencies every few seconds
    runDependencyWatcher = setInterval(() => {
      if (ABORT) {
        clearInterval(runDependencyWatcher);
        runDependencyWatcher = null;
        return;
      }
      var shown = false;
      for (var dep in runDependencyTracking) {
        if (!shown) {
          shown = true;
          err("still waiting on run dependencies:");
        }
        err(`dependency: ${dep}`);
      }
      if (shown) {
        err("(end of list)");
      }
    }, 1e4);
  }
};

var dynCalls = {};

var dynCallLegacy = (sig, ptr, args) => {
  sig = sig.replace(/p/g, "j");
  assert(sig in dynCalls, `bad function pointer type - sig is not in dynCalls: '${sig}'`);
  if (args?.length) {
    // j (64-bit integer) is fine, and is implemented as a BigInt. Without
    // legalization, the number of parameters should match (j is not expanded
    // into two i's).
    assert(args.length === sig.length - 1);
  } else {
    assert(sig.length == 1);
  }
  var f = dynCalls[sig];
  return f(ptr, ...args);
};

var dynCall = (sig, ptr, args = [], promising = false) => {
  assert(!promising, "async dynCall is not supported in this mode");
  // With MEMORY64 we have an additional step to convert `p` arguments to
  // bigint. This is the runtime equivalent of the wrappers we create for wasm
  // exports in `emscripten.py:create_wasm64_wrappers`.
  for (var i = 1; i < sig.length; ++i) {
    if (sig[i] == "p") args[i - 1] = BigInt(args[i - 1]);
  }
  var rtn = dynCallLegacy(sig, ptr, args);
  function convert(rtn) {
    return sig[0] == "p" ? Number(rtn) : rtn;
  }
  return convert(rtn);
};

/**
     * @param {number} ptr
     * @param {string} type
     */ function getValue(ptr, type = "i8") {
  if (type.endsWith("*")) type = "*";
  switch (type) {
   case "i1":
    return (growMemViews(), HEAP8)[ptr];

   case "i8":
    return (growMemViews(), HEAP8)[ptr];

   case "i16":
    return (growMemViews(), HEAP16)[((ptr) / 2)];

   case "i32":
    return (growMemViews(), HEAP32)[((ptr) / 4)];

   case "i64":
    return (growMemViews(), HEAP64)[((ptr) / 8)];

   case "float":
    return (growMemViews(), HEAPF32)[((ptr) / 4)];

   case "double":
    return (growMemViews(), HEAPF64)[((ptr) / 8)];

   case "*":
    return Number((growMemViews(), HEAPU64)[((ptr) / 8)]);

   default:
    abort(`invalid type for getValue: ${type}`);
  }
}

var jsStackTrace = () => (new Error).stack.toString();

var noExitRuntime = true;

var ptrToString = ptr => {
  assert(typeof ptr === "number");
  // Convert to 64-bit unsigned value.  We need to use BigInt here since
  // Number cannot represent the full 64-bit range.
  if (ptr < 0) ptr = 2n ** 64n + BigInt(ptr);
  return "0x" + ptr.toString(16).padStart(16, "0");
};

/**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */ function setValue(ptr, value, type = "i8") {
  if (type.endsWith("*")) type = "*";
  switch (type) {
   case "i1":
    (growMemViews(), HEAP8)[ptr] = value;
    break;

   case "i8":
    (growMemViews(), HEAP8)[ptr] = value;
    break;

   case "i16":
    (growMemViews(), HEAP16)[((ptr) / 2)] = value;
    break;

   case "i32":
    (growMemViews(), HEAP32)[((ptr) / 4)] = value;
    break;

   case "i64":
    (growMemViews(), HEAP64)[((ptr) / 8)] = BigInt(value);
    break;

   case "float":
    (growMemViews(), HEAPF32)[((ptr) / 4)] = value;
    break;

   case "double":
    (growMemViews(), HEAPF64)[((ptr) / 8)] = value;
    break;

   case "*":
    (growMemViews(), HEAPU64)[((ptr) / 8)] = BigInt(value);
    break;

   default:
    abort(`invalid type for setValue: ${type}`);
  }
}

var stackRestore = val => __emscripten_stack_restore(val);

var stackSave = () => _emscripten_stack_get_current();

var warnOnce = text => {
  warnOnce.shown ||= {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
};

var INT53_MAX = 9007199254740992;

var INT53_MIN = -9007199254740992;

var bigintToI53Checked = num => (num < INT53_MIN || num > INT53_MAX) ? NaN : Number(num);

var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder : undefined;

var findStringEnd = (heapOrArray, idx, maxBytesToRead, ignoreNul) => {
  var maxIdx = idx + maxBytesToRead;
  if (ignoreNul) return maxIdx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on
  // null terminator by itself.
  // As a tiny code save trick, compare idx against maxIdx using a negation,
  // so that maxBytesToRead=undefined/NaN means Infinity.
  while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
  return idx;
};

/**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number=} idx
     * @param {number=} maxBytesToRead
     * @param {boolean=} ignoreNul - If true, the function will not stop on a NUL character.
     * @return {string}
     */ var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
  var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul);
  // When using conditional TextDecoder, skip it for short strings as the overhead of the native call is not worth it.
  if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
    return UTF8Decoder.decode(heapOrArray.buffer instanceof ArrayBuffer ? heapOrArray.subarray(idx, endPtr) : heapOrArray.slice(idx, endPtr));
  }
  var str = "";
  while (idx < endPtr) {
    // For UTF8 byte structure, see:
    // http://en.wikipedia.org/wiki/UTF-8#Description
    // https://www.ietf.org/rfc/rfc2279.txt
    // https://tools.ietf.org/html/rfc3629
    var u0 = heapOrArray[idx++];
    if (!(u0 & 128)) {
      str += String.fromCharCode(u0);
      continue;
    }
    var u1 = heapOrArray[idx++] & 63;
    if ((u0 & 224) == 192) {
      str += String.fromCharCode(((u0 & 31) << 6) | u1);
      continue;
    }
    var u2 = heapOrArray[idx++] & 63;
    if ((u0 & 240) == 224) {
      u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
    } else {
      if ((u0 & 248) != 240) warnOnce("Invalid UTF-8 leading byte " + ptrToString(u0) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
      u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
    }
    if (u0 < 65536) {
      str += String.fromCharCode(u0);
    } else {
      var ch = u0 - 65536;
      str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
    }
  }
  return str;
};

/**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first 0 byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index.
     * @param {boolean=} ignoreNul - If true, the function will not stop on a NUL character.
     * @return {string}
     */ var UTF8ToString = (ptr, maxBytesToRead, ignoreNul) => {
  assert(typeof ptr == "number", `UTF8ToString expects a number (got ${typeof ptr})`);
  return ptr ? UTF8ArrayToString((growMemViews(), HEAPU8), ptr, maxBytesToRead, ignoreNul) : "";
};

function ___assert_fail(condition, filename, line, func) {
  condition = bigintToI53Checked(condition);
  filename = bigintToI53Checked(filename);
  func = bigintToI53Checked(func);
  return abort(`Assertion failed: ${UTF8ToString(condition)}, at: ` + [ filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function" ]);
}

var _wasmWorkers = {};

var _wasmWorkersID = 1;

var _emscripten_has_threading_support = () => typeof SharedArrayBuffer != "undefined";

function __emscripten_create_wasm_worker(stackLowestAddress, stackSize) {
  stackLowestAddress = bigintToI53Checked(stackLowestAddress);
  if (!_emscripten_has_threading_support()) {
    err("create_wasm_worker: environment does not support SharedArrayBuffer, wasm workers are not available");
    return 0;
  }
  let worker;
  worker = _wasmWorkers[_wasmWorkersID] = new Worker(locateFile("KoKri__BriDz64.js"), {
    // This is the way that we signal to the Web Worker that it is hosting
    // a pthread.
    "name": "em-ww"
  });
  // Craft the Module object for the Wasm Worker scope:
  worker.postMessage({
    // Signal with a non-zero value that this Worker will be a Wasm Worker,
    // and not the main browser thread.
    wwID: _wasmWorkersID,
    wasm: wasmModule,
    wasmMemory,
    stackLowestAddress,
    // sb = stack bottom (lowest stack address, SP points at this when stack is full)
    stackSize
  });
  worker.onmessage = _wasmWorkerRunPostMessage;
  return _wasmWorkersID++;
}

var __emscripten_throw_longjmp = () => {
  throw Infinity;
};

var readEmAsmArgsArray = [];

var readEmAsmArgs = (sigPtr, buf) => {
  // Nobody should have mutated _readEmAsmArgsArray underneath us to be something else than an array.
  assert(Array.isArray(readEmAsmArgsArray));
  // The input buffer is allocated on the stack, so it must be stack-aligned.
  assert(buf % 16 == 0);
  readEmAsmArgsArray.length = 0;
  var ch;
  // Most arguments are i32s, so shift the buffer pointer so it is a plain
  // index into HEAP32.
  while (ch = (growMemViews(), HEAPU8)[sigPtr++]) {
    var chr = String.fromCharCode(ch);
    var validChars = [ "d", "f", "i", "p" ];
    // In WASM_BIGINT mode we support passing i64 values as bigint.
    validChars.push("j");
    assert(validChars.includes(chr), `Invalid character ${ch}("${chr}") in readEmAsmArgs! Use only [${validChars}], and do not specify "v" for void return argument.`);
    // Floats are always passed as doubles, so all types except for 'i'
    // are 8 bytes and require alignment.
    var wide = (ch != 105);
    buf += wide && (buf % 8) ? 4 : 0;
    readEmAsmArgsArray.push(// Special case for pointers under wasm64 or CAN_ADDRESS_2GB mode.
    ch == 112 ? Number((growMemViews(), HEAPU64)[((buf) / 8)]) : ch == 106 ? (growMemViews(), 
    HEAP64)[((buf) / 8)] : ch == 105 ? (growMemViews(), HEAP32)[((buf) / 4)] : (growMemViews(), 
    HEAPF64)[((buf) / 8)]);
    buf += wide ? 8 : 4;
  }
  return readEmAsmArgsArray;
};

var runEmAsmFunction = (code, sigPtr, argbuf) => {
  var args = readEmAsmArgs(sigPtr, argbuf);
  assert(ASM_CONSTS.hasOwnProperty(code), `No EM_ASM constant found at address ${code}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`);
  return ASM_CONSTS[code](...args);
};

function _emscripten_asm_const_int(code, sigPtr, argbuf) {
  code = bigintToI53Checked(code);
  sigPtr = bigintToI53Checked(sigPtr);
  argbuf = bigintToI53Checked(argbuf);
  return runEmAsmFunction(code, sigPtr, argbuf);
}

var _emscripten_set_main_loop_timing = (mode, value) => {
  MainLoop.timingMode = mode;
  MainLoop.timingValue = value;
  if (!MainLoop.func) {
    err("emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.");
    return 1;
  }
  if (!MainLoop.running) {
    MainLoop.running = true;
  }
  if (mode == 0) {
    MainLoop.scheduler = function MainLoop_scheduler_setTimeout() {
      var timeUntilNextTick = Math.max(0, MainLoop.tickStartTime + value - _emscripten_get_now()) | 0;
      setTimeout(MainLoop.runner, timeUntilNextTick);
    };
    MainLoop.method = "timeout";
  } else if (mode == 1) {
    MainLoop.scheduler = function MainLoop_scheduler_rAF() {
      MainLoop.requestAnimationFrame(MainLoop.runner);
    };
    MainLoop.method = "rAF";
  } else if (mode == 2) {
    if (typeof MainLoop.setImmediate == "undefined") {
      if (typeof setImmediate == "undefined") {
        // Emulate setImmediate. (note: not a complete polyfill, we don't emulate clearImmediate() to keep code size to minimum, since not needed)
        var setImmediates = [];
        var emscriptenMainLoopMessageId = "setimmediate";
        /** @param {Event} event */ var MainLoop_setImmediate_messageHandler = event => {
          // When called in current thread or Worker, the main loop ID is structured slightly different to accommodate for --proxy-to-worker runtime listening to Worker events,
          // so check for both cases.
          if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
            event.stopPropagation();
            setImmediates.shift()();
          }
        };
        addEventListener("message", MainLoop_setImmediate_messageHandler, true);
        MainLoop.setImmediate = /** @type{function(function(): ?, ...?): number} */ (func => {
          setImmediates.push(func);
          if (ENVIRONMENT_IS_WORKER) {
            Module["setImmediates"] ??= [];
            Module["setImmediates"].push(func);
            postMessage({
              target: emscriptenMainLoopMessageId
            });
          } else postMessage(emscriptenMainLoopMessageId, "*");
        });
      } else {
        MainLoop.setImmediate = setImmediate;
      }
    }
    MainLoop.scheduler = function MainLoop_scheduler_setImmediate() {
      MainLoop.setImmediate(MainLoop.runner);
    };
    MainLoop.method = "immediate";
  }
  return 0;
};

var _emscripten_get_now = () => performance.now();

/**
     * @param {number=} arg
     * @param {boolean=} noSetTiming
     */ var setMainLoop = (iterFunc, fps, simulateInfiniteLoop, arg, noSetTiming) => {
  assert(!MainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
  MainLoop.func = iterFunc;
  MainLoop.arg = arg;
  var thisMainLoopId = MainLoop.currentlyRunningMainloop;
  function checkIsRunning() {
    if (thisMainLoopId < MainLoop.currentlyRunningMainloop) {
      maybeExit();
      return false;
    }
    return true;
  }
  // We create the loop runner here but it is not actually running until
  // _emscripten_set_main_loop_timing is called (which might happen a
  // later time).  This member signifies that the current runner has not
  // yet been started so that we can call runtimeKeepalivePush when it
  // gets it timing set for the first time.
  MainLoop.running = false;
  MainLoop.runner = function MainLoop_runner() {
    if (ABORT) return;
    if (MainLoop.queue.length > 0) {
      var start = Date.now();
      var blocker = MainLoop.queue.shift();
      blocker.func(blocker.arg);
      if (MainLoop.remainingBlockers) {
        var remaining = MainLoop.remainingBlockers;
        var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);
        if (blocker.counted) {
          MainLoop.remainingBlockers = next;
        } else {
          // not counted, but move the progress along a tiny bit
          next = next + .5;
          // do not steal all the next one's progress
          MainLoop.remainingBlockers = (8 * remaining + next) / 9;
        }
      }
      MainLoop.updateStatus();
      // catches pause/resume main loop from blocker execution
      if (!checkIsRunning()) return;
      setTimeout(MainLoop.runner, 0);
      return;
    }
    // catch pauses from non-main loop sources
    if (!checkIsRunning()) return;
    // Implement very basic swap interval control
    MainLoop.currentFrameNumber = MainLoop.currentFrameNumber + 1 | 0;
    if (MainLoop.timingMode == 1 && MainLoop.timingValue > 1 && MainLoop.currentFrameNumber % MainLoop.timingValue != 0) {
      // Not the scheduled time to render this frame - skip.
      MainLoop.scheduler();
      return;
    } else if (MainLoop.timingMode == 0) {
      MainLoop.tickStartTime = _emscripten_get_now();
    }
    if (MainLoop.method === "timeout" && Module["ctx"]) {
      warnOnce("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!");
      MainLoop.method = "";
    }
    MainLoop.runIter(iterFunc);
    // catch pauses from the main loop itself
    if (!checkIsRunning()) return;
    MainLoop.scheduler();
  };
  if (!noSetTiming) {
    if (fps > 0) {
      _emscripten_set_main_loop_timing(0, 1e3 / fps);
    } else {
      // Do rAF by rendering each frame (no decimating)
      _emscripten_set_main_loop_timing(1, 1);
    }
    MainLoop.scheduler();
  }
  if (simulateInfiniteLoop) {
    throw "unwind";
  }
};

var MainLoop = {
  running: false,
  scheduler: null,
  method: "",
  currentlyRunningMainloop: 0,
  func: null,
  arg: 0,
  timingMode: 0,
  timingValue: 0,
  currentFrameNumber: 0,
  queue: [],
  preMainLoop: [],
  postMainLoop: [],
  pause() {
    MainLoop.scheduler = null;
    // Incrementing this signals the previous main loop that it's now become old, and it must return.
    MainLoop.currentlyRunningMainloop++;
  },
  resume() {
    MainLoop.currentlyRunningMainloop++;
    var timingMode = MainLoop.timingMode;
    var timingValue = MainLoop.timingValue;
    var func = MainLoop.func;
    MainLoop.func = null;
    // do not set timing and call scheduler, we will do it on the next lines
    setMainLoop(func, 0, false, MainLoop.arg, true);
    _emscripten_set_main_loop_timing(timingMode, timingValue);
    MainLoop.scheduler();
  },
  updateStatus() {
    if (Module["setStatus"]) {
      var message = Module["statusMessage"] || "Please wait...";
      var remaining = MainLoop.remainingBlockers ?? 0;
      var expected = MainLoop.expectedBlockers ?? 0;
      if (remaining) {
        if (remaining < expected) {
          Module["setStatus"](`{message} ({expected - remaining}/{expected})`);
        } else {
          Module["setStatus"](message);
        }
      } else {
        Module["setStatus"]("");
      }
    }
  },
  init() {
    Module["preMainLoop"] && MainLoop.preMainLoop.push(Module["preMainLoop"]);
    Module["postMainLoop"] && MainLoop.postMainLoop.push(Module["postMainLoop"]);
  },
  runIter(func) {
    if (ABORT) return;
    for (var pre of MainLoop.preMainLoop) {
      if (pre() === false) {
        return;
      }
    }
    callUserCallback(func);
    for (var post of MainLoop.postMainLoop) {
      post();
    }
    checkStackCookie();
  },
  nextRAF: 0,
  fakeRequestAnimationFrame(func) {
    // try to keep 60fps between calls to here
    var now = Date.now();
    if (MainLoop.nextRAF === 0) {
      MainLoop.nextRAF = now + 1e3 / 60;
    } else {
      while (now + 2 >= MainLoop.nextRAF) {
        // fudge a little, to avoid timer jitter causing us to do lots of delay:0
        MainLoop.nextRAF += 1e3 / 60;
      }
    }
    var delay = Math.max(MainLoop.nextRAF - now, 0);
    setTimeout(func, delay);
  },
  requestAnimationFrame(func) {
    if (typeof requestAnimationFrame == "function") {
      requestAnimationFrame(func);
    } else {
      MainLoop.fakeRequestAnimationFrame(func);
    }
  }
};

var _emscripten_cancel_main_loop = () => {
  MainLoop.pause();
  MainLoop.func = null;
};

function _emscripten_console_log(str) {
  str = bigintToI53Checked(str);
  assert(typeof str == "number");
  console.log(UTF8ToString(str));
}

var _emscripten_date_now = () => Date.now();

var maybeCStringToJsString = cString => cString > 2 ? UTF8ToString(cString) : cString;

/** @type {Object} */ var specialHTMLTargets = [ 0, typeof document != "undefined" ? document : 0, typeof window != "undefined" ? window : 0 ];

/** @suppress {duplicate } */ var findEventTarget = target => {
  target = maybeCStringToJsString(target);
  var domElement = specialHTMLTargets[target] || (typeof document != "undefined" ? document.querySelector(target) : null);
  return domElement;
};

var findCanvasEventTarget = findEventTarget;

function _emscripten_get_canvas_element_size(target, width, height) {
  target = bigintToI53Checked(target);
  width = bigintToI53Checked(width);
  height = bigintToI53Checked(height);
  var canvas = findCanvasEventTarget(target);
  if (!canvas) return -4;
  (growMemViews(), HEAP32)[((width) / 4)] = canvas.width;
  (growMemViews(), HEAP32)[((height) / 4)] = canvas.height;
}

var onExits = [];

var addOnExit = cb => onExits.push(cb);

var JSEvents = {
  memcpy(target, src, size) {
    (growMemViews(), HEAP8).set((growMemViews(), HEAP8).subarray(src, src + size), target);
  },
  removeAllEventListeners() {
    while (JSEvents.eventHandlers.length) {
      JSEvents._removeHandler(JSEvents.eventHandlers.length - 1);
    }
    JSEvents.deferredCalls = [];
  },
  inEventHandler: 0,
  deferredCalls: [],
  deferCall(targetFunction, precedence, argsList) {
    function arraysHaveEqualContent(arrA, arrB) {
      if (arrA.length != arrB.length) return false;
      for (var i in arrA) {
        if (arrA[i] != arrB[i]) return false;
      }
      return true;
    }
    // Test if the given call was already queued, and if so, don't add it again.
    for (var call of JSEvents.deferredCalls) {
      if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
        return;
      }
    }
    JSEvents.deferredCalls.push({
      targetFunction,
      precedence,
      argsList
    });
    JSEvents.deferredCalls.sort((x, y) => x.precedence < y.precedence);
  },
  removeDeferredCalls(targetFunction) {
    JSEvents.deferredCalls = JSEvents.deferredCalls.filter(call => call.targetFunction != targetFunction);
  },
  canPerformEventHandlerRequests() {
    if (navigator.userActivation) {
      // Verify against transient activation status from UserActivation API
      // whether it is possible to perform a request here without needing to defer. See
      // https://developer.mozilla.org/en-US/docs/Web/Security/User_activation#transient_activation
      // and https://caniuse.com/mdn-api_useractivation
      // At the time of writing, Firefox does not support this API: https://bugzilla.mozilla.org/show_bug.cgi?id=1791079
      return navigator.userActivation.isActive;
    }
    return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
  },
  runDeferredCalls() {
    if (!JSEvents.canPerformEventHandlerRequests()) {
      return;
    }
    var deferredCalls = JSEvents.deferredCalls;
    JSEvents.deferredCalls = [];
    for (var call of deferredCalls) {
      call.targetFunction(...call.argsList);
    }
  },
  eventHandlers: [],
  removeAllHandlersOnTarget: (target, eventTypeString) => {
    for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
      if (JSEvents.eventHandlers[i].target == target && (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
        JSEvents._removeHandler(i--);
      }
    }
  },
  _removeHandler(i) {
    var h = JSEvents.eventHandlers[i];
    h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
    JSEvents.eventHandlers.splice(i, 1);
  },
  registerOrRemoveHandler(eventHandler) {
    if (!eventHandler.target) {
      err("registerOrRemoveHandler: the target element for event handler registration does not exist, when processing the following event handler registration:");
      console.dir(eventHandler);
      return -4;
    }
    if (eventHandler.callbackfunc) {
      eventHandler.eventListenerFunc = function(event) {
        // Increment nesting count for the event handler.
        ++JSEvents.inEventHandler;
        JSEvents.currentEventHandler = eventHandler;
        // Process any old deferred calls the user has placed.
        JSEvents.runDeferredCalls();
        // Process the actual event, calls back to user C code handler.
        eventHandler.handlerFunc(event);
        // Process any new deferred calls that were placed right now from this event handler.
        JSEvents.runDeferredCalls();
        // Out of event handler - restore nesting count.
        --JSEvents.inEventHandler;
      };
      eventHandler.target.addEventListener(eventHandler.eventTypeString, eventHandler.eventListenerFunc, eventHandler.useCapture);
      JSEvents.eventHandlers.push(eventHandler);
    } else {
      for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
        if (JSEvents.eventHandlers[i].target == eventHandler.target && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
          JSEvents._removeHandler(i--);
        }
      }
    }
    return 0;
  },
  getNodeNameForTarget(target) {
    if (!target) return "";
    if (target == window) return "#window";
    if (target == screen) return "#screen";
    return target?.nodeName || "";
  },
  fullscreenEnabled() {
    return document.fullscreenEnabled;
  }
};

var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
  assert(typeof str === "string", `stringToUTF8Array expects a string (got ${typeof str})`);
  // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
  // undefined and false each don't write out any bytes.
  if (!(maxBytesToWrite > 0)) return 0;
  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1;
  // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
    // and https://www.ietf.org/rfc/rfc2279.txt
    // and https://tools.ietf.org/html/rfc3629
    var u = str.codePointAt(i);
    if (u <= 127) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 2047) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 192 | (u >> 6);
      heap[outIdx++] = 128 | (u & 63);
    } else if (u <= 65535) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 224 | (u >> 12);
      heap[outIdx++] = 128 | ((u >> 6) & 63);
      heap[outIdx++] = 128 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      if (u > 1114111) warnOnce("Invalid Unicode code point " + ptrToString(u) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
      heap[outIdx++] = 240 | (u >> 18);
      heap[outIdx++] = 128 | ((u >> 12) & 63);
      heap[outIdx++] = 128 | ((u >> 6) & 63);
      heap[outIdx++] = 128 | (u & 63);
      // Gotcha: if codePoint is over 0xFFFF, it is represented as a surrogate pair in UTF-16.
      // We need to manually skip over the second code unit for correct iteration.
      i++;
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
};

var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
  assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  return stringToUTF8Array(str, (growMemViews(), HEAPU8), outPtr, maxBytesToWrite);
};

var fillGamepadEventData = (eventStruct, e) => {
  (growMemViews(), HEAPF64)[((eventStruct) / 8)] = e.timestamp;
  for (var i = 0; i < e.axes.length; ++i) {
    (growMemViews(), HEAPF64)[(((eventStruct + i * 8) + (16)) / 8)] = e.axes[i];
  }
  for (var i = 0; i < e.buttons.length; ++i) {
    if (typeof e.buttons[i] == "object") {
      (growMemViews(), HEAPF64)[(((eventStruct + i * 8) + (528)) / 8)] = e.buttons[i].value;
    } else {
      (growMemViews(), HEAPF64)[(((eventStruct + i * 8) + (528)) / 8)] = e.buttons[i];
    }
  }
  for (var i = 0; i < e.buttons.length; ++i) {
    if (typeof e.buttons[i] == "object") {
      (growMemViews(), HEAP8)[(eventStruct + i) + (1040)] = e.buttons[i].pressed;
    } else {
      // Assigning a boolean to HEAP32, that's ok, but Closure would like to warn about it:
      /** @suppress {checkTypes} */ (growMemViews(), HEAP8)[(eventStruct + i) + (1040)] = e.buttons[i] == 1;
    }
  }
  (growMemViews(), HEAP8)[(eventStruct) + (1104)] = e.connected;
  (growMemViews(), HEAP32)[(((eventStruct) + (1108)) / 4)] = e.index;
  (growMemViews(), HEAP32)[(((eventStruct) + (8)) / 4)] = e.axes.length;
  (growMemViews(), HEAP32)[(((eventStruct) + (12)) / 4)] = e.buttons.length;
  stringToUTF8(e.id, eventStruct + 1112, 64);
  stringToUTF8(e.mapping, eventStruct + 1176, 64);
};

function _emscripten_get_gamepad_status(index, gamepadState) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_get_gamepad_status' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  gamepadState = bigintToI53Checked(gamepadState);
  assert(JSEvents.lastGamepadState, "emscripten_get_gamepad_status() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!");
  // INVALID_PARAM is returned on a Gamepad index that never was there.
  if (index < 0 || index >= JSEvents.lastGamepadState.length) return -5;
  // NO_DATA is returned on a Gamepad index that was removed.
  // For previously disconnected gamepads there should be an empty slot (null/undefined/false) at the index.
  // This is because gamepads must keep their original position in the array.
  // For example, removing the first of two gamepads produces [null/undefined/false, gamepad].
  if (!JSEvents.lastGamepadState[index]) return -7;
  fillGamepadEventData(gamepadState, JSEvents.lastGamepadState[index]);
  return 0;
}

var getHeapMax = () => 17179869184;

var _emscripten_get_heap_max = () => BigInt(getHeapMax());

function _emscripten_get_num_gamepads() {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_get_num_gamepads' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  assert(JSEvents.lastGamepadState, "emscripten_get_num_gamepads() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!");
  // N.B. Do not call emscripten_get_num_gamepads() unless having first called emscripten_sample_gamepad_data(), and that has returned EMSCRIPTEN_RESULT_SUCCESS.
  // Otherwise the following line will throw an exception.
  return JSEvents.lastGamepadState.length;
}

function getFullscreenElement() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement || document.msFullscreenElement;
}

/** @param {number=} timeout */ var safeSetTimeout = (func, timeout) => setTimeout(() => {
  callUserCallback(func);
}, timeout);

var preloadPlugins = [];

var Browser = {
  useWebGL: false,
  isFullscreen: false,
  pointerLock: false,
  moduleContextCreatedCallbacks: [],
  workers: [],
  preloadedImages: {},
  preloadedAudios: {},
  getCanvas: () => Module["canvas"],
  init() {
    if (Browser.initted) return;
    Browser.initted = true;
    // Support for plugins that can process preloaded files. You can add more of these to
    // your app by creating and appending to preloadPlugins.
    // Each plugin is asked if it can handle a file based on the file's name. If it can,
    // it is given the file's raw data. When it is done, it calls a callback with the file's
    // (possibly modified) data. For example, a plugin might decompress a file, or it
    // might create some side data structure for use later (like an Image element, etc.).
    var imagePlugin = {};
    imagePlugin["canHandle"] = function imagePlugin_canHandle(name) {
      return !Module["noImageDecoding"] && /\.(jpg|jpeg|png|bmp|webp)$/i.test(name);
    };
    imagePlugin["handle"] = async function imagePlugin_handle(byteArray, name) {
      var b = new Blob([ byteArray ], {
        type: Browser.getMimetype(name)
      });
      if (b.size !== byteArray.length) {
        // Safari bug #118630
        // Safari's Blob can only take an ArrayBuffer
        b = new Blob([ (new Uint8Array(byteArray)).buffer ], {
          type: Browser.getMimetype(name)
        });
      }
      var url = URL.createObjectURL(b);
      return new Promise((resolve, reject) => {
        var img = new Image;
        img.onload = () => {
          assert(img.complete, `Image ${name} could not be decoded`);
          var canvas = /** @type {!HTMLCanvasElement} */ (document.createElement("canvas"));
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          Browser.preloadedImages[name] = canvas;
          URL.revokeObjectURL(url);
          resolve(byteArray);
        };
        img.onerror = event => {
          err(`Image ${url} could not be decoded`);
          reject();
        };
        img.src = url;
      });
    };
    preloadPlugins.push(imagePlugin);
    var audioPlugin = {};
    audioPlugin["canHandle"] = function audioPlugin_canHandle(name) {
      return !Module["noAudioDecoding"] && name.slice(-4) in {
        ".ogg": 1,
        ".wav": 1,
        ".mp3": 1
      };
    };
    audioPlugin["handle"] = async function audioPlugin_handle(byteArray, name) {
      return new Promise((resolve, reject) => {
        var done = false;
        function finish(audio) {
          if (done) return;
          done = true;
          Browser.preloadedAudios[name] = audio;
          resolve(byteArray);
        }
        var b = new Blob([ byteArray ], {
          type: Browser.getMimetype(name)
        });
        var url = URL.createObjectURL(b);
        // XXX we never revoke this!
        var audio = new Audio;
        audio.addEventListener("canplaythrough", () => finish(audio), false);
        // use addEventListener due to chromium bug 124926
        audio.onerror = function audio_onerror(event) {
          if (done) return;
          err(`warning: browser could not fully decode audio ${name}, trying slower base64 approach`);
          function encode64(data) {
            var BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var PAD = "=";
            var ret = "";
            var leftchar = 0;
            var leftbits = 0;
            for (var i = 0; i < data.length; i++) {
              leftchar = (leftchar << 8) | data[i];
              leftbits += 8;
              while (leftbits >= 6) {
                var curr = (leftchar >> (leftbits - 6)) & 63;
                leftbits -= 6;
                ret += BASE[curr];
              }
            }
            if (leftbits == 2) {
              ret += BASE[(leftchar & 3) << 4];
              ret += PAD + PAD;
            } else if (leftbits == 4) {
              ret += BASE[(leftchar & 15) << 2];
              ret += PAD;
            }
            return ret;
          }
          audio.src = "data:audio/x-" + name.slice(-3) + ";base64," + encode64(byteArray);
          finish(audio);
        };
        audio.src = url;
        // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
        safeSetTimeout(() => {
          finish(audio);
        }, 1e4);
      });
    };
    preloadPlugins.push(audioPlugin);
    // Canvas event setup
    function pointerLockChange() {
      var canvas = Browser.getCanvas();
      Browser.pointerLock = document.pointerLockElement === canvas;
    }
    var canvas = Browser.getCanvas();
    if (canvas) {
      // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
      // Module['forcedAspectRatio'] = 4 / 3;
      document.addEventListener("pointerlockchange", pointerLockChange, false);
      if (Module["elementPointerLock"]) {
        canvas.addEventListener("click", ev => {
          if (!Browser.pointerLock && Browser.getCanvas().requestPointerLock) {
            Browser.getCanvas().requestPointerLock();
            ev.preventDefault();
          }
        }, false);
      }
    }
  },
  createContext(/** @type {HTMLCanvasElement} */ canvas, useWebGL, setInModule, webGLContextAttributes) {
    if (useWebGL && Module["ctx"] && canvas == Browser.getCanvas()) return Module["ctx"];
    // no need to recreate GL context if it's already been created for this canvas.
    var ctx;
    var contextHandle;
    if (useWebGL) {
      // For GLES2/desktop GL compatibility, adjust a few defaults to be different to WebGL defaults, so that they align better with the desktop defaults.
      var contextAttributes = {
        antialias: false,
        alpha: false,
        majorVersion: 1
      };
      if (webGLContextAttributes) {
        for (var attribute in webGLContextAttributes) {
          contextAttributes[attribute] = webGLContextAttributes[attribute];
        }
      }
      // This check of existence of GL is here to satisfy Closure compiler, which yells if variable GL is referenced below but GL object is not
      // actually compiled in because application is not doing any GL operations. TODO: Ideally if GL is not being used, this function
      // Browser.createContext() should not even be emitted.
      if (typeof GL != "undefined") {
        contextHandle = GL.createContext(canvas, contextAttributes);
        if (contextHandle) {
          ctx = GL.getContext(contextHandle).GLctx;
        }
      }
    } else {
      ctx = canvas.getContext("2d");
    }
    if (!ctx) return null;
    if (setInModule) {
      if (!useWebGL) assert(typeof GLctx == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
      Module["ctx"] = ctx;
      if (useWebGL) GL.makeContextCurrent(contextHandle);
      Browser.useWebGL = useWebGL;
      Browser.moduleContextCreatedCallbacks.forEach(callback => callback());
      Browser.init();
    }
    return ctx;
  },
  fullscreenHandlersInstalled: false,
  lockPointer: undefined,
  resizeCanvas: undefined,
  requestFullscreen(lockPointer, resizeCanvas) {
    Browser.lockPointer = lockPointer;
    Browser.resizeCanvas = resizeCanvas;
    if (typeof Browser.lockPointer == "undefined") Browser.lockPointer = true;
    if (typeof Browser.resizeCanvas == "undefined") Browser.resizeCanvas = false;
    var canvas = Browser.getCanvas();
    function fullscreenChange() {
      Browser.isFullscreen = false;
      var canvasContainer = canvas.parentNode;
      if (getFullscreenElement() === canvasContainer) {
        canvas.exitFullscreen = Browser.exitFullscreen;
        if (Browser.lockPointer) canvas.requestPointerLock();
        Browser.isFullscreen = true;
        if (Browser.resizeCanvas) {
          Browser.setFullscreenCanvasSize();
        } else {
          Browser.updateCanvasDimensions(canvas);
        }
      } else {
        // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
        canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
        canvasContainer.parentNode.removeChild(canvasContainer);
        if (Browser.resizeCanvas) {
          Browser.setWindowedCanvasSize();
        } else {
          Browser.updateCanvasDimensions(canvas);
        }
      }
      Module["onFullScreen"]?.(Browser.isFullscreen);
      Module["onFullscreen"]?.(Browser.isFullscreen);
    }
    if (!Browser.fullscreenHandlersInstalled) {
      Browser.fullscreenHandlersInstalled = true;
      document.addEventListener("fullscreenchange", fullscreenChange, false);
      document.addEventListener("mozfullscreenchange", fullscreenChange, false);
      document.addEventListener("webkitfullscreenchange", fullscreenChange, false);
      document.addEventListener("MSFullscreenChange", fullscreenChange, false);
    }
    // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
    var canvasContainer = document.createElement("div");
    canvas.parentNode.insertBefore(canvasContainer, canvas);
    canvasContainer.appendChild(canvas);
    // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
    canvasContainer.requestFullscreen = canvasContainer["requestFullscreen"] || canvasContainer["mozRequestFullScreen"] || canvasContainer["msRequestFullscreen"] || (canvasContainer["webkitRequestFullscreen"] ? () => canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]) : null) || (canvasContainer["webkitRequestFullScreen"] ? () => canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]) : null);
    canvasContainer.requestFullscreen();
  },
  requestFullScreen() {
    abort("Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)");
  },
  exitFullscreen() {
    // This is workaround for chrome. Trying to exit from fullscreen
    // not in fullscreen state will cause "TypeError: Document not active"
    // in chrome. See https://github.com/emscripten-core/emscripten/pull/8236
    if (!Browser.isFullscreen) {
      return false;
    }
    var CFS = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || (() => {});
    CFS.apply(document, []);
    return true;
  },
  safeSetTimeout(func, timeout) {
    // Legacy function, this is used by the SDL2 port so we need to keep it
    // around at least until that is updated.
    // See https://github.com/libsdl-org/SDL/pull/6304
    return safeSetTimeout(func, timeout);
  },
  getMimetype(name) {
    return {
      "jpg": "image/jpeg",
      "jpeg": "image/jpeg",
      "png": "image/png",
      "bmp": "image/bmp",
      "ogg": "audio/ogg",
      "wav": "audio/wav",
      "mp3": "audio/mpeg"
    }[name.slice(name.lastIndexOf(".") + 1)];
  },
  getUserMedia(func) {
    window.getUserMedia ||= navigator["getUserMedia"] || navigator["mozGetUserMedia"];
    window.getUserMedia(func);
  },
  getMovementX(event) {
    return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0;
  },
  getMovementY(event) {
    return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0;
  },
  getMouseWheelDelta(event) {
    var delta = 0;
    switch (event.type) {
     case "DOMMouseScroll":
      // 3 lines make up a step
      delta = event.detail / 3;
      break;

     case "mousewheel":
      // 120 units make up a step
      delta = event.wheelDelta / 120;
      break;

     case "wheel":
      delta = event.deltaY;
      switch (event.deltaMode) {
       case 0:
        // DOM_DELTA_PIXEL: 100 pixels make up a step
        delta /= 100;
        break;

       case 1:
        // DOM_DELTA_LINE: 3 lines make up a step
        delta /= 3;
        break;

       case 2:
        // DOM_DELTA_PAGE: A page makes up 80 steps
        delta *= 80;
        break;

       default:
        abort("unrecognized mouse wheel delta mode: " + event.deltaMode);
      }
      break;

     default:
      abort("unrecognized mouse wheel event: " + event.type);
    }
    return delta;
  },
  mouseX: 0,
  mouseY: 0,
  mouseMovementX: 0,
  mouseMovementY: 0,
  touches: {},
  lastTouches: {},
  calculateMouseCoords(pageX, pageY) {
    // Calculate the movement based on the changes
    // in the coordinates.
    var canvas = Browser.getCanvas();
    var rect = canvas.getBoundingClientRect();
    // Neither .scrollX or .pageXOffset are defined in a spec, but
    // we prefer .scrollX because it is currently in a spec draft.
    // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
    var scrollX = ((typeof window.scrollX != "undefined") ? window.scrollX : window.pageXOffset);
    var scrollY = ((typeof window.scrollY != "undefined") ? window.scrollY : window.pageYOffset);
    // If this assert lands, it's likely because the browser doesn't support scrollX or pageXOffset
    // and we have no viable fallback.
    assert((typeof scrollX != "undefined") && (typeof scrollY != "undefined"), "Unable to retrieve scroll position, mouse positions likely broken.");
    var adjustedX = pageX - (scrollX + rect.left);
    var adjustedY = pageY - (scrollY + rect.top);
    // the canvas might be CSS-scaled compared to its backbuffer;
    // SDL-using content will want mouse coordinates in terms
    // of backbuffer units.
    adjustedX = adjustedX * (canvas.width / rect.width);
    adjustedY = adjustedY * (canvas.height / rect.height);
    return {
      x: adjustedX,
      y: adjustedY
    };
  },
  setMouseCoords(pageX, pageY) {
    const {x, y} = Browser.calculateMouseCoords(pageX, pageY);
    Browser.mouseMovementX = x - Browser.mouseX;
    Browser.mouseMovementY = y - Browser.mouseY;
    Browser.mouseX = x;
    Browser.mouseY = y;
  },
  calculateMouseEvent(event) {
    // event should be mousemove, mousedown or mouseup
    if (Browser.pointerLock) {
      // When the pointer is locked, calculate the coordinates
      // based on the movement of the mouse.
      // Workaround for Firefox bug 764498
      if (event.type != "mousemove" && ("mozMovementX" in event)) {
        Browser.mouseMovementX = Browser.mouseMovementY = 0;
      } else {
        Browser.mouseMovementX = Browser.getMovementX(event);
        Browser.mouseMovementY = Browser.getMovementY(event);
      }
      // add the mouse delta to the current absolute mouse position
      Browser.mouseX += Browser.mouseMovementX;
      Browser.mouseY += Browser.mouseMovementY;
    } else {
      if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
        var touch = event.touch;
        if (touch === undefined) {
          return;
        }
        var coords = Browser.calculateMouseCoords(touch.pageX, touch.pageY);
        if (event.type === "touchstart") {
          Browser.lastTouches[touch.identifier] = coords;
          Browser.touches[touch.identifier] = coords;
        } else if (event.type === "touchend" || event.type === "touchmove") {
          var last = Browser.touches[touch.identifier];
          last ||= coords;
          Browser.lastTouches[touch.identifier] = last;
          Browser.touches[touch.identifier] = coords;
        }
        return;
      }
      Browser.setMouseCoords(event.pageX, event.pageY);
    }
  },
  resizeListeners: [],
  updateResizeListeners() {
    var canvas = Browser.getCanvas();
    Browser.resizeListeners.forEach(listener => listener(canvas.width, canvas.height));
  },
  setCanvasSize(width, height, noUpdates) {
    var canvas = Browser.getCanvas();
    Browser.updateCanvasDimensions(canvas, width, height);
    if (!noUpdates) Browser.updateResizeListeners();
  },
  windowedWidth: 0,
  windowedHeight: 0,
  setFullscreenCanvasSize() {
    // check if SDL is available
    if (typeof SDL != "undefined") {
      var flags = (growMemViews(), HEAPU32)[((SDL.screen) / 4)];
      flags = flags | 8388608;
      // set SDL_FULLSCREEN flag
      (growMemViews(), HEAP32)[((SDL.screen) / 4)] = flags;
    }
    Browser.updateCanvasDimensions(Browser.getCanvas());
    Browser.updateResizeListeners();
  },
  setWindowedCanvasSize() {
    // check if SDL is available
    if (typeof SDL != "undefined") {
      var flags = (growMemViews(), HEAPU32)[((SDL.screen) / 4)];
      flags = flags & ~8388608;
      // clear SDL_FULLSCREEN flag
      (growMemViews(), HEAP32)[((SDL.screen) / 4)] = flags;
    }
    Browser.updateCanvasDimensions(Browser.getCanvas());
    Browser.updateResizeListeners();
  },
  updateCanvasDimensions(canvas, wNative, hNative) {
    if (wNative && hNative) {
      canvas.widthNative = wNative;
      canvas.heightNative = hNative;
    } else {
      wNative = canvas.widthNative;
      hNative = canvas.heightNative;
    }
    var w = wNative;
    var h = hNative;
    if (Module["forcedAspectRatio"] > 0) {
      if (w / h < Module["forcedAspectRatio"]) {
        w = Math.round(h * Module["forcedAspectRatio"]);
      } else {
        h = Math.round(w / Module["forcedAspectRatio"]);
      }
    }
    if ((getFullscreenElement() === canvas.parentNode) && (typeof screen != "undefined")) {
      var factor = Math.min(screen.width / w, screen.height / h);
      w = Math.round(w * factor);
      h = Math.round(h * factor);
    }
    if (Browser.resizeCanvas) {
      if (canvas.width != w) canvas.width = w;
      if (canvas.height != h) canvas.height = h;
      if (typeof canvas.style != "undefined") {
        canvas.style.removeProperty("width");
        canvas.style.removeProperty("height");
      }
    } else {
      if (canvas.width != wNative) canvas.width = wNative;
      if (canvas.height != hNative) canvas.height = hNative;
      if (typeof canvas.style != "undefined") {
        if (w != wNative || h != hNative) {
          canvas.style.setProperty("width", w + "px", "important");
          canvas.style.setProperty("height", h + "px", "important");
        } else {
          canvas.style.removeProperty("width");
          canvas.style.removeProperty("height");
        }
      }
    }
  }
};

function _emscripten_get_screen_size(width, height) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_get_screen_size' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  width = bigintToI53Checked(width);
  height = bigintToI53Checked(height);
  (growMemViews(), HEAP32)[((width) / 4)] = screen.width;
  (growMemViews(), HEAP32)[((height) / 4)] = screen.height;
}

var _emscripten_html5_remove_all_event_listeners = () => JSEvents.removeAllEventListeners();

var _emscripten_performance_now = () => performance.now();

var alignMemory = (size, alignment) => {
  assert(alignment, "alignment argument is required");
  return Math.ceil(size / alignment) * alignment;
};

var growMemory = size => {
  var oldHeapSize = wasmMemory.buffer.byteLength;
  var pages = ((size - oldHeapSize + 65535) / 65536) | 0;
  try {
    // round size grow request up to wasm page size (fixed 64KB per spec)
    wasmMemory.grow(BigInt(pages));
    // .grow() takes a delta compared to the previous size
    updateMemoryViews();
    return 1;
  } catch (e) {
    err(`growMemory: Attempted to grow heap from ${oldHeapSize} bytes to ${size} bytes, but got error: ${e}`);
  }
};

function _emscripten_resize_heap(requestedSize) {
  requestedSize = bigintToI53Checked(requestedSize);
  var oldSize = (growMemViews(), HEAPU8).length;
  // With multithreaded builds, races can happen (another thread might increase the size
  // in between), so return a failure, and let the caller retry.
  if (requestedSize <= oldSize) {
    return false;
  }
  // Memory resize rules:
  // 1.  Always increase heap size to at least the requested size, rounded up
  //     to next page multiple.
  // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap
  //     geometrically: increase the heap size according to
  //     MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%), At most
  //     overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
  // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap
  //     linearly: increase the heap size by at least
  //     MEMORY_GROWTH_LINEAR_STEP bytes.
  // 3.  Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by
  //     MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
  // 4.  If we were unable to allocate as much memory, it may be due to
  //     over-eager decision to excessively reserve due to (3) above.
  //     Hence if an allocation fails, cut down on the amount of excess
  //     growth, in an attempt to succeed to perform a smaller allocation.
  // A limit is set for how much we can grow. We should not exceed that
  // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
  var maxHeapSize = getHeapMax();
  if (requestedSize > maxHeapSize) {
    err(`Cannot enlarge memory, requested ${requestedSize} bytes, but the limit is ${maxHeapSize} bytes!`);
    return false;
  }
  // Loop through potential heap size increases. If we attempt a too eager
  // reservation that fails, cut down on the attempted size and reserve a
  // smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
  for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
    var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
    // ensure geometric growth
    // but limit overreserving (default to capping at +96MB overgrowth at most)
    overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
    var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
    var replacement = growMemory(newSize);
    if (replacement) {
      return true;
    }
  }
  err(`Failed to grow the heap from ${oldSize} bytes to ${newSize} bytes, not enough memory!`);
  return false;
}

/** @suppress {checkTypes} */ function _emscripten_sample_gamepad_data() {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_sample_gamepad_data' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  try {
    if (navigator.getGamepads) return (JSEvents.lastGamepadState = navigator.getGamepads()) ? 0 : -1;
  } catch (e) {
    err(`navigator.getGamepads() exists, but failed to execute with exception ${e}. Disabling Gamepad access.`);
    navigator.getGamepads = null;
  }
  return -1;
}

var fillBatteryEventData = (eventStruct, battery) => {
  (growMemViews(), HEAPF64)[((eventStruct) / 8)] = battery.chargingTime;
  (growMemViews(), HEAPF64)[(((eventStruct) + (8)) / 8)] = battery.dischargingTime;
  (growMemViews(), HEAPF64)[(((eventStruct) + (16)) / 8)] = battery.level;
  (growMemViews(), HEAP8)[(eventStruct) + (24)] = battery.charging;
};

var registerBatteryEventCallback = (battery, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
  JSEvents.batteryEvent ||= _malloc(32);
  var batteryEventHandlerFunc = (e = event) => {
    var batteryEvent = JSEvents.batteryEvent;
    fillBatteryEventData(batteryEvent, battery);
    if (((a1, a2, a3) => dynCall_iijj(callbackfunc, a1, BigInt(a2), BigInt(a3)))(eventTypeId, batteryEvent, userData)) e.preventDefault();
  };
  var eventHandler = {
    target: battery,
    eventTypeString,
    callbackfunc,
    handlerFunc: batteryEventHandlerFunc,
    useCapture
  };
  return JSEvents.registerOrRemoveHandler(eventHandler);
};

var hasBatteryAPI = () => typeof navigator != "undefined" && navigator.getBattery;

var _emscripten_set_batterychargingchange_callback_on_thread = function(userData, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_batterychargingchange_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  if (!hasBatteryAPI()) return -1;
  navigator.getBattery().then(b => {
    registerBatteryEventCallback(b, userData, true, callbackfunc, 29, "chargingchange", targetThread);
  });
};

var _emscripten_set_batterylevelchange_callback_on_thread = function(userData, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_batterylevelchange_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  if (!hasBatteryAPI()) return -1;
  navigator.getBattery().then(b => {
    registerBatteryEventCallback(b, userData, true, callbackfunc, 30, "levelchange", targetThread);
  });
};

var registerFocusEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
  JSEvents.focusEvent ||= _malloc(256);
  var focusEventHandlerFunc = (e = event) => {
    var nodeName = JSEvents.getNodeNameForTarget(e.target);
    var id = e.target.id ? e.target.id : "";
    var focusEvent = JSEvents.focusEvent;
    stringToUTF8(nodeName, focusEvent + 0, 128);
    stringToUTF8(id, focusEvent + 128, 128);
    if (((a1, a2, a3) => dynCall_iijj(callbackfunc, a1, BigInt(a2), BigInt(a3)))(eventTypeId, focusEvent, userData)) e.preventDefault();
  };
  var eventHandler = {
    target: findEventTarget(target),
    eventTypeString,
    callbackfunc,
    handlerFunc: focusEventHandlerFunc,
    useCapture
  };
  return JSEvents.registerOrRemoveHandler(eventHandler);
};

function _emscripten_set_blur_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_blur_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  target = bigintToI53Checked(target);
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  return registerFocusEventCallback(target, userData, useCapture, callbackfunc, 12, "blur", targetThread);
}

var fillDeviceMotionEventData = (eventStruct, e, target) => {
  var supportedFields = 0;
  var a = e["acceleration"];
  supportedFields |= a && 1;
  var ag = e["accelerationIncludingGravity"];
  supportedFields |= ag && 2;
  var rr = e["rotationRate"];
  supportedFields |= rr && 4;
  a = a || {};
  ag = ag || {};
  rr = rr || {};
  (growMemViews(), HEAPF64)[((eventStruct) / 8)] = a["x"];
  (growMemViews(), HEAPF64)[(((eventStruct) + (8)) / 8)] = a["y"];
  (growMemViews(), HEAPF64)[(((eventStruct) + (16)) / 8)] = a["z"];
  (growMemViews(), HEAPF64)[(((eventStruct) + (24)) / 8)] = ag["x"];
  (growMemViews(), HEAPF64)[(((eventStruct) + (32)) / 8)] = ag["y"];
  (growMemViews(), HEAPF64)[(((eventStruct) + (40)) / 8)] = ag["z"];
  (growMemViews(), HEAPF64)[(((eventStruct) + (48)) / 8)] = rr["alpha"];
  (growMemViews(), HEAPF64)[(((eventStruct) + (56)) / 8)] = rr["beta"];
  (growMemViews(), HEAPF64)[(((eventStruct) + (64)) / 8)] = rr["gamma"];
};

var registerDeviceMotionEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
  JSEvents.deviceMotionEvent ||= _malloc(80);
  var deviceMotionEventHandlerFunc = (e = event) => {
    fillDeviceMotionEventData(JSEvents.deviceMotionEvent, e, target);
    // TODO: Thread-safety with respect to emscripten_get_devicemotion_status()
    if (((a1, a2, a3) => dynCall_iijj(callbackfunc, a1, BigInt(a2), BigInt(a3)))(eventTypeId, JSEvents.deviceMotionEvent, userData)) e.preventDefault();
  };
  var eventHandler = {
    target: findEventTarget(target),
    eventTypeString,
    callbackfunc,
    handlerFunc: deviceMotionEventHandlerFunc,
    useCapture
  };
  return JSEvents.registerOrRemoveHandler(eventHandler);
};

function _emscripten_set_devicemotion_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_devicemotion_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  return registerDeviceMotionEventCallback(2, userData, useCapture, callbackfunc, 17, "devicemotion", targetThread);
}

var fillDeviceOrientationEventData = (eventStruct, e, target) => {
  (growMemViews(), HEAPF64)[((eventStruct) / 8)] = e.alpha;
  (growMemViews(), HEAPF64)[(((eventStruct) + (8)) / 8)] = e.beta;
  (growMemViews(), HEAPF64)[(((eventStruct) + (16)) / 8)] = e.gamma;
  (growMemViews(), HEAP8)[(eventStruct) + (24)] = e.absolute;
};

var registerDeviceOrientationEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
  JSEvents.deviceOrientationEvent ||= _malloc(32);
  var deviceOrientationEventHandlerFunc = (e = event) => {
    fillDeviceOrientationEventData(JSEvents.deviceOrientationEvent, e, target);
    // TODO: Thread-safety with respect to emscripten_get_deviceorientation_status()
    if (((a1, a2, a3) => dynCall_iijj(callbackfunc, a1, BigInt(a2), BigInt(a3)))(eventTypeId, JSEvents.deviceOrientationEvent, userData)) e.preventDefault();
  };
  var eventHandler = {
    target: findEventTarget(target),
    eventTypeString,
    callbackfunc,
    handlerFunc: deviceOrientationEventHandlerFunc,
    useCapture
  };
  return JSEvents.registerOrRemoveHandler(eventHandler);
};

function _emscripten_set_deviceorientation_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_deviceorientation_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  return registerDeviceOrientationEventCallback(2, userData, useCapture, callbackfunc, 16, "deviceorientation", targetThread);
}

function _emscripten_set_focus_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_focus_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  target = bigintToI53Checked(target);
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  return registerFocusEventCallback(target, userData, useCapture, callbackfunc, 13, "focus", targetThread);
}

function _emscripten_set_focusin_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_focusin_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  target = bigintToI53Checked(target);
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  return registerFocusEventCallback(target, userData, useCapture, callbackfunc, 14, "focusin", targetThread);
}

function _emscripten_set_focusout_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_focusout_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  target = bigintToI53Checked(target);
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  return registerFocusEventCallback(target, userData, useCapture, callbackfunc, 15, "focusout", targetThread);
}

var fillFullscreenChangeEventData = eventStruct => {
  var fullscreenElement = getFullscreenElement();
  var isFullscreen = !!fullscreenElement;
  // Assigning a boolean to HEAP32 with expected type coercion.
  /** @suppress{checkTypes} */ (growMemViews(), HEAP8)[eventStruct] = isFullscreen;
  (growMemViews(), HEAP8)[(eventStruct) + (1)] = JSEvents.fullscreenEnabled();
  // If transitioning to fullscreen, report info about the element that is now fullscreen.
  // If transitioning to windowed mode, report info about the element that just was fullscreen.
  var reportedElement = isFullscreen ? fullscreenElement : JSEvents.previousFullscreenElement;
  var nodeName = JSEvents.getNodeNameForTarget(reportedElement);
  var id = reportedElement?.id || "";
  stringToUTF8(nodeName, eventStruct + 2, 128);
  stringToUTF8(id, eventStruct + 130, 128);
  (growMemViews(), HEAP32)[(((eventStruct) + (260)) / 4)] = reportedElement ? reportedElement.clientWidth : 0;
  (growMemViews(), HEAP32)[(((eventStruct) + (264)) / 4)] = reportedElement ? reportedElement.clientHeight : 0;
  (growMemViews(), HEAP32)[(((eventStruct) + (268)) / 4)] = screen.width;
  (growMemViews(), HEAP32)[(((eventStruct) + (272)) / 4)] = screen.height;
  if (isFullscreen) {
    JSEvents.previousFullscreenElement = fullscreenElement;
  }
};

var registerFullscreenChangeEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
  JSEvents.fullscreenChangeEvent ||= _malloc(276);
  var fullscreenChangeEventhandlerFunc = (e = event) => {
    var fullscreenChangeEvent = JSEvents.fullscreenChangeEvent;
    fillFullscreenChangeEventData(fullscreenChangeEvent);
    if (((a1, a2, a3) => dynCall_iijj(callbackfunc, a1, BigInt(a2), BigInt(a3)))(eventTypeId, fullscreenChangeEvent, userData)) e.preventDefault();
  };
  var eventHandler = {
    target,
    eventTypeString,
    callbackfunc,
    handlerFunc: fullscreenChangeEventhandlerFunc,
    useCapture
  };
  return JSEvents.registerOrRemoveHandler(eventHandler);
};

function _emscripten_set_fullscreenchange_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_fullscreenchange_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  target = bigintToI53Checked(target);
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  if (!JSEvents.fullscreenEnabled()) return -1;
  target = findEventTarget(target);
  if (!target) return -4;
  return registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "fullscreenchange", targetThread);
}

var registerGamepadEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
  JSEvents.gamepadEvent ||= _malloc(1240);
  var gamepadEventHandlerFunc = (e = event) => {
    var gamepadEvent = JSEvents.gamepadEvent;
    fillGamepadEventData(gamepadEvent, e["gamepad"]);
    if (((a1, a2, a3) => dynCall_iijj(callbackfunc, a1, BigInt(a2), BigInt(a3)))(eventTypeId, gamepadEvent, userData)) e.preventDefault();
  };
  var eventHandler = {
    target: findEventTarget(target),
    allowsDeferredCalls: true,
    eventTypeString,
    callbackfunc,
    handlerFunc: gamepadEventHandlerFunc,
    useCapture
  };
  return JSEvents.registerOrRemoveHandler(eventHandler);
};

function _emscripten_set_gamepadconnected_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_gamepadconnected_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  if (_emscripten_sample_gamepad_data()) return -1;
  return registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 26, "gamepadconnected", targetThread);
}

function _emscripten_set_gamepaddisconnected_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_gamepaddisconnected_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  if (_emscripten_sample_gamepad_data()) return -1;
  return registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 27, "gamepaddisconnected", targetThread);
}

var registerKeyEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
  JSEvents.keyEvent ||= _malloc(160);
  var keyEventHandlerFunc = e => {
    assert(e);
    var keyEventData = JSEvents.keyEvent;
    (growMemViews(), HEAPF64)[((keyEventData) / 8)] = e.timeStamp;
    var idx = ((keyEventData) / 4);
    (growMemViews(), HEAP32)[idx + 2] = e.location;
    (growMemViews(), HEAP8)[keyEventData + 12] = e.ctrlKey;
    (growMemViews(), HEAP8)[keyEventData + 13] = e.shiftKey;
    (growMemViews(), HEAP8)[keyEventData + 14] = e.altKey;
    (growMemViews(), HEAP8)[keyEventData + 15] = e.metaKey;
    (growMemViews(), HEAP8)[keyEventData + 16] = e.repeat;
    (growMemViews(), HEAP32)[idx + 5] = e.charCode;
    (growMemViews(), HEAP32)[idx + 6] = e.keyCode;
    (growMemViews(), HEAP32)[idx + 7] = e.which;
    stringToUTF8(e.key || "", keyEventData + 32, 32);
    stringToUTF8(e.code || "", keyEventData + 64, 32);
    stringToUTF8(e.char || "", keyEventData + 96, 32);
    stringToUTF8(e.locale || "", keyEventData + 128, 32);
    if (((a1, a2, a3) => dynCall_iijj(callbackfunc, a1, BigInt(a2), BigInt(a3)))(eventTypeId, keyEventData, userData)) e.preventDefault();
  };
  var eventHandler = {
    target: findEventTarget(target),
    eventTypeString,
    callbackfunc,
    handlerFunc: keyEventHandlerFunc,
    useCapture
  };
  return JSEvents.registerOrRemoveHandler(eventHandler);
};

function _emscripten_set_keydown_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_keydown_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  target = bigintToI53Checked(target);
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  return registerKeyEventCallback(target, userData, useCapture, callbackfunc, 2, "keydown", targetThread);
}

function _emscripten_set_keyup_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_keyup_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  target = bigintToI53Checked(target);
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  return registerKeyEventCallback(target, userData, useCapture, callbackfunc, 3, "keyup", targetThread);
}

var screenOrientation = () => {
  if (!window.screen) return undefined;
  return screen.orientation || screen["mozOrientation"] || screen["webkitOrientation"];
};

var fillOrientationChangeEventData = eventStruct => {
  // OrientationType enum
  var orientationsType1 = [ "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary" ];
  // alternative selection from OrientationLockType enum
  var orientationsType2 = [ "portrait", "portrait", "landscape", "landscape" ];
  var orientationIndex = 0;
  var orientationAngle = 0;
  var screenOrientObj = screenOrientation();
  if (typeof screenOrientObj === "object") {
    orientationIndex = orientationsType1.indexOf(screenOrientObj.type);
    if (orientationIndex < 0) {
      orientationIndex = orientationsType2.indexOf(screenOrientObj.type);
    }
    if (orientationIndex >= 0) {
      orientationIndex = 1 << orientationIndex;
    }
    orientationAngle = screenOrientObj.angle;
  }
  (growMemViews(), HEAP32)[((eventStruct) / 4)] = orientationIndex;
  (growMemViews(), HEAP32)[(((eventStruct) + (4)) / 4)] = orientationAngle;
};

var registerOrientationChangeEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
  JSEvents.orientationChangeEvent ||= _malloc(8);
  var orientationChangeEventHandlerFunc = (e = event) => {
    var orientationChangeEvent = JSEvents.orientationChangeEvent;
    fillOrientationChangeEventData(orientationChangeEvent);
    if (((a1, a2, a3) => dynCall_iijj(callbackfunc, a1, BigInt(a2), BigInt(a3)))(eventTypeId, orientationChangeEvent, userData)) e.preventDefault();
  };
  var eventHandler = {
    target,
    eventTypeString,
    callbackfunc,
    handlerFunc: orientationChangeEventHandlerFunc,
    useCapture
  };
  return JSEvents.registerOrRemoveHandler(eventHandler);
};

function _emscripten_set_orientationchange_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_orientationchange_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  if (!window.screen || !screen.orientation) return -1;
  return registerOrientationChangeEventCallback(screen.orientation, userData, useCapture, callbackfunc, 18, "change", targetThread);
}

var registerUiEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
  JSEvents.uiEvent ||= _malloc(36);
  target = findEventTarget(target);
  var uiEventHandlerFunc = (e = event) => {
    if (e.target != target) {
      // Never take ui events such as scroll via a 'bubbled' route, but always from the direct element that
      // was targeted. Otherwise e.g. if app logs a message in response to a page scroll, the Emscripten log
      // message box could cause to scroll, generating a new (bubbled) scroll message, causing a new log print,
      // causing a new scroll, etc..
      return;
    }
    var b = document.body;
    // Take document.body to a variable, Closure compiler does not outline access to it on its own.
    if (!b) {
      // During a page unload 'body' can be null, with "Cannot read property 'clientWidth' of null" being thrown
      return;
    }
    var uiEvent = JSEvents.uiEvent;
    (growMemViews(), HEAP32)[((uiEvent) / 4)] = 0;
    // always zero for resize and scroll
    (growMemViews(), HEAP32)[(((uiEvent) + (4)) / 4)] = b.clientWidth;
    (growMemViews(), HEAP32)[(((uiEvent) + (8)) / 4)] = b.clientHeight;
    (growMemViews(), HEAP32)[(((uiEvent) + (12)) / 4)] = innerWidth;
    (growMemViews(), HEAP32)[(((uiEvent) + (16)) / 4)] = innerHeight;
    (growMemViews(), HEAP32)[(((uiEvent) + (20)) / 4)] = outerWidth;
    (growMemViews(), HEAP32)[(((uiEvent) + (24)) / 4)] = outerHeight;
    (growMemViews(), HEAP32)[(((uiEvent) + (28)) / 4)] = pageXOffset | 0;
    // scroll offsets are float
    (growMemViews(), HEAP32)[(((uiEvent) + (32)) / 4)] = pageYOffset | 0;
    if (((a1, a2, a3) => dynCall_iijj(callbackfunc, a1, BigInt(a2), BigInt(a3)))(eventTypeId, uiEvent, userData)) e.preventDefault();
  };
  var eventHandler = {
    target,
    eventTypeString,
    callbackfunc,
    handlerFunc: uiEventHandlerFunc,
    useCapture
  };
  return JSEvents.registerOrRemoveHandler(eventHandler);
};

function _emscripten_set_resize_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_resize_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  target = bigintToI53Checked(target);
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  return registerUiEventCallback(target, userData, useCapture, callbackfunc, 10, "resize", targetThread);
}

function _emscripten_set_scroll_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_scroll_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  target = bigintToI53Checked(target);
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  return registerUiEventCallback(target, userData, useCapture, callbackfunc, 11, "scroll", targetThread);
}

var fillVisibilityChangeEventData = eventStruct => {
  var visibilityStates = [ "hidden", "visible", "prerender", "unloaded" ];
  var visibilityState = visibilityStates.indexOf(document.visibilityState);
  // Assigning a boolean to HEAP32 with expected type coercion.
  /** @suppress{checkTypes} */ (growMemViews(), HEAP8)[eventStruct] = document.hidden;
  (growMemViews(), HEAP32)[(((eventStruct) + (4)) / 4)] = visibilityState;
};

var registerVisibilityChangeEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
  JSEvents.visibilityChangeEvent ||= _malloc(8);
  var visibilityChangeEventHandlerFunc = (e = event) => {
    var visibilityChangeEvent = JSEvents.visibilityChangeEvent;
    fillVisibilityChangeEventData(visibilityChangeEvent);
    if (((a1, a2, a3) => dynCall_iijj(callbackfunc, a1, BigInt(a2), BigInt(a3)))(eventTypeId, visibilityChangeEvent, userData)) e.preventDefault();
  };
  var eventHandler = {
    target,
    eventTypeString,
    callbackfunc,
    handlerFunc: visibilityChangeEventHandlerFunc,
    useCapture
  };
  return JSEvents.registerOrRemoveHandler(eventHandler);
};

function _emscripten_set_visibilitychange_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_visibilitychange_callback_on_thread' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  userData = bigintToI53Checked(userData);
  callbackfunc = bigintToI53Checked(callbackfunc);
  targetThread = bigintToI53Checked(targetThread);
  if (!specialHTMLTargets[1]) {
    return -4;
  }
  return registerVisibilityChangeEventCallback(specialHTMLTargets[1], userData, useCapture, callbackfunc, 21, "visibilitychange", targetThread);
}

function _emscripten_set_window_title(title) {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "Attempted to call proxied function '_emscripten_set_window_title' in a Wasm Worker, but in Wasm Worker enabled builds, proxied function architecture is not available!");
  title = bigintToI53Checked(title);
  return document.title = UTF8ToString(title);
}

var _emscripten_terminate_all_wasm_workers = () => {
  assert(!ENVIRONMENT_IS_WASM_WORKER, "emscripten_terminate_all_wasm_workers() cannot be called from a Wasm Worker: only the main browser thread has visibility to terminate all Workers!");
  Object.values(_wasmWorkers).forEach(worker => worker.terminate());
  _wasmWorkers = {};
};

var _emscripten_terminate_wasm_worker = id => {
  assert(id != 0, "emscripten_terminate_wasm_worker() cannot be called with id=0!");
  if (_wasmWorkers[id]) {
    _wasmWorkers[id].terminate();
    delete _wasmWorkers[id];
  }
};

function _emscripten_wasm_worker_post_function_v(id, funcPtr) {
  funcPtr = bigintToI53Checked(funcPtr);
  _wasmWorkers[id].postMessage({
    "_wsc": funcPtr,
    "x": []
  });
}

var _emscripten_wasm_worker_self_id = () => wwParams?.wwID;

var printCharBuffers = [ null, [], [] ];

var printChar = (stream, curr) => {
  var buffer = printCharBuffers[stream];
  assert(buffer);
  if (curr === 0 || curr === 10) {
    (stream === 1 ? out : err)(UTF8ArrayToString(buffer));
    buffer.length = 0;
  } else {
    buffer.push(curr);
  }
};

var flush_NO_FILESYSTEM = () => {
  // flush anything remaining in the buffers during shutdown
  _fflush(0);
  if (printCharBuffers[1].length) printChar(1, 10);
  if (printCharBuffers[2].length) printChar(2, 10);
};

var SYSCALLS = {
  varargs: undefined,
  getStr(ptr) {
    var ret = UTF8ToString(ptr);
    return ret;
  }
};

function _fd_write(fd, iov, iovcnt, pnum) {
  iov = bigintToI53Checked(iov);
  iovcnt = bigintToI53Checked(iovcnt);
  pnum = bigintToI53Checked(pnum);
  // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
  var num = 0;
  for (var i = 0; i < iovcnt; i++) {
    var ptr = Number((growMemViews(), HEAPU64)[((iov) / 8)]);
    var len = Number((growMemViews(), HEAPU64)[(((iov) + (8)) / 8)]);
    iov += 16;
    for (var j = 0; j < len; j++) {
      printChar(fd, (growMemViews(), HEAPU8)[ptr + j]);
    }
    num += len;
  }
  (growMemViews(), HEAPU64)[((pnum) / 8)] = BigInt(num);
  return 0;
}

var runAndAbortIfError = func => {
  try {
    return func();
  } catch (e) {
    abort(e);
  }
};

var runtimeKeepalivePush = () => {
  runtimeKeepaliveCounter += 1;
};

var runtimeKeepalivePop = () => {
  assert(runtimeKeepaliveCounter > 0);
  runtimeKeepaliveCounter -= 1;
};

var Asyncify = {
  rewindArguments: new Map,
  instrumentWasmImports(imports) {
    var importPattern = /^(invoke_.*|__asyncjs__.*)$/;
    for (let [x, original] of Object.entries(imports)) {
      if (typeof original == "function") {
        let isAsyncifyImport = original.isAsync || importPattern.test(x);
        imports[x] = (...args) => {
          var originalAsyncifyState = Asyncify.state;
          try {
            return original(...args);
          } finally {
            // Only asyncify-declared imports are allowed to change the
            // state.
            // Changing the state from normal to disabled is allowed (in any
            // function) as that is what shutdown does (and we don't have an
            // explicit list of shutdown imports).
            var changedToDisabled = originalAsyncifyState === Asyncify.State.Normal && Asyncify.state === Asyncify.State.Disabled;
            // invoke_* functions are allowed to change the state if we do
            // not ignore indirect calls.
            var ignoredInvoke = x.startsWith("invoke_") && true;
            if (Asyncify.state !== originalAsyncifyState && !isAsyncifyImport && !changedToDisabled && !ignoredInvoke) {
              abort(`import ${x} was not in ASYNCIFY_IMPORTS, but changed the state`);
            }
          }
        };
      }
    }
  },
  saveRewindArguments(func, passedArguments) {
    return Asyncify.rewindArguments.set(func, Array.from(passedArguments));
  },
  restoreRewindArguments(func) {
    assert(Asyncify.rewindArguments.has(func));
    return Asyncify.rewindArguments.get(func);
  },
  instrumentFunction(original) {
    var wrapper = (...args) => {
      Asyncify.exportCallStack.push(original);
      try {
        Asyncify.saveRewindArguments(original, args);
        return original(...args);
      } finally {
        if (!ABORT) {
          var top = Asyncify.exportCallStack.pop();
          assert(top === original);
          Asyncify.maybeStopUnwind();
        }
      }
    };
    Asyncify.funcWrappers.set(original, wrapper);
    return wrapper;
  },
  instrumentWasmExports(exports) {
    var ret = {};
    for (let [x, original] of Object.entries(exports)) {
      if (typeof original == "function") {
        var wrapper = Asyncify.instrumentFunction(original);
        ret[x] = wrapper;
      } else {
        ret[x] = original;
      }
    }
    return ret;
  },
  State: {
    Normal: 0,
    Unwinding: 1,
    Rewinding: 2,
    Disabled: 3
  },
  state: 0,
  StackSize: 4096,
  currData: null,
  handleSleepReturnValue: 0,
  exportCallStack: [],
  callstackFuncToId: new Map,
  callStackIdToFunc: new Map,
  funcWrappers: new Map,
  callStackId: 0,
  asyncPromiseHandlers: null,
  sleepCallbacks: [],
  getCallStackId(func) {
    assert(func);
    if (!Asyncify.callstackFuncToId.has(func)) {
      var id = Asyncify.callStackId++;
      Asyncify.callstackFuncToId.set(func, id);
      Asyncify.callStackIdToFunc.set(id, func);
    }
    return Asyncify.callstackFuncToId.get(func);
  },
  maybeStopUnwind() {
    if (Asyncify.currData && Asyncify.state === Asyncify.State.Unwinding && Asyncify.exportCallStack.length === 0) {
      // We just finished unwinding.
      // Be sure to set the state before calling any other functions to avoid
      // possible infinite recursion here (For example in debug pthread builds
      // the dbg() function itself can call back into WebAssembly to get the
      // current pthread_self() pointer).
      Asyncify.state = Asyncify.State.Normal;
      // Keep the runtime alive so that a re-wind can be done later.
      runAndAbortIfError(_asyncify_stop_unwind);
      if (typeof Fibers != "undefined") {
        Fibers.trampoline();
      }
    }
  },
  whenDone() {
    assert(Asyncify.currData, "Tried to wait for an async operation when none is in progress.");
    assert(!Asyncify.asyncPromiseHandlers, "Cannot have multiple async operations in flight at once");
    return new Promise((resolve, reject) => {
      Asyncify.asyncPromiseHandlers = {
        resolve,
        reject
      };
    });
  },
  allocateData() {
    // An asyncify data structure has three fields:
    //  0  current stack pos
    //  4  max stack pos
    //  8  id of function at bottom of the call stack (callStackIdToFunc[id] == wasm func)
    // The Asyncify ABI only interprets the first two fields, the rest is for the runtime.
    // We also embed a stack in the same memory region here, right next to the structure.
    // This struct is also defined as asyncify_data_t in emscripten/fiber.h
    var ptr = _malloc(24 + Asyncify.StackSize);
    Asyncify.setDataHeader(ptr, ptr + 24, Asyncify.StackSize);
    Asyncify.setDataRewindFunc(ptr);
    return ptr;
  },
  setDataHeader(ptr, stack, stackSize) {
    (growMemViews(), HEAPU64)[((ptr) / 8)] = BigInt(stack);
    (growMemViews(), HEAPU64)[(((ptr) + (8)) / 8)] = BigInt(stack + stackSize);
  },
  setDataRewindFunc(ptr) {
    var bottomOfCallStack = Asyncify.exportCallStack[0];
    assert(bottomOfCallStack, "exportCallStack is empty");
    var rewindId = Asyncify.getCallStackId(bottomOfCallStack);
    (growMemViews(), HEAP32)[(((ptr) + (16)) / 4)] = rewindId;
  },
  getDataRewindFunc(ptr) {
    var id = (growMemViews(), HEAP32)[(((ptr) + (16)) / 4)];
    var func = Asyncify.callStackIdToFunc.get(id);
    assert(func, `id ${id} not found in callStackIdToFunc`);
    return func;
  },
  doRewind(ptr) {
    var original = Asyncify.getDataRewindFunc(ptr);
    var func = Asyncify.funcWrappers.get(original);
    assert(original);
    assert(func);
    // Once we have rewound and the stack we no longer need to artificially
    // keep the runtime alive.
    // When re-winding, the arguments to a function are ignored.  For i32 arguments we
    // can just call the function with no args at all since and the engine will produce zeros
    // for all arguments.  However, for i64 arguments we get `undefined cannot be converted to
    // BigInt`.
    return func(...Asyncify.restoreRewindArguments(original));
  },
  handleSleep(startAsync) {
    assert(Asyncify.state !== Asyncify.State.Disabled, "Asyncify cannot be done during or after the runtime exits");
    if (ABORT) return;
    if (Asyncify.state === Asyncify.State.Normal) {
      // Prepare to sleep. Call startAsync, and see what happens:
      // if the code decided to call our callback synchronously,
      // then no async operation was in fact begun, and we don't
      // need to do anything.
      var reachedCallback = false;
      var reachedAfterCallback = false;
      startAsync((handleSleepReturnValue = 0) => {
        assert(!handleSleepReturnValue || typeof handleSleepReturnValue == "number" || typeof handleSleepReturnValue == "boolean");
        // old emterpretify API supported other stuff
        if (ABORT) return;
        Asyncify.handleSleepReturnValue = handleSleepReturnValue;
        reachedCallback = true;
        if (!reachedAfterCallback) {
          // We are happening synchronously, so no need for async.
          return;
        }
        // This async operation did not happen synchronously, so we did
        // unwind. In that case there can be no compiled code on the stack,
        // as it might break later operations (we can rewind ok now, but if
        // we unwind again, we would unwind through the extra compiled code
        // too).
        assert(!Asyncify.exportCallStack.length, "Waking up (starting to rewind) must be done from JS, without compiled code on the stack.");
        Asyncify.state = Asyncify.State.Rewinding;
        runAndAbortIfError(() => _asyncify_start_rewind(Asyncify.currData));
        if (typeof MainLoop != "undefined" && MainLoop.func) {
          MainLoop.resume();
        }
        var asyncWasmReturnValue, isError = false;
        try {
          asyncWasmReturnValue = Asyncify.doRewind(Asyncify.currData);
        } catch (err) {
          asyncWasmReturnValue = err;
          isError = true;
        }
        // Track whether the return value was handled by any promise handlers.
        var handled = false;
        if (!Asyncify.currData) {
          // All asynchronous execution has finished.
          // `asyncWasmReturnValue` now contains the final
          // return value of the exported async WASM function.
          // Note: `asyncWasmReturnValue` is distinct from
          // `Asyncify.handleSleepReturnValue`.
          // `Asyncify.handleSleepReturnValue` contains the return
          // value of the last C function to have executed
          // `Asyncify.handleSleep()`, where as `asyncWasmReturnValue`
          // contains the return value of the exported WASM function
          // that may have called C functions that
          // call `Asyncify.handleSleep()`.
          var asyncPromiseHandlers = Asyncify.asyncPromiseHandlers;
          if (asyncPromiseHandlers) {
            Asyncify.asyncPromiseHandlers = null;
            (isError ? asyncPromiseHandlers.reject : asyncPromiseHandlers.resolve)(asyncWasmReturnValue);
            handled = true;
          }
        }
        if (isError && !handled) {
          // If there was an error and it was not handled by now, we have no choice but to
          // rethrow that error into the global scope where it can be caught only by
          // `onerror` or `onunhandledpromiserejection`.
          throw asyncWasmReturnValue;
        }
      });
      reachedAfterCallback = true;
      if (!reachedCallback) {
        // A true async operation was begun; start a sleep.
        Asyncify.state = Asyncify.State.Unwinding;
        // TODO: reuse, don't alloc/free every sleep
        Asyncify.currData = Asyncify.allocateData();
        if (typeof MainLoop != "undefined" && MainLoop.func) {
          MainLoop.pause();
        }
        runAndAbortIfError(() => _asyncify_start_unwind(Asyncify.currData));
      }
    } else if (Asyncify.state === Asyncify.State.Rewinding) {
      // Stop a resume.
      Asyncify.state = Asyncify.State.Normal;
      runAndAbortIfError(_asyncify_stop_rewind);
      _free(Asyncify.currData);
      Asyncify.currData = null;
      // Call all sleep callbacks now that the sleep-resume is all done.
      Asyncify.sleepCallbacks.forEach(callUserCallback);
    } else {
      abort(`invalid state: ${Asyncify.state}`);
    }
    return Asyncify.handleSleepReturnValue;
  },
  handleAsync: startAsync => Asyncify.handleSleep(wakeUp => {
    // TODO: add error handling as a second param when handleSleep implements it.
    startAsync().then(wakeUp);
  })
};

var getCFunc = ident => {
  var func = Module["_" + ident];
  // closure exported function
  assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
  return func;
};

var writeArrayToMemory = (array, buffer) => {
  assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
  (growMemViews(), HEAP8).set(array, buffer);
};

var lengthBytesUTF8 = str => {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
    // unit, not a Unicode code point of the character! So decode
    // UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var c = str.charCodeAt(i);
    // possibly a lead surrogate
    if (c <= 127) {
      len++;
    } else if (c <= 2047) {
      len += 2;
    } else if (c >= 55296 && c <= 57343) {
      len += 4;
      ++i;
    } else {
      len += 3;
    }
  }
  return len;
};

var stackAlloc = sz => __emscripten_stack_alloc(sz);

var stringToUTF8OnStack = str => {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8(str, ret, size);
  return ret;
};

/**
     * @param {string|null=} returnType
     * @param {Array=} argTypes
     * @param {Array=} args
     * @param {Object=} opts
     */ var ccall = (ident, returnType, argTypes, args, opts) => {
  // For fast lookup of conversion functions
  var toC = {
    "pointer": p => BigInt(p),
    "string": str => {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) {
        // null string
        ret = stringToUTF8OnStack(str);
      }
      return BigInt(ret);
    },
    "array": arr => {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return BigInt(ret);
    }
  };
  function convertReturnValue(ret) {
    if (returnType === "string") {
      return UTF8ToString(Number(ret));
    }
    if (returnType === "pointer") return Number(ret);
    if (returnType === "boolean") return Boolean(ret);
    return ret;
  }
  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  assert(returnType !== "array", 'Return type should not be "array".');
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  // Data for a previous async operation that was in flight before us.
  var previousAsync = Asyncify.currData;
  var ret = func(...cArgs);
  function onDone(ret) {
    runtimeKeepalivePop();
    if (stack !== 0) stackRestore(stack);
    return convertReturnValue(ret);
  }
  var asyncMode = opts?.async;
  // Keep the runtime alive through all calls. Note that this call might not be
  // async, but for simplicity we push and pop in all calls.
  runtimeKeepalivePush();
  if (Asyncify.currData != previousAsync) {
    // A change in async operation happened. If there was already an async
    // operation in flight before us, that is an error: we should not start
    // another async operation while one is active, and we should not stop one
    // either. The only valid combination is to have no change in the async
    // data (so we either had one in flight and left it alone, or we didn't have
    // one), or to have nothing in flight and to start one.
    assert(!(previousAsync && Asyncify.currData), "We cannot start an async operation when one is already flight");
    assert(!(previousAsync && !Asyncify.currData), "We cannot stop an async operation in flight");
    // This is a new async operation. The wasm is paused and has unwound its stack.
    // We need to return a Promise that resolves the return value
    // once the stack is rewound and execution finishes.
    assert(asyncMode, "The call to " + ident + " is running asynchronously. If this was intended, add the async option to the ccall/cwrap call.");
    return Asyncify.whenDone().then(onDone);
  }
  ret = onDone(ret);
  // If this is an async ccall, ensure we return a promise
  if (asyncMode) return Promise.resolve(ret);
  return ret;
};

if (ENVIRONMENT_IS_WASM_WORKER) {
  _wasmWorkers[0] = globalThis;
  addEventListener("message", _wasmWorkerAppendToQueue);
}

Module["requestAnimationFrame"] = MainLoop.requestAnimationFrame;

Module["pauseMainLoop"] = MainLoop.pause;

Module["resumeMainLoop"] = MainLoop.resume;

MainLoop.init();

// End JS library code
// include: postlibrary.js
// This file is included after the automatically-generated JS library code
// but before the wasm module is created.
{
  // With WASM_ESM_INTEGRATION this has to happen at the top level and not
  // delayed until processModuleArgs.
  initMemory();
  // Begin ATMODULES hooks
  if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];
  if (Module["preloadPlugins"]) preloadPlugins = Module["preloadPlugins"];
  if (Module["print"]) out = Module["print"];
  if (Module["printErr"]) err = Module["printErr"];
  if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
  Module["FS_createDataFile"] = FS.createDataFile;
  Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
  // End ATMODULES hooks
  checkIncomingModuleAPI();
  if (Module["arguments"]) arguments_ = Module["arguments"];
  if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
  // Assertions on removed incoming Module JS APIs.
  assert(typeof Module["memoryInitializerPrefixURL"] == "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
  assert(typeof Module["pthreadMainPrefixURL"] == "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
  assert(typeof Module["cdInitializerPrefixURL"] == "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
  assert(typeof Module["filePackagePrefixURL"] == "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
  assert(typeof Module["read"] == "undefined", "Module.read option was removed");
  assert(typeof Module["readAsync"] == "undefined", "Module.readAsync option was removed (modify readAsync in JS)");
  assert(typeof Module["readBinary"] == "undefined", "Module.readBinary option was removed (modify readBinary in JS)");
  assert(typeof Module["setWindowTitle"] == "undefined", "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)");
  assert(typeof Module["TOTAL_MEMORY"] == "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
  assert(typeof Module["ENVIRONMENT"] == "undefined", "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
  assert(typeof Module["STACK_SIZE"] == "undefined", "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");
  if (Module["preInit"]) {
    if (typeof Module["preInit"] == "function") Module["preInit"] = [ Module["preInit"] ];
    while (Module["preInit"].length > 0) {
      Module["preInit"].shift()();
    }
  }
  consumedModuleProp("preInit");
}

// Begin runtime exports
Module["ccall"] = ccall;

Module["setValue"] = setValue;

Module["getValue"] = getValue;

Module["UTF8ToString"] = UTF8ToString;

Module["stringToUTF8"] = stringToUTF8;

Module["lengthBytesUTF8"] = lengthBytesUTF8;

Module["writeArrayToMemory"] = writeArrayToMemory;

var missingLibrarySymbols = [ "writeI53ToI64", "writeI53ToI64Clamped", "writeI53ToI64Signaling", "writeI53ToU64Clamped", "writeI53ToU64Signaling", "readI53FromI64", "readI53FromU64", "convertI32PairToI53", "convertI32PairToI53Checked", "convertU32PairToI53", "getTempRet0", "setTempRet0", "zeroMemory", "withStackSave", "strError", "inetPton4", "inetNtop4", "inetPton6", "inetNtop6", "readSockaddr", "writeSockaddr", "runMainThreadEmAsm", "jstoi_q", "getExecutableName", "autoResumeAudioContext", "getDynCaller", "asyncLoad", "asmjsMangle", "mmapAlloc", "HandleAllocator", "getNativeTypeSize", "getUniqueRunDependency", "addOnInit", "addOnPostCtor", "addOnPreMain", "STACK_SIZE", "STACK_ALIGN", "POINTER_SIZE", "ASSERTIONS", "cwrap", "convertJsFunctionToWasm", "getEmptyTableSlot", "updateTableMap", "getFunctionAddress", "addFunction", "removeFunction", "intArrayFromString", "intArrayToString", "AsciiToString", "stringToAscii", "UTF16ToString", "stringToUTF16", "lengthBytesUTF16", "UTF32ToString", "stringToUTF32", "lengthBytesUTF32", "stringToNewUTF8", "getBoundingClientRect", "fillMouseEventData", "registerMouseEventCallback", "registerWheelEventCallback", "JSEvents_requestFullscreen", "JSEvents_resizeCanvasForFullscreen", "registerRestoreOldStyle", "hideEverythingExceptGivenElement", "restoreHiddenElements", "setLetterbox", "softFullscreenResizeWebGLRenderTarget", "doRequestFullscreen", "fillPointerlockChangeEventData", "registerPointerlockChangeEventCallback", "registerPointerlockErrorEventCallback", "requestPointerLock", "registerTouchEventCallback", "registerBeforeUnloadEventCallback", "setCanvasElementSize", "getCanvasElementSize", "getCallstack", "convertPCtoSourceLocation", "getEnvStrings", "checkWasiClock", "wasiRightsToMuslOFlags", "wasiOFlagsToMuslOFlags", "initRandomFill", "randomFill", "setImmediateWrapped", "safeRequestAnimationFrame", "clearImmediateWrapped", "registerPostMainLoop", "registerPreMainLoop", "getPromise", "makePromise", "idsToPromises", "makePromiseCallback", "ExceptionInfo", "findMatchingCatch", "Browser_asyncPrepareDataCounter", "isLeapYear", "ydayFromDate", "arraySum", "addDays", "getSocketFromFD", "getSocketAddress", "FS_createPreloadedFile", "FS_preloadFile", "FS_modeStringToFlags", "FS_getMode", "FS_stdin_getChar", "FS_mkdirTree", "_setNetworkCallback", "heapObjectForWebGLType", "toTypedArrayIndex", "webgl_enable_ANGLE_instanced_arrays", "webgl_enable_OES_vertex_array_object", "webgl_enable_WEBGL_draw_buffers", "webgl_enable_WEBGL_multi_draw", "webgl_enable_EXT_polygon_offset_clamp", "webgl_enable_EXT_clip_control", "webgl_enable_WEBGL_polygon_mode", "emscriptenWebGLGet", "computeUnpackAlignedImageSize", "colorChannelsInGlTextureFormat", "emscriptenWebGLGetTexPixelData", "emscriptenWebGLGetUniform", "webglGetUniformLocation", "webglPrepareUniformLocationsBeforeFirstUse", "webglGetLeftBracePos", "emscriptenWebGLGetVertexAttrib", "__glGetActiveAttribOrUniform", "writeGLArray", "registerWebGlEventCallback", "ALLOC_NORMAL", "ALLOC_STACK", "allocate", "writeStringToMemory", "writeAsciiToMemory", "demangle", "stackTrace", "_wasmWorkerPostFunction1", "_wasmWorkerPostFunction2", "_wasmWorkerPostFunction3", "fetchDeleteCachedData", "fetchLoadCachedData", "fetchCacheData", "fetchXHR" ];

missingLibrarySymbols.forEach(missingLibrarySymbol);

var unexportedSymbols = [ "run", "out", "err", "callMain", "abort", "wasmMemory", "wasmExports", "HEAP8", "HEAP16", "HEAP32", "HEAP64", "writeStackCookie", "checkStackCookie", "INT53_MAX", "INT53_MIN", "bigintToI53Checked", "stackSave", "stackRestore", "stackAlloc", "ptrToString", "exitJS", "getHeapMax", "growMemory", "ENV", "ERRNO_CODES", "DNS", "Protocols", "Sockets", "timers", "warnOnce", "readEmAsmArgsArray", "readEmAsmArgs", "runEmAsmFunction", "dynCallLegacy", "dynCall", "handleException", "keepRuntimeAlive", "runtimeKeepalivePush", "runtimeKeepalivePop", "callUserCallback", "maybeExit", "alignMemory", "wasmTable", "noExitRuntime", "addRunDependency", "removeRunDependency", "addOnPreRun", "addOnExit", "addOnPostRun", "freeTableIndexes", "functionsInTableMap", "PATH", "PATH_FS", "UTF8Decoder", "UTF8ArrayToString", "stringToUTF8Array", "UTF16Decoder", "stringToUTF8OnStack", "JSEvents", "registerKeyEventCallback", "specialHTMLTargets", "maybeCStringToJsString", "findEventTarget", "findCanvasEventTarget", "registerUiEventCallback", "registerFocusEventCallback", "fillDeviceOrientationEventData", "registerDeviceOrientationEventCallback", "fillDeviceMotionEventData", "registerDeviceMotionEventCallback", "screenOrientation", "fillOrientationChangeEventData", "registerOrientationChangeEventCallback", "fillFullscreenChangeEventData", "registerFullscreenChangeEventCallback", "currentFullscreenStrategy", "restoreOldWindowedStyle", "fillVisibilityChangeEventData", "registerVisibilityChangeEventCallback", "fillGamepadEventData", "registerGamepadEventCallback", "fillBatteryEventData", "registerBatteryEventCallback", "jsStackTrace", "UNWIND_CACHE", "ExitStatus", "flush_NO_FILESYSTEM", "safeSetTimeout", "emSetImmediate", "emClearImmediate_deps", "emClearImmediate", "promiseMap", "uncaughtExceptionCount", "exceptionLast", "exceptionCaught", "Browser", "requestFullscreen", "requestFullScreen", "setCanvasSize", "getUserMedia", "createContext", "getPreloadedImageData__data", "wget", "MONTH_DAYS_REGULAR", "MONTH_DAYS_LEAP", "MONTH_DAYS_REGULAR_CUMULATIVE", "MONTH_DAYS_LEAP_CUMULATIVE", "SYSCALLS", "preloadPlugins", "FS_stdin_getChar_buffer", "FS_unlink", "FS_createPath", "FS_createDevice", "FS_readFile", "FS", "FS_root", "FS_mounts", "FS_devices", "FS_streams", "FS_nextInode", "FS_nameTable", "FS_currentPath", "FS_initialized", "FS_ignorePermissions", "FS_filesystems", "FS_syncFSRequests", "FS_readFiles", "FS_lookupPath", "FS_getPath", "FS_hashName", "FS_hashAddNode", "FS_hashRemoveNode", "FS_lookupNode", "FS_createNode", "FS_destroyNode", "FS_isRoot", "FS_isMountpoint", "FS_isFile", "FS_isDir", "FS_isLink", "FS_isChrdev", "FS_isBlkdev", "FS_isFIFO", "FS_isSocket", "FS_flagsToPermissionString", "FS_nodePermissions", "FS_mayLookup", "FS_mayCreate", "FS_mayDelete", "FS_mayOpen", "FS_checkOpExists", "FS_nextfd", "FS_getStreamChecked", "FS_getStream", "FS_createStream", "FS_closeStream", "FS_dupStream", "FS_doSetAttr", "FS_chrdev_stream_ops", "FS_major", "FS_minor", "FS_makedev", "FS_registerDevice", "FS_getDevice", "FS_getMounts", "FS_syncfs", "FS_mount", "FS_unmount", "FS_lookup", "FS_mknod", "FS_statfs", "FS_statfsStream", "FS_statfsNode", "FS_create", "FS_mkdir", "FS_mkdev", "FS_symlink", "FS_rename", "FS_rmdir", "FS_readdir", "FS_readlink", "FS_stat", "FS_fstat", "FS_lstat", "FS_doChmod", "FS_chmod", "FS_lchmod", "FS_fchmod", "FS_doChown", "FS_chown", "FS_lchown", "FS_fchown", "FS_doTruncate", "FS_truncate", "FS_ftruncate", "FS_utime", "FS_open", "FS_close", "FS_isClosed", "FS_llseek", "FS_read", "FS_write", "FS_mmap", "FS_msync", "FS_ioctl", "FS_writeFile", "FS_cwd", "FS_chdir", "FS_createDefaultDirectories", "FS_createDefaultDevices", "FS_createSpecialDirectories", "FS_createStandardStreams", "FS_staticInit", "FS_init", "FS_quit", "FS_findObject", "FS_analyzePath", "FS_createFile", "FS_createDataFile", "FS_forceLoadFile", "FS_createLazyFile", "FS_absolutePath", "FS_createFolder", "FS_createLink", "FS_joinPath", "FS_mmapAlloc", "FS_standardizePath", "MEMFS", "TTY", "PIPEFS", "SOCKFS", "tempFixedLengthArray", "miniTempWebGLFloatBuffers", "miniTempWebGLIntBuffers", "GL", "AL", "GLUT", "EGL", "GLEW", "IDBStore", "runAndAbortIfError", "Asyncify", "Fibers", "SDL", "SDL_gfx", "allocateUTF8", "allocateUTF8OnStack", "print", "printErr", "jstoi_s", "_wasmWorkers", "_wasmWorkersID", "_wasmWorkerDelayedMessageQueue", "_wasmWorkerAppendToQueue", "_wasmWorkerRunPostMessage", "_wasmWorkerInitializeRuntime", "Fetch" ];

unexportedSymbols.forEach(unexportedRuntimeSymbol);

// End runtime exports
// Begin JS library exports
// End JS library exports
// end include: postlibrary.js
function checkIncomingModuleAPI() {
  ignoredModuleProp("fetchSettings");
}

var ASM_CONSTS = {
  8396568: $0 => {
    if (!window.Ko.Hx_SyDx_vsg) {
      window.Ko.Hx_SyDx_vsg = UTF8ToString($0);
    }
  },
  8396649: () => {
    const isHidden = document.hidden;
    const hasFocus = document.hasFocus();
    (isHidden || !hasFocus) ? KoDz__YoChy() : KoDz__YuChy();
  },
  8396783: () => {
    KoDz__YuChy();
  },
  8396802: () => {
    KoDz__YoChy();
  },
  8396821: () => KoDz__YzYe_y(),
  8396848: () => {
    const SaWG_l = Ko.SySmz_v[SyVx.WG_qk];
    const Brz_wuk = 0;
    DoWG.TxCho_JaKu(SaWG_l, Brz_wuk, 0, 0, 0, SaWG_l.MxPo_Bri_l.width, SaWG_l.MxPo_Bri_l.height);
  },
  8397008: () => {
    const SaPAY_l = Ko.SySmz_v[SyVx.PAY_qk];
    DoPAY.Mo(SaPAY_l, 0, 0);
  },
  8397082: () => {
    const SaSHAR_l = Ko.SySmz_v[SyVx.SHAR_qk];
    DoSHAR.Mo(SaSHAR_l, 0, 0);
  },
  8397160: () => {
    location.reload();
  },
  8397183: () => {
    MoDzTrx("TEST BAD BUILD as ERROR");
  },
  8397225: () => {
    location.reload();
  },
  8397248: () => {
    const SaWG_l = Ko.SySmz_v[SyVx.WG_qk];
    SaWG_l.KaSmz_l.destroy();
  },
  8397319: () => {},
  8397323: () => {
    console.log("MC: HrySmz__BriYa");
  },
  8397363: () => {},
  8397367: () => {
    const SaSTRM_l = Ko.SySmz_v[SyVx.STRM_qk];
  },
  8397416: $0 => {
    const SaWG_l = Ko.SySmz_v[SyVx.WG_qk];
    const SaSTRM_l = Ko.SySmz_v[SyVx.STRM_qk];
    if (!SySmz__BriYz__Ye_y(SaWG_l) || !SySmz__BriYz__Ye_y(SaSTRM_l)) return;
    let Kwy_wu = $0;
    const LAYER_Gz_wuk = 0;
    const SaGLF_l = Ko.SySmz_v[SyVx.GLF_qk];
    SaGLF_l.Ji.Hre7_Me__KeDru_Ha(SaGLF_l, "🛸| Ke: " + Ko.KwiYz_l.KeDy_vsg, 0, 0);
    SaGLF_l.Ji.Hre7_Me__KeDru_Ha(SaGLF_l, "👾| Ye: " + Ko.YeWi_df.toFixed(1) + "ms", 0, 64);
    SaGLF_l.Ji.Hre7_Me__KeDru_Ha(SaGLF_l, "👹| Hry: " + Ko.KaBxGiHa_df.toFixed(1) + "ms", 0, 128);
    SaGLF_l.Ji.Hre7_Me__KeDru_Ha(SaGLF_l, "🔊| Hru: Spkr: " + Ko.KwiYz_l.Ne02_Hru01__MxPeVo_ba + " Mute: " + Ko.KwiYz_l.Ne02_Hru00__MxPeHo_y, 0, 192);
    SaGLF_l.Ji.Hre7_Me__KeDru_Ha(SaGLF_l, "👽| HrzBy: " + Ko.HrzBy__Va_vsg + " v" + Ko.HrzBy__Da_wfk, 0, 256);
    SaGLF_l.Ji.Hre7_Me__KeDru_Ha(SaGLF_l, "🤖| Go: " + "-", 0, 320);
    SaGLF_l.Ji.Hre7_Me__KeDru_Ha(SaGLF_l, "💀| C: ", 0, 384);
    SaGLF_l.Ji.Hre7_Me__KeDru_Ha(SaGLF_l, "🔥| YeFo: " + Ko.YeFo_wu, 0, 448);
    try {
      SaWG_l.Ji.KiCho_JaKz(SaWG_l, 0, 0, 0, 512, 512, SaGLF_l.WzPo_Gwa_l);
      if ((Ko.SuKz_v[1] instanceof HTMLVideoElement) && (Ko.SuKz_v[1].Kwy_wu)) {
        SaWG_l.Ji.KiCho_JaKz(SaWG_l, 0, 512, LAYER_Gz_wuk, 480, 480, Ko.SuKz_v[1]);
      }
      if ((Ko.SuKz_v[2] instanceof HTMLVideoElement) && (Ko.SuKz_v[2].Kwy_wu > 0) && (Ko.SuKz_v[2].Kwy_wu != Kwy_wu)) {
        {
          SaWG_l.Ji.KiCho_JaKz(SaWG_l, 512, 512, LAYER_Gz_wuk, 512, 512, Ko.SuKz_v[2]);
        }
        Kwy_wu = Ko.SuKz_v[2].Kwy_wu;
      }
    } catch (e) {
      SmaTrx("[WG] CMD Err:", e);
    }
    return Kwy_wu;
  }
};

function __asyncjs__HriKx__ToKzChy() {
  return Asyncify.handleAsync(async () => {
    const root = await navigator.storage.getDirectory();
    const draftFile = await root.getFileHandle("Draft.txt");
    const accessHandle = await draftFile.createSyncAccessHandle();
    const fileSize = accessHandle.getSize();
    const readBuffer = new ArrayBuffer(fileSize);
    const readSize = accessHandle.read(readBuffer, {
      "at": 0
    });
    const encoder = new TextEncoder;
    const writeBuffer = encoder.encode("Thank you for reading this.");
    const writeSize = accessHandle.write(writeBuffer, {
      "at": readSize
    });
    accessHandle.truncate(1);
    accessHandle.flush();
    accessHandle.close();
  });
}

function __asyncjs__MEFS_SmeYe(wi) {
  return Asyncify.handleAsync(async () => {
    console.log("-ASYNC TEST %d", wi);
    {
      await opfs.writeFile("MEFS_A.txt", "CHECKIT World");
      const fileData = await opfs.readFile("MEFS_A.txt");
      console.log(await fileData.toText());
      const files = await opfs.listFiles(".");
      console.log("List Files: " + files);
    }
  });
}

function MEFS_SmeYo(wi) {
  console.log("-SYNC TEST %d", wi);
  OPFS_SmeStx();
}

function __asyncjs__MEFS_ChyTo(wi) {
  return Asyncify.handleAsync(async () => {
    let Che_y = false;
    let ToKz_Vy_l = await IDB_ToKzVy__My("MEFS");
    if (ToKz_Vy_l == undefined) {
      console.log("Need Load");
      ToKz_Vy_l = await window.showSaveFilePicker({
        id: "CATEGORY_A0",
        startIn: "pictures",
        suggestedName: "MC_World.txt",
        types: [ {
          description: "World Files",
          accept: {
            "text/plain": [ ".txt" ]
          }
        } ],
        excludeAcceptAllOption: true,
        multiple: false
      });
      Che_y = true;
    } else {
      const PERM_l = {
        handle: ToKz_Vy_l,
        mode: "readwrite"
      };
      if ((await ToKz_Vy_l.queryPermission(PERM_l)) === "granted") {
        Che_y = true;
      } else if ((await ToKz_Vy_l.requestPermission(PERM_l)) === "granted") {
        Che_y = true;
      }
      console.log("Found & Loaded");
    }
    console.log("FH: " + ToKz_Vy_l);
    if (Che_y) {
      IDB_ToKzVy__Chy("MEFS", ToKz_Vy_l);
      const writableStream = await ToKz_Vy_l.createWritable();
      const binaryData = new Uint8Array([ 1, 2, 3, 4, 5, 0 ]);
      await writableStream.write(binaryData);
      await writableStream.close();
    } else {
      console.log("File Write Failed\n");
    }
  });
}

function __asyncjs__MEFS_MyTo(wi) {
  return Asyncify.handleAsync(async () => {
    let ToKz_Vy_l = IDB_ToKzVy__My("MEFS");
    if (ToKz_Vy_l == undefined) {
      console.log("Need Load");
      ToKz_Vy_l = await window.showOpenFilePicker({
        suggestedName: "MC_World.txt",
        types: [ {
          description: "World Files",
          accept: {
            "text/plain": [ ".txt" ]
          }
        } ]
      });
      IDB_ToKzVy__Chy("MEFS", ToKz_Vy_l);
    } else {
      console.log("Found & Loaded");
    }
    await MEFS_Che_y(ToKz_Vy_l, 0);
    if (ToKz_Vy_l !== undefined) {
      console.log("Readin...");
      const file = await ToKz_Vy_l.getFile();
      const reader = new FileReader;
      reader.onload = event => {
        const arrayBuffer = event.target.result;
        console.log(new Uint8Array(arrayBuffer));
      };
      reader.readAsArrayBuffer(file);
    }
  });
}

function __asyncjs__OPFS_KuTu_Sme(wi) {
  return Asyncify.handleAsync(async () => {
    const root = await navigator.storage.getDirectory();
    const subDir = await root.getDirectoryHandle("MC_KuTu", {
      create: true
    });
    const ToKz_Vy_l = await subDir.getFileHandle("MC_ToKz.hex", {
      create: true
    });
    const Se_h = await ToKz_Vy_l.createSyncAccessHandle();
    const binaryData = new Uint8Array([ 44, 33, 22, 11, 55, 0 ]);
    Se_h.write(binaryData).catch(console.error);
    Se_h.close();
    console.log("MC_ToKz.hex");
  });
}

function __asyncjs__OPFS__KuGyHa() {
  return Asyncify.handleAsync(async () => {
    if (navigator.storage && navigator.storage.persist) {
      navigator.storage.persist().then(ALLOW_y => {
        console.log((ALLOW_y) ? "Storage PERSISTS" : "Storage MAY DISSAPEAR");
      });
    }
    try {
      const HraKuHa_l = await navigator.storage.estimate();
      const PCT_wf = ((HraKuHa_l.usage / HraKuHa_l.quota) * 100);
      console.log("OPFS: " + HreDru_DxSI(HraKuHa_l.usage) + " / " + HreDru_DxSI(HraKuHa_l.quota) + " \n" + HraKuHa_l.usageDetails + " " + PCT_wf + "%");
    } catch (e) {
      console.log("EST FAIL: " + e);
    }
  });
}

function __asyncjs__OPFS_Yu(wi) {
  return Asyncify.handleAsync(async () => {
    const FH = IDB_ToKzVy__My("OPFS");
    console.log("\nFH: " + FH + ((FH !== undefined) ? "Good" : "Bad"));
    if (FH !== undefined) {
      console.log(`FH: [${FH}]`);
      let FD = FH.resolve();
      console.log(`FD: [${FD}]`);
    }
  });
}

function __asyncjs__OPFS_Sme(wi) {
  return Asyncify.handleAsync(async () => {
    console.log("OPFS_Sme\n");
  });
}

function __asyncjs__OPFS_My() {
  return Asyncify.handleAsync(async () => {
    if (window.OP_ToKzVy === undefined) {
      const opfsRoot = await navigator.storage.getDirectory();
      window.OP_ToKzVy = await opfsRoot.getFileHandle("SATHAR.txt", {
        create: true
      });
    }
    if (window.OP_ToKzVy !== undefined) {
      const STOR_y = IDB_ToKzVy__Chy("OPFS", window.OP_ToKzVy);
    }
    console.log("ToKzVy: " + window.OP_ToKzVy);
  });
}

function __asyncjs__OPFS_Chy() {
  return Asyncify.handleAsync(async () => {
    if (window.MC_ToKzVy === undefined) {
      const opfsRoot = await navigator.storage.getDirectory();
      const fileHandle = await opfsRoot.getFileHandle("SATHAR.txt", {
        create: true
      });
    }
    if (window.MC_ToKzVy !== undefined) {
      const FH = IDB_ToKzVy__Chy("OPFS", fileHandle);
      let size = window.MC_ToKzVy.getSize();
      console.log(`W-Size__Ya: ${size}`);
      const textEncoder = new TextEncoder;
      const content = textEncoder.encode("SATHAR + ");
      window.MC_ToKzVy.write(content, {
        at: size
      });
      window.MC_ToKzVy.flush();
      size = window.MC_ToKzVy.getSize();
      console.log(`W-Size__Yi: [${size}]`);
    }
  });
}

// Imports from the Wasm binary.
var _Hrz5_Ki__BriSmz__Yi = Module["_Hrz5_Ki__BriSmz__Yi"] = makeInvalidEarlyAccess("_Hrz5_Ki__BriSmz__Yi");

var _SmaHe = Module["_SmaHe"] = makeInvalidEarlyAccess("_SmaHe");

var _Hri5_Ye__BriYi = Module["_Hri5_Ye__BriYi"] = makeInvalidEarlyAccess("_Hri5_Ye__BriYi");

var _Hrz5_Ki__BriSmz__Ya = Module["_Hrz5_Ki__BriSmz__Ya"] = makeInvalidEarlyAccess("_Hrz5_Ki__BriSmz__Ya");

var _HriKx_Ya = Module["_HriKx_Ya"] = makeInvalidEarlyAccess("_HriKx_Ya");

var _malloc = Module["_malloc"] = makeInvalidEarlyAccess("_malloc");

var _HriKxWz_Ye = Module["_HriKxWz_Ye"] = makeInvalidEarlyAccess("_HriKxWz_Ye");

var _Hra1_Mz__JeKz__BriYa = Module["_Hra1_Mz__JeKz__BriYa"] = makeInvalidEarlyAccess("_Hra1_Mz__JeKz__BriYa");

var _Hri5_Ye__BriYa = Module["_Hri5_Ye__BriYa"] = makeInvalidEarlyAccess("_Hri5_Ye__BriYa");

var _Hrz5_Ki__BriSmz__Yo = Module["_Hrz5_Ki__BriSmz__Yo"] = makeInvalidEarlyAccess("_Hrz5_Ki__BriSmz__Yo");

var _Hrz5_Ki__BriSmz__Yu = Module["_Hrz5_Ki__BriSmz__Yu"] = makeInvalidEarlyAccess("_Hrz5_Ki__BriSmz__Yu");

var _Hrz5_Ki__BriSmz__Ye = Module["_Hrz5_Ki__BriSmz__Ye"] = makeInvalidEarlyAccess("_Hrz5_Ki__BriSmz__Ye");

var _Hra1_Mz__JeKz__BriYe = Module["_Hra1_Mz__JeKz__BriYe"] = makeInvalidEarlyAccess("_Hra1_Mz__JeKz__BriYe");

var _Hri5_Ye__BriYe = Module["_Hri5_Ye__BriYe"] = makeInvalidEarlyAccess("_Hri5_Ye__BriYe");

var _HriKxWz_Yi = Module["_HriKxWz_Yi"] = makeInvalidEarlyAccess("_HriKxWz_Yi");

var _Hre7_Me__GiDx__HMS = Module["_Hre7_Me__GiDx__HMS"] = makeInvalidEarlyAccess("_Hre7_Me__GiDx__HMS");

var _HEAPO_wf = Module["_HEAPO_wf"] = makeInvalidEarlyAccess("_HEAPO_wf");

var _Hri5_Ye__Sme = Module["_Hri5_Ye__Sme"] = makeInvalidEarlyAccess("_Hri5_Ye__Sme");

var _main = Module["_main"] = makeInvalidEarlyAccess("_main");

var _fflush = makeInvalidEarlyAccess("_fflush");

var _emscripten_stack_get_end = makeInvalidEarlyAccess("_emscripten_stack_get_end");

var _emscripten_stack_get_base = makeInvalidEarlyAccess("_emscripten_stack_get_base");

var _strerror = makeInvalidEarlyAccess("_strerror");

var _free = Module["_free"] = makeInvalidEarlyAccess("_free");

var _setThrew = makeInvalidEarlyAccess("_setThrew");

var _emscripten_stack_init = makeInvalidEarlyAccess("_emscripten_stack_init");

var _emscripten_stack_get_free = makeInvalidEarlyAccess("_emscripten_stack_get_free");

var __emscripten_stack_restore = makeInvalidEarlyAccess("__emscripten_stack_restore");

var __emscripten_stack_alloc = makeInvalidEarlyAccess("__emscripten_stack_alloc");

var _emscripten_stack_get_current = makeInvalidEarlyAccess("_emscripten_stack_get_current");

var __emscripten_wasm_worker_initialize = makeInvalidEarlyAccess("__emscripten_wasm_worker_initialize");

var dynCall_v = makeInvalidEarlyAccess("dynCall_v");

var dynCall_i = makeInvalidEarlyAccess("dynCall_i");

var dynCall_vjj = makeInvalidEarlyAccess("dynCall_vjj");

var dynCall_iijj = makeInvalidEarlyAccess("dynCall_iijj");

var dynCall_ijdiiii = makeInvalidEarlyAccess("dynCall_ijdiiii");

var dynCall_jjjj = makeInvalidEarlyAccess("dynCall_jjjj");

var dynCall_ij = makeInvalidEarlyAccess("dynCall_ij");

var dynCall_jjji = makeInvalidEarlyAccess("dynCall_jjji");

var _asyncify_start_unwind = makeInvalidEarlyAccess("_asyncify_start_unwind");

var _asyncify_stop_unwind = makeInvalidEarlyAccess("_asyncify_stop_unwind");

var _asyncify_start_rewind = makeInvalidEarlyAccess("_asyncify_start_rewind");

var _asyncify_stop_rewind = makeInvalidEarlyAccess("_asyncify_stop_rewind");

function assignWasmExports(wasmExports) {
  Module["_Hrz5_Ki__BriSmz__Yi"] = _Hrz5_Ki__BriSmz__Yi = createExportWrapper("Hrz5_Ki__BriSmz__Yi", 0);
  Module["_SmaHe"] = _SmaHe = createExportWrapper("SmaHe", 2);
  Module["_Hri5_Ye__BriYi"] = _Hri5_Ye__BriYi = createExportWrapper("Hri5_Ye__BriYi", 0);
  Module["_Hrz5_Ki__BriSmz__Ya"] = _Hrz5_Ki__BriSmz__Ya = createExportWrapper("Hrz5_Ki__BriSmz__Ya", 0);
  Module["_HriKx_Ya"] = _HriKx_Ya = createExportWrapper("HriKx_Ya", 1);
  Module["_malloc"] = _malloc = createExportWrapper("malloc", 1);
  Module["_HriKxWz_Ye"] = _HriKxWz_Ye = createExportWrapper("HriKxWz_Ye", 0);
  Module["_Hra1_Mz__JeKz__BriYa"] = _Hra1_Mz__JeKz__BriYa = createExportWrapper("Hra1_Mz__JeKz__BriYa", 0);
  Module["_Hri5_Ye__BriYa"] = _Hri5_Ye__BriYa = createExportWrapper("Hri5_Ye__BriYa", 0);
  Module["_Hrz5_Ki__BriSmz__Yo"] = _Hrz5_Ki__BriSmz__Yo = createExportWrapper("Hrz5_Ki__BriSmz__Yo", 0);
  Module["_Hrz5_Ki__BriSmz__Yu"] = _Hrz5_Ki__BriSmz__Yu = createExportWrapper("Hrz5_Ki__BriSmz__Yu", 0);
  Module["_Hrz5_Ki__BriSmz__Ye"] = _Hrz5_Ki__BriSmz__Ye = createExportWrapper("Hrz5_Ki__BriSmz__Ye", 0);
  Module["_Hra1_Mz__JeKz__BriYe"] = _Hra1_Mz__JeKz__BriYe = createExportWrapper("Hra1_Mz__JeKz__BriYe", 0);
  Module["_Hri5_Ye__BriYe"] = _Hri5_Ye__BriYe = createExportWrapper("Hri5_Ye__BriYe", 0);
  Module["_HriKxWz_Yi"] = _HriKxWz_Yi = createExportWrapper("HriKxWz_Yi", 1);
  Module["_Hre7_Me__GiDx__HMS"] = _Hre7_Me__GiDx__HMS = createExportWrapper("Hre7_Me__GiDx__HMS", 2);
  Module["_HEAPO_wf"] = _HEAPO_wf = createExportWrapper("HEAPO_wf", 0);
  Module["_Hri5_Ye__Sme"] = _Hri5_Ye__Sme = createExportWrapper("Hri5_Ye__Sme", 0);
  Module["_main"] = _main = createExportWrapper("main", 2);
  _fflush = createExportWrapper("fflush", 1);
  _emscripten_stack_get_end = wasmExports["emscripten_stack_get_end"];
  _emscripten_stack_get_base = wasmExports["emscripten_stack_get_base"];
  _strerror = createExportWrapper("strerror", 1);
  Module["_free"] = _free = createExportWrapper("free", 1);
  _setThrew = createExportWrapper("setThrew", 2);
  _emscripten_stack_init = wasmExports["emscripten_stack_init"];
  _emscripten_stack_get_free = wasmExports["emscripten_stack_get_free"];
  __emscripten_stack_restore = wasmExports["_emscripten_stack_restore"];
  __emscripten_stack_alloc = wasmExports["_emscripten_stack_alloc"];
  _emscripten_stack_get_current = wasmExports["emscripten_stack_get_current"];
  __emscripten_wasm_worker_initialize = createExportWrapper("_emscripten_wasm_worker_initialize", 2);
  dynCalls["v"] = dynCall_v = createExportWrapper("dynCall_v", 1);
  dynCalls["i"] = dynCall_i = createExportWrapper("dynCall_i", 1);
  dynCalls["vjj"] = dynCall_vjj = createExportWrapper("dynCall_vjj", 3);
  dynCalls["iijj"] = dynCall_iijj = createExportWrapper("dynCall_iijj", 4);
  dynCalls["ijdiiii"] = dynCall_ijdiiii = createExportWrapper("dynCall_ijdiiii", 7);
  dynCalls["jjjj"] = dynCall_jjjj = createExportWrapper("dynCall_jjjj", 4);
  dynCalls["ij"] = dynCall_ij = createExportWrapper("dynCall_ij", 2);
  dynCalls["jjji"] = dynCall_jjji = createExportWrapper("dynCall_jjji", 4);
  _asyncify_start_unwind = createExportWrapper("asyncify_start_unwind", 1);
  _asyncify_stop_unwind = createExportWrapper("asyncify_stop_unwind", 0);
  _asyncify_start_rewind = createExportWrapper("asyncify_start_rewind", 1);
  _asyncify_stop_rewind = createExportWrapper("asyncify_stop_rewind", 0);
}

var wasmImports;

function assignWasmImports() {
  wasmImports = {
    /** @export */ __assert_fail: ___assert_fail,
    /** @export */ _emscripten_create_wasm_worker: __emscripten_create_wasm_worker,
    /** @export */ _emscripten_throw_longjmp: __emscripten_throw_longjmp,
    /** @export */ emscripten_asm_const_int: _emscripten_asm_const_int,
    /** @export */ emscripten_cancel_main_loop: _emscripten_cancel_main_loop,
    /** @export */ emscripten_console_log: _emscripten_console_log,
    /** @export */ emscripten_date_now: _emscripten_date_now,
    /** @export */ emscripten_get_canvas_element_size: _emscripten_get_canvas_element_size,
    /** @export */ emscripten_get_gamepad_status: _emscripten_get_gamepad_status,
    /** @export */ emscripten_get_heap_max: _emscripten_get_heap_max,
    /** @export */ emscripten_get_num_gamepads: _emscripten_get_num_gamepads,
    /** @export */ emscripten_get_screen_size: _emscripten_get_screen_size,
    /** @export */ emscripten_html5_remove_all_event_listeners: _emscripten_html5_remove_all_event_listeners,
    /** @export */ emscripten_performance_now: _emscripten_performance_now,
    /** @export */ emscripten_resize_heap: _emscripten_resize_heap,
    /** @export */ emscripten_sample_gamepad_data: _emscripten_sample_gamepad_data,
    /** @export */ emscripten_set_batterychargingchange_callback_on_thread: _emscripten_set_batterychargingchange_callback_on_thread,
    /** @export */ emscripten_set_batterylevelchange_callback_on_thread: _emscripten_set_batterylevelchange_callback_on_thread,
    /** @export */ emscripten_set_blur_callback_on_thread: _emscripten_set_blur_callback_on_thread,
    /** @export */ emscripten_set_devicemotion_callback_on_thread: _emscripten_set_devicemotion_callback_on_thread,
    /** @export */ emscripten_set_deviceorientation_callback_on_thread: _emscripten_set_deviceorientation_callback_on_thread,
    /** @export */ emscripten_set_focus_callback_on_thread: _emscripten_set_focus_callback_on_thread,
    /** @export */ emscripten_set_focusin_callback_on_thread: _emscripten_set_focusin_callback_on_thread,
    /** @export */ emscripten_set_focusout_callback_on_thread: _emscripten_set_focusout_callback_on_thread,
    /** @export */ emscripten_set_fullscreenchange_callback_on_thread: _emscripten_set_fullscreenchange_callback_on_thread,
    /** @export */ emscripten_set_gamepadconnected_callback_on_thread: _emscripten_set_gamepadconnected_callback_on_thread,
    /** @export */ emscripten_set_gamepaddisconnected_callback_on_thread: _emscripten_set_gamepaddisconnected_callback_on_thread,
    /** @export */ emscripten_set_keydown_callback_on_thread: _emscripten_set_keydown_callback_on_thread,
    /** @export */ emscripten_set_keyup_callback_on_thread: _emscripten_set_keyup_callback_on_thread,
    /** @export */ emscripten_set_orientationchange_callback_on_thread: _emscripten_set_orientationchange_callback_on_thread,
    /** @export */ emscripten_set_resize_callback_on_thread: _emscripten_set_resize_callback_on_thread,
    /** @export */ emscripten_set_scroll_callback_on_thread: _emscripten_set_scroll_callback_on_thread,
    /** @export */ emscripten_set_visibilitychange_callback_on_thread: _emscripten_set_visibilitychange_callback_on_thread,
    /** @export */ emscripten_set_window_title: _emscripten_set_window_title,
    /** @export */ emscripten_terminate_all_wasm_workers: _emscripten_terminate_all_wasm_workers,
    /** @export */ emscripten_terminate_wasm_worker: _emscripten_terminate_wasm_worker,
    /** @export */ emscripten_wasm_worker_post_function_v: _emscripten_wasm_worker_post_function_v,
    /** @export */ emscripten_wasm_worker_self_id: _emscripten_wasm_worker_self_id,
    /** @export */ fd_write: _fd_write,
    /** @export */ invoke_i,
    /** @export */ invoke_vjj,
    /** @export */ memory: wasmMemory
  };
}

function invoke_i(index) {
  var sp = stackSave();
  try {
    return dynCall_i(Number(index));
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vjj(index, a1, a2) {
  var sp = stackSave();
  try {
    dynCall_vjj(Number(index), a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}

// Argument name here must shadow the `wasmExports` global so
// that it is recognised by metadce and minify-import-export-names
// passes.
function applySignatureConversions(wasmExports) {
  // First, make a copy of the incoming exports object
  wasmExports = Object.assign({}, wasmExports);
  var makeWrapper_pp = f => a0 => Number(f(BigInt(a0)));
  var makeWrapper___PP = f => (a0, a1, a2) => f(a0, BigInt(a1 ? a1 : 0), BigInt(a2 ? a2 : 0));
  var makeWrapper__p = f => a0 => f(BigInt(a0));
  var makeWrapper_p = f => () => Number(f());
  var makeWrapper_p_ = f => a0 => Number(f(a0));
  var makeWrapper__p_ = f => (a0, a1) => f(BigInt(a0), a1);
  var makeWrapper__p__ = f => (a0, a1, a2) => f(BigInt(a0), a1, a2);
  var makeWrapper__p___ = f => (a0, a1, a2, a3) => f(BigInt(a0), a1, a2, a3);
  var makeWrapper__p______ = f => (a0, a1, a2, a3, a4, a5, a6) => f(BigInt(a0), a1, a2, a3, a4, a5, a6);
  wasmExports["malloc"] = makeWrapper_pp(wasmExports["malloc"]);
  wasmExports["main"] = makeWrapper___PP(wasmExports["main"]);
  wasmExports["fflush"] = makeWrapper__p(wasmExports["fflush"]);
  wasmExports["emscripten_stack_get_end"] = makeWrapper_p(wasmExports["emscripten_stack_get_end"]);
  wasmExports["emscripten_stack_get_base"] = makeWrapper_p(wasmExports["emscripten_stack_get_base"]);
  wasmExports["strerror"] = makeWrapper_p_(wasmExports["strerror"]);
  wasmExports["free"] = makeWrapper__p(wasmExports["free"]);
  wasmExports["setThrew"] = makeWrapper__p(wasmExports["setThrew"]);
  wasmExports["_emscripten_stack_restore"] = makeWrapper__p(wasmExports["_emscripten_stack_restore"]);
  wasmExports["_emscripten_stack_alloc"] = makeWrapper_pp(wasmExports["_emscripten_stack_alloc"]);
  wasmExports["emscripten_stack_get_current"] = makeWrapper_p(wasmExports["emscripten_stack_get_current"]);
  wasmExports["_emscripten_wasm_worker_initialize"] = makeWrapper__p_(wasmExports["_emscripten_wasm_worker_initialize"]);
  wasmExports["dynCall_v"] = makeWrapper__p(wasmExports["dynCall_v"]);
  wasmExports["dynCall_i"] = makeWrapper__p(wasmExports["dynCall_i"]);
  wasmExports["dynCall_vjj"] = makeWrapper__p__(wasmExports["dynCall_vjj"]);
  wasmExports["dynCall_iijj"] = makeWrapper__p___(wasmExports["dynCall_iijj"]);
  wasmExports["dynCall_ijdiiii"] = makeWrapper__p______(wasmExports["dynCall_ijdiiii"]);
  wasmExports["dynCall_jjjj"] = makeWrapper__p___(wasmExports["dynCall_jjjj"]);
  wasmExports["dynCall_ij"] = makeWrapper__p_(wasmExports["dynCall_ij"]);
  wasmExports["dynCall_jjji"] = makeWrapper__p___(wasmExports["dynCall_jjji"]);
  wasmExports["asyncify_start_unwind"] = makeWrapper__p(wasmExports["asyncify_start_unwind"]);
  wasmExports["asyncify_start_rewind"] = makeWrapper__p(wasmExports["asyncify_start_rewind"]);
  return wasmExports;
}

// include: postamble.js
// === Auto-generated postamble setup entry stuff ===
var calledRun;

function callMain() {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
  assert(typeof onPreRuns === "undefined" || onPreRuns.length == 0, "cannot call main when preRun functions remain to be called");
  var entryFunction = _main;
  var argc = 0;
  var argv = 0;
  try {
    var ret = entryFunction(argc, BigInt(argv));
    // if we're not running an evented main loop, it's time to exit
    exitJS(ret, /* implicit = */ true);
    return ret;
  } catch (e) {
    return handleException(e);
  }
}

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  _emscripten_stack_init();
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  writeStackCookie();
}

function run() {
  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }
  if ((ENVIRONMENT_IS_WASM_WORKER)) {
    initRuntime();
    return;
  }
  stackCheckInit();
  preRun();
  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }
  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    assert(!calledRun);
    calledRun = true;
    Module["calledRun"] = true;
    if (ABORT) return;
    initRuntime();
    preMain();
    Module["onRuntimeInitialized"]?.();
    consumedModuleProp("onRuntimeInitialized");
    var noInitialRun = Module["noInitialRun"] || false;
    if (!noInitialRun) callMain();
    postRun();
  }
  if (Module["setStatus"]) {
    Module["setStatus"]("Running...");
    setTimeout(() => {
      setTimeout(() => Module["setStatus"](""), 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
  checkStackCookie();
}

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = x => {
    has = true;
  };
  try {
    // it doesn't matter if it fails
    flush_NO_FILESYSTEM();
  } catch (e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.");
    warnOnce("(this may also be due to not including full filesystem support - try building with -sFORCE_FILESYSTEM)");
  }
}

var wasmExports;

if ((!(ENVIRONMENT_IS_WASM_WORKER))) {
  // Call createWasm on startup if we are the main thread.
  // Worker threads call this once they receive the module via postMessage
  // With async instantation wasmExports is assigned asynchronously when the
  // instance is received.
  createWasm();
  run();
}
