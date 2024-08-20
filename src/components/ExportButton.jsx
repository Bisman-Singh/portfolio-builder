import { generateHTML } from '../templates';

export default function ExportButton({ config }) {
  const handleExport = () => {
    const html = generateHTML(config);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${config.name.toLowerCase().replace(/\s+/g, '-')}-portfolio.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button className="btn-export" onClick={handleExport}>
      ⬇ Export HTML
    </button>
  );
}
