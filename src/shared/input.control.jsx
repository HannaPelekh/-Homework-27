import React from 'react';


export default function AppInput({value, placeholder, 
    className, onChange, name, onBlur, id}) {
    return <input type="text" 
    name={name}
    className={className}
    placeholder={placeholder}    
    value={value} 
    id={id}
    onChange={onChange}  
    onBlur={onBlur}     
    >
    </input>;
}