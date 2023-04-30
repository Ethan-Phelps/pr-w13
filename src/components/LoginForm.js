import React from "react";

export default class LoginForm extends React.Component{
    render(){
        return(
            <div className="Loginbox">
                <br></br><h3><b>Login</b></h3><br></br>
                <form>
                <label>Username:
                <br></br><input type="text" />
                </label><br></br>
                <br></br><label>Password:
                <br></br><input type="text" />
                </label><br></br>
                <br></br><input className="Navlink" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}