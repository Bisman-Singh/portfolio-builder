export const defaultConfig = {
  name: 'Jane Doe',
  title: 'Full-Stack Developer',
  bio: 'Passionate developer with 5+ years of experience building web applications. I love creating elegant solutions to complex problems.',
  skills: ['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Docker'],
  projects: [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart, checkout, and payment integration.',
      link: 'https://example.com/ecommerce',
      imageUrl: '',
    },
    {
      id: '2',
      title: 'Task Manager',
      description: 'A collaborative task management app with real-time updates.',
      link: 'https://example.com/tasks',
      imageUrl: '',
    },
  ],
  social: {
    github: 'https://github.com/janedoe',
    linkedin: 'https://linkedin.com/in/janedoe',
    twitter: 'https://twitter.com/janedoe',
    email: 'jane@example.com',
  },
  themeColor: '#7c3aed',
  template: 'modern',
};

export const STORAGE_KEY = 'portfolio-builder-config';
