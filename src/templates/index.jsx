import minimalTemplate, { MinimalPreview } from './minimal';
import modernTemplate, { ModernPreview } from './modern';
import creativeTemplate, { CreativePreview } from './creative';

export const templates = {
  minimal: { name: 'Minimal', generate: minimalTemplate, Preview: MinimalPreview },
  modern: { name: 'Modern', generate: modernTemplate, Preview: ModernPreview },
  creative: { name: 'Creative', generate: creativeTemplate, Preview: CreativePreview },
};

export function generateHTML(config) {
  const tmpl = templates[config.template] || templates.modern;
  return tmpl.generate(config);
}

export function getPreviewComponent(templateKey) {
  const tmpl = templates[templateKey] || templates.modern;
  return tmpl.Preview;
}
