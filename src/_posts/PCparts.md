---
category: laptop
tags:
  - PC
  - laptop
date: 2020-02-01
title: 【2020年最新版】ノートパソコンで失敗しないために知識をつけよう【パソコンパーツ】
vssue-id: 3
---

# TLDR
<br>

**CPUとメモリ、SSDでだいたい決まります。**

最低でも**Core i5**または**Ryzen 5**、メモリは**8GB以上**で、SSDは**256GB以上！**
<br>
<br>

# はじめに
<br>

この話を目で観て理解しやすいように、Windowsの方は
<br>
<br>

<img src="https://i.gyazo.com/81d3a4c768b75475bf8851b89bae0746.png" width="800px">

ここで右クリックします。↑

<img src="https://i.gyazo.com/5c038840c137a57619430539dd58dedf.png" width="800px">

タスクマネージャーをクリックします↑

<img src="https://i.gyazo.com/591db4277f3a93a06512e8088a90235a.png" width="300px">

↑このような画面が出てくるので、詳細(D)をクリックします

<img src="https://i.gyazo.com/5593b7a8a5d6b084cf4409d045293862.png" width="400px">

↑パフォーマンスというタブを押してこれがでればOKです
<br>
<br>

# 代表的なパソコンを構成するパーツ
<br>

パソコンを**作業場とその中にいる人間**に例えて比較すると、
<br>
<br>

| パソコン | 作業場の人間 |
|:---:|:-------:|
| CPU | 人間の脳 |
| メモリ | 作業台 |
| HDD / SSD | 倉庫 |
<br>
この3つでノートパソコンのおおよその性能が決まります。
<br>
<br>

<img src="https://2.bp.blogspot.com/-9LivqlmJGv4/U2LuxPmREtI/AAAAAAAAfwk/cLgbwskc00Y/s800/nimotsu_tsumeru.png" width="200px">
<img src="https://3.bp.blogspot.com/-9ZylIqowgN8/VCkbxR6hulI/AAAAAAAAnMU/trjci_rnfqM/s800/yajirushi08_cycle.png" width="150px">
<img src="https://1.bp.blogspot.com/-FITWk43HB_o/XWS5XfYtPCI/AAAAAAABURU/Jlv2wQvLaogtk03QncTeAHp3XMmbWTgCwCLcBGAs/s1600/buidling_boueki_souko.png" width="200px">

1. 倉庫からデータを作業台まで持ってくる / HDD → メモリ
2. 担当者がそのデータを処理する / メモリ ⇔ CPU
3. 処理したデータを倉庫に戻す / メモリ → HDD

## CPU
<br>

<img src="https://www.intel.co.jp/content/dam/products/hero/foreground/badge-9th-gen-core-i9-1x1.png.rendition.intel.web.128.128.png" width="120px">
<img src="https://www.amd.com/system/files/styles/992px/private/2019-06/102426-zen-2-promo-1260x709.jpg?itok=zEhk-270" width="213px">



**人間の脳にあたるパーツです。**
<br>
<br>

タスクマネージャーの**CPU**の欄から見ることができます。
<br>
<br>

これによって処理のサクサク具合が大きく変わります。
<br>
<br>

ノートパソコン向けCPUは、**Intel**(インテル)と**AMD**(エーエムディー)の2社が主に作っています。
<br>
<br>

性能で分けるとこのようになります。括弧内はメーカーが提示している消費電力です。
<br>

| 性能 | Intel | AMD |
|:----:|:---:|:-------:|
| 高い | Core i9 (45W) | Ryzen 9 (45W) |
| ↑ | Core i7 (15~45W) | Ryzen 7 (15~35W) |
| ↑ | Core i5 (15~45W) | Ryzen 5 (15~35W) |
| ↕ | Core i3 (15W) | Ryzen 3 (15W)|
| ↓ | Pentium Gold (6W) | Athlon Gold/Silver (15W) |
| ↓ | Pentium Silver (6W) | - |
| 低い | Celeron (6W) | - |

<br>

読み方
```
Core i9 = コア アイ ナイン
Core i7 = コア アイ セブン
Prntium = ペンティアム
Seleron = セレロン

Ryzen 7 = ライゼン セブン
Ryzen 5 = ライゼン ファイブ
Athlon = アスロン
```

<br>

> ここからは独り言ですが、Intelの公称値は詐称しているときが多いので、私はあまり信用していません。
<br>
<br>

### CPUの性能はどこで決まるか
<br>

CPUの性能は**コアとスレッドの数**でだいたい決まって、一般的に**多いほど性能が良い傾向にあります。**

(タスクマネージャー内では、スレッドは物理プロセッサ数と書いてあります。)
<br>
<br>

例えば、`i7-7820HK`は「4コア8スレッド」、`Ryzen 7 4800H`は「8コア16スレッド」となります。


### CPUの罠

> 店員「これならCore i7ですし、性能も非常に良いですよ！」
>
> 私「ほんとかなぁ〜:thinking:」

実は「Core i7だから高性能」というのは間違ってはいませんが、**大きな罠があります。**

> 私「店員さん、これi7-8650**U**じゃないですか？」
> 
> 店員「:thinking:」

<br>

そうなんです。同じCPUでも、**後ろのアルファベットが違うだけで、性能が大きく変わります。**
<br>
<br>

