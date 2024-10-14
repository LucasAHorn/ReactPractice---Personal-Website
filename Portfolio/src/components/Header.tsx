import "../styles/Header.css";

function Header(props: any) {

    function goToSection(PageSectionLocations: any) {
        console.log("clicked on a section");
    };


    return (
        <div className="Header">
            <h2 className="PageSections" onClick={() => goToSection(props.PageSectionLocations[0])}>Home</h2>
            <h2 className="PageSections" onClick={() => goToSection(props.PageSectionLocations[1])}>About</h2>
            <h2 className="PageSections" onClick={() => goToSection(props.PageSectionLocations[2])}>Portfolio</h2>
            <h2 className="PageSections" onClick={() => goToSection(props.PageSectionLocations[3])}>Contact</h2>
        </div>
    );
}
export default Header;