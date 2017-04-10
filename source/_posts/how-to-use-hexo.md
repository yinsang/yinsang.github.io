---
title: how to use hexo
date: 2017-04-03 19:54:05
tags: [hexo]
---
# 目的
帮助安装了hexo但不会配置themes和tag的人。后面有多个终端怎么同步更新hexo的教程。
- - -
# 假设
你已经正确安装了node（npm）， git， 
*请用下面命令确定是否安装成功。*
请在cmd/shell/终端操作一下命令
`node -v`
输出： `v4.2.6`
`npm -v`
输出：`3.5.2`
`git -version`
输出：`git version 2.7.4`
* * * 
# 安装hexo
1. 学会看hexo官网文档，在windows下安装可能会有各种问题。请google解决之（我放弃
   了windows，在linux下做hexo博客）。
2. 终端输入hexo -v后，能看到version号，说明安装成功。
> 如果在windows和linux下，不必在意以下细节,
这个fsevents是mac下的。
``npm WARN optional Skipping failed optional dependency /chokidar/fsevents:``
``npm WARN notsup Not compatible with your operating system or architecture:
fsevents@1.1.1``
3.  hexo init blog（创建一个blog文件夹，安装hexo到blog内）
4. cd blog，进入blog文件夹。
5. npm i（cnpm i）,初始化hexo，安装package.json里面的包。
6. 输入hexo server，启动服务器。应该是在local:4000能看到你的hexo博客，但很丑。
> ps:
1，有时hexo server后，出现
``INFO  Start processing``
``INFO  Hexo is running at http://localhost:4002/. Press Ctrl+C to stop.``
但在localhost:4000访问不到，可能有程序占用了4000窗口,查看端口的cmd命令为
netstat -ano，方法两种，一是结束该端口占用，不建议使用。二是配置config，可以配
置项目config文件
在最后加入：
`server:`
　　``   port: 4002``
　　``   compress: true``
　　``   header: true``
2, 如果提示没有找到index可能是themes主题出错了。

* * * 
# 安装themes
1. 安装一个主题，我的是
   [next](http://theme-next.iissnan.com/getting-started.html)主题
> 请在根目录，也就是blog下的终端执行以下命令
`git clone https://github.com/iissnan/hexo-theme-next themes/next`
2. 按照博客项目的_config.yml文件，配置themes: next(next前记得带空格)。
3. 还可以配置next下的config.yml配置头像，风格等。
* * * 
# 配置tags
1. 添加tags。
blog 目录下执行以下命令
`hexo new page "tags"`
时，source多了一个tags文件夹，这里吗是[tags](localhost:4000/tags/)页的主页,目
前没有标签
编辑这个index.md，添加``type: "tags"``(冒号后带空格),使之成为：
    ---
    title: tags
    date: 2017-04-06 14:48:36
    type: "tags"
    ---
    
2. blog目录下执行
``hexo new myFristPageForTag``，新建了一个page
3. 配置项目配置文件（主目录下的config.yml）# Directory 下的tag_dir: tags(有的
   版本这个是默认的，不需要配置)
4. 打开source/_post下的 myFristPageForTag, 编辑tags
`tags: [html, css, js]`
*别忘记冒号之后的空格*
5. 重启hexo server
6. windows下的deploy会有问题，
`
$ hexo d
ERROR Deployer not found: git
`
请安装``npm install hexo-deployer-git --save``
* * *
# 两个pc都想更新hexo怎么办？
方法见[知乎转载](https://www.zhihu.com/question/21193762)，为防止丢失，转载如
下：
作者：CrazyMilk
链接：https://www.zhihu.com/question/21193762/answer/79109280
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

一、关于搭建的流程
1. 创建仓库，http://CrazyMilk.github.io；
2. 创建两个分支：master 与 hexo；
3. 设置hexo为默认分支（因为我们只需要手动管理这个分支上的Hexo网站文件）；
4. 使用git clone git@github.com:CrazyMilk/CrazyMilk.github.io.git拷贝仓库；
5. 在本地http://CrazyMilk.github.io文件夹下通过Git bash依次执行npm install hexo、hexo init、npm install 和 npm install hexo-deployer-git（此时当前分支应显示为hexo）;
6. 修改_config.yml中的deploy参数，分支应为master；
7. 依次执行git add .、git commit -m "..."、git push origin hexo提交网站相关的文件；
8. 执行hexo g -d生成网站并部署到GitHub上。这样一来，在GitHub上的http://CrazyMilk.github.io仓库就有两个分支，一个hexo分支用来存放网站的原始文件，一个master分支用来存放生成的静态网页。完美( •̀ ω •́ )y！

二、关于日常的改动流程在本地对博客进行修改（添加新博文、修改样式等等）后，通过下面的流程进行管理。
1. 依次执行git add .、git commit -m "..."、git push origin hexo指令将改动推送到GitHub（此时当前分支应为hexo）；
2. 然后才执行hexo g -d发布网站到master分支上。虽然两个过程顺序调转一般不会有问题，不过逻辑上这样的顺序是绝对没问题的（例如突然死机要重装了，悲催....的情况，调转顺序就有问题了）。
三、本地资料丢失后的流程当重装电脑之后，或者想在其他电脑上修改博客，可以使用下列步骤：
1. 使用git clone git@github.com:CrazyMilk/CrazyMilk.github.io.git拷贝仓库（默认分支为hexo）；
2. 在本地新拷贝的http://CrazyMilk.github.io文件夹下通过Git bash依次执行下列指令：npm install hexo、npm install、npm install hexo-deployer-git（记得，不需要hexo init这条指令）。

版权归[CrazyMilk](http://crazymilk.github.io/)
* * *
# 看完上面的知乎转的教程。在做两个pc更新hexo的过程中，会遇到两个问题。
## 本地hexo init 的文件没有git，需要将远程分支和现分支关联。($ 表示在bash进行)

1. 需要``$ git init``建立本地库。
2. ``$ git remote add origin https://github.com/yinsang/yinsang.github.io.git``
3. 如果远程库有数据，可能还需要用到`` $ git pull ``下载数据；
``$ git branch --set-upstream hexo origin/hexo``来关联，具体情况按照git提示来做。多用google搜索
`$ git push -u origin master`来推送到远程库
本身默认的主题上传到hexo分支没有问题，但如果用git clone下来的是不可以的
如果想用git clone 下来的theme，是不能上传到hexo
分支的，例如next主题，上传后的next会是个空文件夹。解决方案见：[theme next](https://github.com/iissnan/hexo-theme-next/issues/932)
需要用subtree解决。需要先fork  next的github项目，再 subtree你自己的next项目
将next项目当作子项目放在themes下面才可以git push到yinsang.github.io里。
* * * 
# 如何修改favicon
参见[stackoverflow](http://stackoverflow.com/questions/30291588/add-favicon-to-hexo-blog)
for example, I use hexo-theme-next theme. I change code in themes/next/_config.yml.

``# Put your favicon.ico into `hexo-site/source/` directory.``
``favicon: images/favicon.ico``

I put my favicon.ico in themes/next/source/images/favicon.ico
well Done.






