import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModalState } from './Context/ModalContext';
import { GameState } from './Context/GameContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalState>
      <GameState>
      <App />
      </GameState>
    </ModalState>
  </React.StrictMode>
);

