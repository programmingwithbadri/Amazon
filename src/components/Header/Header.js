import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img
                className="header_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="logo"
            />

            <div className="header_search">
                <input
                    className="header_searchInput"
                />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="header_navItem">
                    <span
                        className="header_navItemLineOne"
                    >Hello Guest</span>
                    <span
                        className="header_navItemLineTwo"
                    >Sign In</span>
                </div>
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
                <div className="header_cart">
                    <ShoppingCartIcon />
                    <span
                        className="header_navItemLineTwo header_cartCount"
                    >0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
