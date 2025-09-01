import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App.jsx';
import './index.css';
import { CartProvider } from './services/cartContext.jsx';
import { NotificationProvider } from './services/notificationContext.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <HelmetProvider>
    <NotificationProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </NotificationProvider>
  </HelmetProvider>
);
