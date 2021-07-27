import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'




class Hornedbeast extends React.Component {

    
constructor(props){

    super(props);
    this.state = {
        numOfClick : 0
    }

}

        increaseNumOfClick = () => {

            this.setState({

                numOfClick:this.state.numOfClick + 1,
                
            })


        }
        dataToModal = () => {
                this.props.modalData(this.props.title , this.props.image_url,this.props.description,true)

        }



    render() {

        return (

            <section>
                {/*         
                   <img src={this.props.imgURL} alt='my first one'></img>
                    <h3>{this.props.title}</h3>
                    <p>this.props.description</p> */}
                    <Col>
                <Card style={{ width: '18rem' }}
                onClick={this.increaseNumOfClick}
                >
                    <Card.Img
                    onClick={this.dataToModal} 
                    on variant="top" src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            Number of Pets 🖱️ :- {this.state.numOfClick}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
            </section>



        )

    }



}


export default Hornedbeast;
