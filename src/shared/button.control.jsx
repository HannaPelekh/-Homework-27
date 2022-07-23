import React from 'react';

export default function Appbutton({children, className, onClick}) {
    return <button 
    className={className} 
    onClick={onClick}>{children}</button>;
}