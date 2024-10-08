import React from 'react'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating';
import products from "../products"

const ProductScreen = () => { 
    const { id:productId } = useParams();
    const product = products.find((p) => p._id === productId);


    return <>
        <Link className="btn btn-light my-3" to="/"> Go Back </Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'> 
                    <ListGroupItem>
                        <h3> {product.name} </h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroupItem>
                    <ListGroupItem>Price: ${product.price}</ListGroupItem>
                    <ListGroupItem>Description: {product.description}</ListGroupItem>
                </ListGroup>
            
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col> Price: </Col>
                                <Col> 
                                    <strong> ${product.price} </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col> Status: </Col>
                                <Col> 
                                    <strong> ${ product.countInStock > 0 ? 'In Stock': 'Out Of Stock' } </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                            className='btn-block'
                            type='button' 
                            disabled={product.countInStock === 0}
                            >
                                Add To Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>

                </Card>
            </Col>
        </Row>
    </>;
};

export default ProductScreen
