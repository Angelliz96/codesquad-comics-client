import React from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
const About = () => {
    return (
        <div>
        <main>
            <Header />
            <h1>ABOUT CODESQUAD COMICS</h1>
            <p>CodeSquad Comics is a collection of graphic novels read by Angely Lizcano. Copyrighted images are used for review purposes only. Meta information about this<br /> collection can be found below. A detailed list of all the graphic novels in this collection can be found on the homepage. Additional details about each comic book, <br /> including the author, genre, number of pages, and a brief synopsis, can be found by navigating to the homepage and clicking the image of the book cover or the <br /> Details link for the desired graphic novel.</p>

            <section>
                <div>
                    <h2>COLLECTION DETAILS</h2>
                    <ul>
                        <li>total comic books: 12</li>
                        <li>latest additions: 12</li>
                        <li>5-star rating</li>
                        <li>publishers: 9</li>
                    </ul>
                </div>
            </section>
            </main>
            <Footer />
        
        </div>
    );
};

export default About;
