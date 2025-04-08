[comment]: # (title : WANTWARE_REPORT)
[comment]: # (author: jake kolb v)
[comment]: # (version: v1.0)
[comment]: # (company:MINDAPTIV)
[comment]: # (client: Audience of Interest)

# ![BANNER](./Gwz__ICON/Gwz21_Hra1_Mz__PxSpu.png =64x64 ) B03: WHERE does wantware run with what technologies?
### Shows how interfaces map to existing or new technologies


```mermaid
flowchart TD

%% STYLE
classDef default fill:aaf,stroke:#000000
classDef Sz_DxPo fill:#C0C0FF, color:#000000
classDef Ji_DxPo fill:#FFA03F, stroke:#000000, color:#FFFFFF
classDef Kz_DxPo fill:#8080FF, stroke:#000000, color:#FFFFFF

%% NODES & LINKS

subgraph Key
SyJi(Tech Family Name)
SyNo(Interface Examples)
SyDy(Service Examples)
end

SyGry( TECHNOLOGY FAMILIES<br>Interfaces Categories to Mix and Match Data & Tech )
SyGry --> SyKwi
SyGry --> SyKe
SyGry --> SyTo


SyKwi[ Computer Operations<br> ]
SyKwi --> Hrz
SyKwi --> Hrx
SyKwi --> Hra


Hrz( 1. GOVERN<br>Manage Jobs, Chips, & OS ) --->HrzNo[( Schedule Tasks<br>Machine Instructions<br>Atomic Sync )]
Hrx( 2. ORGANIZE ) --->HrxNo[( Collections<br>Memory Use<br>Resource Assign<br>Compress<br>Encrypt<br> )]
Hra( 3. COMMUNICATE ) --->HraNo[( Sensors<br>Emitters<br>Networks<br>Portals<br>File Types )]


SyKe[ Human Systems ]

SyKe --> Hri
SyKe --> Hre

Hri( 4. SIMULATE ) --->HriNo[( UI<br>UX<br>Emulators<br>Modeling )]
Hre( 5. SYMBOLIZE ) --->HreNo[( Text Layout<br>Word Processing<br>Meaning Conversion<br>Language Express )]


SyTo[ Data Processors<br> Transform Huge Streams ]

SyTo --> Hro
SyTo --> SyMz

SyMz[ Spactime Processors<br>Split work by frequency or space ]

SyMz --> Hru
SyMz --> Hry

Hro( 6. CALCULATE ) --->HroNo[( Math<br>Physics<br>Navigate<br>ML Networks<br>Random Numbers )]

Hru( 7. TEMPORALIZE )--->HruNo[( Create Sounds<br>Predict Patterns<br>Mix Audio<br>Recognize Speech )]
Hry( 8. SPATIALIZE )--->HryNo[( Draw Shapes<br>Animate Poses<br>Recognize Trained Object<br>Filter Image )]

%% EXAMPLES
HrzNo ..-> HrzTe[ Win32 API<br>GCC/LLVM Compilers<br>Bash Shell<br>SSH ]
HrxNo ..-> HrxTe[ ZIP Compressor<br>RSA Encryption<br>Salsa20 Encryption<br>Nvidia RadixSort ]

HraNo ..-> HraTe[ JPEG-XL<br>MP3<br>TCP/UDP<br>BlueTooth<br>PS3 Controller<br>BCI Cap ]
HriNo ..-> HriTe[ Chromium Web Browser<br>MAME Arcade Emulator<br>Win95 Emulator<br>OpenXR ]

HreNo ..-> HreTe[ Open AI's GPT3<br>DeepMind's Chinchilla<br>Unicode utf8<br>Adobe Layout ]
HroNo ..-> HroTe[ Eigen Math Lib<br>intelOneAPI<br>PhysX<br>A* Pathfinder<br>MersenneTwister ]

HruNo ..-> HruTe[ OpenSL<br>Baidu DeepSpeech<br>ATT Voice Synth<br>MIDI ]
HryNo ..-> HryTe[ DX12/Vulkan<br>Nvidia API<br>TensorFlow GAN<br>Autodesk Interop ]


%% STYLE
class SyGry Sz_DxPo
class SyKwi Sz_DxPo
class SyKe Sz_DxPo

class SyTo Sz_DxPo
class SyMz Sz_DxPo


class Hrz Ji_DxPo
class Hrx Ji_DxPo
class Hra Ji_DxPo
class Hri Ji_DxPo
class Hre Ji_DxPo
class Hro Ji_DxPo
class Hru Ji_DxPo
class Hry Ji_DxPo

class HrzNo Kz_DxPo
class HrxNo Kz_DxPo
class HraNo Kz_DxPo
class HriNo Kz_DxPo
class HreNo Kz_DxPo
class HroNo Kz_DxPo
class HruNo Kz_DxPo
class HryNo Kz_DxPo

class SyJi Ji_DxPo
class SyNo Kz_DxPo

%% END
```

SubSystem|Description
---|---
  ![Hrz](./Gwz__ICON/Gwz08_SyHrz.png =64x64)<br>Govern|Manage Work such as Host-Computer operations, Data-Processing tasks, Conditional evaluations, and resource balancing services. Enables code processing, such as timers, profilers, threads, and management of tasks.
  ![Hrx](./Gwz__ICON/Gwz09_SyHrx.png =64x64)<br>Organize|Categorize and Order Information as services such as which asset is loaded where in what format and who is accessing them according to schedule. Enables data processing, such as access, locations, reorderings, and translations of data.
  ![Hra](./Gwz__ICON/Gwz10_SyHra.png =64x64)<br>Communicate|Talk, Input/Output, Buffer, Communicate, and send and receive messages. Device, Storage, and Data Stream communication services. Enables stream processing in all Communication streams of data, whether files, input controllers, networks, or other such devices.
  ![Hri](./Gwz__ICON/Gwz11_SyHri.png =64x64)<br>Simulate|Reproduce events in a scene from a an experience. Includes processing actions, whether thinking, doing, feeling, or other changes to data as services. Enables simulation processing as changes to a container of data following rules, styles, and other behaviors. Simulate represents the fidelity tradeoffs for simulating events in a Spacetime.
  ![Hre](./Gwz__ICON/Gwz12_SyHre.png =64x64)<br>Symbolize|Remap, Lookup, translate or interpret meanings cultural and symbolic translation and relating services. Enables symbolic processing, such linguistic, cultural, and database processing.  Symbolize is primarily text formating, pattern-matching, cultural conversions, & lexical conventions.  Designed to work on symbols.
  ![Hro](./Gwz__ICON/Gwz13_SyHro.png =64x64)<br>Calculate|Equation solving, physics model, and computing probabilities.Enables numerical processing, such as formulas, solvers, generation of randomness, physics simulations, and navigation.  Calculate is designed to handle data accuracy and solution selections.
  ![Hru](./Gwz__ICON/Gwz14_SyHru.png =64x64)<br>Temporalize|Time-dominant services such as sound processing and spectrum analysis. Enables time processing, such as audio creations, environmental modeling, speech or instrument synthesis, and voice recognition.  Designed to handle data changing most significantly in time.
  ![Hry](./Gwz__ICON/Gwz15_SyHry.png =64x64)<br>Spatialize|Space-dominant signal services such as graphics processing and visualization. Enables Space processing, such as visual creations, light propagation, sight recognition, and mapping database information to graphical models.  Designed to handle data changing most significantly in space.

  *[Click here to return to Table of Contents](B00_INTRO.html)*
