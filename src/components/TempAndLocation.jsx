import React from 'react';
import { FaThermometerEmpty } from 'react-icons/fa';
import { BiSolidDropletHalf } from 'react-icons/bi';
import { FiWind } from 'react-icons/fi';
import { GiSunrise, GiSunset } from 'react-icons/gi';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

function TempAndDetails(
   
) {
    const verticalDetails = [
        { id: 1, Icon: FaThermometerEmpty, title: "Real Feel", value: '26°' },
        { id: 2, Icon: BiSolidDropletHalf, title: "Humidity", value: '60%' }, // Corrected "Humdity" to "Humidity"
        { id: 3, Icon: FiWind, title: "Wind", value: ` 10 km/h` },
    ];

    const horizantalDetails = [
        { id: 1, Icon: GiSunrise, title: "Sunrise", value: sunrise },
        { id: 2, Icon: GiSunset, title: "Sunset", value: sunset },
        { id: 3, Icon: MdKeyboardArrowUp, title: "high", value: `25°` },
        { id: 4, Icon: MdKeyboardArrowDown, title: "low", value: `17°` },
    ];

    return (
        <div className='bg-gray-900 bg-opacity-25 rounded-lg py-2 px-2 shadow-xl'>
            <div className='flex items-center justify-center py-6 text-xl text-cyan-300 border-16 border-black'>
                <p>clouds</p>
            </div>

            <div className='flex flex-row items-center justify-between py-3 px-2 '>
                <img
                    src={icon}
                    alt="icon"
                    className='w-20'
                />
                <p className='text-5xl'>29°</p>

                <div className='flex flex-col space-y-3 items-start'>
                    {verticalDetails.map(({ id, Icon, title, value }) => (
                        <div key={id} className='flex font-light text-sm items-center justify-center'>
                            <Icon size={18} className='mr-1' />
                            {title}<span className='font-medium ml-1'>{value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-row items-center justify-center space-x-5 text-sm py-3 '>
                {horizantalDetails.map(({ id, Icon, title, value }) => (
                    <div key={id} className='flex font-light text-sm items-center justify-center'>
                        <Icon size={18} className='mr-1' />
                        <p className='font-light ml-1'>{title}</p><span className='font-medium ml-1'>{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TempAndDetails;
