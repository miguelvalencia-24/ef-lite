import React, { useState } from 'react'

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

interface ListingSearchBarComponentProps {
    setQuery: React.Dispatch<React.SetStateAction<string>>
}

const ListingSearchBarComponent: React.FC<ListingSearchBarComponentProps> = ({setQuery}) => {
    const [currentQuery, setCurrentQuery] = useState('')    
    
    return (
        <div>
            <InputGroup>
                <FormControl value={currentQuery} onChange={(e)=>setCurrentQuery(e.target.value)} type="text" placeholder="Search Listings"/>
                <InputGroup.Append>
                    <Button variant="secondary" onClick={() => {
                        setQuery('');
                        setCurrentQuery('');
                    }}>
                        <i className="fa fa-times"></i>
                    </Button>
                    <Button onClick={() => setQuery(currentQuery)}>Search</Button>
                </InputGroup.Append>
            </InputGroup>    
        </div>
    );
}

export default ListingSearchBarComponent;