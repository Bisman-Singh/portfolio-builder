import { useState } from 'react';
import { templates } from '../templates';

export default function Editor({
  config, updateField, updateSocial,
  addSkill, removeSkill, addProject, updateProject, removeProject, resetConfig,
}) {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = (e) => {
    e.preventDefault();
    addSkill(newSkill);
    setNewSkill('');
  };

  return (
    <div className="editor">
      <div className="editor-header">
        <h2>Portfolio Editor</h2>
        <button className="btn-reset" onClick={resetConfig}>Reset</button>
      </div>

      <section className="editor-section">
        <h3>Personal Info</h3>
        <label>
          Name
          <input value={config.name} onChange={(e) => updateField('name', e.target.value)} />
        </label>
        <label>
          Title
          <input value={config.title} onChange={(e) => updateField('title', e.target.value)} />
        </label>
        <label>
          Bio
          <textarea rows={3} value={config.bio} onChange={(e) => updateField('bio', e.target.value)} />
        </label>
      </section>

      <section className="editor-section">
        <h3>Template</h3>
        <div className="template-selector">
          {Object.entries(templates).map(([key, tmpl]) => (
            <button
              key={key}
              className={`template-btn ${config.template === key ? 'active' : ''}`}
              onClick={() => updateField('template', key)}
            >
              {tmpl.name}
            </button>
          ))}
        </div>
      </section>

      <section className="editor-section">
        <h3>Theme Color</h3>
        <div className="color-picker-row">
          <input type="color" value={config.themeColor} onChange={(e) => updateField('themeColor', e.target.value)} />
          <span>{config.themeColor}</span>
        </div>
      </section>

      <section className="editor-section">
        <h3>Skills</h3>
        <div className="skills-list">
          {config.skills.map((skill, idx) => (
            <span key={idx} className="skill-chip">
              {skill}
              <button onClick={() => removeSkill(idx)}>✕</button>
            </span>
          ))}
        </div>
        <form className="add-row" onSubmit={handleAddSkill}>
          <input placeholder="Add a skill..." value={newSkill} onChange={(e) => setNewSkill(e.target.value)} />
          <button type="submit" className="btn-sm">Add</button>
        </form>
      </section>

      <section className="editor-section">
        <h3>Projects</h3>
        {config.projects.map((proj) => (
          <div key={proj.id} className="project-editor">
            <div className="project-editor-header">
              <span className="project-label">{proj.title || 'New Project'}</span>
              <button className="btn-remove" onClick={() => removeProject(proj.id)}>✕</button>
            </div>
            <input placeholder="Title" value={proj.title} onChange={(e) => updateProject(proj.id, 'title', e.target.value)} />
            <textarea placeholder="Description" rows={2} value={proj.description} onChange={(e) => updateProject(proj.id, 'description', e.target.value)} />
            <input placeholder="Link URL" value={proj.link} onChange={(e) => updateProject(proj.id, 'link', e.target.value)} />
            <input placeholder="Image URL (optional)" value={proj.imageUrl} onChange={(e) => updateProject(proj.id, 'imageUrl', e.target.value)} />
          </div>
        ))}
        <button className="btn-add-project" onClick={addProject}>+ Add Project</button>
      </section>

      <section className="editor-section">
        <h3>Social Links</h3>
        <label>
          GitHub
          <input value={config.social.github} onChange={(e) => updateSocial('github', e.target.value)} placeholder="https://github.com/..." />
        </label>
        <label>
          LinkedIn
          <input value={config.social.linkedin} onChange={(e) => updateSocial('linkedin', e.target.value)} placeholder="https://linkedin.com/in/..." />
        </label>
        <label>
          Twitter
          <input value={config.social.twitter} onChange={(e) => updateSocial('twitter', e.target.value)} placeholder="https://twitter.com/..." />
        </label>
        <label>
          Email
          <input type="email" value={config.social.email} onChange={(e) => updateSocial('email', e.target.value)} placeholder="you@example.com" />
        </label>
      </section>
    </div>
  );
}
