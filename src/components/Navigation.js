import React from "react";

export default class Navigation extends React.Component{
    render(){
        return(
        <div className="Navbar row">
            <button className="Navlink">Page 1</button>
            <button className="Navlink">Page 2</button>
            <button className="Navlink">Page 3</button>
        </div>
        );
    }
}