---
title: A focus on Web for Visual Studio - What I'd love to see
date: 2022-04-02
layout: post
published: true
---

A while ago I saw a role at Microsoft advertised, for what I considered to be quite a niche piece of the Visual Studio product. They were engineering leads for the Visual Studio Editor, and managing Identity (think Github logins). This had me wondering, is there anyone who's job is higher level and constantly asking:

> "What do web developers want from Visual Studio?"

It turns out that no - there wasn't, but finally a year later this role has been created! ...and since I promised a year ago that I'd give my feedback for what I wanted to see from this role, here are a few ideas and topics of focus for the lucky person selected to tackle this job! Better late than never 😊

PS, if you're interested the role is still up for grabs at the time of writing.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🚨 Opening on my team in Visual Studio for .NET web developers. <br><br>I&#39;m looking for a product manager who is passionate about web development and help improving the experience for the .NET developer who is using Visual Studio for front-end and backend development. 1/n</p>&mdash; Tim (@timheuer) <a href="https://twitter.com/timheuer/status/1493692458214912000?ref_src=twsrc%5Etfw">February 15, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<br /><br />

## Better javascript framework support

Ask any .NET web developer what the largest failing of Visual Studio is, and I bet a significant portion will tell you about javascript problems. Even before the relatively recent rise in popularity of javascript frameworks like React, Angular, Vue etc... the javascript handling within the Visual Studio editor wasn't fantastic.

Efforts were made to support intellisense and not bog down the system while trying to do so. These sufficed right up until the mainstream adoption of javascript modules in all their various incarnations (CommonJS, AMD, UMD, SystemJS, ES6/ES2015 modules).

This was the beginning of the end in my opinion. Since then, we've had support for Grunt and Gulp, npm is kinda bundled in there too; We've had templates for Angular and React SPAs with .NET backends; and there's been an effort to keep up with trends, but javascript is such an empire that it's difficult to do it well.

The thing that makes this worse is that VS Code seems to effortlessly handle all javascript scenarios thrown at it, with great performance and intuitive design.

## Better application launch handling

The app I work on all day has about 8 runnable things (Web apps or console apps mostly). Most of the time I want to be running 4 of those things, sometimes I would like to debug one or two of those things, and all of the time I would like to be able to build!

I've been used to using IIS Express to keep the web apps going, but since .net 5 or 6 (don't know when) it appears console windows launch for just about everything. I'm not a CLI/Console fan so I may be biased, but I would love a panel that has all my runnable things, the running status and the ability to switch between running, stopped and debugging. No console windows, just a convenient heads up display and the ability to build without needing to stop and rerun projects.

## [more to come]

I'm still writing this post as I go, but figured I'd publish it so what I already have is visible.
