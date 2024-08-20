import { Link } from 'react-router-dom';
import Preview from '../components/Preview';
import ExportButton from '../components/ExportButton';

export default function PreviewPage({ config }) {
  return (
    <div className="preview-page">
      <div className="preview-toolbar">
        <Link to="/edit" className="btn-back">← Back to Editor</Link>
        <ExportButton config={config} />
      </div>
      <Preview config={config} fullScreen />
    </div>
  );
}
