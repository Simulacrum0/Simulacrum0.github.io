[comment]: # (title : WANTWARE_REPORT)
[comment]: # (author: jake kolb v)
[comment]: # (version: v1.0)
[comment]: # (company:MINDAPTIV)
[comment]: # (client: Audience of Interest)

# ![BANNER](./Gwz__ICON/Gwz19_Hra4_Bru.png =64x64 ) B02: HOW wantware runs
## How wantware makes software to run on specific hardware.


---------

```mermaid
flowchart TD

%% STYLE
classDef default fill:aaf,stroke:#000000
classDef Sz_DxPo fill:#C0C0FF, color:#000000
classDef Ji_DxPo fill:#FFA03F, stroke:#000000, color:#FFFFFF
classDef Kz_DxPo fill:#8080FF, stroke:#000000, color:#FFFFFF


%% NODES & LINKS
KeKri{Person<br>expresses<br>their wants as...}
KeKri ..-> P00( Spoken Words )
KeKri ..-> P01( Typed Text )
KeKri ..-> P02( GUI Choices )
KeKri ..-> P03( EEG or Joystick )
KeKri ..-> P04( Poses or Gestures )
KeKri ..-> P05( Programmer Code )

KoSmx(( Compute<br>Considers<br>& Replies ))
P00 -->KoSmx
P01 -->KoSmx
P02 -->KoSmx
P03 -->KoSmx
P04 -->KoSmx
P05 -->KoSmx

KoSmx -->A00( Search History and Context )
A00 -->A01( Analyze Expression for Best Matches )
A01 -->A02( Use Context to Sort Guesses )
A02 -->A03( Confirm w/ User Agreement<br>if Low Confidence Guess )
A03 --> KoSmx
KoSmx <--Dialog Loop<br>Back and Forth--> KeKri

KoSmx --When_User_Ready--> R00( Select Machine Instructions )
R00 --> R01( Weave Instructions onto Specific Chip's Workload )
R01 --> R02( Schedule Resources )
R02 --> R03(Run! )
R03 --> R04{Retry<br>w/<br>Alternatives}
R04 ..-> R05(Tune towards<br>Speed, Watts, Size )
R05 --> R00


subgraph Key
SiKe(User Actions)
SiHre(Meaning Mapper)
SiHrz(Instruction Maker)
end


%% STYLE
class KeKri Sz_DxPo

class KoSmx Sz_DxPo

class S00 Ji_DxPo
class S01 Ji_DxPo
class S02 Ji_DxPo
class S03 Ji_DxPo
class S04 Ji_DxPo
class S05 Ji_DxPo


class P00 Kz_DxPo
class P01 Kz_DxPo
class P02 Kz_DxPo
class P03 Kz_DxPo
class P04 Kz_DxPo
class P05 Kz_DxPo


class A00 Ji_DxPo
class A01 Ji_DxPo
class A02 Ji_DxPo
class A03 Ji_DxPo

class SiKe Kz_DxPo
class SiHre Ji_DxPo

%% END
```

  *[Click here to return to Table of Contents](B00_INTRO.html)*