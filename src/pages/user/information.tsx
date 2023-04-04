import Header from "../../componnets/user/header"
import Footer from "../../componnets/user/footer"
import { Outlet } from "react-router-dom"
import Information from "../../componnets/user/information"
const Infor = () => {
    return (
        <div>
            <Header></Header>
            <Information></Information>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Infor