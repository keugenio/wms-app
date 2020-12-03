import React from "react";
import { push as Menu } from 'react-burger-menu'

function Main() { 
 

  return (
    <div>

      <div className="layout">
        <div className="layout__wrapper">
          <header className="layout__header">         
            <Menu pageWrapId={ "page-wrap" } right>
              <nav>
                <ul className="nav nav--header nav--header-1">
                  <li className="nav__item nav__item--home">
                    <a className="nav__link menu-item" href="#0">
                      Home
                    </a>
                  </li>
                  <li className="nav__item nav__item--about">
                    <a className="nav__link menu-item" href="#0">
                      About
                    </a>
                  </li>
                  <li className="nav__item nav__item--clients">
                    <a className="nav__link menu-item" href="#0">
                      Clients
                    </a>
                  </li>
                  <li className="nav__item nav__item--services">
                    <a className="nav__link menu-item" href="#0">
                      Services
                    </a>
                  </li>
                  <li className="nav__item nav__item--contact">
                    <a className="nav__link menu-item" href="#0">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </Menu>
          </header>
          <main id="page-wrap">
            <section className="hero">
              <div className="hero-block hero-block--header">
                <h1 className="hero-title">
                  Wireless Management Services
                  <em>
                  Building High-Performance DAS Systems
                  </em>
                </h1>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Main;
