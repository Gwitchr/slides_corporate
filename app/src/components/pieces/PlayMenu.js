import React from 'react';
import {Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../../style/playmenu.css';

function PlayMenu(){
  return (
    <div className="play_menu d-flex justify-content-center align-items-center">
      <Button color="link" className="text-dark">
        <FontAwesomeIcon icon={['far','play-circle']}/>
      </Button>
      <Button color="link" className="text-dark">
        <FontAwesomeIcon icon={['far','pause-circle']}/>
      </Button>
    </div>
  )
}

export default PlayMenu;
