import React, { Component } from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

class VideoOverlay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    const {
      id,
      height,
      title,
      buttonTitle,
    } = this.props;

    const videoOpts = {
      height,
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          {buttonTitle}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {title}
          </ModalHeader>
          <ModalBody>
            <YouTube opts={videoOpts} videoId={id}></YouTube>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

VideoOverlay.defaultProps = {
  height: '300px',
};

VideoOverlay.propTypes = {
  height: PropTypes.string,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  buttonTitle: PropTypes.string.isRequired,
};

export default VideoOverlay;
