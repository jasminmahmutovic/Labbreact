import React from "react"
import ReactDOM  from "react-dom"
import "../Styles/Modal.css"

const Modal = ({open, children, onClose}) => {


    if (!open) return null

    return ReactDOM.createPortal (
        <div  className="Overlay">
        <div className="Modal">
           <button className="button" onClick={onClose}>Close</button>
           {children}    
        </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal