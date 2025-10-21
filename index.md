---
layout: default
title: ""
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<script src="{{ '/assets/js/bibtex.js' | relative_url }}"></script>

<div class="qfin-wrap">

  <div class="qfin-hero">
    {% if site.qfin_logo %}
      <img src="{{ site.qfin_logo | relative_url }}" alt="QFIN logo">
    {% endif %}
    <div>
      
<div class="qfin-hero-banner">
  <img src="{{ '/assets/images/qfin-logo-hero.png' | relative_url }}" alt="QFIN logo hero">
</div>
<h1 class="trans-title" style="margin:0;">QFIN - Queer and Feminist Informatics Network</h1>
      <p class="qfin-tagline">
        An open, inclusive network embedded in the <strong>Digital Interactions Lab (DILab)</strong> at the
        <strong>Informatics Institute (IvI)</strong>, <strong>University of Amsterdam</strong>.
      </p>
      <p class="qfin-subtle">
        We aim to centralise, strengthen, and sustain feminist and queer research in informatics and computer science.
        We also create a welcoming space for queer and trans researchers, students, and allies across the Netherlands.
      </p>
      <span class="badge" style="border-color:var(--pink); color:var(--pink);">Activism</span>
      <span class="badge" style="border-color:var(--blue); color:var(--blue);">Community</span>
      <span class="badge" style="border-color:#fff; color:#fff;">Research</span>
    </div>
  </div>

  <div class="qfin-section">
    <h2>Embedded within DILab</h2>
    <p class="qfin-subtle">
      QFIN operates within the <strong>Digital Interactions Lab (DILab)</strong> in the Informatics Institute (IvI) at UvA.
      The network supports inclusive methods and infrastructures for HCI, AI, and data intensive research.
    </p>
    {% if site.dilab_logo %}
      <p><img src="{{ site.dilab_logo | relative_url }}" alt="DILab logo" style="max-height:60px;"></p>
    {% endif %}
  </div>

  <div class="qfin-section">
    <h2>Upcoming events</h2>
    {% assign upcoming = site.data.events | sort: 'date' %}
    {% if upcoming and upcoming.size > 0 %}
      <div class="qfin-grid">
        {% for event in upcoming %}
          <div class="qfin-card">
            <h3>{{ event.title }}</h3>
            <div class="qfin-meta"><strong>Date:</strong> {{ event.date | date: "%A, %d %B %Y" }}</div>
            {% if event.time %}<div class="qfin-meta"><strong>Time:</strong> {{ event.time }}</div>{% endif %}
            <div class="qfin-meta"><strong>Location:</strong> <a href="https://lab42.uva.nl/" target="_blank" rel="noopener">Lab42, Amsterdam Science Park</a></div>
            {% if event.description %}<p class="qfin-desc">{{ event.description }}</p>{% endif %}
            {% if event.links %}
              <p class="qfin-small">
                {% for l in event.links %}<a href="{{ l.url }}" target="_blank" rel="noopener">{{ l.label }}</a>{% if forloop.last == false %} · {% endif %}{% endfor %}
              </p>
            {% endif %}
            {% if event.signup_url %}
              <p><a class="qfin-btn" href="{{ event.signup_url }}" target="_blank" rel="noopener">Sign up</a></p>
            {% endif %}
          </div>
        {% endfor %}
      </div>
    {% else %}
      <p class="qfin-subtle">No events posted yet. Check back soon.</p>
    {% endif %}
  </div>

  <div class="qfin-section">
    <h2>Publications by QFIN members and speakers</h2>
    <p class="qfin-subtle">Add BibTeX entries to <code>assets/bibliography/publications.bib</code>. They are rendered below and sorted alphabetically by the first author's surname.</p>
    <div id="pub-container"><em class="qfin-subtle">Loading publications...</em></div>
    <script>
      document.addEventListener('DOMContentLoaded', function(){
        renderPublications("{{ '/assets/bibliography/publications.bib' | relative_url }}", "pub-container");
      });
    </script>
  </div>

  <hr class="qfin-hr" />

  <div class="qfin-section">
    <h2>Founding members</h2>
    {% if site.data.members and site.data.members.size > 0 %}
      <div class="qfin-grid">
        {% for m in site.data.members %}
          <div class="qfin-card qfin-member">
            {% if m.image %}
              <img src="{{ m.image | relative_url }}" alt="{{ m.name }} portrait">
            {% else %}
              <img src="https://via.placeholder.com/84" alt="Placeholder portrait">
            {% endif %}
            <div>
              <h3 style="margin:0 0 0.2rem 0;">{{ m.name }}</h3>
              {% if m.pronouns %}<div class="qfin-small"><strong>Pronouns:</strong> {{ m.pronouns }}</div>{% endif %}
              {% if m.affiliation %}<div class="qfin-small"><strong>Affiliation:</strong> {{ m.affiliation }}</div>{% endif %}
              {% if m.email %}<div class="qfin-small"><strong>Email:</strong> <a href="mailto:{{ m.email }}">{{ m.email }}</a></div>{% endif %}
              {% if m.profile %}<div class="qfin-small"><a href="{{ m.profile }}" target="_blank" rel="noopener">Profile</a></div>{% endif %}
            </div>
          </div>
        {% endfor %}
      </div>
    {% else %}
      <p class="qfin-subtle">Founding members will be listed here.</p>
    {% endif %}
  </div>

  <p class="footer-note">QFIN is based at the Informatics Institute (IvI), University of Amsterdam. Events are held in Lab42 at Amsterdam Science Park.</p>

</div>
