import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddFood from './AddFood/AddFood';
import ManageFoods from './ManageFoods/ManageFoods';
import { GoDiffAdded } from 'react-icons/go';
import { AiOutlineEdit } from 'react-icons/ai';

const Admin = () => {
    const [add, setAdd] = useState(false);
    
    return (
        <Container>
            <Row>
                <Col xs={4} md={3} style={{backgroundColor:'#19103F'}}>
                    <ul style={{ listStyleType: 'none', cursor: 'pointer' }}>
                        <h4 style={{color:'white'}}>Foodeli</h4>
                        <h4 style={{color:'white'}}>Manage Products</h4>
                        <hr/>
                        {
                            !add  && <div>
                                <h4 style={{ color: 'skyblue', backgroundColor:'#2F216A' }}>
                                    <li onClick={() => setAdd(false)}><GoDiffAdded /> Add Food</li>
                                </h4>
                                <hr />
                                <h4 style={{ color: 'blue' }}>
                                    <li onClick={() => setAdd(true)}><AiOutlineEdit /> Edit Food</li>
                                </h4>
                            </div>
                        }
                        {
                            add  && <div>
                                <h4 style={{ color: 'blue' }}>
                                    <li onClick={() => setAdd(false)}><GoDiffAdded /> Add Food</li>
                                </h4>
                                <hr />
                                <h4 style={{ color: 'skyblue', backgroundColor:'#2F216A' }}>
                                    <li onClick={() => setAdd(true)}><AiOutlineEdit /> Edit Food</li>
                                </h4>
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