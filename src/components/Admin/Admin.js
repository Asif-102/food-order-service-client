import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddFood from './AddFood/AddFood';
import ManageFoods from './ManageFoods/ManageFoods';

const Admin = () => {
    const [add, setAdd] = useState(false);
    
    return (
        <Container>
            <Row>
                <Col xs={4} md={3}>
                    <ul style={{ listStyleType: 'none', cursor: 'pointer' }}>
                        {
                            !add  && <div>
                                <h4 style={{ color: 'blue' }}>
                                    <li onClick={() => setAdd(true)}>⚙️ Manage Foods</li>
                                </h4>
                                <hr />
                                <h4 style={{ color: 'skyblue' }}>
                                    <li onClick={() => setAdd(false)}>➕ Add Food</li>
                                </h4>
                                <hr />
                            </div>
                        }
                        {
                            add  && <div>
                                <h4 style={{ color: 'skyblue' }}>
                                    <li onClick={() => setAdd(true)}>⚙️ Manage Foods</li>
                                </h4>
                                <hr />
                                <h4 style={{ color: 'blue' }}>
                                    <li onClick={() => setAdd(false)}>➕ Add Food</li>
                                </h4>
                                <hr />
                            </div>
                        }
                    </ul>
                </Col>
                <Col xs={8} md={9} >
                    {
                        !add && <AddFood></AddFood>
                    }
                    {
                        add && <ManageFoods></ManageFoods>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;