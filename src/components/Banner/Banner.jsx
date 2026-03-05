import React from "react";
import leftPattern from "../../assets/vector1.png";
import rightPattern from "../../assets/vector2.png";

const Banner = () => {
    return (
        <section className="flex flex-col md:flex-row gap-6">
            {/* In-Progress Card */}
            <div
                className="relative w-full h-44 sm:h-48 md:h-52 lg:h-56 rounded-lg overflow-hidden flex items-center justify-center text-white"
                style={{
                    background:
                        "linear-gradient(125.04deg, #632EE3 5.68%, #9F62F2 88.38%)",
                }}
            >
                {/* Left Pattern */}
                <img
                    src={leftPattern}
                    alt=""
                    className="absolute left-0 top-0 h-full w-auto pointer-events-none"
                />
                <div className="relative z-10 text-center">
                    <p className="text-base sm:text-lg font-medium">
                        In-Progress
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mt-2 sm:mt-3">
                        0
                    </h1>
                </div>
                {/* Right Pattern */}
                <img
                    src={rightPattern}
                    alt=""
                    className="absolute right-0 top-0 h-full w-auto pointer-events-none"
                />
            </div>

            {/* Resolved Card */}
            <div
                className="relative w-full h-44 sm:h-48 md:h-52 lg:h-56 rounded-lg overflow-hidden flex items-center justify-center text-white"
                style={{
                    background:
                        "linear-gradient(90deg, #54CF68 9.6%, #00827A 92.23%)",
                }}
            >
                {/* Left Pattern */}
                <img
                    src={leftPattern}
                    alt=""
                    className="absolute left-0 top-0 h-full w-auto pointer-events-none"
                />
                <div className="relative z-10 text-center">
                    <p className="text-base sm:text-lg font-medium">Resolved</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mt-2 sm:mt-3">
                        0
                    </h1>
                </div>
                {/* Right Pattern */}
                <img
                    src={rightPattern}
                    alt=""
                    className="absolute right-0 top-0 h-full w-auto pointer-events-none"
                />
            </div>
        </section>
    );
};

export default Banner;
