import React from 'react';
import {connect} from 'react-redux';
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import {ToastMsg} from '../components/elements';
import {TOAST_TIMEOUT} from '../constants';
import {remove_toast} from '../redux/actions/toasts-actions';

function ToasterCont(props){
  const {remove_toast,toasts} = props
  return(
       <TransitionGroup>
          {toasts.map((el,i)=>
            <CSSTransition
              key={el.idToast}
              timeout={TOAST_TIMEOUT.pad}
              classNames="toast_item"
              unmountOnExit
              // onEnter={this.toggleToast}
              // onExited={this.toggleToast}
            >
              <ToastMsg
                  cleanToast={remove_toast}
                  key={el.idToast}
                  i={i}
                  {...el}
                   />
             </CSSTransition>)}

        </TransitionGroup>
  )
}

const mapStateToProps=({toastsReducer})=>({
  ...toastsReducer
})

const mapActionsToProps={
  remove_toast
}
export default connect(mapStateToProps,mapActionsToProps)(ToasterCont);
