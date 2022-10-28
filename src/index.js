import React from 'react';
import ReactDOMClient from 'react-dom/client';
import AppUI from './App/index';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<AppUI />);
