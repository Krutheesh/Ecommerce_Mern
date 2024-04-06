import React from 'react'
import groceries from '../../../assets/categories/groceries.jpg'
import Laptops from '../../../assets/categories/Laptops.png'
import decoration from '../../../assets/categories/decoration.png'
import skincare from '../../../assets/categories/skincare.png'
import clothing from '../../../assets/categories/clothing.jpg'
import fragrences from '../../../assets/categories/fragrences.jpg'
import { Link } from 'react-router-dom'
const CategoriesMain = () => {
  const categories = [
    {
      img:groceries,
      name:"Groceries"
    },{
      img:Laptops,
      name:"Laptops"
    }
    ,{
     img: decoration,
      name:"Decoration"
    }
    ,{
     img: skincare,
      name:"Skincare"
    }
    ,{
     img: clothing,
      name:"Clothing"
    },{
      img:fragrences,
      name:"Fragrences"
    }
   
  ]
  return (
    <div className='flex flex-wrap justify-center items-center py-5'>
      {categories&&categories.map(ele =>(
        <Link to='/products'>
         <div className='p-2 '>
          <img src={ele.img} className='w-[20rem] h-[20rem] p-2' alt={ele}/>
           <h2 className='text-[1.5rem] text-gray-500 text-center font-semibold '>{ele.name}</h2>
          </div>
        </Link>
       
      ) )}

      
      
    </div>
  )
}

export default CategoriesMain
