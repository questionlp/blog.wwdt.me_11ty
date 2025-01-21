---
id: 334
title: 'Host and Scorekeeper Updates on Wait Wait Stats Page'
date: '2014-07-30T10:53:00-08:00'
author: 'Linh Pham'
guid: 'http://blog.wwdt.me/?p=334'
permalink: /2014/07/host-and-scorekeeper-updates-on-wait-wait-stats-page/
categories: ['Blog Posts']
tags: ['Stats Page', 'Update', 'Web Development']
---

I have updated the Wait Wait... Don't Tell Me! Stats Page with a couple of minor changes that correct how some of the hosts and scorekeepers are displayed. Originally, the code would highlight the listed host and/or scorekeeper if the host was not Peter Sagal and the scorekeeper was not Carl Kasell.

That code needed to be changed to reflect that Dan Coffey was the original host of the show prior to its reboot, where Peter Sagal took over hosting duties. Also, with Bill Kurtis becoming the official judge and scorekeeper of the show after Carl Kasell becoming "Scorekeeper Emeritus," the code also needed to reflect that change. The code also had to handle the fact that Bill Kurtis was a guest judge and scorekeeper for a period of time before becoming the official judge and scorekeeper.

So, to handle some of those exceptions to the rule, the database tables listing who was the host and scorekeeper of each show were modified to include a new field denoting whether or not the host or scorekeeper for a particular show is a guest or not. The code for the page was updated to use that flag to determine how to render the name of the host and scorekeeper for each show.

This change has been something that I had been considering a bit before Carl Kasell's final show as official judge and scorekeeper. I finally had some free time to think about how to implement and make the change public.

The next major version of the Stats Page will see another major change in the panelist scoring charts. The goal is to make the charts more interactive and more useful as more and more panelist data is entered into the database.
