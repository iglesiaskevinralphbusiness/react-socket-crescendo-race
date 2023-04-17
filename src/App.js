import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Observer from './views/Observer';
import Player from './views/Player';

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="observer" element={<Observer />} />
					<Route path="player" element={<Player />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;
