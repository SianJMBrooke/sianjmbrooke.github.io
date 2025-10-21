---
layout: default
title: "QFIN - Queer and Feminist Informatics Network"
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">
<script src="{{ '/assets/js/bibtex.js' | relative_url }}"></script>

<!-- Page-specific styles (acts like head overrides) -->
<style>
  /* More breathing room between sections */
  .qfin-section { margin: 3.5rem 0 2.25rem !important; }

  /* Publications: no bold, indented list */
  .pub-list { margin: 0; padding-left: 1.25rem; }
  .pub-list li { padding: 0.6rem 0 0.9rem 0; }
  .pub-title, .pub-authors, .pub-venue { font-weight: 400 !important; }

  /* Default: publication links inherit text colour (not blue) */
  .pub-links a { color: inherit !important; text-decoration: underline; }

  /* Only DOI & URL are light blue */
  .pub-links a[data-accent="true"] { color: var(--blue) !important; }
</style>

<!-- Title under the single header hero image -->
<h1 class="trans-title gradient">QFIN - Queer and Feminist Informatics Network</h1>
<p class="qfin-tagline" style="text-align:center; color:#e8e8e8;">
  An open, inclusive network embedded in the Digital Interactions Lab (DILab) at the Informatics Institute (IvI), University of Amsterdam.
</p>

<div class="qfin-wrap">

  <!-- ABOUT -->
  <div class="qfin-section">
    <h2>About QFIN</h2>
    <p class="qfin-subtle">
      QFIN centralises and better supports feminist and queer research in informatics and computer science —
      while creating a welcoming space for queer and trans researchers, students, and allies across the Netherlands.
      The network is embedded in the <strong>Digital Interactions Lab (DILab)</strong> at the
      <strong>Informatics Institute (IvI), University of Amsterdam</strong>.
    </p>
    {% if site.dilab_logo %}
      <p><img src="{{ site.dilab_logo | relative_url }}" alt="DILab logo" style="max-height:60px;"></p>
    {% endif %}
  </div>

  <!-- UPCOMING EVENTS -->
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
            <div class="qfin-meta">
              <strong>Location:</strong>
              {% if event.location %}
                {{ event.location }}
              {% else %}
                <a href="https://lab42.uva.nl/" target="_blank" rel="noopener">Lab42, Amsterdam Science Park</a>
              {% endif %}
            </div>
            {% if event.description %}<p class="qfin-desc">{{ event.description }}</p>{% endif %}
            {% if event.links %}
              <p class="qfin-small">
                {% for l in event.links %}
                  <a href="{{ l.url }}" target="_blank" rel="noopener">{{ l.label }}</a>{% if forloop.last == false %} · {% endif %}
                {% endfor %}
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

  <!-- PUBLICATIONS -->
  <div class="qfin-section">
    <h2>Publications by QFIN members and speakers</h2>
    <div id="pub-container"><em class="qfin-subtle">Loading publications...</em></div>
    <script>
      document.addEventListener('DOMContentLoaded', function(){
        renderPublications("{{ '/assets/bibliography/publications.bib' | relative_url }}", "pub-container");

        // After the list renders, mark DOI + URL links for accent colour
        const markAccent = () => {
          document.querySelectorAll('.pub-links a').forEach(a => {
            const t = (a.textContent || '').trim().toUpperCase();
            if (t === 'DOI' || t === 'URL' || a.href.startsWith('https://doi.org/')) {
              a.setAttribute('data-accent','true');
            }
          });
        };
        // small delay to ensure renderPublications finished
        setTimeout(markAccent, 0);
      });
    </script>
  </div>

  <hr class="qfin-hr" />

  <!-- FOUNDING MEMBERS -->
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

  <p class="footer-note">
    QFIN is based at the Informatics Institute (IvI), University of Amsterdam.
    Events are held in Lab42 at Amsterdam Science Park.
  </p>

</div>
