[comment]: # (title : WANTWARE_REPORT)
[comment]: # (author: jake kolb v)
[comment]: # (version: v1.0)
[comment]: # (company:MINDAPTIV)
[comment]: # (client: Audience of Interest)

# ![BANNER](./Gwz__ICON/Gwz24__TxKu.png =64x64 ) E00: MENU shows what happens when expressing the standard wantware menu example
## Covers what is made and what can be done


We made a "Menu" Aptiv in wantware with these words:
```

1) Make APTIV #3 called SNACKSTORE.
2) Add number called Bill set it to 0.
3) Another number named Apple, set it to 3. On press increase Bill by Apple.
4) Next button called Pineapple, set to 7. When used, grow Bill by Pear.
5) Final button called Coupon, value 2. When bought, reduce Bill by Coupon.
6) One last thing, add an item called TAX. Set to 5 percent and When bought, multiply Bill by TAX
```

---------

```mermaid
flowchart LR

%% STYLE
classDef default fill:aaf,stroke:#000000
classDef Sz_DxPo fill:#C0C0FF, color:#000000
classDef Ji_DxPo fill:#FFA03F, stroke:#000000, color:#FFFFFF
classDef Kz_DxPo fill:#8080FF, stroke:#000000, color:#FFFFFF


%% NODES & LINKS

TxKu((Menu Wantverse))

Mi00[(<br>SIGNAL::IMAGE<br>Fruit Pictures Sampled from DuckDuckGo<br>Coupon & Currency Symbols<br>GUI buttons from user's 'current theme' )]
Mi01[(<br>RECORDS<br>5 named values stored as real numbers)]
Mi02[(<br>ACTIONS<br>Add, subtract, and multiply between numbers<br>and stored in a number)]

Me00[Add items to menu easily in words]
Me01[Quickly change prices or calculations directly in text]
Me02[Easily customize visuals or add sounds]
Me03[Simple to share and modify]


Mi00-->TxKu
Mi01-->TxKu
Mi02 --> TxKu

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