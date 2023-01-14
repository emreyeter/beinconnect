import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);

