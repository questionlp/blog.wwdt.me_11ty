---
id: 59
title: 'wwdt.me Shortened URLs for linking to WWDTM shows on NPR.org'
date: '2012-07-22T11:41:15-08:00'
author: 'Linh Pham'
guid: 'http://wwdt.me/blog/?p=59'
permalink: /2012/07/shortened-urls-for-linking-to-wwdtm-shows-on-npr-org/
categories: ['Blog Posts']
tags: ['Development']
---

In efforts to make linking to specific Wait Wait... Don't Tell Me! shows on NPR's website easier, I have created a simple URL shortening system that anyone can use. In fact, I have already updated the current [Stats Page](https://stats.wwdt.me/) to use the new URLs to reduce the overall page size.

There are two formats for the new shortened URLs:

* `http://wwdt.me/s/YYYYMMDD`
* `http://wwdt.me/s/YYYY-MM-DD`

To use either, just replace "YYYY" with the four-digit year, "MM" with the two digit month and "DD" with the two digit day. For example, to link to this past week's page on NPR.org, the shortened URLs are: <http://wwdt.me/s/20120721> and <http://wwdt.me/s/2012-07-21>.

There are some sanity checks to verify that there is a show corresponding to the date in the URL. If there isn't, it will redirect you to the Stats Page.
