---
layout: post
title: ddddddebian及一个flash引发的悲剧。
description: 本篇日志为关于ruby,debian,天朝大网管等各种不爽无力的吐槽，慎入。
categories:
- Technology
tags:
- debian
- linux
- ubuntu
- flash
- ruby
- git
- 吐槽
---

# [{{ page.title }}][1]

30 Jul 2012

本篇日志为各种不爽的吐槽，慎入。

最近在折腾自己的网站，我的小黑实在很不给我面子，速度慢的无法忍受，跟同事相互换了电脑，先紧着偶用一阵，4核确实爽歪歪啊。

因为不是我的笔记本，不能直接裸机安装linux，要还给人家的话还得重做系统，为了避免再折腾就重灌了Win7系统，就想Win7 + 虚拟机的方案，想着慢就慢点吧，跟我的蜗牛机比起来那算是快的不止一点了。虽然同时跑着两个操作系统，但是也感受到了神马叫速度啊。不再跟我的小黑一样让我build一下卡的蛋都快要碎了。

当然快也并不一定就是好，话说以前学linux的时候在我的小黑上出过一个生产事故，因我在某个项目文件夹新建了一个[符号链接][2]至/home，结果在使用eclipse clean工程的时候，eclipse竟然把我的/home给干掉了，等我发现手动停止时，100多G已经被干掉了，所以机子快有时候也是件坏事，哈哈。

再来说[Debian][3]，大约3年前开始接触并使用的，debian给我第一印象很不错，立马就给自己的小黑裸机上了debian从头学了。用过一段时间后，debian的娱乐功能还是很弱，不满足我的需求，我个人比较喜欢[Gnome][4]的界面，但debian自带的gnome界面太丑了，[Ubuntu][5]越来越漂亮，并且Ubuntu的升级也比较快，用了一段时间debian就换到了Ubuntu，此后一直就用Ubuntu做自己的桌面环境了。当时就感觉debian stable的版本有些老的不是一点，几乎每个东东版本都很古老，又没实力切到unstable的版本，只能用ubuntu这种其实在用unstable仓库的发行版，我是喜欢尝鲜的人，debian半年一个小升级实在让心急的我等的很不淡定。说起Debian发行速度之慢的确让人瞠目，作为比较早期发行的版本，测试周期都以年为单位。不过Debian的认真态度的确让人敬佩，测试周期久归久，正式版全然都非常稳定这点是毫无怀疑的。debian做服务器真的是很稳定，但是真心不适合桌面用。

偶的网站是在linux下用[Ruby][6]开发的，用[Git][7]做的版本管理。在Win7上试用了一下git很别扭，像这些linux下原生的东西还是linux底下才能跑的顺畅。两年前试过在XP下用RubyInstaller装过[Ruby On Rails][8]，体验奇差，装sqlite3和gem非常吃力，还会有些莫名其妙的问题。仅仅是启动一个helloworld，光环境启动就很长时间。真是急死我了。

还在Win7下装了git的win版本[msysgit][9]试用了一下，输入个命令都一卡一卡的，第一次commit就出现了乱码，也是给我印象奇差。但凡有一个能用我也就忍了，没一个给力的。非常不推荐在win下玩。

顺手在虚拟机里安装了debian 6。装debian是想能有个基础系统，能让我[putty][10] + [samba][11]方式用就可以，可是[Virtualbox][12]怎么配置都不能通过宿主机访问虚拟机，只能使用[Bridge][13]或[NAT][14]方式，因我上班的地方没网络，所以用不了桥接，NAT又不能直接通信，上班时就只能在虚拟机内调试。真是很影响开发速度。

还有samba，根据网上找的资料，配置完了可以访问了，用文本编辑器却无法保存，提示没有权限，怎么调都搞不定和win7的权限，对于一个用过[Red Hat][15],[AIX][16],[Ubuntu][5],[Fedora][17]等系统的并不算太菜的linuxer，突然感觉好失败啊。真是丢脸啊。。debian的东西太老，找到的资料大多是文不对版，奈何咱哥们英语水平还是很菜，官方帮助看的晕晕的，哎。

今天在开发的时候，想给网站上弄点音乐，我的[firefox][20]里没有[flash][21]插件，就下载了flash的rpm包，安装的时候提示说依赖[glibc][18] 2.4以上版本，一查debian官方源里最新版的glibc竟然是2.3版本的，我倒。。。

glibc已经到2.16了。2.3是2005年的东西，神啊，难道为了稳定性，就要守着6.7年前的东西啊，这简直不是严谨而是有点太迂腐了吧，glibc是什么项目，最基础的东西，所有东西都靠它来编译，[gnu][19]的人又不是吃素的，怎么可能草率的发新版或有bug呢，用个稍微高点的版本会死啊！网上查了下，如果换个非官方源，勉强装上glibc高版本，系统会出现大问题。glibc这种东西还是系统安装的时候选好比较好。哎，又要用flash，今晚又要连夜装Ubuntu了，以后除过架server再也不折腾debian了，我都无力吐槽了。

再吐槽一下天朝网络。ruby，一个小小的动态语言，时不时的被[墙][22]掉，还有官方gem源，直接被墙的上不去，装个gem简直就是拼人品啊。您说这是惹了谁了。[python][23]也是被墙的我从来没见过其官网长啥样。还有git，版本管理的软件，为什么也要被墙掉，对天朝的网络简直不懂到极点。本来就落后，还屏蔽这个屏蔽那个，整个一个闭关锁国，天朝大网管这些畜生怎么不去死？

新的Ubuntu刚刚安装完了，今晚又要配置一晚上了，生命不止，折腾不息。


[1]:    {{ page.url}}  ({{ page.title }})
[2]: http://zh.wikipedia.org/zh/%E7%AC%A6%E5%8F%B7%E9%93%BE%E6%8E%A5
[3]: http://www.debian.org
[4]: http://www.gnome.org
[5]: http://www.ubuntu.com
[6]: http://www.ruby-lang.org/en
[7]: http://git-scm.com
[8]: http://rubyonrails.org
[9]: http://msysgit.github.com
[10]: http://www.putty.org
[11]: http://www.samba.org
[12]: https://www.virtualbox.org
[13]: http://baike.baidu.com/view/197495.htm
[14]: http://baike.baidu.com/view/16102.htm
[15]: http://www.redhat.com
[16]: http://www-03.ibm.com/systems/power/software/aix/index.html
[17]: http://fedoraproject.org
[18]: http://www.gnu.org/s/libc
[19]: http://www.gnu.org
[20]: http://www.mozilla.org/en-US/firefox
[21]: http://www.adobe.com/products/flashplayer.html
[22]: http://www.hudong.com/wiki/gfw
[23]: http://www.python.org
