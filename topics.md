---
layout: page
title: Topics
eyebrow: Domains
description: The main domains covered by Travel Media Brief, organized around the forces shaping travel publishing and creator-led media.
permalink: /topics/
---
<div class="coverage-grid">
  {% assign sorted_topics = site.topics | sort: 'order' %}
  {% for topic in sorted_topics %}
  <article class="coverage-card">
    <h3><a href="{{ topic.url | relative_url }}">{{ topic.title }}</a></h3>
    <p>{{ topic.description }}</p>
  </article>
  {% endfor %}
</div>
