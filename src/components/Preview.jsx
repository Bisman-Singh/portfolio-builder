import { getPreviewComponent } from '../templates';

export default function Preview({ config, fullScreen }) {
  const PreviewComponent = getPreviewComponent(config.template);

  return (
    <div className={`preview ${fullScreen ? 'preview-fullscreen' : ''}`}>
      {!fullScreen && <h2 className="preview-title">Live Preview</h2>}
      <div className="preview-frame">
        <PreviewComponent config={config} />
      </div>
    </div>
  );
}
