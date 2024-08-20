export default function minimalTemplate(config) {
  const { name, title, bio, skills, projects, social, themeColor } = config;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${name} — Portfolio</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Georgia', serif; background: #fafafa; color: #222; line-height: 1.8; }
  .container { max-width: 680px; margin: 0 auto; padding: 4rem 1.5rem; }
  h1 { font-size: 2.5rem; font-weight: 400; margin-bottom: 0.25rem; }
  .title { color: ${themeColor}; font-size: 1.1rem; margin-bottom: 1.5rem; }
  .bio { margin-bottom: 2rem; color: #555; }
  h2 { font-size: 1.2rem; font-weight: 400; color: ${themeColor}; margin: 2rem 0 1rem; border-bottom: 1px solid #ddd; padding-bottom: 0.5rem; }
  .skills { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
  .skill { background: #f0f0f0; padding: 0.3rem 0.8rem; border-radius: 4px; font-size: 0.9rem; }
  .project { margin-bottom: 1.5rem; }
  .project h3 { font-size: 1.05rem; font-weight: 600; }
  .project h3 a { color: ${themeColor}; text-decoration: none; }
  .project p { color: #555; font-size: 0.95rem; }
  .social { display: flex; gap: 1.5rem; margin-top: 1rem; }
  .social a { color: ${themeColor}; text-decoration: none; font-size: 0.95rem; }
  .social a:hover { text-decoration: underline; }
</style>
</head>
<body>
<div class="container">
  <h1>${name}</h1>
  <p class="title">${title}</p>
  <p class="bio">${bio}</p>
  <h2>Skills</h2>
  <div class="skills">${skills.map((s) => `<span class="skill">${s}</span>`).join('')}</div>
  <h2>Projects</h2>
  ${projects.map((p) => `<div class="project"><h3><a href="${p.link}" target="_blank">${p.title}</a></h3><p>${p.description}</p></div>`).join('')}
  <h2>Connect</h2>
  <div class="social">
    ${social.github ? `<a href="${social.github}" target="_blank">GitHub</a>` : ''}
    ${social.linkedin ? `<a href="${social.linkedin}" target="_blank">LinkedIn</a>` : ''}
    ${social.twitter ? `<a href="${social.twitter}" target="_blank">Twitter</a>` : ''}
    ${social.email ? `<a href="mailto:${social.email}">Email</a>` : ''}
  </div>
</div>
</body>
</html>`;
}

export function MinimalPreview({ config }) {
  const { name, title, bio, skills, projects, social, themeColor } = config;
  return (
    <div style={{ fontFamily: 'Georgia, serif', background: '#fafafa', color: '#222', lineHeight: 1.8, padding: '2rem 1.5rem', minHeight: '100%' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 400, marginBottom: '0.25rem' }}>{name}</h1>
        <p style={{ color: themeColor, fontSize: '1.05rem', marginBottom: '1.5rem' }}>{title}</p>
        <p style={{ marginBottom: '2rem', color: '#555' }}>{bio}</p>
        <h2 style={{ fontSize: '1.15rem', fontWeight: 400, color: themeColor, borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {skills.map((s, i) => <span key={i} style={{ background: '#f0f0f0', padding: '0.3rem 0.8rem', borderRadius: 4, fontSize: '0.9rem' }}>{s}</span>)}
        </div>
        <h2 style={{ fontSize: '1.15rem', fontWeight: 400, color: themeColor, borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Projects</h2>
        {projects.map((p) => (
          <div key={p.id} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600 }}><a href={p.link} style={{ color: themeColor, textDecoration: 'none' }}>{p.title || 'Untitled'}</a></h3>
            <p style={{ color: '#555', fontSize: '0.95rem' }}>{p.description}</p>
          </div>
        ))}
        <h2 style={{ fontSize: '1.15rem', fontWeight: 400, color: themeColor, borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Connect</h2>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {social.github && <a href={social.github} style={{ color: themeColor, textDecoration: 'none' }}>GitHub</a>}
          {social.linkedin && <a href={social.linkedin} style={{ color: themeColor, textDecoration: 'none' }}>LinkedIn</a>}
          {social.twitter && <a href={social.twitter} style={{ color: themeColor, textDecoration: 'none' }}>Twitter</a>}
          {social.email && <a href={`mailto:${social.email}`} style={{ color: themeColor, textDecoration: 'none' }}>Email</a>}
        </div>
      </div>
    </div>
  );
}
