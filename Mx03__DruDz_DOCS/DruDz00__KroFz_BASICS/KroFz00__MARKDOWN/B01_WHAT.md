[comment]: # (title : wantware Report)
[comment]: # (author: j kolb v)
[comment]: # (version: v1.0)
[comment]: # (company:MINDAPTIV)
[comment]: # (client: Audience of Interest)

# ![BANNER](./Gwz__ICON/Gwz23_Hra6_Ku__KeGry.png =64x64 ) B01: WHAT describes what can be represented whether as data or behavior
## What kinds of knowledge or behaviors can be stored as computer bits

```mermaid
flowchart TD

%% STYLE
classDef default fill:aaf,stroke:#000000
classDef Sz_DxPo fill:#C0C0FF, color:#000000
classDef Ji_DxPo fill:#FFA03F, stroke:#000000, color:#FFFFFF
classDef Kz_DxPo fill:#8080FF, stroke:#000000, color:#FFFFFF


%% NODES & LINKS

ToTy(Consider Data Traits) --> INFO_BANKS
ToTy --> COMMON_TRAITS

subgraph COMMON_TRAITS
 HrxGu[Compress] ---> HrxGe[Encrypt]
 SaNo[Ownership Rights] ---> DryChe[Trade & Monetize]
 KeBri[Culture & Language] --> JeTu[History & Relations]
 DryChe ..->Mx((Share))
JeTu ..-> Mx
HrxGe ..-> Mx

end

INFO_BANKS --> INFO_LINKS
INFO_BANKS --> INFO_TRANSFORMS


subgraph INFO_BANKS

KrzJxJa{ Continuous or Discreet Data? }

KrzJxJa --Digital Facts<br>Fixed Values<br>--> TxKz__Jx[(RECORD<br><br>Groups<br>Sequences<br> Facts)]
KrzJxJa --Analog Samples<br>Dynamic Values<br>Variable Resolution--> TxKz__Ja[(SIGNAL<br><br>Forms<br>Sparse Samples<br>Dense Samples)]

end

subgraph INFO_LINKS

KrzJeJu{ How is Info Linked? }

KrzJeJu --Is Info Temporary--> TxKz__Jz[(MIND<br>Topic<br>Thought_Matter<br>Thought_Germ<br>)]
KrzJeJu --How Info Changes in Time--> TxKz__Je[(STORY<br>Timestream<br>Moment<br>Change)]
KrzJeJu --Relationships between Info--> TxKz__Ju[(BELIEF<br>Predictions<br>Cognitions<br>Claims)]


end

subgraph INFO_TRANSFORMS

KrzJiJoJy{ How to Handle Changes? }

KrzJiJoJy --Is Info a Behavior--> TxKz__Ji[(ABILITY<br>Action<br>Instruction<br>Assumption)]
KrzJiJoJy --Info models Scenes of Things--> TxKz__Jo[(EXPERIENCE<br>Scenes<br>Things<br>Rules)]
KrzJiJoJy --Info to Convert into other Infos--> TxKz__Jy[(IDEA<br>Is-a<br>Has-a<br>As-a)]

end


%% STYLE
class ToTy Sz_DxPo

class KrzJxJa Ji_DxPo
class KrzJeJu Ji_DxPo
class KrzJiJoJy Ji_DxPo

class TxKz__Jz Kz_DxPo
class TxKz__Jx Kz_DxPo
class TxKz__Ja Kz_DxPo
class TxKz__Ji Kz_DxPo
class TxKz__Je Kz_DxPo
class TxKz__Jo Kz_DxPo
class TxKz__Ju Kz_DxPo
class TxKz__Jy Kz_DxPo

%% END

```


Box|Description|Examples
----------|--------|-----
![Jz](./Gwz__ICON/Gwz00_TxJz.png =64x64)<br>Mind Box | Minds emulate thinking.<br>**Topic**: Topics operate in parallel as a graph of thought heaps for a given context.<br>**Thought_Matter**: Thought Matter reference other thoughts, such as a pronoun or descriptor such as all large red dogs.<br>**Thought_Germ**: Germs are temporary values small enough to be stored inside of an infosign to be rapidly processed by a brain.|*List of Suspects and Deeds in a Mystery. Tasks, Priorities, and Concerns considered to choose next action.*
![Jx](./Gwz__ICON/Gwz01_TxJx.png =64x64)<br>Record Box | Records are databases for discrete info with specific and unique answers, unlike in Beliefs where simultaneous answers may exist.<br>**Groups**: An ordered table of sequence rows.<br>**Sequence**: A variable-length sequence of facts.<br>**Fact**: Discrete information stored in time objectively. |*Name and Address for Contacts, Todo List, Objects detected by a Camera with datetime and accuracy.*
![Ja](./Gwz__ICON/Gwz02_TxJa.png =64x64)<br>Signal Box | Forms of continuous ideas sampled in multiple dimensions.<br>**Form**: A grouping of sample values in a continuous signal that act as one value.<br>**Sparse Samples**: The lowest resolution values of a region in a continuous signal.<br>**Dense Samples**: The highest resolution values of a region in a continuous signal.|*Coyote Shape, Skeleton, Fur Material Colors*
![Ji](./Gwz__ICON/Gwz03_TxJi.png =64x64)<br>Ability Box | Collections of behaviors using context specific information that changes spacetime.<br>**Action**: A single action is a set of instructions and assumptions to transform data.<br>**Instruction**: A single instruction of an Action.<br>**Assumptions**: Action Arguments; Actual Parameters; Data Constants; These inputs and outputs describe predefined pieces of information for use by instructions.|*How Coyotes Run, Howl, Hide, and Sleep*
![Je](./Gwz__ICON/Gwz04_TxJe.png =64x64)<br>Story Box | Variable histories of possible changes that recreate an experience in spacetime.<br>**Timeestream**: collection of moments and their contained changes for a particular version of time and space.<br>**Moment**:A collection, often over time, of changes.<br>**Change**: Actual change in values stored for timestream, undo, and redo purposes.|*Timeline playback for a range of slightly different events if the coyote went left, right, or straight on the path*
![Jo](./Gwz__ICON/Gwz05_TxJo.png =64x64)<br>Experience Box | Collections of scenes containing things that change with time.<br>**Scene**: A collection of things and rules that create a scene in spacetime.<br>**Thing**: A specific example of an idea that exists in time and space.<br>**Rule**: A triggered condition that prompts additional changes.|*Coyotes in a forest with growing plants, a night & day cycle and weather.*
![Ju](./Gwz__ICON/Gwz06_TxJu.png =64x64)<br>Belief Box | Unstructured network of observations, opionions and predictions made by the various rules which generate a thing's beliefs.<br>**Prediction**: Expectations based on relations for a thing.  Answers to queries.<br>**Cognition**: Relations between units which a thing either observered or concluded by a set of rules.<br>**Claim**: A unit of information used in any cognition above, might be a fact or might be unknown, mysterious or with broken relations. Forms contemplative queries.|*Opinions on Coyotes, what they eat, where to find them, and their likability.*
![Jy](./Gwz__ICON/Gwz07_TxJy.png =64x64)<br>Idea Box | Collections of other ideas that form a unique concept.<br>**Has-a**: An idea contained by an encompassing parent Idea<br>**Is-a**: An idea contained by a parent Idea<br>**As-a**: An idea converted into another Idea.|*Cartoon Coyote vs Science-Model of Coyote Behavior vs Coyote Mascot Customizer*

  *[Click here to return to Table of Contents](B00_INTRO.html)*