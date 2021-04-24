import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

interface SelectMultipleFiltersComponentProps {
    title: string,
    activeFilters: Array<string>,
    setFilters: React.Dispatch<React.SetStateAction<string[]>>,
    filters: {
        [key: string]: string
    },
}

const SelectMultipleFiltersComponent: React.FC<SelectMultipleFiltersComponentProps> = ({
    title,
    activeFilters,
    setFilters,
    filters
}) => {
        const handleAddActiveFilter = (e: any): void => {
            setFilters([...activeFilters, e.target.value]);
        };

        const handleRemoveActiveFilter = (filter: string): void => {
            setFilters(activeFilters.filter((f: string) => f !== filter));
        }

        return (
            <div>
                <InputGroup className="my-2">
                    <FormControl as="select" onChange={handleAddActiveFilter} defaultValue={''}>
                        <option disabled value={''}>Select {title}</option>
                        {Object.keys(filters).map((filterKey, i) => {
                            return <option value={filterKey} key={i}>{filters[filterKey]}</option>
                        })}
                    </FormControl>
                </InputGroup>
                {activeFilters.length ?
                    <ListGroup>
                        {activeFilters.map((activeFilter, i) => {
                            return (
                                <ListGroup.Item key={i}>
                                    <Button size="sm" className="mr-2" variant="danger" onClick={(e) => handleRemoveActiveFilter(activeFilter)}>X</Button>
                                    <span>{filters[activeFilter]}</span>
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                    :
                    null
                }
            </div>
        );
}

export default SelectMultipleFiltersComponent;