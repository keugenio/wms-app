import React, { useState } from "react";
import MenuItemButton from "./menu/buttons/MenuItemButton";
import MenuMainComponent from '../components/menu/MenuMainComponent';
import HeroText from '../components/HeroText';
import TopMenu from '../components/menu/TopMenu';

function Main() {
  const [burger, setBurgerIcon] = useState(true);
  const [currentMenuComponent, setCurrentMenuComponent] = useState();
  const [showHero, setShowHero] = useState(true);
  function openNav() {
    document.getElementById("mySidenav").style.left = "0px";
    document.getElementById("main").style.marginLeft = "13%";
    document.getElementById("overlay").style.opacity = ".25";
    setBurgerIcon(!burger);
  }

  function handleOnClick(buttonName) {
    closeNav();
    setShowHero(false);
    setCurrentMenuComponent(buttonName);
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.left = "-13%";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("overlay").style.opacity = "0";
    setBurgerIcon(!burger);
  }
  const ThreeBarIcon = () => (
    <span className="btnIconClass" onClick={() => {openNav()}}>
      &#9776;
    </span>
  );
  const TimesIcon = () => (
    <span className="btnIconClass" onClick={() => {closeNav()}}>
      &times;
    </span>
  );
  const MenuButton = () => {
    return (
      <div className="menuButtonWrapper">
        {burger ? <ThreeBarIcon /> : <TimesIcon />}{" "}
      </div>
    );
  };

  return (
    <div>
      <TopMenu show={!showHero} />
      <div className="layout">
        <div id="outer-container" className="layout-inside">
          <div id="mySidenav" className="sidenav">
            <MenuItemButton buttonName="What We Do" handleOnClick={handleOnClick} />
            <MenuItemButton buttonName="Program & Project Management" handleOnClick={handleOnClick} />            
            <MenuItemButton buttonName="Project Design & Engineering" handleOnClick={handleOnClick} />
            <MenuItemButton buttonName="Construction Management" handleOnClick={handleOnClick} />
            <MenuItemButton buttonName="Certification" handleOnClick={handleOnClick} />     
            <MenuItemButton buttonName="About WMS" handleOnClick={handleOnClick} />                  
            <MenuButton />
          </div>
          <main id="main">
            <div id="overlay"></div>
            <section className="hero d-flex">
              <div>
                <HeroText show={showHero}/>
                <MenuMainComponent currentMenuComponent={currentMenuComponent} />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Main;
