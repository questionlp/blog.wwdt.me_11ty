---
id: 1901
title: 'Wait Wait Stats Page Version 4 Released!'
date: '2019-11-22T21:15:14-08:00'
author: 'Linh Pham'
guid: 'https://blog.wwdt.me/?p=1901'
permalink: /2019/11/wait-wait-stats-page-version-4-released/
categories: ['Blog Posts']
tags: ['Announcements', 'Development', 'Stats Page', 'Web Development']
---

This year has been full of new projects surrounding the [Wait Wait... Don't Tell Me! Stats Page](https://stats.wwdt.me/), including the development and release of a data access layer library, [libwwdtm](https://github.com/questionlp/libwwdtm), developed in Python, the [Wait Wait Stats API]({{ "/2019/07/wait-wait-dont-tell-me-stats-api-is-live/" | url }}), and the [Wait Wait Reports](/2019/10/the-1000th-show-taping-and-new-wait-wait-stats-reports/) site. All three of those projects were done as a building blocks for the next big thing: version 4 of the Wait Wait Stats Page!

Back in 2018, I made the decision to step away from the codebase for version 3.x of the Stats Page; which, was written in PHP and made some use of the Silex micro-framework. While it would have been feasible to continue building on top of that codebase, it would have required a significant re-write in order to meet the requirements that I had for the new version:

* Mobile-first user experience
* Moving the server stack away from Apache HTTP Server and PHP
* Re-usable core that can be used for the Stats Page and the, then, planned Stats API
* Separation of logic and front-end generation

The re-usable core was the first piece that was developed, libwwdtm, as it would be the foundation for nearly all of the projects that I would be building afterwards. Since all of the new development would be done in Python and the web applications, the second item would take care of itself. Separating of logic and front-end generation would be taken care of by using the [Jinja](https://jinja.palletsprojects.com/) templating engine that is bundled with the [Flask](https://flask.palletsprojects.com/) micro-framework.

Choosing the framework for creating a mobile-first user experience took a bit more consideration and experimentation. Previously, I had created a couple of concepts of what the new Stats Page would look like using the [Materialize](https://materializecss.com/) framework. While the core functionality was present for the version that I had being using (around 0.97-ish), the dependency on jQuery and the sluggish performance on mobile devices were significant letdowns.

For the Stats Reports site, I opted to use Pure CSS for the Reports site as I only needed a handful of responsive components; primarily: grids, tables and CSS media helpers. I spent a couple of weeks trying out other Material Design-inspired frameworks, including MUI CSS, Surface and Material Design Lite (MDL). Surface and MUI CSS were the top contenders as development on MDL had stopped with development shifted to Material Components for Web. I also gave Materialize another shot, as they recently released version 1.0.0 and no longer had a dependency on jQuery.

Surface and MUI CSS provided many of the features that I would need without the need to do a lot of customization; but, the missing features would have required spending time on front-end development work. With Materialize 1.0.0, the performance on mobile devices improved significantly and all of the customizations that I needed could be done in CSS.

![Wait Wait Reports Site home page](/images/2019/11/Reports-Site-Landing-Page.png)

![Not My Job Scoring Exceptions report](/images/2019/11/Reports-Site-Guest-Scoring-Exceptions-Report.png)

Focusing back on the application logic side of things, the experience that I gained from building the Stats API and the Reports site using Flask, and Jinja for the report templates, helped reduce the amount of time required to bootstrap the Stats Page project. I also had gotten a lot more familiar with NGINX and uWSGI with the deployment of those two sites; so, standing up new instances and sites were a breeze.

A good amount of time spent on developing the new Stats Page was on building out each of the views and getting the data presented appropriately (both in terms of logic and design). Due to a couple of bugs in libwwdtm, I had to go back and fix those issues before I could complete them in the Stats Page code. Incorporating the Materialize components, choosing the color schemes and making them look and work seamlessly across various devices took up the majority of the time. And yes, as you can see below, I included a dark mode theme done using the CSS `prefers-color-scheme` media selector; which, will be activated based on your device's and/or browser's dark mode setting.

![Wait Wait Stats Page v4 in light mode](/images/2019/11/Stats-Page-V4-Light-Mode.png)

![Wait Wait Stats Page v4 in dark mode](/images/2019/11/Stats-Page-V4-Dark-Mode.png)

The other key element of the site's design is the selection of the base font: [IBM Plex Sans](https://www.ibm.com/plex/). When IBM released the IBM Plex family of fonts, I immediately fell in love with the clean and elegant design of its sans serif and monospace (IBM Plex Mono) families. Both would fit in with the minimal site design and befits the representation of data. I also chose the font as the base font for the Reports site for the same reasons.

Even though I was able to port over all of the logic from version 3 to version 4 of the Stats Page, while sticking to the mobile-first design philosophy, not everything could make it over intact. Below is a non-comprehensive list of differences between the two version:

* Panelist rankings on show pages, hosts and/or scorekeepers that are filling in and shows that are not recorded from their home at Chase Auditorium are no longer distinguished by color. Instead, guest hosts and scorekeepers will have a "Guest: " label before their name and the rank is listed before each panelist's name for non-Best Of shows.
* Going to the Guests, Hosts, Panelists and Scorekeepers pages no longer provide details for all of the people. Instead, the pages provides a link to each of the respective guest, host, panelist and scorekeeper details. This was done to reduce load and render time; as well as, to reduce overall clutter.
* The main Shows page provides a list of links to each year and each year's page provides a list of each month available. There is also an "All Shows from" link for each year. This was done for the same reasons as above.
* Each of the guest, host, panelist, scorekeeper and show details page now includes a badge with their respective database ID number. This used to be hidden from the production version of the site; but, it is now displayed prominently so that they can be used to pull the data from the Stats API using the respective ID.
* The details page for each panelist no longer include a Scoring Breakdown or a Score Graph. Those graphs will eventually be re-done using a different charting library that will be more mobile-friendly.
* Also, the detail in which displayed when a panelist last won outright and last tied for first place are no longer included. That information will also be made available on the Reports site at a later time.
* The Help and Search pages are no longer due to limited use.

Even though the site has now been official launched, I will still continue to work on ironing out any bugs that I didn't catch during the testing period and trying to incorporate new features as they are requested. I will be working on creating the reports mentioned above. Working on building up the foundation, the Stats API, the Reports site and the new version of the Stats Page has been absolutely fun and has helped me grow as a developer.

Lastly, for those who are interested into diving into the code, the source code for the new version of the Stats Page is published under the terms of [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) and is available on GitHub at [questionlp/stats.wwdt.me](https://github.com/questionlp/stats.wwdt.me). You will also find the source code for libwwdtm, the Stats API and Reports site published under the same license and [github.com/questionlp](https://github.com/questionlp).
