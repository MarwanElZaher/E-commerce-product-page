import React from "react";
import CustomButton from "./CustomButton";
import { categories } from "../../constants";
import { useDispatch, useSelector } from 'react-redux';
import { selectedCategory } from "../store/categorySlice";

const NavBar = () => {
    const dispatch = useDispatch();

    const handleCategoryClick = (category) => {
        dispatch(selectedCategory(category.name))
        console.log(`Clicked on ${category.name}`);
    }
    const activeCategory = () => {
        return  useSelector((state)=> state.category.selectedCategory)
    }
return (
    <div className="flex flex-row justify-around items-center border-b-2 mx-20">
        <img src="/assets/logo.svg" alt="store logo"/>
    <div className="flex justify-around gap-8 ">
        {categories.map(category=> (
             <CustomButton key={category.id} label={category.name} className={`primary py-8 ${activeCategory() == category.name ? "border-b-4 border-orange-600" : "" }`} onClick={() => handleCategoryClick(category)}/>))}
    </div>
        <div className="flex flex-row gap-8">
            <CustomButton hideText={true} label="Cart" child={<img src="/assets/icon-cart.svg" alt="cart-icon"/>}/>
            <img className="h-10 w-10 hover:cursor-pointer" src="/assets/image-avatar.png" alt="avatar"/>
        </div>

    </div>
)
}
export default NavBar