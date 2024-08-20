export default function modernTemplate(config) {
  const { name, title, bio, skills, projects, social, themeColor } = config;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${name} — Portfolio</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0f0f0f; color: #e5e5e5; }
  .hero { text-align: center; padding: 5rem 1.5rem 3rem; background: linear-gradient(135deg, ${themeColor}22, ${themeColor}08); }
  .hero h1 { font-size: 3rem; font-weight: 800; margin-bottom: 0.5rem; }
  .hero .title { color: ${themeColor}; font-size: 1.2rem; margin-bottom: 1rem; }
  .hero .bio { max-width: 600px; margin: 0 auto; color: #aaa; line-height: 1.7; }
  .section { max-width: 900px; margin: 0 auto; padding: 3rem 1.5rem; }
  .section h2 { font-size: 1.5rem; color: ${themeColor}; margin-bottom: 1.5rem; }
  .skills-grid { display: flex; flex-wrap: wrap; gap: 0.6rem; }
  .skill-tag { background: ${themeColor}20; color: ${themeColor}; padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.9rem; border: 1px solid ${themeColor}40; }
  .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
  .project-card { background: #1a1a1a; border: 1px solid #333; border-radius: 12px; padding: 1.5rem; transition: border-color 0.2s; }
  .project-card:hover { border-color: ${themeColor}; }
  .project-card h3 { margin-bottom: 0.5rem; }
  .project-card h3 a { color: #fff; text-decoration: none; }
  .project-card h3 a:hover { color: ${themeColor}; }
  .project-card p { color: #888; font-size: 0.9rem; line-height: 1.6; }
  .project-card img { width: 100%; border-radius: 8px; margin-bottom: 1rem; }
  .social-links { display: flex; gap: 1rem; flex-wrap: wrap; }
  .social-link { display: inline-flex; align-items: center; gap: 0.5rem; background: #1a1a1a; border: 1px solid #333; padding: 0.6rem 1.2rem; border-radius: 8px; color: #e5e5e5; text-decoration: none; transition: border-color 0.2s; }
  .social-link:hover { border-color: ${themeColor}; color: ${themeColor}; }
</style>
</head>
<body>
<div class="hero">
  <h1>${name}</h1>
  <p class="title">${title}</p>
  <p class="bio">${bio}</p>
</div>
<div class="section">
  <h2>Skills</h2>
  <div class="skills-grid">${skills.map((s) => `<span class="skill-tag">${s}</span>`).join('')}</div>
</div>
<div class="section">
  <h2>Projects</h2>
  <div class="projects-grid">
    ${projects.map((p) => `<div class="project-card">${p.imageUrl ? `<img src="${p.imageUrl}" alt="${p.title}">` : ''}<h3><a href="${p.link}" target="_blank">${p.title}</a></h3><p>${p.description}</p></div>`).join('')}
  </div>
</div>
<div class="section">
  <h2>Connect</h2>
  <div class="social-links">
    ${social.github ? `<a class="social-link" href="${social.github}" target="_blank">GitHub</a>` : ''}
    ${social.linkedin ? `<a class="social-link" href="${social.linkedin}" target="_blank">LinkedIn</a>` : ''}
    ${social.twitter ? `<a class="social-link" href="${social.twitter}" target="_blank">Twitter</a>` : ''}
    ${social.email ? `<a class="social-link" href="mailto:${social.email}">Email</a>` : ''}
  </div>
</div>
</body>
</html>`;
}

export function ModernPreview({ config }) {
  const { name, title, bio, skills, projects, social, themeColor } = config;
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: '#0f0f0f', color: '#e5e5e5', minHeight: '100%' }}>
      <div style={{ textAlign: 'center', padding: '3rem 1.5rem 2rem', background: `linear-gradient(135deg, ${themeColor}22, ${themeColor}08)` }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>{name}</h1>
        <p style={{ color: themeColor, fontSize: '1.1rem', marginBottom: '1rem' }}>{title}</p>
        <p style={{ maxWidth: 600, margin: '0 auto', color: '#aaa', lineHeight: 1.7 }}>{bio}</p>
      </div>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', color: themeColor, marginBottom: '1rem' }}>Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
          {skills.map((s, i) => <span key={i} style={{ background: `${themeColor}20`, color: themeColor, padding: '0.4rem 1rem', borderRadius: 20, fontSize: '0.9rem', border: `1px solid ${themeColor}40` }}>{s}</span>)}
        </div>
        <h2 style={{ fontSize: '1.4rem', color: themeColor, marginBottom: '1rem' }}>Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
          {projects.map((p) => (
            <div key={p.id} style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: 12, padding: '1.25rem' }}>
              {p.imageUrl && <img src={p.imageUrl} alt={p.title} style={{ width: '100%', borderRadius: 8, marginBottom: '0.75rem' }} />}
              <h3 style={{ marginBottom: '0.4rem' }}><a href={p.link} style={{ color: '#fff', textDecoration: 'none' }}>{p.title || 'Untitled'}</a></h3>
              <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.description}</p>
            </div>
          ))}
        </div>
        <h2 style={{ fontSize: '1.4rem', color: themeColor, marginBottom: '1rem' }}>Connect</h2>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {social.github && <a href={social.github} style={{ background: '#1a1a1a', border: '1px solid #333', padding: '0.5rem 1rem', borderRadius: 8, color: '#e5e5e5', textDecoration: 'none' }}>GitHub</a>}
          {social.linkedin && <a href={social.linkedin} style={{ background: '#1a1a1a', border: '1px solid #333', padding: '0.5rem 1rem', borderRadius: 8, color: '#e5e5e5', textDecoration: 'none' }}>LinkedIn</a>}
          {social.twitter && <a href={social.twitter} style={{ background: '#1a1a1a', border: '1px solid #333', padding: '0.5rem 1rem', borderRadius: 8, color: '#e5e5e5', textDecoration: 'none' }}>Twitter</a>}
          {social.email && <a href={`mailto:${social.email}`} style={{ background: '#1a1a1a', border: '1px solid #333', padding: '0.5rem 1rem', borderRadius: 8, color: '#e5e5e5', textDecoration: 'none' }}>Email</a>}
        </div>
      </div>
    </div>
  );
}
