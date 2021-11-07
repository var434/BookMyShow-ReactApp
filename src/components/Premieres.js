import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Premieres() {
  return (
    <div style={{marginBottom:"3%", marginTop:"3%", padding:"3%", background:"grey"}}>
       <h2 style={{color:"black"}}><u>PREMIERES &nbsp;&nbsp;&nbsp;</u></h2>
        <Carousel indicators={false}>
            <Carousel.Item>
                <CardGroup style={{gap:"3%"}}>
                    <Card style={{background:"grey",height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/ca.png" style={{height:"350px"}}/>
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>Captain America</Card.Title>
                        <Card.Text>
                            English
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{background:"grey", height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/carrie.png" style={{height:"350px"}} />
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>Carrie</Card.Title>
                        <Card.Text>
                            English{' '}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card  style={{background:"grey", height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/dracula.png" style={{height:"350px"}}/>
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>Dracula</Card.Title>
                        <Card.Text>
                           English
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card  style={{background:"grey",height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/drive.png" style={{height:"350px"}}/>
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>Drive</Card.Title>
                        <Card.Text>
                           English
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{gap:"3%"}}>
                    <Card style={{background:"grey",height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/dark night.jpg" style={{height:"350px"}}/>
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>The Dark Knight</Card.Title>
                        <Card.Text>
                            English
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{background:"grey", height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/iron man.jpg" style={{height:"350px"}} />
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>Iron Man</Card.Title>
                        <Card.Text>
                            English{' '}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card  style={{background:"grey", height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/oblivion.jpg" style={{height:"350px"}}/>
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>Oblivion</Card.Title>
                        <Card.Text>
                           English
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card  style={{background:"grey",height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/pirates.jpg" style={{height:"350px"}}/>
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>Pirates of the Caribbean</Card.Title>
                        <Card.Text>
                           English
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{gap:"3%"}}>
                    <Card style={{background:"grey",height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/compass.jpg" style={{height:"350px"}}/>
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>The Golden Compass</Card.Title>
                        <Card.Text>
                            English
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{background:"grey", height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/after.jpg" style={{height:"350px"}} />
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>After Earth</Card.Title>
                        <Card.Text>
                            English{' '}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card  style={{background:"grey", height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/spider man.jpg" style={{height:"350px"}}/>
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>Spider Man</Card.Title>
                        <Card.Text>
                           English
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card  style={{background:"grey",height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/w.jpg" style={{height:"350px"}}/>
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>Wolverian</Card.Title>
                        <Card.Text>
                           English
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Premieres;
