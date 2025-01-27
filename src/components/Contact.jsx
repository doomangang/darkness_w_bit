import React from 'react';

const Contact = () => {
    return (
        <div className="text-gray-700 mt-6 lg:mt-12">
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p className="mb-2">
                📍 Location: Seoul, South Korea
            </p>
            <p className="mb-2">
                📧 Email: <a href="mailto:sp0943@cau.ac.kr" className="text-blue-500">sp0943@cau.ac.kr</a>
            </p>
            <p>
                💻 GitHub: <a href="https://github.com/doomangang" className="text-blue-500">github.com/doomangang</a>
            </p>
        </div>
    );
};

export default Contact;
