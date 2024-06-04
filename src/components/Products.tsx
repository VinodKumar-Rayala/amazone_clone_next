import React from "react";
import { Product } from "../../type";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import Discount from "./Discount";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/store/nextSlice";

interface Props {
  productionData: Product;
}

const Products = ({ productionData }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 relative">
      {productionData.map((item: any) => (
        <div
          key={item._id}
          className="bg-[#fff] w-full p-4 text-[#000] border border-[#c2c0c0] rounded-lg group overflow-hidden"
        >
          <div className="w-full  relative">
            <Image
              src={item.image}
              alt="product"
              width={300}
              height={300}
              className=" object-cover scale-90 hover:scale-100 transition-transform duration-300"
            />
            <div className=" border-[#c2c0c0] border-[1px] flex flex-col  rounded-md w-12 h-24 absolute top-32 right-0 translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
              <span
                onClick={() =>
                  dispatch(
                    addToCart({
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
                className="flex items-center justify-center w-full h-full  border-b border-[#c2c0c0] cursor-pointer hover:bg-amazon_yellow duration-300"
              >
                <HiShoppingCart />
              </span>
              <span
                onClick={() =>
                  dispatch(
                    addToFavorite({
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
                className="flex items-center justify-center w-full h-full border-b border-[#c2c0c0] cursor-pointer hover:bg-amazon_yellow duration-300"
              >
                <FaHeart />
              </span>
            </div>
            <div className="absolute top-0 right-0 animate-bounce">
              {" "}
              {item.isNew && (
                <p className="flex">
                  !Save <Discount save={item.oldPrice - item.price} />
                </p>
              )}
            </div>
            <hr />
            <div className="px-4 py-3 flex flex-col gap-1">
              <p className="text-xs text-[#c2c0c0] tracking-wide">
                {item.category}
              </p>
              <p className="text-base font-medium">{item.title}</p>
              <p className="flex items-center gap-2">
                <span className="text-sm line-through">
                  <Discount save={item.oldPrice} />
                </span>{" "}
                <span className="text-amazon_blue font-semibold">
                  <Discount save={item.price} />
                </span>
              </p>
              <p className="text-xs text-justify text-[#6d6c6c]">
                {item.description.substring(0, 120)}
              </p>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
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
                className="bg-amazon_blue text-[#ffff] rounded-md h-10 hover:bg-amazon_yellow hover:text-[#000] font-semibold mt-2 duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
