---
id: 1873
title: 'The 1000th* Show Taping and New Wait Wait Stats Reports'
date: '2019-10-29T21:52:57-08:00'
author: 'Linh Pham'
guid: 'https://blog.wwdt.me/?p=1873'
permalink: /2019/10/the-1000th-show-taping-and-new-wait-wait-stats-reports/
image: /images/2019/10/APC_1459-300x200.jpg
categories: ['Blog Posts']
tags: ['Data', 'Development', 'Live Taping', 'Reports', 'Stats Page', 'Web Development']
---

Back in March 2019, I was working with Colin Miller at Wait Wait... Don't Tell Me! on a request to pull data regarding the various Wait Wait shows that have aired; especially, getting data on shows that excluded Best Of or Repeat shows. The purpose of the request would later be revealed to be trying to determine when the 1000th`*` original show would land on the schedule. In July, the date and the location for the taping of the 1000th`*` show would start to solidify. The show would be taped in Salt Lake City, Utah and on Thursday, October 24th.

Why Salt Lake City? The very first time that Wait Wait was taped in front of a live audience was at Jewett Center at Westminster College in Salt Lake City back in [January 2000](https://stats.wwdt.me/shows/2000/1/29). So, it would be apropos that Wait Wait would also tape their 1000th* show in Salt Lake City; but, this time, they would tape two shows at the Delta Performance Hall at Eccles Theatre in Downtown Salt Lake. I had the privilege to attend both tapings and attend an after show party at Impact Hub.

![Wait Wait stage before start of the show](/images/2019/10/APC_1456.jpg)

![Projected message from KUER saying "Congratulations on your 1000th show!"](/images/2019/10/APC_1459.jpg)

![Peter Sagal talking to the audience](/images/2019/10/APC_1463.jpg)

As with almost every taping that I am able to attend, Peter Sagal would shine some of the spotlight on me at the end of the audience Q&A segment after introducing everybody who works behind the scenes of each show. There were a lot of people at the party that asked me about the Stats Page and the history behind it. Let's just say that I was a bit exhausted by the end of the night and needed a little bit of recovery time.

All that said, I absolutely enjoyed both shows and getting to meet and talk with the panelists, Peter and everyone who worked to make the shows happen each and every week.

Something that I had been working on since learning about the details of the taping of the 1000th`*` show has been a number of reports that I had put together in celebration of the milestone. One of those were done posted as a tweet thread on Twitter detailing the panelists with the longest win streaks in show history _(Twitter post is no longer available)_. Another report that I created in Python was the number of appearances each panelist has made on the show broken out by year.

![Panelist Appearance Report](/images/2019/10/Screen-Shot-2019-10-29-at-22.26.02.png)

That lead me to start building up a new site that would host these kinds of reports and allow me to quickly add new ones as the need arises; or, even by request. So, I created a new project using [Python](https://python.org), [Flask](https://flask.palletsprojects.com/) and [Jinja](https://jinja.palletsprojects.com/), tools that I have been using to build the [Wait Wait Stats API]({{ "/2019/07/wait-wait-dont-tell-me-stats-api-is-live/" | url }}), data queries for reports that I have been creating. This would also give me another chance to get more familiar with Flask and Jinja as I get closer to building out a brand new version of the Stats Page.

I designed the site and the reports to be as lightweight as possible. For styling, I chose to use [Pure CSS](https://pure-css.github.io/) again. Also, I opted to not use Javascript for the front-end. For the design aesthetic, I have fallen in love with the [IBM Plex](https://www.ibm.com/plex/) family of fonts (as you might have noticed on this site) and knew that I wanted to use it for the new site. It doesn't hurt that IBM [released the font family](https://github.com/IBM/plex) under an open source license either.

In under two weeks, I was able to stand up the new project, port over existing reports, adding a few new ones and publishing it. The new report site is available at [reports.wwdt.me](https://reports.wwdt.me/); and, unlike the two existing reports, the site renders all of the reports live. The two older reports would be generated on a schedule as they needed to be served through the same site as the current Stats Page. On the other hand, the new report site runs on a new server using [NGINX](https://nginx.org/) to serve the Flask app through [uWSGI](https://uwsgi-docs.readthedocs.io/) and static files directly. This is a near-identical set up that I used for the Stats API and will be using for the new Stats Page.

![Wait Wait Reports home page](/images/2019/10/Screen-Shot-2019-10-30-at-10.34.47.png)

![Panel Gender Mix report](/images/2019/10/Screen-Shot-2019-10-30-at-10.35.01.png)

![Panelist Appearances by Year report](/images/2019/10/Screen-Shot-2019-10-30-at-10.34.55.png)

As with the [Stats API](https://github.com/questionlp/api.wwdt.me) and its underlying [libwwdtm](https://github.com/questionlp/libwwdtm) data access library, the code for the new report site is published under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) and the [source code](https://github.com/questionlp/reports.wwdt.me) is available on Github.

<strong>*</strong>: You've been wondering why I have added an asterisk to each instance of "1000th" that I mentioned in this post. While the original calculations that were made did in fact show that the show that would be taped on October 24th and aired the weekend of October 26th should be the 1000th show; but, there seems to have been one additional Best Of show that was snuck into the schedule that wasn't accounted for or was a late decision. You will notice that the show ends up being listed as #999 on the "[Original Shows](https://reports.wwdt.me/shows/original-shows)" report.
