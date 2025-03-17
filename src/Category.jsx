import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { LiaPastafarianismSolid } from "react-icons/lia";
import { BiRestaurant } from "react-icons/bi";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

export const categories=[
    {
        id:1,
        name:"All",
        Icon:<TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id:2,
        name:"Breakfast",
        Icon:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600"/>

    },
    {
        id:3,
        name:"Soups",
        Icon:<LuSoup className="w-[60px] h-[60px] text-green-600"/>

    },
    {
        id:4,
        name:"Pasta",
        Icon:<LiaPastafarianismSolid className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:5,
        name:"Main_Course",
        Icon:<BiRestaurant className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:6,
        name:"Pizza",
        Icon:<GiFullPizza className="w-[60px] h-[60px] text-green-600"/>

    },
    {
        id:7,
        name:"Burger",
        Icon:<GiHamburger className="w-[60px] h-[60px] text-green-600"/>
    },

]

export default categories