---
id: 146
title: 'Wait Wait Stats Update: Page Loads'
date: '2011-07-06T12:14:23-08:00'
author: 'Linh Pham'
guid: 'http://wwdt.me/blog/?p=146'
permalink: /2011/07/wait-wait-stats-update-page-loads/
categories: ['Archived Blog Post']
tags: ['Content Serving', 'Statistics', 'Stats Page']
---

I have made a significant change to how the [Wait Wait Stats Page](https://stats.wwdt.me/) is served up to visitors. Up until earlier this morning, each page view required the server to process and parse through all of the data, then serve up the results. Each time the page is processed takes about a second and requires the server to send out the contents out in its entirety, even if there hasn't been any changes. That's a waste of time and bandwidth (both mine and yours), along with processor cycles.

With the new change, the server generates a static version of the page every Saturday at 13:00 (Pacific Time) and each request of the Wait Wait Stats page will go through a simple script that determines if the static file is newer than original dynamic script file. If it is, the server provides the last modified date and time of the static file to the browser along with the contents of the static file. In the case where the dynamic script file has been updated before the static file was last generated (due to a bugfix or coding update), the dynamic version will be used instead.

So, how does that help save bandwidth? Well, if you visit the page for the first time after the static file has been generated, your browser would be able to cache that page. By caching the page, each time to view the page again, only a small amount of traffic has to be sent back and forth, as the browser will use the cached version of the page. The next time that you view the page after the next time the static file has been updated, the browser will note the new modified time and pull in the updated page.

Since I am in the slow process of updating information for older shows, I have the ability to generate the static file manually so that the changes will be available in a timely manner.

I know... that was a lot of techie jargon. At the end of the day, this change should be a win-win for everyone, including my poor DSL circuit (which is where my server is currently hosted through). If you have any questions, feel free to post a comment to this blog post.
