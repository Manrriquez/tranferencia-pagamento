import React, { Children } from 'react';

const Modal = ({ Children }) => {
    return <div className="modal">
        <div className="container-modal">
            <button className="close"></button>
            <div className="content">{Children}</div>
        </div>
    </div>;

};


export default  Modal;