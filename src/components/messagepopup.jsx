import React, { useState } from "react";
import {Toast} from 'react-bootstrap';


const MessagePopup = props => {
    const [show, setShow] = useState(true)
    return (
        <Toast onClose={() => setShow(false)} show={show} delay={10000} autohide style={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}>
            <Toast.Header>
            <strong className="mr-auto">{props.messageSender}</strong>
            </Toast.Header>
            <Toast.Body>{props.message}</Toast.Body>
        </Toast>
    )
}

export default MessagePopup