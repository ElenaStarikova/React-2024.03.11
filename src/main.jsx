import React from 'react'
import ReactDOM from 'react-dom/client'
import restaurants from './constants/mock.js'


const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement)

root.render(
<>
  <div> Dishoom
    <h3>Меню</h3>
      <ul>
        <li>Chicken tikka masala</li>
        <li>Naan</li>
        <li>Samosa</li>      
      </ul>
    <h3>Отзывы</h3>
      <ul>
        <li>Not bad</li>
        <li>No burgers</li>          
      </ul>
  </div>

  <div> Homeslice
    <h3>Меню</h3>
      <ul>
        <li>Margarita</li>
        <li>Chef pizza</li>
      </ul>
    <h3>Отзывы</h3>
      <ul>
        <li>Perfect Margarita</li>
        <li>No burgers again. But Chef Pizza is the best one</li>
        <li>Good for lunch</li>           
      </ul>
  </div>

  <div> Fabrique
    <h3>Меню</h3>
      <ul>
        <li>Cinnamon buns</li>
        <li>Semlor</li>
        <li>Saffron bun</li>
      </ul>
    <h3>Отзывы</h3>
      <ul>
        <li>Best bakery</li>
      </ul>
  </div>

  <div> Flat Iron
    <h3>Меню</h3>
      <ul>
        <li>Flat Iron Steak</li>
        <li>Flat Iron Burger</li>
      </ul>
    <h3>Отзывы</h3>
      <ul>
        <li>Finally! This place is amazing place for breakfast, lunch, dinner and supper</li>
        <li>Meat here is extremely delicious</li>
      </ul>
  </div>

  React.createElement("div", 
    children: [
      "Flat Iron",
      React.createElement("h3", children: "Меню"),
      React.createElement("ul", children: [
        React.createElement("li", children: "Flat Iron Steak"),
        React.createElement("li", children: "Flat Iron Steak"),
      ])
      React.createElement("h3", children: "Отзывы"),
      React.createElement("ul", children: [
        React.createElement("li", children: "Finally! This place is amazing place for breakfast, lunch, dinner and supper"),
        React.createElement("li", children: "Meat here is extremely delicious"),
      ])
    ]
  )
</>
  
)
