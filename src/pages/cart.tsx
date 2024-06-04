import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderNext, Product, StoreProduct } from "../../type";
import Image from "next/image";
import Discount from "@/components/Discount";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import {
  addToCart,
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "@/store/nextSlice";
import Link from "next/link";
import CartPayment from "@/components/CartPayment";

const Cart = () => {
  const { productData } = useSelector((state: HeaderNext) => state.next);

  const dispatch = useDispatch();
  console.log(productData, "CARTPRODUCTDETAILS");
  return (
    <div className=" py-4 w-screen flex justify-center gap-6 ">
      <div className="w-8/12">
        {productData.length > 0 ? (
          <>
            <div className="bg-[#ffff] p-4 rounded-lg flex flex-col gap-4">
              <div className="border-b-2 border-[#c2c0c0] flex justify-between">
                <p className="text-xl font-semibold">Shopping Cart</p>
                <p className="text-lg font-semibold">Sub Total</p>
              </div>
              {productData.map((item: StoreProduct) => {
                return (
                  <div
                    key={item._id}
                    className="bg-[#f3efef] items-center rounded-md flex"
                  >
                    <Image
                      width={150}
                      height={150}
                      src={item.image}
                      alt="Product"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold text-lg">{item.title}</p>
                      <p className="text-sm opacity-70">{item.description}</p>
                      <p className="opacity-85 flex">
                        Unit Price:
                        <span className="font-semibold">
                          <Discount save={item.price} />
                        </span>
                      </p>

                      <div className="flex gap-2">
                        {" "}
                        <div className="border border-[#c2c0c0] w-24 h-9 rounded-3xl shadow-md my-2 flex justify-around items-center bg-[#ffff]">
                          <FiMinus
                            className="cursor-pointer rounded-full hover:bg-[#c2c0c0] "
                            onClick={() =>
                              dispatch(
                                decrementQuantity({
                                  _id: item._id,
                                  title: item.title,
                                  price: item.price,
                                  oldPrice: item.oldPrice,
                                  isNew: item.isNew,
                                  image: item.image,
                                  description: item.description,
                                  category: item.category,
                                  brand: item.brand,
                                  quantity: 1,
                                })
                              )
                            }
                          />
                          {item.quantity}

                          <FiPlus
                            className="cursor-pointer  rounded-full hover:bg-[#c2c0c0] "
                            onClick={() =>
                              dispatch(
                                incrementQuantity({
                                  _id: item._id,
                                  title: item.title,
                                  price: item.price,
                                  oldPrice: item.oldPrice,
                                  isNew: item.isNew,
                                  image: item.image,
                                  description: item.description,
                                  category: item.category,
                                  brand: item.brand,
                                  quantity: 1,
                                })
                              )
                            }
                          />
                        </div>
                        <div
                          className="font-semibold opacity-70 flex items-center cursor-pointer hover:text-[#d02f2f]"
                          onClick={() => dispatch(deleteItem(item._id))}
                        >
                          <IoCloseOutline /> remove
                        </div>
                      </div>
                    </div>
                    <div className="px-4 font-semibold">
                      <Discount save={item.price * item.quantity} />
                    </div>
                  </div>
                );
              })}
              <div
                className="bg-[#f3efef] rounded-md font-semibold w-40 flex justify-center items-center py-2 cursor-pointer hover:bg-[#eb2a2a]"
                onClick={() => dispatch(resetCart())}
              >
                {" "}
                Reset Cart
              </div>
            </div>
          </>
        ) : (
          <div className="bg-[#ffff] p-4 rounded-lg h-80 flex justify-center items-center">
            <div className="flex justify-center items-center flex-col">
              <p>Your Cart is empty</p>
              <Link
                href={"/"}
                className="cursor-pointer bg-amazon_blue text-[#fff] hover:bg-amazon_yellow  font-semibold w-44 rounded-lg py-2 px-4"
              >
                go to shopping
              </Link>
            </div>
          </div>
        )}
      </div>
      {productData.length > 0 && (
        <div className="bg-[#ffff] w-2/12 p-4 h-80 rounded-lg">
            <CartPayment />
        </div>
      )}
    </div>
  );
};

export default Cart;
