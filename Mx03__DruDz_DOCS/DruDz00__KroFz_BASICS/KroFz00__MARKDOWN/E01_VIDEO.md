[comment]: # (title : WANTWARE_REPORT)
[comment]: # (author: jake kolb v)
[comment]: # (version: v1.0)
[comment]: # (company:MINDAPTIV)
[comment]: # (client: Audience of Interest)


# ![BANNER](./Gwz__ICON/Gwz24__TxKu.png =64x64 ) E01: REMOTE_SENSING offers video chat and filtering for decision making based on visuals.
## Covers what is made and what can be done

We made a "Remote Sensing" wantware that provides Video Conferencing, Text Chat, Auto or Manual Adjusting Tradeoffs on Quality vs Latency, Object Recognition Training and Image Processing Filters for a desired aesthetic look.

---------

```mermaid
flowchart LR

%% STYLE
classDef default fill:aaf,stroke:#000000
classDef Sz_DxPo fill:#C0C0FF, color:#000000
classDef Ji_DxPo fill:#FFA03F, stroke:#000000, color:#FFFFFF
classDef Kz_DxPo fill:#8080FF, stroke:#000000, color:#FFFFFF


%% NODES & LINKS

TxKu((Remote Sensing Wantverse))

Mi00[( <br>ACTIONS<br>Training Recognition<br>CNN Graph for Feature Detection<br>Image Filters such as Denoise, Depixellate, and Tonemap)]
Mi01[( <br>SIGNAL::IMAGES<br>Trained Recognitions<br>Objects to locate in video stream)]
Mi02[( <br>RULES<br>How to handle recognitions<br>Triggers and Events described by the user)]
Mi03[( <br>ACTIONS & SIGNAL::SHAPES<br>GUI controls to operate <br>realtime streaming, tuning,<br>training, and recognition)]

Me00[Control Resolution Quality vs Latency <br>vs Object Priorities as Tradeoffs]
Me01[Image Process Results<br>for optimal detection of entities in the image]
Me02[Train Objects<br>for easy recognition ]
Me03[Link behaviors to be triggered<br>when Trained Objects are recognized in stream]


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