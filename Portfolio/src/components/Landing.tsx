import "../styles/Landing.css";

// Make the same landing area as lucasahorn.github.io
    // (This has a background image with changing text)
        // To change the text break the string into a char array or use the horizontal slide feature for block elements

// TODO: make the initial text similar to Alex


function Landing() {
    return (
    <div className="LandingContent">
        <div className="Centered">
            <h1 className="LandingName">Lucas Horn</h1>
            <p className="LandingDescription">Iowa State University Class of 2027<br />Pursuing a bachelors of Software Engineering</p>
            <br /><br /><br />


            <div className="HorizontallyAligned">
                <p className="ChangingText">Personal Projects</p>
                <p className="ChangingText">Hackathons</p>
                <p className="ChangingText">Club Involvement</p>
                <p className="ChangingText">GDSC Vice President and Treasurer</p>
                <p className="ChangingText">Unicorn wrangler</p>
                <p className="ChangingText">That was a lie</p>
            </div>
        </div>
    </div>
    );
}
export default Landing;