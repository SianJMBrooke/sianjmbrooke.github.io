
---
layout: default
title: Home
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="qfin-hero">
  {% if site.qfin_logo %}
    <img src="{{ site.qfin_logo | relative_url }}" alt="QFIN logo">
  {% endif %}
  <div>
    <h1 style="margin:0;">QFIN — Queer and Feminist Informatics Network</h1>
    <p class="qfin-tagline">An open, inclusive network at the Informatics Institute (University of Amsterdam — DILab) for trans and feminist scholars and allies across the Netherlands. We aim to create a space for activism, community, and research.</p>
  </div>
</div>

<div class="qfin-section">
  <h2>Upcoming events</h2>
  {% assign upcoming = site.data.events | sort: 'date' %}
  {% if upcoming and upcoming.size > 0 %}
    <div class="qfin-grid">
      {% for event in upcoming %}
        {% assign event_date = event.date | date: "%Y-%m-%d" %}
        <div class="qfin-card">
          <h3>{{ event.title }}</h3>
          <div class="qfin-meta"><strong>Date:</strong> {{ event.date | date: "%A, %d %B %Y" }}</div>
          {% if event.time %}<div class="qfin-meta"><strong>Time:</strong> {{ event.time }}</div>{% endif %}
          {% if event.location %}<div class="qfin-meta"><strong>Location:</strong> {{ event.location }}</div>{% endif %}
          {% if event.description %}<p class="qfin-desc">{{ event.description }}</p>{% endif %}
          {% if event.signup_url %}
            <p><a class="qfin-btn" href="{{ event.signup_url }}" target="_blank" rel="noopener">Sign up</a></p>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  {% else %}
    <p class="qfin-muted">No events posted yet — check back soon.</p>
  {% endif %}
</div>

<div class="qfin-section">
  <h2>Founding members</h2>
  {% if site.data.members and site.data.members.size > 0 %}
    <div class="qfin-grid">
      {% for m in site.data.members %}
        <div class="qfin-card qfin-member">
          {% if m.image %}
            <img src="{{ m.image | relative_url }}" alt="{{ m.name }} portrait">
          {% else %}
            <img src="https://via.placeholder.com/72" alt="Placeholder portrait">
          {% endif %}
          <div>
            <h4>{{ m.name }}</h4>
            {% if m.email %}<div class="qfin-meta"><a href="mailto:{{ m.email }}">{{ m.email }}</a></div>{% endif %}
            {% if m.bio %}<p class="qfin-desc">{{ m.bio }}</p>{% endif %}
          </div>
        </div>
      {% endfor %}
    </div>
  {% else %}
    <p class="qfin-muted">Founding members will be listed here.</p>
  {% endif %}
</div>

<p class="footer-note">QFIN is based in the Informatics Institute (IvI), University of Amsterdam. To add events or members, edit the files in <code>_data/events.yml</code> and <code>_data/members.yml</code> in this repository.</p>
