import { useState, useEffect, useCallback } from 'react';
import { defaultConfig, STORAGE_KEY } from '../data/defaults';

function loadConfig() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? { ...defaultConfig, ...JSON.parse(data) } : defaultConfig;
  } catch {
    return defaultConfig;
  }
}

export default function usePortfolio() {
  const [config, setConfig] = useState(loadConfig);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  }, [config]);

  const updateField = useCallback((field, value) => {
    setConfig((prev) => ({ ...prev, [field]: value }));
  }, []);

  const updateSocial = useCallback((field, value) => {
    setConfig((prev) => ({ ...prev, social: { ...prev.social, [field]: value } }));
  }, []);

  const addSkill = useCallback((skill) => {
    if (!skill.trim()) return;
    setConfig((prev) => ({ ...prev, skills: [...prev.skills, skill.trim()] }));
  }, []);

  const removeSkill = useCallback((idx) => {
    setConfig((prev) => ({ ...prev, skills: prev.skills.filter((_, i) => i !== idx) }));
  }, []);

  const addProject = useCallback(() => {
    setConfig((prev) => ({
      ...prev,
      projects: [...prev.projects, { id: Date.now().toString(), title: '', description: '', link: '', imageUrl: '' }],
    }));
  }, []);

  const updateProject = useCallback((id, field, value) => {
    setConfig((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    }));
  }, []);

  const removeProject = useCallback((id) => {
    setConfig((prev) => ({ ...prev, projects: prev.projects.filter((p) => p.id !== id) }));
  }, []);

  const resetConfig = useCallback(() => {
    setConfig(defaultConfig);
  }, []);

  return {
    config,
    updateField,
    updateSocial,
    addSkill,
    removeSkill,
    addProject,
    updateProject,
    removeProject,
    resetConfig,
  };
}
