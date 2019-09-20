import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navmenu">
            <Link to='/'><button>Welcome Page</button></Link>
            <Link to='/characterlist'><button>Character Page</button></Link>
        </div>
    )

};
