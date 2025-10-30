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

  /* Side-by-side, centered logos */
  .logo-row {
    display:flex; justify-content:center; align-items:center;
    gap:28px; flex-wrap:wrap; margin: 1rem 0 2rem;
  }
  .logo-row img { display:block; height:56px; width:auto; }
  .logo-row img.logo-ivi { height:44px; } /* tweak the UvA/IvI mark size */
</style>

<!-- Title under the single header hero image -->
<h1 class="trans-title gradient">QFIN - Queer and Feminist Informatics Network</h1>
<p class="qfin-tagline" style="text-align:center; color:#e8e8e8;">
  An open, inclusive network embedded in the Digital Interactions Lab (DILab) at the Informatics Institute (IvI), University of Amsterdam.
</p>

<div class="qfin-wrap">

  <!-- DILab + IvI logos side by side -->
  <div class="logo-row">
    <img src="{{ '/assets/images/dilab-logo-white.png' | relative_url }}" alt="DILab">
    <img src="{{ '/assets/images/uva-ivi-white.png'    | relative_url }}" alt="UvA Informatics Institute" class="logo-ivi">
  </div>

  <!-- ABOUT -->
  <div class="qfin-section">
    <h2 style="color:var(--blue);">About QFIN</h2>
    <p class="qfin-subtle">
The Queer and Feminist Informatics Network (QFIN) is an open, inclusive community that brings together researchers, students, and allies to advance feminist and queer scholarship across informatics and computer science. Embedded in the Digital Interactions Lab (DILab) at the Informatics Institute (IvI), University of Amsterdam, QFIN connects work already happening across the Netherlands and creates new opportunities for collaboration, mentorship, and visibility. </p>
    
<p class="qfin-subtle">
QFIN aims to strengthen research that interrogates how digital systems shape power, identity, and everyday life, while also building a supportive space for queer and trans researchers to thrive. The network welcomes work spanning HCI, AI and data science, software engineering, sociotechnical systems, critical data studies, and adjacent fields. Core values include intersectionality, accessibility, community accountability, and consent-based, privacy-respecting research practices.
</p>

<p class="qfin-subtle">
The network hosts book talks, research seminars, methods workshops, and reading groups, alongside low-barrier community events such as writing sessions and mentoring meetups. To lower barriers to participation and make events convivial, lunch is provided at most in-person sessions. QFIN also surfaces resources, shares opportunities, and facilitates collaborations across institutions, with informal advice on inclusive study design, ethics applications for working with sensitive data and communities.
</p>

<p class="qfin-subtle">
Most events take place in Lab42 at Amsterdam Science Park, with hybrid participation when possible. Membership is informal and open: anyone interested in feminist or queer approaches to computing—or simply curious to learn more; is welcome.
</p>
  </div>

  <div style="text-align:center; margin-top: 2em;">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScgq7ggljOVLVyLeNbCSD1TisPGPgw7IfzfCVVLvTuo0sI-VQ/viewform?usp=header" 
     target="https://docs.google.com/forms/d/e/1FAIpQLScgq7ggljOVLVyLeNbCSD1TisPGPgw7IfzfCVVLvTuo0sI-VQ/viewform?usp=header" 
     class="btn btn-primary"
     style="background-color:#7e3ff2; color:white; padding:0.8em 1.5em; border-radius:8px; text-decoration:none; font-weight:600;">
     Join the QFIN Mailing List
  </a>
</div>

  <!-- UPCOMING EVENTS -->
  <div class="qfin-section">
    <h2 style="color:var(--blue);">Upcoming events</h2>
    {% assign upcoming = site.data.events | sort: 'date' %}
    {% if upcoming and upcoming.size > 0 %}
      <div class="qfin-grid">
        {% for event in upcoming %}
          <div class="qfin-card">
            <h3 style="color:var(--pink);">{{ event.title }}</h3>
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
    <h2 style="color:var(--blue);">Publications by QFIN members and speakers</h2>
    <ul class="pub-list">
<li><div class="pub-line"><span class="pub-authors">Brooke, S.</span> <span class="pub-year">2025</span>. <span class="pub-title">“Python is for girls!”: Masculinity, Femininity, and Queering Inclusion at Hackathons.</span> <span class="pub-venue">Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems</span>. <span class="pub-links"> <a href="https://doi.org/10.1145/3706598.3713235" target="_blank" rel="noopener">DOI</a> <a href="https://doi.org/10.1145/3706598.3713235" target="_blank" rel="noopener">URL</a></span></div></li>
<li><div class="pub-line"><span class="pub-authors">Haimson, O.</span> <span class="pub-year">2025</span>. <span class="pub-title">Trans Technologies.</span> <span class="pub-venue">MIT Press</span>. <span class="pub-links"> <a href="https://mitpress.mit.edu/9780262551861/trans-technologies/" target="_blank" rel="noopener">URL</a></span></div></li>
<li><div class="pub-line"><span class="pub-authors">Martinez Pandiani, D. S. e. a.</span> <span class="pub-year">2025</span>. <span class="pub-title">OnToxKG: An Ontology-Based Knowledge Graph of&amp;nbsp;Toxic Symbols and&amp;nbsp;Their Manifestations.</span> <span class="pub-venue">Web Engineering: 25th International Conference, ICWE 2025, Delft, The Netherlands, June 30 – July 3, 2025, Proceedings</span>. <span class="pub-links"> <a href="https://doi.org/10.1007/978-3-031-97207-2_9" target="_blank" rel="noopener">DOI</a> <a href="https://doi.org/10.1007/978-3-031-97207-2_9" target="_blank" rel="noopener">URL</a></span></div></li>
<li><div class="pub-line"><span class="pub-authors">Keyes, O.</span> <span class="pub-year">2018</span>. <span class="pub-title">The Misgendering Machines: Trans/HCI Implications of Automatic Gender Recognition.</span> <span class="pub-venue">Proc. ACM Hum.-Comput. Interact.</span>. <span class="pub-links"> <a href="https://doi.org/10.1145/3274357" target="_blank" rel="noopener">DOI</a> <a href="https://doi.org/10.1145/3274357" target="_blank" rel="noopener">URL</a></span></div></li>
<li><div class="pub-line"><span class="pub-authors">Sosto, M. &amp; Barron-Cedeno, A.</span> <span class="pub-year">2024</span>. <span class="pub-title">{QueerBench}: Quantifying Discrimination in Language Models Toward Queer Identities.</span> <span class="pub-venue">arXiv preprint arXiv:2406.12399</span>. <span class="pub-links"> <a href="https://doi.org/10.48550/arXiv.2406.12399" target="_blank" rel="noopener">DOI</a> <a href="https://arxiv.org/abs/2406.12399" target="_blank" rel="noopener">URL</a></span></div></li>
</ul>

  <hr class="qfin-hr" />

  <!-- FOUNDING MEMBERS -->
  <div class="qfin-section">
    <h2 style="color:var(--blue);">Founding members</h2>
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
              <h3 style="margin:0 0 0.2rem 0; color:var(--pink);">{{ m.name }}</h3>
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
