import { Outlet, Link } from "react-router-dom";
import {
    Navbar,
    NavItem,
    NavbarContainer,
} from 'uikit-react';


const Layout = () => {
    return (
        <>
            <NavbarContainer>
                <Navbar left>
                    <NavItem>
                        <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/karyawan">Karyawan</Link>
                    </NavItem>
                </Navbar>
            </NavbarContainer>

            <Outlet />
        </>
    )
};

export default Layout;
