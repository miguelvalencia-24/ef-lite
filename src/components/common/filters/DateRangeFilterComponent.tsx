import React from 'react'
import {formatDate} from '../../../helpers/date';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

interface DateRangeFilterComponentProps {
    dateFrom: Date | null,
    dateTo: Date | null,
    setDateFrom: React.Dispatch<React.SetStateAction<Date | null>>,
    setDateTo: React.Dispatch<React.SetStateAction<Date | null>>,
    clearDateRange: () => void,
}

const DateRangeFilterComponent: React.FC<DateRangeFilterComponentProps> = ({
    dateFrom,
    dateTo,
    setDateFrom,
    setDateTo,
    clearDateRange,
}) => {
    return (
        <div>
            <InputGroup className="mt-2">
                <FormControl
                    type="date"
                    value={formatDate(dateFrom)}
                    onChange={(e) => setDateFrom(new Date(e.target.value))}
                />
            </InputGroup>
            <InputGroup className="mt-2">
                <FormControl
                    type="date"
                    value={formatDate(dateTo)}
                    onChange={(e) => setDateTo(new Date(e.target.value))}
                />
            </InputGroup>
            <InputGroup className="mt-2">
                <Button block onClick={clearDateRange}>Clear</Button>
            </InputGroup>
        </div>
    );
}

export default DateRangeFilterComponent;