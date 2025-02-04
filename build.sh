#!/bin/bash

export PATH=/bin:/usr/bin:/usr/local/bin

if [[ -d /u01/www/blog.wwdt.me.old ]]; then
    rm -r /u01/www/blog.wwdt.me.old
fi

mv /u01/www/blog.wwdt.me /u01/www/blog.wwdt.me.old

npx @11ty/eleventy --output=/u01/www/blog.wwdt.me
