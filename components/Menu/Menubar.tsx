import { AiOutlineDoubleRight } from 'react-icons/ai';
import React from 'react';

const Menubar: React.FC = () => {
    const [ isExpanded, setExpanded ] = React.useState<boolean>(false);


    const handleClick = () => {
        isExpanded ? setExpanded(false) : setExpanded(true);
    }
    
    return (
        <div className={`absolute left-0 bg-gray-600 text-white px-4 h-screen`}>
            <div className={`relative h-full`}>
            { isExpanded && <ul className={`flex flex-col`}>
                { MENUBAR_ITEMS.map((item, index) => (
                    <li key={index}>
                        {item.label}
                    </li>
                ))}
                
            </ul>}
            <div onClick={handleClick} className={`p-4 bg-black rounded-full absolute right-0 z-20`}>
                <AiOutlineDoubleRight/>
            </div>
            </div>
        </div>
    )
}

interface IMenubarItems {
    label: string;
    link?: () => void;
}

const MENUBAR_ITEMS: Array<IMenubarItems>= [
    { 
        label: 'Settings'
    },
    {
        label: 'My Profile',
    },
    {
        label: 'Logout'
    }
]

export default Menubar;