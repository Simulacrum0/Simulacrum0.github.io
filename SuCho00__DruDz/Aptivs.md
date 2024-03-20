# POWERS

About "Computing Philosophies" in history:
- While the ideas of 'computing-eras/philosophies' is technical, its audience is broader as the ideas below have been covered for business and investment before. When recently re-reading my old "Win32" API notes/macros/unit-tests, i've realized our wantware approach  is quite distinct from the core approaches of computing history. Specifically that our 'words-into-meaning-into-code-with-data-per-moment-of-a-timeline-variation' differs from Unix, Windows, Android or Web models when considering the 'create-software' focus, how data is protected/isolated, units of computing itself (file?object?), and how priorities are balanced.
- These differences cover modern issues that even mildly tech-familiar folks would know such as security, history, or using 'parallel' approaches for performance, space or energy concerns.

Computing_Eras__Simplified_Categories:
- Metrics: 'Early-Computer-Era' seems often contrained to 'run-best' by performance or energy or stability standards. Often 'arrays' of programms with rigid usage (calling) conventions.
- Files: Unix(C & Shell), along with derivatives like Linux/BSD, were designed with composition-programs('do one thing well') with filestreams as the compute unit. Everything in unix is handled by a brilliantly-uniform filestream-input/output mechanism that is understood by few.
- Functional-Programming: Whether symbol-focused LISP or predicate-resolving PROLOG or their modern descendants, Functional Philosophies were designed for composition and control over changes and sideeffects. There are many admirers of these approaches but a very low percentage of programmers, which in turn perplexes aforementioned admirers.
- Objects: Windows(Win32 handles, COM, .NET), Android(Java), iOS/Modern-Mac( ObjectiveC/Swift), and the Web(DOM+Javascript) were designed with class hierarchies with objects as the compute unit.
- wantware built with 'semantic-generated-code' with 'Possibles(data-timeline-forks)' as the compute unit.

Value:
- Why make this distinction? As programmers, we rely heavily on the computing paradigms, on the 'how to do something in a compute language/system'. We then do costly, time-consuming, and risk-enduring tasks to secure additional features, like security, validity, and paralleism with the bulk of what we get paid to do. Historically, changes in these 'philosophies' have lead to new eras of 'how software is made/shared/monetized'. It seems reasonable and not-attention-seeking to notice our approach is quite distinct from the 'assembly-line-factories' of the Unix model, the specific-use objects of Object Oriented(Windows/Android's Java/Webpage DOM&Javascript) and others.

Thoughts:
- Filestreams and Objects are serial ( one-change-at-a-time, one-point of access to answer 'can i read, can i write, can i change run, etc.' ). Being 'serial' requires many workarounds to address modern notions of security (beyond file or object visibility/edit permissions ), validity (bad/erroneous/hacked changes), and parallelism (how to sync/lock/rollback) of networks/many-computers/many-chips.
- 'Possibles' make security (who can access what/when and how to change) and parallelism ( history of changes, collaboration, sharing, stability while editing ) first class citizens while elevating the flexible composition of Unix Files/Functional-Programming, the organization understanding of OS Objects, and many measured Metrics.