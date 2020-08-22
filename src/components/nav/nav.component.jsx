import React from 'react';
import { Link } from 'react-router-dom';


export const Nav = () => {
    return(
        <nav className="Nav">
            <div className="Nav_container">
                <Link to="/" className="Nav_brand">SimpleApp</Link>
                <div className="Nav_right">
                    <ul className="Nav_item-wrapper">
                        <li className="Nav_item">
                            <Link className="Nav_link" to="/form">Form</Link>
                        </li>
                        <li className="Nav_item">
                            <Link className="Nav_link" to="/image">Image</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}