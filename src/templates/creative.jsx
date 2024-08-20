export default function creativeTemplate(config) {
  const { name, title, bio, skills, projects, social, themeColor } = config;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${name} — Portfolio</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Courier New', monospace; background: #111; color: #ddd; }
  .banner { padding: 4rem 2rem; background: linear-gradient(45deg, ${themeColor}, ${themeColor}88); text-align: center; clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%); }
  .banner h1 { font-size: 3.5rem; font-weight: 900; color: #fff; text-transform: uppercase; letter-spacing: 4px; }
  .banner .title { font-size: 1.2rem; color: rgba(255,255,255,0.8); margin-top: 0.5rem; }
  .content { max-width: 800px; margin: -2rem auto 0; padding: 2rem 1.5rem 4rem; position: relative; z-index: 1; }
  .bio-box { background: #1a1a1a; border-left: 4px solid ${themeColor}; padding: 1.5rem; margin-bottom: 2.5rem; border-radius: 0 8px 8px 0; }
  .bio-box p { line-height: 1.8; color: #aaa; }
  h2 { font-size: 1.3rem; text-transform: uppercase; letter-spacing: 2px; color: ${themeColor}; margin-bottom: 1rem; }
  .skills-wrap { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2.5rem; }
  .skill-chip { background: #222; border: 2px solid ${themeColor}; color: ${themeColor}; padding: 0.4rem 1rem; font-size: 0.85rem; transform: rotate(-1deg); transition: transform 0.2s; }
  .skill-chip:nth-child(even) { transform: rotate(1deg); }
  .skill-chip:hover { transform: rotate(0deg) scale(1.05); }
  .project-list { margin-bottom: 2.5rem; }
  .project-entry { background: #1a1a1a; padding: 1.25rem; margin-bottom: 1rem; border-radius: 8px; border: 1px solid #333; position: relative; overflow: hidden; }
  .project-entry::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: ${themeColor}; }
  .project-entry h3 { margin-bottom: 0.4rem; padding-left: 1rem; }
  .project-entry h3 a { color: #fff; text-decoration: none; }
  .project-entry h3 a:hover { color: ${themeColor}; }
  .project-entry p { color: #888; font-size: 0.9rem; padding-left: 1rem; }
  .project-entry img { width: 100%; border-radius: 6px; margin-bottom: 0.75rem; }
  .footer-links { display: flex; gap: 1rem; flex-wrap: wrap; }
  .footer-links a { color: #fff; background: ${themeColor}; padding: 0.5rem 1.2rem; text-decoration: none; font-size: 0.9rem; transition: opacity 0.2s; }
  .footer-links a:hover { opacity: 0.8; }
</style>
</head>
<body>
<div class="banner">
  <h1>${name}</h1>
  <p class="title">${title}</p>
</div>
<div class="content">
  <div class="bio-box"><p>${bio}</p></div>
  <h2>Skills</h2>
  <div class="skills-wrap">${skills.map((s) => `<span class="skill-chip">${s}</span>`).join('')}</div>
  <h2>Projects</h2>
  <div class="project-list">
    ${projects.map((p) => `<div class="project-entry">${p.imageUrl ? `<img src="${p.imageUrl}" alt="${p.title}">` : ''}<h3><a href="${p.link}" target="_blank">${p.title}</a></h3><p>${p.description}</p></div>`).join('')}
  </div>
  <h2>Connect</h2>
  <div class="footer-links">
    ${social.github ? `<a href="${social.github}" target="_blank">GitHub</a>` : ''}
    ${social.linkedin ? `<a href="${social.linkedin}" target="_blank">LinkedIn</a>` : ''}
    ${social.twitter ? `<a href="${social.twitter}" target="_blank">Twitter</a>` : ''}
    ${social.email ? `<a href="mailto:${social.email}">Email</a>` : ''}
  </div>
</div>
</body>
</html>`;
}

export function CreativePreview({ config }) {
  const { name, title, bio, skills, projects, social, themeColor } = config;
  return (
    <div style={{ fontFamily: "'Courier New', monospace", background: '#111', color: '#ddd', minHeight: '100%' }}>
      <div style={{ padding: '3rem 1.5rem', background: `linear-gradient(45deg, ${themeColor}, ${themeColor}88)`, textAlign: 'center', clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: 4 }}>{name}</h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.5rem' }}>{title}</p>
      </div>
      <div style={{ maxWidth: 800, margin: '-1.5rem auto 0', padding: '1.5rem 1.5rem 3rem', position: 'relative', zIndex: 1 }}>
        <div style={{ background: '#1a1a1a', borderLeft: `4px solid ${themeColor}`, padding: '1.25rem', marginBottom: '2rem', borderRadius: '0 8px 8px 0' }}>
          <p style={{ lineHeight: 1.8, color: '#aaa' }}>{bio}</p>
        </div>
        <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: 2, color: themeColor, marginBottom: '0.75rem' }}>Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {skills.map((s, i) => <span key={i} style={{ background: '#222', border: `2px solid ${themeColor}`, color: themeColor, padding: '0.4rem 1rem', fontSize: '0.85rem' }}>{s}</span>)}
        </div>
        <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: 2, color: themeColor, marginBottom: '0.75rem' }}>Projects</h2>
        {projects.map((p) => (
          <div key={p.id} style={{ background: '#1a1a1a', padding: '1.25rem', marginBottom: '0.75rem', borderRadius: 8, border: '1px solid #333', borderLeft: `4px solid ${themeColor}` }}>
            {p.imageUrl && <img src={p.imageUrl} alt={p.title} style={{ width: '100%', borderRadius: 6, marginBottom: '0.75rem' }} />}
            <h3 style={{ marginBottom: '0.4rem' }}><a href={p.link} style={{ color: '#fff', textDecoration: 'none' }}>{p.title || 'Untitled'}</a></h3>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>{p.description}</p>
          </div>
        ))}
        <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: 2, color: themeColor, marginBottom: '0.75rem', marginTop: '2rem' }}>Connect</h2>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {social.github && <a href={social.github} style={{ color: '#fff', background: themeColor, padding: '0.5rem 1rem', textDecoration: 'none', fontSize: '0.9rem' }}>GitHub</a>}
          {social.linkedin && <a href={social.linkedin} style={{ color: '#fff', background: themeColor, padding: '0.5rem 1rem', textDecoration: 'none', fontSize: '0.9rem' }}>LinkedIn</a>}
          {social.twitter && <a href={social.twitter} style={{ color: '#fff', background: themeColor, padding: '0.5rem 1rem', textDecoration: 'none', fontSize: '0.9rem' }}>Twitter</a>}
          {social.email && <a href={`mailto:${social.email}`} style={{ color: '#fff', background: themeColor, padding: '0.5rem 1rem', textDecoration: 'none', fontSize: '0.9rem' }}>Email</a>}
        </div>
      </div>
    </div>
  );
}
