import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageState from './Context/ImageState';

createRoot(document.getElementById('root')).render(
  <ImageState>
    <App />
  </ImageState>,
)
