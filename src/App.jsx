import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import usePortfolio from './hooks/usePortfolio';
import EditPage from './pages/EditPage';
import PreviewPage from './pages/PreviewPage';
import './App.css';

export default function App() {
  const portfolio = usePortfolio();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/edit" element={<EditPage portfolio={portfolio} />} />
        <Route path="/preview" element={<PreviewPage config={portfolio.config} />} />
        <Route path="*" element={<Navigate to="/edit" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
