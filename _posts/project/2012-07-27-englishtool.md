---
layout: post
title: 单词学习及自测工具
description: 用来配合自己日常学习单词及自测的Excel小工具,分享给朋友们。
categories:
- Project
tags:
- Excel
- English
- VBA
---

# [{{ page.title }}][1]

27 Jul 2012

##用户手册

###1.工具目的

因本人学习单词过程中，想把学过的单词能记录起来，并能适时回顾复习以巩固记忆。为了使用方便，逐选用Excel编写此小工具。将它发布出来供有需要的朋友们下载使用。程序使用VBA开发，属现学现卖，如有BUG请多多拍砖及反馈。

###2.软硬件需求

需要Office 2000及以上版本并有VBA运行环境，操作系统为Windows 7，其它环境未测试。

###3.系统使用

1.单词库初始化 — 在【单词表】，在A列为单词新建编号，B，C列中添加单词及释义，D，E，F列填充0。

2.随机测试（拼写测试）— 点击`生成试卷`，在E拼写栏拼写单词，如拼写有误，系统会以红色标红背景并提示正确的拼写。

###4.注意事项

1.设置Office宏安全性。Excel主界面，选择【工具】-【宏】-【安全性】，安全性选【中】，点击确定后重新打开。

2.打开文件时Excel提示【安全警告】界面，点击【启用宏】。

3.关闭Excel时会提示保存，点击【确定】保存。学习状态会自动保存及更新。

4.【单词表】中D，E，F列为学习状态统计，对单词熟悉度及试卷生成规则有关，勿手工更改。

###5.版本升级

拷贝旧版本的【单词表】所有内容至新版本的单词表覆盖，完成升级。

###6.常用设置截图
设置Office宏安全性
![Line](/photos/englishtool/englishtool-1.png)
选择【工具】-【宏】-【安全性】
![Line](/photos/englishtool/englishtool-2.png)
安全性选【中】，确定

打开文件
![Line](/photos/englishtool/englishtool-3.png)
打开文件时选择【启用宏】

##更新日志


### Version V0.8 - 2012.08.12

#### BUG FIX

1.修复`History`BUG。

#### 文档

新增单词138个。  



### Version V0.7 - 2012.08.04

#### 功能改进

1.双击F列显示提示。


### Version V0.6 - 2012.08.02

#### 新增功能

1.增加`抽取规则`下拉框。[Normal]模式 - 正常取词 ，[History]模式 - 只取出错的词。

#### 功能改进

1.增加筛选规则。一次性答对不再取。

#### BUG FIX

1.筛选后的数量小于生成数量时出现的VBA错误。

#### 文档

新增单词45个。  


### Version V0.5 - 2012.08.01

#### 功能改进

1.删除`提示`按钮。输入错误即自动在拼写栏右侧提示相关拼写。

#### BUG FIX

1.修复`检测重复单词`按钮VBA行数计算错误。     


### Version V0.4 - 2012.07.31

#### 新增功能

1.增加`检测重复单词`按钮，检测单词表中重复单词并标红已方便编辑及合并。

#### 功能改进

1.修改`提示`方式。首次提示首字母，第二次提示前两个字母，第三次自动填写正确拼写，并改变背景色。

2.修改分数统计及单词错误率，已提示过的词不计算分数。

3.生成试卷后，光标自动移到第一题进入答题状态。

#### BUG FIX

1.修复`提示`按钮VBA错误。   

#### 文档   

新增单词60个。  


### Version V0.3 - 2012.07.30

#### 新增功能

1.增加`单词出镜次数`记录，生成试卷单词出镜率更合理。

2.增加`生成数量`下拉框，根据选择的数量生成试卷。

3.增加`提示`按钮，输入错误时可点击提示按钮显示正确的拼写。

4.删除`更新单词熟悉度`按钮，改为自动更新熟悉度。

5.增加`About`工作表，记录Sheet表列的说明。 

#### 功能改进

1.修改排序算法，增加单词出镜率数据，使随机提取单词的分布更均衡。

2.增加自动筛选功能。生成试卷时不再包含 `学习次数已大于3次并且综合错误率小于25%` 的词。  

#### 文档

新增单词36个。  


### Version V0.2 - 2012.07.29

#### 新增功能

1.跟踪`单词学习次数`及自动`计算错误率`，统计单词熟悉度。

#### 功能改进

1.修正试卷生成算法，`优先提取未复习词组，再根据以往错误率排序`智能提取易错词组。

#### 文档

1.新增单词298个。  


### Version V0.1 - 2012.07.28

#### 功能改进

1.取消试卷`判定`列，输入错误后`背景提示`改为红色。


##工具下载
本地下载：[EnglishTool V0.8][2] -- 解压密码: julong


[1]:    {{ page.url}}  ({{ page.title }})
[2]: /resources/englishtool0.8.zip
