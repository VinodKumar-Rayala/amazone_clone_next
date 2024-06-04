import React, { useEffect, useState } from "react";
import { SiMediamarkt } from "react-icons/si";
import Products from "./Products";
import { useSelector } from "react-redux";
import { HeaderNext, StoreProduct } from "../../type";
import { useSession, signIn, signOut } from "next-auth/react";

const CartPayment = () => {
  const { productData,userInfo } = useSelector((state: HeaderNext) => state.next);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let result = productData.reduce(
      (acc: number, curr: StoreProduct) => acc + curr.quantity * curr.price,
      0
    );
    setTotal(result);
  }, [productData]);
  return (
    <div className="flex flex-col p-3 gap-4">
      <div className="flex justify-between gap-3">
        <p className="bg-[#0b5e30] text-[#ffff] flex items-center rounded-full w-8 px-1 h-6">
          <SiMediamarkt />
        </p>
        <p className="">
          Your order qualifies for FREE Shipping by Choosing this option at
          checkout. See details....
        </p>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold">Total:</p>
        <p className="font-semibold">${total}</p>
      </div>
      <div>
        {!userInfo ? (
          <button className="rounded-lg w-full hover:text-[#000] font-semibold bg-amazon_light hover:bg-amazon_yellow cursor-not-allowed h-10 bg-opacity-50 text-[#fff] ">
            Proceed to Buy
          </button>
        ) : (
          <button className="rounded-lg w-full hover:text-[#000] font-semibold bg-amazon_light hover:bg-amazon_yellow cursor-pointer h-10 bg-opacity-50 text-[#fff] ">
            Proceed to Buy
          </button>
        )}
        {!userInfo && (
          <p className="text-[#f55353] text-sm mt-3 animate-bounce">
            Please log in to continue
          </p>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default CartPayment;
