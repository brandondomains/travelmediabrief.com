---
layout: default
title: Home
description: Travel Media Brief analyzes platform changes, tourism marketing, creator partnerships, and the industry forces shaping travel publishing.
---
<section class="hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">Travel media, platforms, and publishing intelligence</p>
      <h1>Follow the forces shaping travel media.</h1>
      <p class="lead">Travel Media Brief is a newsletter and analysis site covering platform changes, tourism marketing, creator partnerships, audience shifts, and the business pressures influencing modern travel publishing.</p>
      <div class="hero-actions">
        <a class="button button-primary" href="{{ site.substack_url }}" target="_blank" rel="noopener noreferrer">Visit on Substack</a>
        <a class="button button-secondary" href="{{ '/topics/' | relative_url }}">Explore topics</a>
      </div>
      <ul class="hero-points" aria-label="Highlights">
        <li>Platform and discovery analysis for travel publishers</li>
        <li>Tourism marketing, partnerships, and creator strategy</li>
        <li>Clear context for people building or studying travel media</li>
      </ul>
    </div>
    <div class="hero-card">
      <div class="brief-card">
        <div class="brief-card__top"><span class="status-dot"></span><span class="status-label">Latest briefing</span></div>
        <h2>What is changing in travel media?</h2>
        <p>From search disruption and social platform shifts to destination marketing budgets and creator partnerships, this publication tracks the signals that matter.</p>
        <div class="brief-tags"><span>Platforms</span><span>Tourism</span><span>Creators</span><span>Publishing</span></div>
      </div>
    </div>
  </div>
</section>

<section class="section metrics">
  <div class="container metrics-grid">
    <article class="metric-card"><span class="metric-label">Focus</span><strong>Travel media</strong><p>Coverage for newsletters, blogs, publishers, tourism marketers, and creator-led media brands.</p></article>
    <article class="metric-card"><span class="metric-label">Angle</span><strong>Industry analysis</strong><p>Signals, context, and strategic interpretation rather than quick platform reactions.</p></article>
    <article class="metric-card"><span class="metric-label">Format</span><strong>Briefings and essays</strong><p>Readable updates designed for people who want to understand where travel publishing is heading.</p></article>
  </div>
</section>

<section class="section section-soft" id="coverage">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Coverage</p>
      <h2>Core coverage areas</h2>
      <p>A focused look at how travel content is produced, distributed, funded, and trusted.</p>
    </div>
    <div class="coverage-grid">
      {% assign sorted_topics = site.topics | sort: 'order' %}
      {% for topic in sorted_topics %}
      <article class="coverage-card">
        <h3><a href="{{ topic.url | relative_url }}">{{ topic.title }}</a></h3>
        <p>{{ topic.description }}</p>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section newsletter">
  <div class="container newsletter-panel">
    <div>
      <p class="eyebrow">Substack</p>
      <h2>Read the publication on Substack</h2>
      <p>Use this site as the home base for topics and analysis, then head to Substack for full newsletter issues and subscriptions.</p>
    </div>
    <a class="button button-primary" href="{{ site.substack_url }}" target="_blank" rel="noopener noreferrer">Open Travel Media Brief</a>
  </div>
</section>
