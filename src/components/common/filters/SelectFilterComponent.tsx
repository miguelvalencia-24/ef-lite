import React from 'react'

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

interface SelectFilterComponentProps {
    filter: number | string,
    setFilter: React.Dispatch<React.SetStateAction<number>>,
    options: {
        [key: string]: string,
        [key: number]: string,
    },
}

const SelectFilterComponent: React.FC<SelectFilterComponentProps> = ({filter, setFilter, options}) => {
    return (
        <InputGroup>
            <FormControl as="select" onChange={(e)=>setFilter(parseInt(e.target.value))} value={filter}>
                {Object.keys(options).map((key, i) => {
                    return <option key={i} value={key}>{options[key]}</option>
                })}
            </FormControl>
        </InputGroup>
    );
}

export default SelectFilterComponent;