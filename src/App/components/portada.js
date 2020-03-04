import React, { Component,Fragment } from "react";
import { ReactComponent as Icon } from "../../logo.svg";
import Modal from "../modals/Modal";
import Loggin from "../components/loggin";
import img from '!!file-loader!../../logo.svg';

class Portada extends Component {
  constructor(props) {
    super(props);

    //Binds
    this.showModal = this.showModal.bind(this);
    this.onClose = this.onClose.bind(this);

    this.state = {
      open : false
    };
  };

showModal(){
  this.setState(() => ({open:true}));
}

onClose(){
  this.setState(() => ({open:false}))
}

  render() {
    return (
      <Fragment>
        <div className="foo">
          <span className="letter" data-letter="R">
            R
          </span>
          <span className="letter" data-letter="E">
            E
          </span>
          <span className="letter" data-letter="A">
            A
          </span>
          <span className="letter" data-letter="C">
            C
          </span>
          <span className="letter" data-letter="T">
            T
          </span>
          <span className="letter" data-letter="I">
            I
          </span>
          <span className="letter" data-letter="F">
            F
          </span>
          <span className="letter" data-letter="Y">
            Y
          </span>
        </div>
        <img src={img} className="logo center"/>
        <Modal open={this.state.open} onClose={this.onClose} >
          <Loggin/>
        </Modal>
        <button onClick={this.showModal} className="center button-secondary">
          Inicio Sesión
        </button>
      </Fragment>
    );
  }
}


export default Portada;
