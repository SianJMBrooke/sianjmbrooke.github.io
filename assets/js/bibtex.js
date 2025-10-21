
async function renderPublications(bibPath, containerId){
  try{
    const resp = await fetch(bibPath, {cache: 'no-store'});
    const text = await resp.text();
    const entries = parseBibTeX(text);

    // Sort alphabetically by first author's surname, then title
    entries.sort((a,b)=>{
      const aName = (a.authors[0]?.last || "").toLowerCase();
      const bName = (b.authors[0]?.last || "").toLowerCase();
      if (aName < bName) return -1;
      if (aName > bName) return 1;
      return (a.fields.title||"").toLowerCase().localeCompare((b.fields.title||"").toLowerCase());
    });

    const ul = document.createElement('ul'); ul.className='pub-list';
    entries.forEach(e=> ul.appendChild(renderEntry(e)));
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    container.appendChild(ul);
  }catch(err){
    console.error("Publications render failed:", err);
  }
}

function parseBibTeX(text){
  const entries = [];
  const blocks = text.split(/@/g).slice(1);
  for (const b of blocks){
    const m = b.match(/^(\w+)\s*{\s*([^,]+)\s*,([\s\S]*)}$/m);
    if(!m) continue;
    const type = m[1].trim(); const key = m[2].trim(); let rest = m[3].trim();
    if (rest.endsWith('}')) rest = rest.slice(0,-1);
    const fields = {};
    const fieldRegex = /(\w+)\s*=\s*({([^{}]*|{[^}]*})*}|"([^"]*)"|([^,\n]+))/g;
    let fm;
    while ((fm = fieldRegex.exec(rest)) !== null){
      const name = fm[1].toLowerCase();
      let val = fm[3] || fm[4] || fm[5] || "";
      val = val.trim().replace(/^{|}$/g, "");
      fields[name] = val;
    }
    const authors = splitAuthors(fields.author || "");
    entries.push({type, key, fields, authors});
  }
  return entries;
}

function splitAuthors(authorStr){
  if(!authorStr) return [];
  return authorStr.split(/\s+and\s+/i).map(a=>{
    if (a.includes(",")){
      const [last, first] = a.split(",").map(s=>s.trim());
      return {first, last};
    } else {
      const parts = a.trim().split(/\s+/);
      const last = parts.pop();
      const first = parts.join(" ");
      return {first, last};
    }
  });
}

function renderEntry(e){
  const li = document.createElement('li');
  const f = e.fields;
  const authors = (e.authors || []).map(a=> `${a.last}, ${a.first}`).join(", ");
  const year = f.year ? `(${f.year})` : "";
  const title = f.title || e.key;
  const venue = f.journal || f.booktitle || f.publisher || "";

  const doi = f.doi ? `<a href="https://doi.org/${f.doi}" target="_blank" rel="noopener">DOI</a>` : "";
  const url = f.url ? `<a href="${f.url}" target="_blank" rel="noopener">URL</a>` : "";
  const pdf = f.pdf ? `<a href="${f.pdf}" target="_blank" rel="noopener">PDF</a>` : "";
  const links = [doi, url, pdf].filter(Boolean).join(" ");

  li.innerHTML = `
    <div class="pub-line">
      <span class="pub-authors">${authors}</span>
      <span class="pub-year">${year}</span>.
      <span class="pub-title"> ${title}. </span>
      ${venue ? `<span class="pub-venue">${venue}</span>.` : ""}
      ${links ? `<span class="pub-links"> ${links}</span>` : ""}
    </div>
  `;
  return li;
}
