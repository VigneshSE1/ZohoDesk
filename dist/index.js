import { jsx as _jsx } from "react/jsx-runtime";
import './tailwind.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(_jsx(StrictMode, { children: _jsx(App, {}) }));
