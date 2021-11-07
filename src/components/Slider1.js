import Carousel from 'react-bootstrap/Carousel';
function Slider1() {
  return (
    <div>
        <Carousel fade variant="dark">
            <Carousel.Item>
            <img
                style={{height:"500px"}}
                className="d-block w-100"
                src="./assets/2.jpg"
                alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                style={{height:"500px"}}
                className="d-block w-100"
                src="./assets/1.jpg"
                alt="Second slide"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                style={{height:"500px"}}
                className="d-block w-100"
                src="./assets/3.jpg"
                alt="Third slide"
            />
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Slider1;
