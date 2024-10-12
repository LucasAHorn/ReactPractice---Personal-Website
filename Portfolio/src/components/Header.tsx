import "../styles/Header.css";

function Header() {

    function goToSection() {

    };


    return (
        <span className="headerOptions">
            <h2 onClick={() => goToSection()}>About Me</h2>
            <h2 onClick={() => goToSection()}>Portfolio</h2>
            <h2 onClick={() => goToSection()}>Contact Me</h2>
        </span>
    );
}
export default Header;