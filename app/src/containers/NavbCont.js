import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Navb} from '../components/pieces';
// import {
//   toggle_form_modal,
//   choose_current_form
// } from '../redux/actions/platform-actions';

class NavbCont extends Component{
  render(){
    const {...rest} = this.props
    return(
      <Navb {...rest}/>
    )
  }
}

export default connect(({navbarReducer})=>
({
  ...navbarReducer
}),{

})(NavbCont)
