import React from 'react';
//import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import reducer, { initialState } from "./components/reducer";
import { StateProvider } from './components/StateProvider';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App tab="home" />
		</StateProvider>
	</React.StrictMode>
);


