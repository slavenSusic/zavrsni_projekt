import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer";
import NavBar from "./Home/NavBar";
const  RootLayout  = () =>{
return (<>
 <NavBar />
 <Outlet/>
 <Footer/>
</>)
}
export default RootLayout;