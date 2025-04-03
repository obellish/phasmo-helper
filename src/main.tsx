import './setup.ts';
import './index.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';

const App = React.lazy(() => import('./App.tsx'));

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
