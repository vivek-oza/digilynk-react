"use client";

import React, { useEffect, useState } from 'react';

export const ScrollDownAnimation = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Sync with the HTML dark class
    useEffect(() => {
        const html = document.documentElement;
        const observer = new MutationObserver(() => {
            setDarkMode(html.classList.contains('dark'));
        });

        // Initial check
        setDarkMode(html.classList.contains('dark'));

        // Observe changes to class attribute
        observer.observe(html, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`absolute top-[15rem] left-1/2 -translate-x-1/2 z-50 animate-fadeIn`}
        >
            <div className={`mouse rounded-[50px] h-[70px] w-[35px] relative block mx-auto border-2 ${darkMode ? 'border-white' : 'border-gray-800'
                }`}>
                <div className={`move rounded-full h-[8px] w-[8px] absolute left-1/2 -translate-x-1/2 animate-mouseScroll ${darkMode ? 'bg-white' : 'bg-gray-800'
                    }`}></div>
            </div>
            <h2 className={`mt-4 text-center font-medium text-base ${darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                Scroll down
            </h2>
        </div>
    );
};