例

<img src="https://www.intel.com/content/dam/www/public/us/en/images/illustrations/RWD/processor-number-core-i7-8650u-16x9.png.rendition.intel.web.320.180.png" width="300px">

アルファベット一覧

| Intel | AMD | 性能の説明 |
|:---:|:-------:|:---:|
| H | H | 高性能グラフィック付き |
| HK | - | 高性能グラフィック付き / アンロック |
| HQ | - | 高性能グラフィック付き / 4 core |
| G | - | グラフィック付き |
| U | U | 低電力 |
| Y | - | 超低電力 |
<br>

また、4桁(5桁の場合もある)の数字が大きければ大きいほど、**新しく高性能なCPUである**と言えます。
<br>

例えば、`Core i7-4790`と`Core i7-9700`を比較したときにより高性能なのは**i7-9700**、といったような具合です。
<br>
<br>

とりあえず高性能なノートパソコンが欲しい場合は、**8000より大きい数字のCore i5以上のものを選ぶようにしましょう。**
<br>
<br>


## メモリ

<img src="https://1.bp.blogspot.com/-rmuypkAg4Os/U2sr4J1SQaI/AAAAAAAAf6Q/Gwnm-uqUIyg/s800/computer_memory.png" width="300px">

メモリは、**作業台にあたるパーツです。**
<br>
<br>

タスクマネージャーの**メモリ**の欄から見ることができます。
<br>
<br>

なぜそう言われるかというと、**どれだけ優秀な脳(CPU)を持っていても、作業台が狭ければ作業が進まない**からです。
<br>

### どれくらいあれば十分なのか
<br>
最近のノートパソコンは4GB以上のモデルが多いですね。
<br>
<br>

ですが、**4GBで足りるかと言われると疑問が残ります。**
<br>
<br>

私の1つ前のノートパソコンはメモリが4GBだったのですが、**WordとChromeを同時に開いて作業すると、もたつく場面が非常に多かったように感じました。**

(実はChromeに原因があったのですが。)
<br>
<br>

それからメモリが8GBあるパソコンに買い替えましたが、**1年間使った中では非常に快適です。**
<br>
<br>

私は理系なので、簡単な動画編集や重たいプログラムのテストをしたりしていてかなりヘビーな使い方をしていますが、もたつくことなく使うことができています。
<br>
<br>

**必ず8GB以上のメモリを持つモデルを選ぶことをおすすめします。**


## HDD / SSD
<br>

<img src="https://3.bp.blogspot.com/-V4IWtEE4mi0/U2sr28tExOI/AAAAAAAAf50/ivdH5uLVwUc/s800/computer_harddisk.png" width="300px">

HDDおよびSSDは、**倉庫に当たるパーツです。**
<br>
<br>

タスクマネージャーの**ディスク**の欄から見ることができます。
<br>
<br>

最近のノートパソコンであればほとんどがSSDを搭載していて、HDDを搭載しているモデルはほとんどありません。
<br>
<br>

また、SSDにも2種類あって、**SATA(サタ)タイプとM.2(エムドットツー)タイプがあります。**

### HDDとSSDの違い
<br>

|  | HDD | SATA SSD | M.2 SSD |
|:---:|:-------:|:---:|:---:|
| 値段 | 非常に安い | 高い | 高い |
| 処理 | 遅い | 速い | 非常に速い |
| 音 | すこしうるさい | 非常に静か | 非常に静か |
| 壊れやすさ | 壊れやすい | 壊れにくい | 壊れにくい |
<br>

実際に数字で表すと
<br>
<br>

|  | HDD | SATA SSD | M.2 SSD |
|:---:|:-------:|:---:|:---:|
| 100GBあたり[円] | 180 | 1375 | 1400 |
| 1秒あたり[MB] | ~200 | 500~800 | 1,500~ |

[HDD 参考](https://kakaku.com/item/K0001133799/?lid=20190108pricemenu_hot)
[SATA SSD 参考](https://kakaku.com/item/K0001132862/?lid=20190108pricemenu_hot)
[M.2 SSD 参考](https://kakaku.com/item/K0001101038/?lid=20190108pricemenu_hot)
<br>
<br>

といった感じです。
<br>
<br>

正直SATAとM.2はどちらも十分速いので、体感的な違いを感じたことはほとんどありません。
<br>

### どのくらいあれば十分なのか
<br>

容量に関しては、**最低でも256GB以上**をおすすめします。
<br>
<br>

128GBだとアプリを何個かインストールしたりPowerPointのファイルを保存したりするだけで、すぐいっぱいになってしまいます。
<br>
<br>

さらにWindowsやMacから「容量が足りないからアップデートできないぞ！」と怒られてしまい、アップデートすらできなくなってしまう始末です。
<br>
<br>

ですので、**最低でも**256GBは必要です。
<br>
<br>

500GBくらいあれば安心して使うことができるでしょう。


# まとめ
<br>

TLDRにも書いたとおり、`Core i5`または`Ryzen 5`で、メモリは8GB以上、SSDは256GB以上なら問題ありません。

よく理解できなかったなと思ったら、コメントか[私のTwitter](https://twitter.com/kuge_masa)のDMにでも質問するか、家電量販店に行って「こんな性能のパソコンがほしい」と言うと親切に対応していただけると思います。

よいラップトップライフを！