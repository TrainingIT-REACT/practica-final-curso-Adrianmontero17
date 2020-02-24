import React,{Fragment} from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const modalNode = document.getElementById("modal");

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalNode.appendChild(this.el);
  }

  componentWillUnmount() {
    modalNode.removeChild(this.el);
  }

  render() {
    if(this.props.open !== true){
      return null;
    }
    
    return ReactDOM.createPortal(
      <Fragment>
        <div className="background" onClick={this.props.onClose}/>
        <div className="modal">
          <button className="modal__close" onClick={this.props.onClose} >
            &times;
          </button>
          {this.props.children}
        </div>
      </Fragment>,
      modalNode
    );
  }
}

export default Modal;
