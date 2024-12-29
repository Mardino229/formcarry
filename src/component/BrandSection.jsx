import React from 'react';
import vixen from '/vixen-logo.svg';
import nba from '/nba-logo.svg';
import yeezy from '/yeezy-logo.svg';
import cannes from '/cannes-logo.svg';
import continental from '/continental-logo.svg';

const BrandLogo = ({ name, image, className = '' }) => (
    <div className={`flex items-center justify-center px-4 ${className}`}>
        <img
            src={image}
            alt={`${name} logo`}
            className="h-48 w-auto"
        />
    </div>
);

const BrandsSection = () => {
    const brands = [
        {
            name: 'NBA',
            image: nba
        },
        {
            name: 'Continental',
            image: continental
        },
        {
            name: 'Vixen',
            image: vixen
        },
        {
            name: 'Yeezy',
            image: yeezy
        },
        {
            name: 'Festival de Cannes',
            image: cannes
        }
    ];

    return (
        <section className="py-16 mt-80 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section title */}
                <h2 className="text-center text-lg font-medium text-gray-600">
                    TRUSTED BY TOP BRANDS WORLDWIDE
                </h2>

                {/* Logos grid */}
                <div className="grid grid-cols-5 items-center">
                    {brands.map((brand) => (
                        <BrandLogo
                            key={brand.name}
                            {...brand}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;