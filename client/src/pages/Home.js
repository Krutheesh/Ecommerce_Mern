import { Link, Outlet } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import { useSelector } from "react-redux";
import { selectUserInfo } from '../features/user/userSlice'
import { ScrollTop } from "../features/common/ScrollTop";
function Home() {

    return ( 
        <div>
           
            <NavBar/>
                <Outlet/>
            
            <Footer></Footer>
        </div>
     );
}

export default Home;