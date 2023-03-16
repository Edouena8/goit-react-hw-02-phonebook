import React from "react";

const Filter = ({value, onChange}) => (
    <label>
        Find contacts by name
        <input 
            type="text" 
            velue={value} 
            onChange={onChange}
        />
    </label>
)


export default Filter;