import React from "react";
import { LuMenu } from "react-icons/lu";
import { useSession, signIn, signOut } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderNext, StoreProduct } from "../../../type";
import { removeUser } from "@/store/nextSlice";

export const BottomHeader = () => {
  const {userInfo} = useSelector((state:HeaderNext) => state.next);
  const dispatch = useDispatch()

  const handleSignOut = () => {
    signOut();
    dispatch(removeUser())
  }
  return (
    <div className="w-full h-10  bg-amazon_light text-sm text-[#fff] flex items-center px-4 py-2 gap-4">
      {/* All */}
      <div className="flex gap-1 h-8 border border-amazon_light  hover:border-[#FFF] rounded-md p-2 hover:cursor-pointer duration-300">
        <LuMenu className="text-xl" />
        <p>All</p>
      </div>

      {/* TodaysDeals */}
      <p className="hidden md:inline-flex items-center h-8 border border-amazon_light  hover:border-[#FFF] rounded-md px-2 hover:cursor-pointer duration-300">
        TodaysDeals
      </p>

      {/* Customer Service */}
      <p className="hidden md:inline-flex items-center h-8 border border-amazon_light  hover:border-[#FFF] rounded-md px-2 hover:cursor-pointer duration-300">
        Customer Service{" "}
      </p>

      {/* Registry */}
      <p className="hidden md:inline-flex items-center h-8 border border-amazon_light  hover:border-[#FFF] rounded-md px-2 hover:cursor-pointer duration-300">
        Registry
      </p>

      {/* Gift Cards */}
      <p className="hidden md:inline-flex items-center h-8 border border-amazon_light  hover:border-[#FFF] rounded-md px-2 hover:cursor-pointer duration-300">
        Gift Cards
      </p>

      {/* Sell */}
      <p className="hidden md:inline-flex items-center h-8 border border-amazon_light hover:border-[#FFF] rounded-md px-2 hover:cursor-pointer duration-300">
        Sell
      </p>
      {userInfo && (
        <p
          onClick={handleSignOut}
          className="hidden md:inline-flex items-center h-8 border border-amazon_light hover:border-[#b74747] text-amazon_yellow hover:text-[#ff0000] rounded-md px-2 hover:cursor-pointer duration-300"
        >
          Sign Out
        </p>
      )}
    </div>
  );
};
