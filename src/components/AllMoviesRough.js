import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


function AllMovies(){
    return(
        <div>
            <Container fluid style={{padding:"5%", background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{background:"grey",height:"350px", width:"250px"}}>
                            <Card.Img variant="top" src="./assets/ca.png" style={{height:"350px"}}/>
                            <Card.Body style={{color:"white"}}>
                            <Card.Title>Captain America</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{background:"grey",height:"350px", width:"250px"}}>
                            <Card.Img variant="top" src="./assets/ca.png" style={{height:"350px"}}/>
                            <Card.Body style={{color:"white"}}>
                            <Card.Title>Captain America</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{background:"grey",height:"350px", width:"250px"}}>
                            <Card.Img variant="top" src="./assets/ca.png" style={{height:"350px"}}/>
                            <Card.Body style={{color:"white"}}>
                            <Card.Title>Captain America</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{background:"grey",height:"350px", width:"250px"}}>
                            <Card.Img variant="top" src="./assets/ca.png" style={{height:"350px"}}/>
                            <Card.Body style={{color:"white"}}>
                            <Card.Title>Captain America</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{background:"grey",height:"350px", width:"250px"}}>
                            <Card.Img variant="top" src="./assets/ca.png" style={{height:"350px"}}/>
                            <Card.Body style={{color:"white"}}>
                            <Card.Title>Captain America</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{background:"grey",height:"350px", width:"250px"}}>
                            <Card.Img variant="top" src="./assets/ca.png" style={{height:"350px"}}/>
                            <Card.Body style={{color:"white"}}>
                            <Card.Title>Captain America</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{background:"grey",height:"350px", width:"250px"}}>
                            <Card.Img variant="top" src="./assets/ca.png" style={{height:"350px"}}/>
                            <Card.Body style={{color:"white"}}>
                            <Card.Title>Captain America</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AllMovies;