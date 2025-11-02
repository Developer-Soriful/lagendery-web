// src/components/SelectLoadSize.tsx

import React, { useState } from 'react';

// Define the types for our load sizes and their descriptions
type LoadSize = 'Small' | 'Medium' | 'Large';

interface LoadOption {
    size: LoadSize;
    description: string;
}

// Data for our load options
const loadOptions: LoadOption[] = [
    { size: 'Small', description: '10-20 lbs (5-9 kg) - Ideal for couples or small families' },
    { size: 'Medium', description: '20-35 lbs (9-16 kg) - Perfect for average family loads' },
    { size: 'Large', description: '35-50 lbs (16-23 kg) - Great for large families or bulk items' },
];

const SelectLoadSize: React.FC = () => {
    // State to keep track of the currently selected load size
    const [selectedLoad, setSelectedLoad] = useState<LoadSize>('Medium');

    // Find the description for the currently selected load
    const currentDescription = loadOptions.find(
        (option) => option.size === selectedLoad
    )?.description;

    // Tailwind Custom Colors (approximations from the image)
    const ACTIVE_BUTTON_BG = '#006C76'; // Dark teal from the image
    const INACTIVE_BUTTON_BORDER = '#e0e0e0'; // Light grey border

    return (
        <section className="bg-white">
            <div className="max-w-xl mx-auto px-4  lg:px-6 text-center">

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
                    Select Your Load Size
                </h2>

                {/* Load Size Buttons Container */}
                <div
                    className="inline-flex rounded-lg shadow-sm mb-6"
                    style={{
                        border: `1px solid ${INACTIVE_BUTTON_BORDER}`
                    }}
                >
                    {loadOptions.map((option) => (
                        <button
                            key={option.size}
                            onClick={() => setSelectedLoad(option.size)}
                            className={`
                py-3 px-8 text-lg font-medium transition-all duration-200 ease-in-out
                ${selectedLoad === option.size
                                    ? 'text-white'
                                    : 'text-gray-700'
                                }
                ${selectedLoad === option.size
                                    ? ''
                                    : ''
                                }
                ${option.size === 'Small' ? 'rounded-l-lg' : ''}
                ${option.size === 'Large' ? 'rounded-r-lg' : ''}
                ${selectedLoad === option.size
                                    ? ''
                                    : 'bg-white hover:bg-gray-50'
                                }
              `}
                            style={{
                                backgroundColor: selectedLoad === option.size ? ACTIVE_BUTTON_BG : 'white',
                            }}
                        >
                            {option.size}
                        </button>
                    ))}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-base">
                    {currentDescription}
                </p>

            </div>
        </section>
    );
};

export default SelectLoadSize;