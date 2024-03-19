import React from 'react'
import ReactDOM from 'react-dom/client'
import Restaurants from './constants/mock.js'


const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement)

root.render(
<>
  <div> {Restaurants[0].name}
    <h3>Меню</h3>
      <ul>
        <li>{Restaurants[0].menu[0].name}</li>
        <li>{Restaurants[0].menu[1].name}</li>
        <li>{Restaurants[0].menu[2].name}</li>      
      </ul>
    <h3>Отзывы</h3>
      <ul>
        <li>{Restaurants[0].reviews[0].text}</li>
        <li>{Restaurants[0].reviews[1].text}</li>          
      </ul>
  </div>

  <div> {Restaurants[1].name}
    <h3>Меню</h3>
      <ul>
        <li>{Restaurants[1].menu[0].name}</li>
        <li>{Restaurants[1].menu[1].name}</li>
      </ul>
    <h3>Отзывы</h3>
      <ul>
        <li>{Restaurants[1].reviews[0].text}</li>
        <li>{Restaurants[1].reviews[1].text}</li>
        <li>{Restaurants[1].reviews[2].text}</li>           
      </ul>
  </div>

  <div> {Restaurants[2].name}
    <h3>Меню</h3>
      <ul>
        <li>{Restaurants[2].menu[0].name}</li>
        <li>{Restaurants[2].menu[1].name}</li>
        <li>{Restaurants[2].menu[2].name}</li>
      </ul>
    <h3>Отзывы</h3>
      <ul>
        <li>{Restaurants[2].reviews[0].text}</li>
      </ul>
  </div>

  <div> {Restaurants[3].name}
    <h3>Меню</h3>
      <ul>
        <li>{Restaurants[3].menu[0].name}</li>
        <li>{Restaurants[3].menu[1].name}</li>
      </ul>
    <h3>Отзывы</h3>
      <ul>
        <li>{Restaurants[3].reviews[0].text}</li>
        <li>{Restaurants[3].reviews[1].text}</li>
      </ul>
  </div>

  React.createElement("div", 
    children: [
      {Restaurants[0].name},
      React.createElement("h3", children: "Меню"),
      React.createElement("ul", children: [
        React.createElement("li", children: {Restaurants[0].menu[0].name}),
        React.createElement("li", children: {Restaurants[0].menu[1].name}),
      ])
      React.createElement("h3", children: "Отзывы"),
      React.createElement("ul", children: [
        React.createElement("li", children: {Restaurants[0].reviews[0].text}),
        React.createElement("li", children: {Restaurants[0].reviews[0].text}),
      ])
    ]
  )
</>
  
)
