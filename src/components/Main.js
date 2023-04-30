import React from "react";
import Navigation from "./Navigation";
import LoginForm from "./LoginForm";

export default class Main extends React.Component {
    render(){
        return (
            <div className="col-12 h-100 justify-content-center d-flex align-items-center">
                <div id="primary">
                    <div id="top"><Navigation/></div>
                    <div id="middle"><LoginForm/></div>
                    <div id="bottom"></div>
                </div>
            </div>
        );
    }
}
  
  /*
    Using create-react-app, create a new React project. Create a LoginForm component that contains the following:
      Username and password input fields, an h3 that says Log In, with a border.
-/    Style the component using the default generated CSS file.
-/  Create a Navigation component that contains links styled like a navbar.
-/    The links don’t have to go anywhere.
-/  Put the Navigation component at the top of the page and the LoginForm in the center of the page.
  */