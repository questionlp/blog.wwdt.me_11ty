---
id: 223
title: 'Say Hello to Wait Wait Stats Page, Version 3.0!'
date: '2014-01-30T22:45:56-08:00'
author: 'Linh Pham'
guid: 'http://blog.wwdt.me/?p=223'
permalink: /2014/01/say-hello-to-wait-wait-stats-page-version-3-0/
image: /images/2014/01/1.png
categories: ['Blog Posts']
tags: ['Announcements', 'Stats Page']
---

I've been waiting quite a while to say this: Wait Wait... Don't Tell Me! Stats Page Version 3.0 is now live and ready to use!

First and foremost, one thing that you'll notice is that the Stats Page's address is now just <http://wwdt.me>. After reviewing the structure of the new Stats Page, I wanted the URL to reflect both the site design's and the site structure's simplicity. I have set up redirects for the old address, <http://wwdt.me/stats>, to point to the new address. That way, if you have any bookmarks or links to the site, the links will continue to work. Also, the Stats Page's name has been simplified to just be, "Wait Wait... Don't Tell Me! Stats and Show Details."

![Wait Wait Stats Page Version 3.0: Home Page](/images/2014/01/1.png)

If you [read the sneak peek of the new Stats Page]({{ "/2014/01/previewing-wait-wait-stats-page-version-3-0/" | url }}), you will notice a few cosmetic changes that have been made. First, the navigation menu no longer has a blue background. The background was used to verify the rendering of the page and make sure that there wasn't any instances of items overlapping when viewed on mobile devices.

The other cosmetic changes include a color scheme that is inspired by the colors of the recently updated Wait Wait... Don't Tell Me! logo and web site.

![Wait Wait Stats Page Version 3.0: Panelist Stats](/images/2014/01/2.png)

Since the last sneak peek of the Stats Page, there have been a couple of minor features that have been re-worked or added. One of those features is to flag which show is a Best Of compilation show and which show is a repeat. Above is an example of how such shows are denoted, "**(B)**" and "**(R)**" respectively and "**(R/B)**" if its both, when viewing the Panelist detailed stats, show host and scorekeeper, and Not My Job guests pages.

![Wait Wait Stats Page Version 3.0: Individual Show Details](/images/2014/01/3.png)

When viewing a show's detail, be it in a list or on its own details page, such shows are marked as such with text below the show's date in orange. If the show is a repeat show, it will state which show it is a repeat of and it will have an arrow linking to that show's detail page. If you are feeling a bit overwhelmed by the changes, feel free to check out the [About](https://stats.wwdt.me/about) and <del>Help</del> pages on the site for a bit more information.

Apart from the major redesign and restructuring of the Stats Page, there have been quite a few major changes behind the scenes as well. Even though the site is still written in PHP and its data stored in a MySQL database, I opted to use a lightweight PHP web application framework to do some of the heavy lifting; but, a lot of the Stats Page specific code has been completely re-written from scratch. The side-effect of the restructuring of the site's code and the overall site, one change that you'll notice upfront is that all of the pages are rendered and served live.

The previous version of the Stats Page would render the page every week and the web server will serve that static version until the next time it is re-rendered. This really helped reduce load on the server; but, as a side effect, made things harder to update and verify. Since the new Stats Page is rendered and served live, this makes all updates to the data be shown in real time. In order to save both load on the server and bandwidth for mobile devices, each page that you visit will be cached, by the browser, for an hour. You can still hit the Refresh button and get an update as needed.

For now, the graphs displayed on the Panelist stats pages are only rendered once every weekend. This will be an item that I'll be working on for the next major update of the Stats Page.

If you have any questions, feel free to post them below. Hope you like the new Stats Page!

P.S. For those that have read this post to the end, there are two different Easter Eggs embedded in the new Stats Page. Have fun finding them :)
