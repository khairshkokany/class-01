import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'





class SelectBeast extends React.Component {

    exitModal = () =>{
        this.props.hidden(false)
    }
    render() {

        return (

            <>


                <Modal show={this.props.show} onHide={this.exitModal}>
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
                        <Button variant="secondary" onClick={this.exitModal}>
                            Close
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default SelectBeast;

