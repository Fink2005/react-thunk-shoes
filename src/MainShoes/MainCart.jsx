import React from "react";

export default function MainCart({ cart, clickToDelete, handleChange }) {
  let renderTable = () => {
    return cart.map((item, index) => {
      return (
        <tr>
          <td key={index}>{item.name}</td>
          <td>
            <img width={100} src={item.image} alt="" />
          </td>
          <td>
            <div className="d-flex justify-content-center align-items-center">
              <button
                onClick={() => {
                  handleChange(item.id, 1);
                }}
                className="btn btn-primary"
              >
                +
              </button>
              <h3 className="text-center pt-2 px-2">{item.quantity}</h3>
              <button
                onClick={() => {
                  handleChange(item.id, -1);
                }}
                className="btn btn-primary"
              >
                -
              </button>
            </div>
          </td>
          <td className="text-center">{item.price}</td>
          <td>
            <div className="d-flex justify-content-center">
              <button
                onClick={() => {
                  clickToDelete(item.id);
                }}
                className="btn btn-primary text-center"
              >
                delete
              </button>{" "}
            </div>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="px-5">name</th>
            <th className="px-5">img</th>
            <th className="px-5">quantity</th>
            <th className="px-5">price</th>
            <th className="px-5">action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}
