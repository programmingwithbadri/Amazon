import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../store/StateProvider';

function Header() {
    const [{ cart, user }] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            signOut(auth).then().catch((error) => {
                console.log(error)
            });
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="logo"
                />
            </Link>

            <div className="header_search">
                <input
                    className="header_searchInput"
                />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthenticaton} className="header_navItem">
                        <span
                            className="header_navItemLineOne"
                        >Hello {user && user.displayName ? `${user.displayName}` : 'Guest'}</span>
                        <span
                            className="header_navItemLineTwo"
                        > {user ? 'Sign out' : 'Sign in'}</span>
                    </div>
                </Link>
                <div className="header_navItem">
                    <span
                        className="header_navItemLineOne"
                    >Returns</span>
                    <span
                        className="header_navItemLineTwo"
                    >& Orders</span>
                </div>
                <div className="header_navItem">
                    <span
                        className="header_navItemLineOne"
                    >Your</span>
                    <span
                        className="header_navItemLineTwo"
                    >Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_cart">
                        <ShoppingCartIcon />
                        <span
                            className="header_navItemLineTwo header_cartCount"
                        >{cart.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
