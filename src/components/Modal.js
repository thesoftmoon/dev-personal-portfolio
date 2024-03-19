import React, { useState } from 'react';
import '../css/Modal.scss';

function Modal(props) {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }
    return (
        <div>
            <img src={props.imageRoute} alt="Project thing" onClick={toggleModal} />

            {modal && (
                <div className='modal-js'>
                    <div className='overlay-js' data-aos="fade" data-aos-duration="500" onClick={toggleModal}></div>
                    <div className='modal-content-container' data-aos="fade-up" onClick={toggleModal} data-aos-duration="500">
                        <div className='modal-content-js' >
                            <img src={props.modalImg} alt="modal thumb" />
                            <div className="content">
                                <h2>{props.mainTxt}</h2>
                                <p>{props.sideTxt}</p>
                            </div>
                            <button className='close-modal-js' onClick={toggleModal}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M14 0C6.26875 0 0 6.26875 0 14C0 21.7312 6.26875 28 14 28C21.7312 28 28 21.7312 28 14C28 6.26875 21.7312 0 14 0ZM20.7687 18.7188C20.8625 18.8125 20.9125 18.9375 20.9125 19.0688C20.9125 19.2 20.8625 19.3313 20.7687 19.4188L19.4188 20.775C19.3188 20.875 19.1938 20.9188 19.0688 20.9188C18.9438 20.9188 18.8125 20.8687 18.7188 20.775L14 16.05L9.2875 20.7812C9.19375 20.8813 9.0625 20.925 8.9375 20.925C8.8125 20.925 8.68125 20.875 8.5875 20.7812L7.2375 19.425C7.14375 19.3312 7.09375 19.2063 7.09375 19.075C7.09375 18.9438 7.14375 18.8125 7.2375 18.725L11.9688 13.975L7.225 9.2875C7.03125 9.09375 7.03125 8.775 7.225 8.58125L8.575 7.225C8.66875 7.13125 8.79375 7.08125 8.925 7.08125C9.05625 7.08125 9.18125 7.13125 9.275 7.225L14.0063 11.8938L18.7375 7.225C18.8312 7.13125 18.9562 7.08125 19.0875 7.08125C19.2187 7.08125 19.3438 7.13125 19.4375 7.225L20.7875 8.58125C20.9813 8.775 20.9813 9.09375 20.7875 9.2875L16.0438 13.975L20.7687 18.7188Z" fill="white" />
                            </svg></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal