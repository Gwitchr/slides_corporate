import React,{Component} from 'react';
import {Card,CardBody} from 'reactstrap';

export default class VerifyRegForm extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    const {isFetching,message,error} = this.props
    return (
      <Card>
        <CardBody>
          {isFetching
            ?<i className="fas fa-cog fa-spin" />
            :message||error
            ?<div>
              {message&&message}
              {error&&error}
            </div>
            :null
          }
        </CardBody>
      </Card>
    )
  }
}
