---
id: 28
title: 'Sneak Peek: Database Design for Version 2.0'
date: '2012-06-02T08:30:23-08:00'
author: 'Linh Pham'
guid: 'http://wwdt.me/blog/?p=28'
permalink: /2012/06/sneak-peek-database-design-for-version-2-0/
image: /images/2012/07/wwdtm_v2-eer-20120720.png
categories: ['Blog Posts']
tags: ['Data Structure', 'Database', 'Stats Page']
---

For all of the Wait Wait fans out there that also are into database designs, you are in for a small treat. Below is an EER diagram of the recently updated database used to house the statistics and other information for the Stats Page.

![Database enhanced ER diagram for the wwdtm_v2 database](/images/2012/06/wwdtm_v2-eer.png)

My goal is to get the database data and tables as normalized as possible by way of mapping tables. As you can see from the "ww_showpnlmap" table that I have fields for recording: how many points each panelist had, how many points each panelist had before and how many questions the panelists answered correctly during the Lightning Fill-in-the-Blank round. I don't have data for every single show or panelist at this point.

Right now, there is one additional mapping table that I will need to create before I can start entering data about where each show was recorded.

That's all that of a sneak peek I have for you today. If you have any questions, please feel free to post them as comments.
