import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App.jsx';

try {
  const html = renderToString(<App />);
  console.log("Rendered successfully length:", html.length);
  // Uncomment to inspect the HTML
  // console.log(html);
} catch (e) {
  console.error("RENDER ERROR:", e);
}
