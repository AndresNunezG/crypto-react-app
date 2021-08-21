import React from 'react';

export default function Footer () {
    return (
        <div className="w-full px-4 py-4 bg-gray-800 flex">
            <div className="flex flex-col">
                <a
                className="text-green-500 duration-200 hover:text-gray-50"
                href="https://www.coingecko.com/es/"
                target="_blank"
                rel="noreferrer"
                >
                CoinGecko
                </a>
                <a
                className="text-green-500 duration-200 hover:text-gray-50"
                href="https://www.coingecko.com/es/api/documentation"
                target="_blank"
                rel="noreferrer"
                >
                API Documentation
                </a>
            </div>
            <div className="flex flex-col px-16 text-gray-50">
                <p
                 className="duration-200 hover:text-gray-50"
                >
                Made with love from 🇨🇴 
                </p>
                <a
                 className="duration-200 hover:text-green-500"
                 href="https://github.com/AndresNunezG"
                 target="_blank"
                 rel="noreferrer"
                >
                by: Andrés Núñez&nbsp;
                <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    )
} 