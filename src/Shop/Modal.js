import { Fragment } from "react"
import  ReactDOM  from "react-dom"
const BackDrop = (props) =>{
    return ( 
    <div className="fixed left-0 w-full h-screen top-0 z-20 bg-black opacity-70 "  onClick={props.onCloseCart} />
        
   )
}

const ModalOverlay =props => {
    return  (
        <div className="text-black bg-white  p-3 z-30 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-2/4 ">
            <div >
                {props.children}
            </div>
        </div>
    )
}
const portalElement= document.getElementById('overlays')
const Modal = (props) => {
return (
    <Fragment>
       {ReactDOM.createPortal(<BackDrop onClick={props.onCloseCart}/>,portalElement )}
       {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
)

}
export default Modal;