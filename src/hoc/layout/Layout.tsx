import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getConfigAction } from '../../actions/configActions';
import Container from 'react-bootstrap/Container'

interface LayoutProps {
        children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({children}) => {
        const dispatch = useDispatch();
        
        useEffect(() => {
                dispatch(getConfigAction());
        }, [dispatch]);

        return (
                <Container>
                        <h1>Marketplace</h1>
                        {children}
                </Container>
        );
}

export default Layout;
