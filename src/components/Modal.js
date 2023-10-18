import React, { useState } from 'react';
import '../css/Modal.scss';

function Modal(props) {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }
    return (
        <div>
            <img src={props.imageRoute} alt="Project thing" onClick={toggleModal}/>
            
            {modal && (
                <div className='modal-js'>
                    <div className='overlay-js' onClick={toggleModal}></div>
                    <div className='modal-content-js'>
                        <img src={props.modalImg} alt="modal thumb" />
                        <h2>{props.mainTxt}</h2>
                        <p>{props.sideTxt}
                        </p>
                        <button className='close-modal-js' onClick={toggleModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal