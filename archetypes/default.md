---
title: {{ replace .ContentBaseName "-" " " | title }}
slug: {{ path.BaseName .ContentBaseName | lower }}
date: {{ .Date | time.Format "2006-01-02" }}
tag: []
icon: [page]
color: [green]
description: ""
draft: false
---
