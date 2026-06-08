
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Could not find root element to mount to');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/en/*" element={<App lang="en" />} />
        <Route path="/*" element={<App lang="pt" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
