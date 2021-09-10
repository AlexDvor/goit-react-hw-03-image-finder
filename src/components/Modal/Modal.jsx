import { Component } from 'react';
import { Overlay, ContentModal } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return createPortal(
      <>
        <Overlay>
          <ContentModal>{this.props.children}</ContentModal>
        </Overlay>
      </>,
      modalRoot,
    );
  }
}

export default Modal;
