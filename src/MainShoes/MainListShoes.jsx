import React from "react";

export default function MainListShoes({ list, clickToAdd }) {
  let render = () => {
    return list.map((item, index) => {
      return (
        <div key={index} className="card col-3">
          <h3>{item.name}</h3>
          <div className="d-flex justify-content-center">
            <img src={item.image} width={100} alt="" />
          </div>
          <h5 className="text-center">{item.price}</h5>
          <p>{item.shortDescription}</p>
          <button
            onClick={() => {
              clickToAdd(item);
            }}
            className="btn btn-primary text-center"
          >
            Add
          </button>
        </div>
      );
    });
  };
  return <div className="row">{render()}</div>;
}
