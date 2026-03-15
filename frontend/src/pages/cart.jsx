import React from "react";

const Cart = () => {

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      {/* Heading */}
      <div className="text-center text-4xl font-bold mb-10">
        Your Cart
      </div>

      {/* Main Container */}
      <div className="w-5/6 m-auto flex gap-8">

        {/* LEFT SIDE - CART ITEMS */}
        <div className="w-2/3 bg-white rounded-xl shadow-lg p-6 space-y-6">

          {/* Product Item */}
          <div className="flex items-center justify-between border-b pb-6">

            <div className="flex gap-6 items-center">

              <img
                className="h-24 w-24 object-cover rounded-lg"
                src="https://via.placeholder.com/150"
                alt=""
              />

              <div>

                <div className="text-lg font-semibold">
                  Product Title
                </div>

                <div className="text-gray-500">
                  Size: M
                </div>

                <div className="text-green-600 font-bold text-lg">
                  ₹1999
                </div>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <button className="px-3 py-1 bg-gray-200 rounded">
                -
              </button>

              <div className="font-semibold">
                1
              </div>

              <button className="px-3 py-1 bg-gray-200 rounded">
                +
              </button>

              <button className="text-red-500 ml-4">
                Remove
              </button>

            </div>

          </div>


          {/* Another Product Example */}
          <div className="flex items-center justify-between border-b pb-6">

            <div className="flex gap-6 items-center">

              <img
                className="h-24 w-24 object-cover rounded-lg"
                src="https://via.placeholder.com/150"
                alt=""
              />

              <div>

                <div className="text-lg font-semibold">
                  Product Title
                </div>

                <div className="text-gray-500">
                  Size: L
                </div>

                <div className="text-green-600 font-bold text-lg">
                  ₹2499
                </div>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <button className="px-3 py-1 bg-gray-200 rounded">
                -
              </button>

              <div className="font-semibold">
                2
              </div>

              <button className="px-3 py-1 bg-gray-200 rounded">
                +
              </button>

              <button className="text-red-500 ml-4">
                Remove
              </button>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="w-1/3 bg-white rounded-xl shadow-lg p-6 h-fit">

          <div className="text-2xl font-semibold mb-6">
            Order Summary
          </div>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>₹4498</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>₹100</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Tax</span>
            <span>₹90</span>
          </div>

          <div className="border-t pt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹4688</span>
          </div>

          <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition cursor-pointer">
            Proceed to Checkout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;