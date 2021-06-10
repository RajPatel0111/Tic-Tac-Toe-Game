import React from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

function Header () {
  return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <span>TIC-TAC-TOE</span>
          </NavbarBrand>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <h1>Tic-Tac-Toe</h1>
              <p>Play this amazing game with your partner.</p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </React.Fragment>
  );
}

export default Header;