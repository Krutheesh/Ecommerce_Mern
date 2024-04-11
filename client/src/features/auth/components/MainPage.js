import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import HeroSwiper from '../../common/HeroSwiper';
import banner5 from "../../../assets/banners/banner5.jpg"
import banner6 from "../../../assets/banners/banner6.jpg"
import banner7 from "../../../assets/banners/banner7.jpg"
import banner8 from "../../../assets/banners/banner8.jpg"
import c2 from "../../../assets/banners/c2.jpeg"
import MySwiperComp from '../../common/MyswiperComp';
import { fetchAllProductsAsync } from '../../product/productSlice';
import { ProductGrid } from '../../product/components/ProductList';
import CategoriesMain from './CategoriesMain';
import { ScrollTop } from '../../common/ScrollTop';
const MainPage = () => {
  const {homeProducts,status} = useSelector(store => store.product)
  console.log(homeProducts)
 const dispatch = useDispatch()
  const banners =[
    banner5,banner6,banner7,banner8,c2
  ]
const products = homeProducts.slice(1,7)
  useEffect(() => {
    console.log("kakk")
 dispatch(fetchAllProductsAsync())
  },[])
  return (
    <div className=''>
<ScrollTop/>
      <HeroSwiper carousalImg={banners} />
      <div>
      <h2 className='flex  justify-center items-center p-5 font-bold text-[2.2rem] text-gray-800 '>Popular Items</h2>
        <ProductGrid products={products} status={status} home={true}/>
      </div>
      <div >
        <h2 className='flex  justify-center items-center p-5 font-bold text-[2.2rem] text-gray-800'> Brands</h2>
      <MySwiperComp/>
      </div>
      <div>
      <h2 className='flex  justify-center items-center p-5 font-bold text-[2.2rem] text-gray-800'> Categories</h2>
<CategoriesMain/>
      </div>
    
    </div>
  )
}

export default MainPage
