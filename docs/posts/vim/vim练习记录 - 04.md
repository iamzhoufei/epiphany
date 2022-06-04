---
# 这是侧边栏索引
order: 1
# 这是页面的图标
icon: page
# 这是文档的标题
title: vim练习记录 - 04
# 设置作者
author: 舟匪
# 设置写作时间
date: 2022-04-22
# 此页面会在文档列表置顶
sticky: false
# 此页面会出现在首页的文档板块中
star: false
category:
  - 技能学习
tag:
  - vim
---

今天学习vim中关于单个字符的操作！冲一下！

<!-- more -->

## 改键

- ↑ → ctrl + k
- ↓ → ctrl + j
- ← → ctrl + h
- → → ctrl + l

## 操作

- x → 删除当前光标的字符
- X → 删除当前光标前的字符
- s → 删除当前光标的字符并进入insert模式
- S → 删除当前光标所在行并进入insert模式
- r → 替换一个字符
- R → 替换多个字符
  
## undo/redo

> 可撤销块：进入insert模式开始，直到返回normal模式为止，在此期间的输入或删错任何内容都会被当作一次修改
> insert模式下的上下左右async 移动也算作一次

- u → 撤销一次
- ctrl + r → 回退撤销
