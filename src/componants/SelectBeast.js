import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'





class SelectBeast extends React.Component {

  
    render() {

        return (

            <>


                <Modal show={this.props.show} onHide={this.props.hidden}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            src={this.props.img_Url}
                            alt={this.props.title}
                        />
                        <p>{this.props.description}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.hidden}>
                            Close
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default SelectBeast;

