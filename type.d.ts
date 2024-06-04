export interface Product{
    _id:number
    title:string
    price:number
    oldPrice:string
    isNew:boolean
    image:string
    description:string
    category:string
    brand:string
}
export  interface StoreProduct{
    _id:number
    title:string
    price:number
    oldPrice:string
    isNew:boolean
    image:string
    description:string
    category:string
    brand:string
    quantity:number
}
export  interface NextSlice{
    productData:StoreProduct[]
    favouriteData:StoreProduct[]
    allProducts:StoreProduct[]
    userInfo: null | string
}
export  interface HeaderNext{
    productData:StoreProduct[]
    favouriteData:StoreProduct[]
    allProducts:StoreProduct[]
    userInfo: null | string
    next:any
}