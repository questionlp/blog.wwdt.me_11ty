---
id: 131
title: 'Plans for Wait Wait Statistics Site'
date: '2010-10-18T21:59:16-08:00'
author: 'Linh Pham'
guid: 'http://wwdt.me/blog/?p=131'
permalink: /2010/10/plans-for-wait-wait-statistics-site/
categories: ['Archived Blog Post']
tags: ['Statistics', 'Web Development']
---

A bit over three years ago, I published the initial version of the [Wait Wait... Don't Tell Me! Statistics](https://stats.wwdt.me) site. Since the site went live, I have made some changes and bug fixes over the years, but the general functionality hasn't really changed. Another Wait Wait fan has taken some of the published statistics and ran and [posted some analysis](http://soquoted.blogspot.com/2010/10/bet-on-adam-and-kyrie-and-bet-against.html).

In the post, the fan mentioned the lack of any notes on which panelist had the correct bluff and which one bluffed well enough to fool the listener, as well as displaying the points breakdown for the Lightning Fill-in-the-Blank round. I have some good news and some bad news: I have collected a good number of which panelist had the correct bluff, but not for all shows nor do have I collected which panelist's bluff was chosen. I also have the points breakdown for the Lightning Fill-in-the-Blank round for most of the shows, but not all of them.

I have been pondering a complete re-work of the statistics site for a while, including using some well-known frameworks (including: [Django](http://www.djangoproject.com/) and [CodeIgniter](http://codeigniter.com/)) to reduce the amount of writing and tweaking code, functions and/or stored procedures. Right now, it the site contains the index page with a boat-load of PHP markup, two other includes, and another script that handles the manual generation of the panelist score graphs. All of the data entry is manually done with a GUI database access tool ([SQL Manager Lite for MySQL](http://www.sqlmanager.net/products/mysql/manager)), which has been working; but, it is just not optimal or user friendly (the tables are dang close to 3NF, or third normal form).

I would love to incorporate the displaying of the requested items, so long as I have collected the necessary data, but it will have to wait until I can start designing and building the next version of the site. Another project that I have been considering is a private administrative interface, something that is more user friendly and graphical.

Please note that all of the maintenance of the site is done during my spare time (which hasn't been a whole lot) and is done without any direct or indirect support (financial or otherwise), association or affiliation from [NPR](http://www.npr.org/), [Chicago Public Radio](http://chicagopublicradio.org/default.aspx) or Urgent Haircut Productions. I have been lucky enough to have the site mentioned by Peter Sagal on his blog and on Twitter.
