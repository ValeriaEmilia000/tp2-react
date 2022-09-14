import React from "react";
import {NavBar, Nav, NavItem} from 'react-bootstrap';
import Button from 'react-bootstrap';

function Media(){
return(
    <div class="media">
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light " style="display:flex ; justify-content:end">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="btn btn-block btn-social btn-twitter" style="display: flex ; justify-content:flex-end">
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-instagram"></a>
                        <a href="#" class="fa fa-whatsapp"></a>
                    </a>

                </div>
            </div>
        </nav>
    </div>
</div>
)

}

export default Media;