---
id: 1432
title: 'New Panelist vs Panelist Report'
date: '2019-04-26T11:31:04-08:00'
author: 'Linh Pham'
guid: 'https://blog.wwdt.me/?p=1432'
permalink: /2019/04/new-panelist-vs-panelist-report/
categories: ['Blog Posts']
tags: ['Panelists', 'Statistics', 'Stats Page']
---

Over the past couple of months while continuing to work on code that would power the next projects for the [Wait Wait... Don't Tell Me! Stats Page](https://stats.wwdt.me/), I wanted to figure out a way to see how well a panelist has fared against another panelist (say: Adam Felber vs Faith Salie and Luke Burbank vs Roxanne Roberts). After a number of sleepless nights, a lot more than I am willing to admit, I worked out how to pull the data from the Stats Page database and pieced together some of the logic behind it.

Since the overall development on the code for the current version of the Stats Page has ceased and any work has moved over to the new data access libraries and web application frameworks written in Python, the new report would also have to be developed in Python. Thus, I started working on a couple of proofs of concepts that would just output raw JSON so that I could validate the data before moving on to a proper web-based presentation. Once the resulting data was verified, I started writing the HTML template that would be used and get the design ironed out.

Instead of using a full design framework like Materialize, I decided to give a CSS-only framework called [Pure](https://pure-css.github.io/) a shot. This would give me a chance to learn how it works and how easy it would be to make the report be a mobile-first, responsive design. While it does provide a lot more features and functionality than I would need for this report template; I'm not completely sold on it being the sole framework for the next version of the Stats Page.

Anyway, after a few hours of playing around with a design that was readable on mobile and on larger screens, and doing a good bit of code cleanup and optimization, I present to you the new report.

![The new Panelist vs Panelist report](/images/2019/04/WWDTM-Panelist-vs-Panelist-Report-cropped.png)

You can view the report by going to <https://reports.wwdt.me/panelists/panelist-vs-panelist/all> or clicking on the "Panelist vs Panelist: All" link in the "Panelist" section of the [Wait Wait Reports Site](https://reports.wwdt.me/).

For the time being, the Python script that generates the report runs every 30 minutes. Since panelist scores and ranks aren't added more often than once a week, I think running it every 30 minutes is quite sufficient. There are a few things that I will probably need to add, such as a link back to the Stats Page and possibly links to each of the panelist pages.

_**Update:**_ Side navigation menu with links to each panelist have been added, along with a link back to the Stats Page.
