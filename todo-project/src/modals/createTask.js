import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const createTask = ({modal, toggle}) => {
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>MODAL IS ALIVE</ModalHeader>

            <ModalBody>

                <form>

                    <div className = "form-group">
                        <input type="text" className = "form-control"/>

                    </div>

                    <div ClassName = "form-group">
                        <textarea rows = "7" ClassName = "form-control"> </textarea>

                    </div>


                </form>

            

            </ModalBody>

            <ModalFooter>
            <Button color="primary" onClick={toggle}>
                Confirm
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
        </ModalFooter>
      </Modal>
    );
};

export default createTask;