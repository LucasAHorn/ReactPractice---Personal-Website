import React, { useState } from 'react';
import '../styles/ContactMe.css';

function ContactMe() {
    const [joke, setJoke] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle the form submission (e.g., send to an API)
        console.log('Submitted joke:', joke);
        console.log('Contact:', contact);
        console.log('Message:', message);
        // Clear the input fields after submission
        setJoke('');
        setContact('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="dad-joke">What's your best dad joke?</label>
                <input
                    type="text"
                    id="dad-joke"
                    value={joke}
                    onChange={(e) => setJoke(e.target.value)}
                    required
                    placeholder="Type your dad joke here..."
                />
                
                <label htmlFor="contact">Email or Phone Number:</label>
                <input
                    type="text"
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    placeholder="Your email or phone number"
                />

                <label htmlFor="message">Your Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Type your message here..."
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactMe;
