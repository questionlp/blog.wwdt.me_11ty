---
id: 152
title: 'Wait Wait Stats Update: Panelist Appearances'
date: '2011-09-12T20:45:47-08:00'
author: 'Linh Pham'
guid: 'http://wwdt.me/blog/?p=152'
permalink: /2011/09/wait-wait-stats-update-panelist-appearances/
categories: ['Archived Blog Post']
tags: ['Statistics']
---

One of the features that I had been wanting to add to the [Wait Wait... Don't Tell Me! Statistics Page](https://stats.wwdt.me/) was to display when a panelist first appeared on Wait Wait and when was the panelist's most recent appearance on the show. A [fellow Wait Wait (and Paula Poundstone) enthusiast](https://twitter.com/#!/ojoya) also asked about adding the feature as well.

So, after a little bit of tinkering around with SQL queries, I was able to work out a view that I could query from the page's PHP code. At first, the query included every show in which the panelist was on, including repeat and best of shows. The problem with that is not all best of shows have panelists associated to them, so the dates would not be as accurate as possible. A compromise was made to exclude appearances on repeats and best of shows.

The first draft was made available to the enthusiast with great appreciation. I have published an updated version of the page that links the first and latest panelist appearance dates to that show's row on the page (more information about that feature was [blogged recently]({{ "/2011/08/wait-wait-stats-update-jumping-down-to-a-specific-show/" | url }})).

I am looking at possibly turning each of the panelist listed for each show into a link that points to the panelist entry towards the end of the page. The only problem that I can foresee is that the panelist's standing is already color coded and the link would alter that; otherwise, the link would not be evident. Maybe I'll find a different way to handle that.
