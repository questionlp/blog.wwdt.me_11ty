---
id: 1854
title: 'Stats API Updates: Clean Up and Panelist Bluff Statistics'
date: '2019-10-01T11:43:19-08:00'
author: 'Linh Pham'
guid: 'https://blog.wwdt.me/?p=1854'
permalink: /2019/10/stats-api-updates-clean-up-and-panelist-bluff-statistics/
categories: ['Blog Posts']
tags: ['API', 'Development', 'Update']
---

Ever since publishing the Wait Wait Stats API, I have been working on some of the technical debts that had been accruing throughout the development and release process for both the API and the underlying [libwwdtm](https://github.com/questionlp/libwwdtm) data access library.

One of those items in the technical debt list was to refactor the libwwdtm modules and make the code easier to manage and maintain. Instead of having every function related to a module reside in one code file, those functions are now broken up into core, details, info and utility sub-module under each major module (guest, host, location, panelist, scorekeeper and show).

Once the libwwdtm code refactor was completed, it was time to update the Stats API to make use of the refactored modules and make the code a little bit more readable. After doing a thorough set of regression and performance testing, I unleashed the changes to the world.

After the refactor project was completed, I went on to complete another item from the technical debt list: adding in Bluff the Listener stats to the panelist details. To be honest, this is something that I completely forgot to include for the first release and realized that I missed it after the initial release. That said, it was a pretty simple task to complete and finished updating libwwdtm and the documentation updates in under a day.

Since the inclusion of the Bluff the Listener stats was incorporated into the panelist details endpoints, no new API endpoints were implemented and the returned response now includes a new "bluffs" object containing the number of times the panelist has had the correct Bluff the Listener story and the number of times the panelist had their story chosen<strong>*</strong>.

![Sample panelist details API response that includes the new "bluffs" object](/images/2019/10/WWDTM-Stats-API-Panelist-Bluff-Stats.png)

The documentation for the Stats API has also been updated to reflect both the code refactor and the new Bluff the Listener data in the response. The documentation is available at <https://api.wwdt.me/docs/>. If you would like to look at the code for both libwwdtm and the Stats API, check out the [libwwdtm](https://github.com/questionlp/libwwdtm) and the [api.wwdt.me](https://github.com/questionlp/api.wwdt.me) repositories on GitHub.

<strong>*</strong>: Please note that I have not gone through previous shows to collect Bluff the Listener information for most of the show's history; thus, the statistics provided are incomplete. Eventually, I will backfill the information as time permits.
