import React, { useState, useContext } from "react";
import './Cart.css'
import { cartCtx } from "../../context/cartCtx";

function CartParent({ cartitems }) {
  const { cartItems } = useContext( cartCtx );
  const [count, setCount] = useState(1);

  console.log(cartitems);
  function increase() {
    setCount(count + 1);
  }

  let shipping = 0;

  if(cartitems.length > 0){
    shipping = 8;
  }

  function decrease() {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert("Quantity can not go below 1");
    }
  }

  // Calculate subtotal
  const subtotal = cartitems.reduce((total, item) => {
    return total + parseFloat(item.price);
  }, 0);

  const Total = cartitems.reduce((total, item) => {
    return total + parseFloat(item.price);
  }, shipping);

  return (
    <>
    <div className="Cartcontainer">
      <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className='class="mx-auto px-4 sm:px-6 lg:px-8"'>
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Cart</h1>
          </div>

          <div className="mx-auto mt-8 max-w-2xl md:mt-12">
            <div className="bg-white shadow">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                  {cartitems.map((item, index) => (
                    <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                      <div className="shrink-0"><img className="h-24 w-24 max-w-full rounded-lg object-cover" src={item.imgUrl} alt="" /></div>

                      <div className="relative flex flex-1 flex-col justify-between">
                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                          <div className="pr-8 sm:pr-5">
                            <p className="text-base font-semibold text-gray-900">
                            {item.txt}
                            </p>
                            <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                              {" "}
                              item ka size
                            </p>
                          </div>

                          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                            {parseFloat(item.price) * count}$
                            </p>

                            {/* <div className="sm:order-1">
                              <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                <button
                                  onClick={decrease}
                                  className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                >
                                  -
                                </button>
                                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                  {count}
                                </div>
                                <button
                                  onClick={increase}
                                  className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                >
                                  +
                                </button>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </li>
                    ))}
                  </ul>
                </div>
                <div class="mt-6 border-t border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-400">Subtotal</p>
              <p class="text-lg font-semibold text-gray-900">${subtotal.toFixed(2)}</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-400">Shipping</p>
              <p class="text-lg font-semibold text-gray-900">
                ${shipping}</p>
            </div>
            <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total</p>
            <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400">USD</span> {Total.toFixed(2)}</p>
          </div>
          </div>
          <div class="mt-6 text-center">
            <button type="button" class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
              Checkout
              <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default CartParent;
