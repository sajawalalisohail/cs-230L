import React from 'react'; 
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

const myCard = () => {
    return(
        <div className="d-flex justify-content-around">
            <Card bg="primary" text="white" style={{ width: '18rem'}} className="mb-3">
                <Card.Header>Card 01</Card.Header>
                <Card.Body> 
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card bg="danger" text="white" style={{ width: '18rem'}} className="mb-3">
                <Card.Header>Card 02</Card.Header>
                <Card.Body> 
                    <Card.Title>Secondary Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            
            <Card bg="success" text="white" style={{ width: '18rem'}} className="mb-3">
                <Card.Header>Card 02</Card.Header>
                <Card.Body> 
                    <Card.Title>Secondary Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};
export default myCard;
