import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ContactForm} from '../components/forms'
import {start_lead,cancel_lead,reset_lead} from '../redux/actions/contact-actions'
import {add_toast} from '../redux/actions/toasts-actions';

class ContactCont extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount=()=>{
    this.props.reset_lead()
  }
  render(){
    const {...rest} = this.props
    return(
      <ContactForm
        // history={history}
        setToast={this.props.add_toast}
        start_lead={this.props.start_lead}
        cancel_lead={this.props.cancel_lead}
         {...rest} />
    )
  }
}

export default connect(({contactReducer})=>({
  ...contactReducer
}),{
  start_lead,
  cancel_lead,
  reset_lead,
  add_toast
})(ContactCont)
