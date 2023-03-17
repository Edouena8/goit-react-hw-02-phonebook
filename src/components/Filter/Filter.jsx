import React from "react";
import { FilterWrap, FilterText, FilterInput } from "./Filter.styled";

const Filter = ({value, onChange}) => (
    <FilterWrap>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput 
            type="text" 
            velue={value} 
            onChange={onChange}
        />
    </FilterWrap>
)


export default Filter;