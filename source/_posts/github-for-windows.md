---
title: github for windows
date: 2017-04-11 17:32:45
tags: [git]
---
在有些电脑上装github客户端是很坑的。
部分人的windows电脑装不上Github，也解决不了，这里只是提供一个解决思路。
另也求大神添加其他建议。可尝试以下方式： 
1. 关闭防火墙和360。 
2. 打开控制面板→ Internet 选项→“安全”选项卡。 选择“受信任的站点”→点击“站点”按钮。 
弹出的窗口中的文本框中输入点击“添加” https://github-windows.s3.amazonaws.com/ ；
或者去除复选框“对该区域中的所有站点要求服务器验证(https:)”的钩，直接加入 github-windows.s3.amazonaws.com 。 
3. 安装.NET framework 4.0。下载地址：http://www.microsoft.com/en-us/download/details.aspx?id=17113。
* * *
ps: 如果安装.NET framework 4.0失败。有时候原因是：hresult oxc8000222。
这时尝试用下面方法解决： 
1. 运行cmd，输入net stop WuAuServ 
2. 点击开始菜单，输入 %windir%，选择windows，把文件夹SoftwareDistribution 重命名为 SDold. 
3. 运行cmd，输入net start WuAuServ

安装上github。试试。就可以了。 
安装github一般在IE里安装。
在地址栏输入： https://github-windows.s3.amazonaws.com/
（注意是https）。 
另：关于github for windows 登录时密码正确，但登录失败。可尝试： 
在git shell中输入 
``git config --global user.email "love1175180338@gmail.com"``

``git config --global user.name "yinsang"``
你自己用自己的名字和账号
重启计算机，登录。

（来自一个上班研究git被领导痛骂的人的血泪总结。）
