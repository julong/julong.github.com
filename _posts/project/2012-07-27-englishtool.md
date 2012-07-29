---
layout: post
category: project
title: 单词学习及自测工具
description: 用Excel写的，用来配合自己日常学习单词及自测的小工具。
---

# [{{ page.title }}][1]

27 Jul 2012

##用户手册


###1.编写目的
因本人学习单词过程中，想把学过的单词都记录起来，每天抽10分钟自测一下巩固记忆，考虑到使用的方便性，逐用2天时间学习了VBA，编写了此小工具，将它发布出来供需要的朋友们下载使用。

###2.软硬件需求
需要Office 2000及以上版本并有VBA运行环境，操作系统为Windows 7，其它环境未测试，如有问题请反馈。

###3.系统使用
系统分为【单词表】及【随机测试】两个模块。  
系统初始化---在【单词表】中添加单词及释义，并为单词新建编号。  
随机测试（拼写测试）---点击生成试卷，在拼写栏默写单词，如拼写有误，系统会以红色背景提示。  
学习状态更新---无论何时，点击【更新学习状态】，即可保存单词学习状态。  

###4.注意事项
【单词表】中D，E列为系统学习状态统计，勿手工更改。

###5.常用设置截图
设置Office宏安全性
![Line](/photos/englishtool/englishtool-1.png)
选择【工具】-【宏】-【安全性】
![Line](/photos/englishtool/englishtool-2.png)
安全性选【中】，确定

打开文件
![Line](/photos/englishtool/englishtool-3.png)
打开文件时选择【启用宏】

点击【生成试卷】
![Line](/photos/englishtool/englishtool-7.jpg)
可以做题了。

单词维护
![Line](/photos/englishtool/englishtool-6.png)
在单词表Sheet中维护单词。

##更新日志
####2012.07.29 V0.2 beta
#####新增功能
1.跟踪单词学习次数及自动计算错误率，统计单词熟悉度。
#####功能改进
1.修正试卷生成算法，优先提取未复习词组，再根据以往错误率排序智能提取易错词组。  


####2012.07.28 V0.1 beta  
#####功能改进  
1.取消试卷"判定"列，输入错误后背景提示改为红色。  

##工具下载
本地下载：[EnglishTool][2]


[1]:    {{ page.url}}  ({{ page.title }})
[2]: /resources/englishtool.xls
