import { useSelector } from "react-redux"
import { categories } from "../../constants"

const MainPage = () => {
    const selectedCategory = useSelector((state)=>(state.category.selectedCategory))
    const getCategoryData = () => {
      return  categories.find((category)=> category.name == selectedCategory)
    }
    return(
        <div>
             <p>{selectedCategory}</p>
            {console.log(getCategoryData())}
        </div>
    )

}
export default MainPage