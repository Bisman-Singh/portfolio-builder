import { Link } from 'react-router-dom';
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import ExportButton from '../components/ExportButton';

export default function EditPage({ portfolio }) {
  const { config, ...actions } = portfolio;

  return (
    <div className="edit-page">
      <div className="toolbar">
        <h1>🎨 Portfolio Builder</h1>
        <div className="toolbar-actions">
          <ExportButton config={config} />
          <Link to="/preview" className="btn-preview-link">Full Preview →</Link>
        </div>
      </div>
      <div className="edit-layout">
        <div className="edit-left">
          <Editor config={config} {...actions} />
        </div>
        <div className="edit-right">
          <Preview config={config} />
        </div>
      </div>
    </div>
  );
}
