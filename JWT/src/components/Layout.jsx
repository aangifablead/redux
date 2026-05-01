import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <main className="App">
            {/* You can add a Navbar here */}
            <Outlet /> 
        </main>
    )
}
export default Layout;