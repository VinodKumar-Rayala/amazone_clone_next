import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { BottomHeader } from "@/components/Header/BottomHeader";
import Header from "@/components/Header/Header";
import Products from "@/components/Products";
import { Product } from "../../type";

interface Props{
  productionData:Product
}

export default function Home({productionData}:Props) {
 
  return (
   <main>
  
   <div className="">
    <Banner />
    <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
    <Products productionData={productionData}/>
    </div>
   
   </div>
   
   </main>
  );
}


export const getServerSideProps = async () => {
  try {
    let res = await fetch(`https://fakestoreapiserver.reactbd.com/tech`);
    let productionData = await res.json();
    if (!Array.isArray(productionData)) {
      productionData = []; // Handle unexpected data structure
    }
    return { props: { productionData } };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { props: { productionData: [] } }; // Return empty array on error
  }
};