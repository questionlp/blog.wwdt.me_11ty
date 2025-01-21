---
id: 1787
title: "Wait Wait... Don't Tell Me! Stats API is Live"
date: '2019-07-24T10:00:37-08:00'
author: 'Linh Pham'
guid: 'https://blog.wwdt.me/?p=1787'
permalink: /2019/07/wait-wait-dont-tell-me-stats-api-is-live/
categories: ['Blog Posts']
tags: ['API', 'Data', 'Web Development']
---
For the past few years, people have requested access to the data that I have been collecting for the [Wait Wait Stats Page](https://stats.wwdt.me/) to play around with the data or build a brilliant, [interactive infographic](https://mataglap.com/wwdtm/). Each of those requests would require that a data export of the requested tables or a MySQL/MariaDB database dump to be created and sent over to the requester. Of course, those exports and database dumps are just snapshots of the data and another request was needed to get update data each time.

That got me thinking about what it would take to create an API service that people can use to get data directly from the Stats Page database. At that time, I wasn't sold on the idea of extending the PHP codebase that is used for the current Stats Page; as, I was looking at doing a completely re-work of the Stats Page at some point and wanted the code that I would write for an API to also be re-usable for the next version of the Stats Page. I was waffling between writing the new codebase in Python, something that I was already quite familiar with, and TypeScript. While the latter is something that would be interesting to learn, I didn't have the spare time to pick up a new language and the surrounding frameworks and toolsets; so, Python it was.

Before I would start work on the API service, I would need to create a data access library, or DAL, can could be used for both the API service and the next version of the Stats Page. Initially, I thought that I would have been able to blitz through building that in less 2 months; plus, a couple of weeks to validate the results against the current PHP code and the data in the database. Unfortunately, between the amount of extra time that I would be working at night and other commitments popping up, I barely got started by the time July rolled around. By then, I was hoping that I could have finished it before I left for Chicago for the 20th anniversary special. Of course, I didn't make too much more progress when mid-October rolled around either. I had to set the project to the side for a while longer.

![Markdown Preview of the API Design Document](/images/2019/06/API-Endpoint-Documentation.png)

Fast forward to end of April 2019, I finally decided to just set aside 15-20 minutes a night to just documenting what needs to be done, what SQL queries needs to be created and mapping out what the API endpoints were going to be and what the backing functions will be required. Night after night, weekend after weekend, I made a lot of progress in building out the DAL and the test cases for all of the functions. By the end of the Memorial Day weekend, I had reached code complete status on the DAL and was ready to switch over to building the API service.

![Mapping the API Endpoints to DAL Functions](/images/2019/06/API-Endpoints.png)

In the span of about two weeks, I went from having a Markdown document detailing the API endpoints, to a working instance of the API service running locally on my laptop and an instance running on a server at home that closely mimics the new production server. The API service is built on top of the Flask micro-framework, using uWSGI to actually manage the processes and is, then, served through NGINX.

Those who have followed my tweets that I've made throughout the development process may have seen that some of the API endpoints would require authentication due to the amount of data and compute time required to return a result. Instead of requiring authentication for those endpoints, I have decided that implement server-side request caching by way of uWSGI and NGINX would be more efficient.

![Testing API Endpoints Using Postman](/images/2019/06/Postman-API-Testing-1.png)

With the API service now feature complete and code complete, I am opening up the API service to the public. Documentation of the available API endpoints and examples of what the endpoints return is available at <https://api.wwdt.me/docs/>.

For those who are interested in digging into the code for both the Python data access library and the API service, I have released both under Apache License 2.0. The source code for the DAL is available at [github.com/questionlp/libwwdtm](https://github.com/questionlp/libwwdtm); and, the source code for the API service is available at [github.com/questionlp/api.wwdt.me](https://github.com/questionlp/api.wwdt.me).
