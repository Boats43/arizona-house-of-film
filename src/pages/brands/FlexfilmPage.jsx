import React from 'react';
import { Helmet } from 'react-helmet';

const FlexfilmPage = () => {
    return (
        <>
            <Helmet>
                <title>Flexfilm Window Films | Authorized Installers in Arizona</title>
                <meta name="description" content="Arizona House of Film are experienced installers of Flexfilm window films. Discover their range of automotive, residential, and commercial films." />
            </Helmet>
            <div className="p-8">
                <h1 className="text-3xl font-bold">Flexfilm Window Films</h1>
                <p className="mt-4">
                    Flexfilm offers a comprehensive line of professional-grade window films. While well-known for their automotive tints, they also provide excellent solutions for residential and commercial applications.
                </p>
                <h2 className="text-2xl font-bold mt-6">Why Choose Flexfilm?</h2>
                <ul className="list-disc ml-6 mt-2">
                    <li>Advanced ceramic and carbon technology.</li>
                    <li>Superior heat rejection and UV protection.</li>
                    <li>Variety of shades and finishes available.</li>
                </ul>
                <p className="mt-4">
                    As experienced installers of Flexfilm products, we can help you choose the best film for your needs and ensure a flawless application.
                </p>
                 <a href="https://flexfilm.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-4 inline-block">
                    Learn more on the official Flexfilm website.
                </a>
            </div>
        </>
    );
};

export default FlexfilmPage;