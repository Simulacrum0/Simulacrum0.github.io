[comment]: # (title : WANTWARE_REPORT)
[comment]: # (author: jake kolb v)
[comment]: # (version: v1.0)
[comment]: # (company:MINDAPTIV)
[comment]: # (client: Audience of Interest)


# ![BANNER](./Gwz__ICON/Gwz24__TxKu.png =64x64 ) E02: MOON_MINER is a Simulated Lunar Mining Operation.
## Covers what is made and what can be done

Consider a Moon-Mining Simulation Aptiv made in wantware to help a space organization plan how to mine Helium-3 from the lunar surface.

---------

```mermaid
flowchart LR

%% STYLE
classDef default fill:aaf,stroke:#000000
classDef Sz_DxPo fill:#C0C0FF, color:#000000
classDef Ji_DxPo fill:#FFA03F, stroke:#000000, color:#FFFFFF
classDef Kz_DxPo fill:#8080FF, stroke:#000000, color:#FFFFFF


%% NODES & LINKS

TxKu((Moon Mining Wantverse))

Mi00[( <br>SIGNAL::VOICES<br><br>Intro & Goals<br>How to Mine<br>About Lunar Gravity)]
Mi01[( <br>SIGNAL::SHAPES<br><br>Regolith Terrain<br>Lunar Rover<br>Mining Tools<br>Moon_GyFry)]
Mi02[( <br>ACTIONS<br><br>Drive Rover<br>Drill Rock<br>Extract Helium-3 from Rock)]
Mi03[( <br>STORIES<br><br>Path North West<br>Path Southern Cave<br>Path Basin Roaming )]

Me00( Explore & Experiment w/<br>Strategies of Mining Searches )
Me01( Rewind or Replay various Mining Paths<br>changing Order or Choices )
Me02( Assess impacts of Gravity, Material Composition, and <br>Energy cost of Drilling Regolith )
Me03( Plan routes to best yield Helium3 and<br>minimize terrain complications )


Mi00-->TxKu
Mi01-->TxKu
Mi02 --> TxKu
Mi03 --> TxKu

TxKu --> Me00
TxKu --> Me01
TxKu --> Me02
TxKu --> Me03


%% STYLE
class TxKu Sz_DxPo

class Mi00 Kz_DxPo
class Mi01 Kz_DxPo
class Mi02 Kz_DxPo
class Mi03 Kz_DxPo

class Me00 Ji_DxPo
class Me01 Ji_DxPo
class Me02 Ji_DxPo
class Me03 Ji_DxPo

%% END
```

  *[Click here to return to Table of Contents](B00_INTRO.html)*