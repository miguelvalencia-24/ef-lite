import React from 'react'

interface RangeFilterComponentProps {
    title: string,
    prepend: string | null,
    from: number | null,
    to: number | null,
    setFrom: React.Dispatch<React.SetStateAction<number | null>>,
    setTo: React.Dispatch<React.SetStateAction<number | null>>,
    clearRange: () => void,
}

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const RangeFilterComponent: React.FC<RangeFilterComponentProps> = ({
        title,
        prepend,
        from,
        to,
        setFrom,
        setTo,
        clearRange
    }) => {
        return (
            <div>
                <InputGroup className="mt-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text>{prepend}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                        placeholder={`${title} From`} 
                        type="number"
                        value={from === null ? '' : from}
                        onChange={(e) => setFrom(e.target.value === '' ? null : parseFloat(e.target.value))}
                    />
                </InputGroup>
                <InputGroup className="mt-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text>{prepend}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder={`${title} To`}
                        type="number"
                        value={to === null ? '' : to}
                        onChange={(e) => setTo(e.target.value === '' ? null : parseFloat(e.target.value))}    
                    />
                </InputGroup>
                <InputGroup className="mt-2">
                    <Button block onClick={clearRange}>Clear</Button>
                </InputGroup>
            </div>
        );
}

export default RangeFilterComponent;