import React,{Component} from 'react';
import {Col,FormGroup,Input,Label,FormText} from 'reactstrap';


export default class UploadFiles extends Component{
    constructor(props){
      super(props)
      this.state={
        isHovered:false
      }
    }//constructor
    isHover=()=>{
      this.setState({
        isHovered:true
      })
    }
    isNotHover=()=>{
      this.setState({
        isHovered:false
      })
    }
    handleDrop=(e)=>{
      e.preventDefault()
      e.stopPropagation()
      if (e.dataTransfer.files &&   e.dataTransfer.files.length > 0) {
        this.props.getFiles({target:{files:e.dataTransfer.files}})
        e.dataTransfer.clearData()
      }
    }
    render(){
      const {
        title,
        name,
        gotFiles,
        inputCol,
        isRow=true,
        labelCol,
        className,
        classLbl,
        formText
      } = this.props
      const {isHovered} = this.state
      return(
            <FormGroup className={`${className} text-left`} row={isRow}>
              <Label className={classLbl} sm={labelCol}>{title}</Label>
              <Col sm={inputCol}>
                <div className="custom-file">
                  <Input type="file" multiple
                    onChange={this.props.getFiles}
                    onDragEnter={this.isHover}
                    onDragLeave={this.isNotHover}
                    onDrop={this.handleDrop}
                    onDragOver={this.isHover}
                    name={name}
                    accept="image/jpeg,image/png,application/pdf"
                    className="custom-file-input "/>
                    <Label className={`custom-file-label animated fadeInUp
                      ${gotFiles>1&&'got-files'}
                      ${gotFiles===1&&'got-file'}
                      ${isHovered&&'hover'} `}></Label>
                  </div>
                  <FormText color="muted">
                   {formText
                     ?formText
                     :'Para seleccionar más de un archivo, seleccione con la tecla shift o control'}
                  </FormText>
                </Col>
              </FormGroup>
          )

    }
}
