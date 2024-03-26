import React from 'react';
import ReactDOM from 'react-dom/client';
import { restaurants } from './constants/mock.js';
import { Restaurant } from './components/restaurant/component.jsx';
import { Layout } from "./components/layout/component.jsx";


const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement)

root.render(
  <Layout>
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant = {restaurant} />
      ))} 
    </div>
  </Layout>
)

