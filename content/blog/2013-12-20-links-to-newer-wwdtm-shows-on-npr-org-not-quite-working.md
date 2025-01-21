---
id: 170
title: 'Links to Newer WWDTM Shows on NPR.org Not Quite Working'
date: '2013-12-20T20:49:25-08:00'
author: 'Linh Pham'
guid: 'http://wwdt.me/blog/?p=170'
permalink: /2013/12/links-to-newer-wwdtm-shows-on-npr-org-not-quite-working/
categories: ['Blog Posts']
tags: ['Content', 'NPR.org', 'Stats Page']
---

Due to a very recent [Wait Wait... Don't Tell Me!](http://waitwait.npr.org/) site redesign on [NPR.org](http://npr.org/), and restructuring of the URLs for shows starting with January 2006, links for those sites on the [Stats Page](https://stats.wwdt.me/) no longer bring up that specific show on NPR's site.

Up until recently, the URL format for each individual show (starting with the 2006-01-07 show) on NPR.org was:

`http://www.npr.org/templates/rundowns/rundown.php?prgId=35&prgDate=<four-digit year>-<two-digit month>-<two-digit day>`

Now, individual show URL format includes some unique identifier slapped in the middle of the URL:

`http://www.npr.org/programs/wait-wait-dont-tell-me/<four-digit year>/<two-digit month>/<two-digit day>/<unique identifier>/?showDate=<four-digit year>-<two-digit month>-<two-digit day>`

Until I can work out a way to programmatically generate links to individual shows after 2005 to include that unique identifier, those links will just end up redirecting to the main Wait Wait... Don't Tell Me! site on NPR.org.

I apologize for the inconvenience. _/sigh_
