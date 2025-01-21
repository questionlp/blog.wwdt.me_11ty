---
id: 266
title: 'Minor Updates to Wait Wait Stats Page'
date: '2014-04-14T12:11:48-08:00'
author: 'Linh Pham'
guid: 'http://blog.wwdt.me/?p=266'
permalink: /2014/04/minor-updates-to-wait-wait-stats-page/
image: /images/2014/04/wwdtme_updated_pnlstatsbox.png
categories: ['Blog Posts']
tags: ['Panelists', 'Statistics', 'Stats Page']
---

While listening to the [last Thursday's edition](https://sites.libsyn.com/478344/episode-1576-peak-paternity-leave-w-chris-hayes) of [Too Beautiful to Live](https://tbtl.net/), Luke Burbank made a snarky remark that he hasn't won on [Wait Wait... Don't Tell Me!](http://waitwait.npr.org) for something like 35 shows. Even though that comment [was not intended to be a factual statement](http://knowyourmeme.com/memes/events/not-intended-to-be-a-factual-statement), it did make a light bulb flicker in my head. The panelist statistics box includes the last time that he or she last won or was tied for first place and it would take a bit of time to go through the full appearances list to count the number of shows since the panelist has won or tied for first.

That afternoon, I started playing around with a couple of SQL queries to pull that information and filter out things like Best Of and repeat show appearances and got something that gave me a proper result. That night, I rolled out an update to the [Stats Page](https://stats.wwdt.me/) with said information.

![Updated Panelist Statistics Box](/images/2014/04/wwdtme_updated_pnlstatsbox.png)

The updated panelist statistics box now adds "(_X_ show(s) since last appearance)" after each of the dates listed for the last time that a panelist has won or tied for first.

The other updates to the Stats Page are all behind the scenes updates to make rendering of the Stats Page a bit more consistent on the version of Safari included with OS X Mountain Lion (10.8) and Google Chrome for iOS. I have also tweaked the schedule in which the graphs depicting each panelist's point distribution to run each day early in the afternoon.
