import { useEffect, useState } from "react";
import "../styles/Landing.css";

// Make the same landing area as lucasahorn.github.io
    // (This has a background image with changing text)
        // To change the text break the string into a char array or use the horizontal slide feature for block elements


function Landing() {
    const ArrayOfTextOptions : string[] = ["Apple", "Bapple", "bineappleslaldkjf lanf"];
    // const [changingDescription, setChangingDesctipton] = useState(document.getElementById('LandingChangingText')?.innerHTML);
    const changingDescriptionHTML = document.getElementById('LandingChangingText');

    // function addText(newString : string) {
    //     for (let index = 1; index < newString.length; index++) {
    //         setChangingDesctipton(newString.substring(0, index));
    //         new Promise(f => setTimeout(f, 10000));
    //     }
    // }

    // function removeText() {
    //     if (!changingDescription) {return;}
    //     while (changingDescription.length > 0){
    //         setChangingDesctipton(changingDescription.substring(0, changingDescription.length - 1));
    //         new Promise(f => setTimeout(f, 10000));           
    //     }
    // }

    // does not run cuz its a forever loop
    // async function changingTextRunner() {
    //     while (true) {

    //         console.log("Fn started");

    //         for (let index = 0; index < ArrayOfTextOptions.length; index++) {
    //             console.log(index);
    //             new Promise(f => setTimeout(f, 5000));


    //             // new Promise(f => setTimeout(f, 3000));
    //             // addText(ArrayOfTextOptions[index]);
    //             // new Promise(f => setTimeout(f, 3000));
    //             // removeText();
    //         }
    //     }
    // }

    console.log("Cheese");
    if (changingDescriptionHTML){
        changingDescriptionHTML.innerHTML = "cheeser";
    }
    // changingTextRunner();

    // TODO: remove the below text, its for testing
    // const [counterNum, setCounterNum] = useState(0);
    // useEffect(() => {
    //     setChangingDesctipton(counterNum + "");
    //     // setCounterNum(counterNum + 1);
    // })

    return (
    <div className="LandingContent">
        <div className="Centered">
            <h1>Lucas Horn</h1>
            <p>Iowa State University Class of 2027<br />Pursuing a bachelors of Software Engineering</p>
            <h3 id="LandingChangingText"></h3>
        </div>
    </div>
    // <b class="is-visible">Programming</b>
    // <b>Personal Projects</b>
    // <b>Hackathons</b>
    // <b>Club Involvement</b>
    // <b>Unicorn wrangler</b>
    // <b>That was a lie</b>
    );
}
export default Landing;