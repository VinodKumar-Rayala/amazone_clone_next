import Image from "next/image";
import Logo from "../../../Images/logo.png";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import cartIcon from "../../../Images/cartIcon.png";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { HeaderNext, NextSlice } from "../../../type";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { addUserInfo } from "@/store/nextSlice";

const Header = () => {
  const { data: session } = useSession();
  const { productData, favouriteData, userInfo } = useSelector(
    (state: HeaderNext) => state.next
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      dispatch(
        addUserInfo({
          name: session.user?.name,
          email: session.user?.email,
          image: session.user?.image,
        })
      );
    }
  }, [session]);
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-amazon_blue gap-4 h-20 text-[#FFFF]  flex items-center justify-between px-2">
        {/* Logo */}
        <Link
          href={"/"}
          className="w-28  hover:cursor-pointer object-fill pt-4 border border-amazon_blue  hover:border-[#FFF] hover:rounded-md p-2 items-center"
        >
          <Image src={Logo} alt="logo" className="" />
        </Link>

        {/* Delivery*/}
        <div className="lgl:flex items-center gap-1 hidden border border-amazon_blue  hover:border-[#FFF] hover:rounded-md p-2 hover:cursor-pointer">
          <SlLocationPin />
          <div className="text-xs ">
            <p className="text-[#CCCC]">Deliver to</p>
            <p className="font-bold text-[#FFFF] uppercase">USA</p>
          </div>
        </div>

        {/*Searchbar  */}
        <div className="h-10  w-full hidden md:inline-flex relative flex-1 ">
          <input
            type="text"
            placeholder="Search A-Z Quality and Best Products "
            className="w-full h-full outline-none px-2 placeholder:text-sm text-base text-[#000] focus-visible:border-amazon_yellow rounded-md focus-visible:border-[3px]"
          />
          <span className="w-12 rounded-tr-md rounded-br-md h-full bg-amazon_yellow text-2xl text-[#000] flex items-center justify-center absolute right-0">
            <HiOutlineSearch />
          </span>
        </div>

        {/* SignIn */}
        {!userInfo ? (
          <div
            onClick={() => signIn()}
            className="text-xs hover:cursor-pointer p-2 lgl:flex lgl:flex-col items-center gap-1 hidden border border-amazon_blue   hover:border-[#FFF] hover:rounded-md"
          >
            <p>Hello,Sign In</p>
            <p className="font-bold">Accounts & Lists</p>
          </div>
        ) : (
          <div className="flex  gap-2">
            <img src={userInfo.image} alt="profile" className="w-8 h-8 rounded-full" />
            <div className="flex flex-col">
              <p className="text-sm font-semibold">{userInfo.name}</p>
              <p className="text-xs">{userInfo.email}</p>
            </div>
          </div>
        )}

        {/* Favorite */}
        <div className="text-xs hover:cursor-pointer lgl:flex  lgl:flex-col p-2 items-center gap-1 hidden border border-amazon_blue   hover:border-[#FFF] hover:rounded-md">
          <p>
            Marked{" "}
            {favouriteData.length > 0 && (
              <span className="w-4 h-4 border-[1px] py-1 px-2 text-amazon_yellow font-semibold rounded-md border-[#CCCC]">
                {favouriteData.length}
              </span>
            )}
          </p>
          <p className="font-bold">& Favorite</p>
        </div>

        {/* Cart */}
        <Link
          href={"/cart"}
          className="flex justify-center relative items-center text-xs p-2 border border-amazon_blue   hover:border-[#FFF] hover:rounded-md hover:cursor-pointer "
        >
          <Image src={cartIcon} alt="cart" className="h-8 w-auto" />
          <p className="font-bold ">Cart</p>
          <p className="text-amazon_yellow font-bold absolute top-3 left-8">
            {productData.length > 0 ? productData.length : 0}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
