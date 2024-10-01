import React from "react";
import { useState } from "react";
import { dataShoe } from "./dataShoes";
import MainListShoes from "./MainListShoes";
import MainCart from "./MainCart";
export default function MainShoes() {
  const [state, setState] = useState({ list: dataShoe, cart: [] });
  const clickToAdd = (Shoes) => {
    let cloneCart = [...state.cart];
    let index = cloneCart.findIndex((item) => item.id === Shoes.id);
    if (index !== -1) {
      cloneCart[index].quantity++;
    } else {
      cloneCart.push({ ...Shoes, quantity: 1 });
    }
    setState({
      ...state,
      cart: cloneCart,
    });
  };
  const clickToDelete = (idShoes) => {
    let cloneCart = [...state.cart];
    let filter = cloneCart.filter((item) => {
      return item.id !== idShoes;
    });
    console.log(cloneCart);
    setState({
      ...state,
      cart: filter,
    });
  };

  const handleChange = (idNumber, number) => {
    let cloneCart = [...state.cart];
    let index = cloneCart.findIndex((item) => item.id === idNumber);
    cloneCart[index].quantity += number;
    setState({
      ...state,
      cart: cloneCart,
    });
  };
  return (
    <div className="row">
      <div className="col-6">
        <MainListShoes list={state.list} clickToAdd={clickToAdd} />
      </div>
      <div className="col-6">
        <MainCart
          handleChange={handleChange}
          cart={state.cart}
          clickToDelete={clickToDelete}
        />
      </div>
    </div>
  );
}
