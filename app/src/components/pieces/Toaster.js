import React from 'react';
import {ToasterCont} from '../../containers';
import '../../style/toasts.css';

function Toaster(){
  return (
    <div className="d-flex fixed-top toast_cont justify-content-end">
      <ToasterCont/>
    </div>
  )
}

export default Toaster;
