import React, {useState} from 'react';
import CreateTask from '../modals/CreateTask'

const Todolist = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }
    return (
        <>
        <div className="header text-center">
            <h3 className = "mt-3">todo List</h3>
            <button className = "btn btn-success mt-2" onClick = {() => setModal(true)}>Create Task</button>
        </div>

        <div className="task-container"></div>
        <CreateTask toggle = {toggle} modal = {modal} />
        </>
    );
};

export default Todolist;