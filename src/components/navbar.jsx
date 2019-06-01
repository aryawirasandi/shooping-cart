import React, { Component } from 'react';

const Navbar = ({totalCounters}) => {
    return (  
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">Total <span className="badge badge-pill badge-secondary">{totalCounters}</span></a>
        </nav>
    );
}
 
export default Navbar;