import React from 'react';
import Image from 'next/image';


const Navbar: React.FC = () => {
    return (
        <div className={`flex flex-row bg-blue-500 py-2 px-3 text-white`}>
            <div className={`relative w-24 h-16`}>
                <Image
                layout="fill"
                objectFit="contain"
                src={`/images/logo.jpg`}
                />
            </div>
            {/* spacer start */}
            <div className={`mx-auto`}/>
            {/* spacer end */}
            <div id="items">
                <ul className={`flex flex-row`}>
                    <li>
                        Profile
                    </li>
                    <li>
                        Photo
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;