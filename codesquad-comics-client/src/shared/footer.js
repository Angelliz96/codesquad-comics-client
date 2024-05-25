import React from 'react';

const Footer = () => {
    return (
        <footer>
            <h3>VISIT US</h3>
            <p>CodeSquad Comics <br />
                123 Dorchester Avenue <br />
                Boston, MA 02124       
            </p> 
            <section>
                <div>
                    <h3>LINKS</h3>
                    <a href="#">Home</a> <br />
                    <a href="#">About</a> <br />
                    <a href="#">Login</a> <br />
                </div>
            </section>
            <section>
                <div>
                    <h3>FOLLOW US</h3>
                    <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a> <br />
                    <a href="#" target="_blank" rel="noopener noreferrer">Github</a> <br />
                    <a href="#" target="_blank" rel="noopener noreferrer">Twitter(X)</a> <br />
                </div>
            </section>
            <section>
                <div>
                    <h3>A PRODUCT OF</h3>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="images/CodeSquad-logo-b.png" alt="CodeSquad Footer Logo" />
                    </a>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
