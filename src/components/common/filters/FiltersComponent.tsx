import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormCheck from 'react-bootstrap/FormCheck';

interface FiltersComponentProps {
    activeFilters: Array<string>,
    setFilters: React.Dispatch<React.SetStateAction<string[]>>,
    filters: Array<string>,
}

const FiltersComponent: React.FC<FiltersComponentProps> = ({
        activeFilters,
        setFilters,
        filters, 
    }) => {

    const handleChange = (e: any): void => {
        if(e.target.checked) {
            setFilters([...activeFilters, e.target.name]);
        } else {
            setFilters(activeFilters.filter((f: string) => f !== e.target.name));
        }
    }
    
    const showFilters = (): JSX.Element[] => {
        const filterList = filters.map((filter, i) => {
            return (
                <Col xs={3} key={i}>
                    <InputGroup className="ml-4">
                        <FormCheck.Input
                            name={filter}
                            type="checkbox"
                            onChange={handleChange}
                        />
                        <FormCheck.Label>{filter}</FormCheck.Label>
                    </InputGroup>
                </Col>
            );
        });
        return filterList;
    }
    return (
        <Row>
            {filters?.length && showFilters()}
        </Row>
    );
}

export default FiltersComponent;