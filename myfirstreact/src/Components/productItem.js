import React, { useEffect, useState } from 'react';
import MiniProduct from "./miniProduct";

const Product = ({ name, body }) => {
    const [myName, setName] = useState(name);

    let newName = "";
    
    const setNewName = (event) => {
        newName = event.target.value;
    }

    return (
    <div className="product">
        <h1>{myName}</h1>
        <p>{body}</p>
        <input placeholder="SomeText" onChange={(e) => setNewName(e)}></input>
        <button onClick={() => setName(newName)}>Click me!</button>
        <MiniProduct name={myName}/>
    </div>
    )
  }

  export default Product;