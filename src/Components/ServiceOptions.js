import React, { Component } from 'react';
import { Row, Col, Card, CardImg, Container, Image} from 'react-bootstrap';

class ServiceOptions extends Component {
    state = {  }
    render() {
        return (
					<div>
						<Container>
							<Row className='m-5'>
								<Col lg={4}><div>
                                    <Image />
                                    </div></Col>
								<Col lg={4}>BackYard Movies</Col>
								<Col lg={4}>Charcuterie Delivery/Pick Up</Col>
							</Row>
						</Container>
					</div>
				);
    }
}

export default ServiceOptions;
