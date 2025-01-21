---
id: 916
title: 'Stats Page Version 3.4.0: Correcting Some Design Mistakes'
date: '2018-12-18T13:42:14-08:00'
author: 'Linh Pham'
guid: 'https://blog.wwdt.me/?p=916'
permalink: /2018/12/stats-page-version-3-4-0-correcting-some-design-mistakes/
categories: ['Blog Posts']
tags: ['Database', 'Development', 'Stats Page', 'Web Development']
---

Ever since I started working on version 3.0 of the Wait Wait... Don't Tell Me! Stats Page, one of the design decisions that I made when it came to the individual host, scorekeeper, panelist and guest pages was to use the specially encoded names in the URL. The encoding process would convert certain characters, such as a space, into their URL-encoded version, or "%20" in the case of a space.

Well, looking back, that was not really the smartest way of doing it; and, ever since version 3.0 was published back in 2014, I was afraid of breaking any links that may have been created with that URL format and did not have a lot of spare time to re-design the whole thing. As months and years went by, that problem lingered in the back of my head.

Fast forward to this month, where I found a few extra hours between work and everything else that has been going on in my life to actually sit down and committed myself to fixing it. Since I had been planning on developing a set of publicly-accessible APIs that can be used to query the database that the Stats Page pulls its data from, I knew that I had to work on making host, scorekeeper, panelist and guest names more URL friendly.

With that in mind, I decided to extend the corresponding tables to add a new column for each one: a slug for each entry. To "slugify" a name or some text is to convert that string by replacing special characters like spaces, quotes and parentheses with a simple hyphen, converting everything to lowercase, and even shortening the strings. You'll often see this with blogs, Facebook or other sites that need to present a search engine friendly URL that is also fairly human-readable. For example, "Peter Sagal" would turn into "peter-sagal" and "P.J. O'Rourke" would turn into "p-j-o-rourke". Both slugified strings are still pretty readable and don't include any funky encoded chunks in them.

The next step was to update the URL routing and views on the site to accept both the original URLs and the new slugified URLs. That required a good amount of re-jiggering of the code. After a few hours of repeatedly coding, testing, and cursing, I was able to get everything working properly. So, if you had bookmarked any of the individual host, scorekeeper, panelist or guest page, you should still be able to get to them. What you will now notice is that all of the links to those pages will now point to the new, slugified URLs. For instance, you can go to Peter Sagal's host page by going to either <http://wwdt.me/hosts/Peter%20Sagal> or <http://wwdt.me/hosts/peter-sagal>.

This will probably be the last major change to the version 3 branch of the Stats Page. Any new work will (eventually) be put towards the new version 4 branch of the site; which, will focus primarily on a mobile-first design and incorporating features that have been in the backlog over the past year or so.
