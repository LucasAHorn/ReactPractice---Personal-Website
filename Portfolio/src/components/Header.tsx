import { useState } from "react";
import "../styles/Header.css";

function Header(props: any) {
    const homeBtn : HTMLElement | null = document.getElementById("HomeBtn");
    if (homeBtn) {
        const [ele, sele] = useState(homeBtn.style.color);
        sele("white");
    }
    function goToSection(a : any) {}



    return (
        <div className="Header">
            <h2 className="PageSections" id="HomeBtn" onClick={() => goToSection(props.PageSectionLocations[0])}>Home</h2>
            <h2 className="PageSections" id="AboutBtn" onClick={() => goToSection(props.PageSectionLocations[1])}>About</h2>
            <h2 className="PageSections" id="PortfolioBtn" onClick={() => goToSection(props.PageSectionLocations[2])}>Portfolio</h2>
            <h2 className="PageSections" id="ContactBtn" onClick={() => goToSection(props.PageSectionLocations[3])}>Contact</h2>
        </div>
    );
}
export default Header;