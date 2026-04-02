import React from "react";

function SelectCart({ cartlist, setCartlist, cart, setCart }) {
    const deleteHandler = (a) => {
        setCartlist(cartlist.filter((item) => item !== a));
        setCart(cart - 1);
    }
  return (
    <div>
      <div>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-sl font-semibold text-gray-700 tracking-wide">
            Your Cart
          </li>
          {cartlist.map((a, index) => (
            <li className="list-row bg-gray-100 m-1" key={index}>
              <div>
                <img className="size-10 rounded-box" src={a.icon} />
              </div>
              <div className="list-col-grow">
                <div>{a.name}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {a.price}/{a.period}
                </div>
              </div>
              <button onClick={() => deleteHandler(a)} className="btn btn-secondary btn-ghost">Delete</button>
            </li>
          ))}

          <div>
            <div className="flex justify-between p-4">
              <h1 className="text-xl font-semibold text-gray-700">Total</h1>
              <h1 className="text-xl font-semibold text-gray-700">${cartlist.reduce((acc, item) => acc + item.price, 0)}</h1>
            </div>
            <div>
              <button  className="btn w-full rounded-full btn-primary">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SelectCart;
