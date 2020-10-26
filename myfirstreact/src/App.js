import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductComponent from './Components/productItem'

let productList = [
  {
    name: "product_1",
    body: "desc_1"
  },
  {
    name: "product_2",
    body: "desc_2"
  },
  {
    name: "product_3",
    body: "desc_3"
  },
  {
    name: "product_4",
    body: "desc_4"
  }
];

function App() {
  return (
    <div className="App">
      <div className="productListContainer">
        {
          productList.map((product, index) => {
            return <ProductComponent name={product.name} body={product.body} key={index}/>
          })
        }
      </div>
    </div>
  );
}

const OurGreeting = () => {
  const [greeting, setGreeting] = useState(
      "This is our page!!"
  );

  const OnButtonClick = (event) => setGreeting(event.target.value);

  return ( 
    <div>
      <h1>{greeting}</h1>
      <input
      type="text"
      value={greeting}
      onChange={OnButtonClick}
    />
    </div>
  );
}
  
export default App;