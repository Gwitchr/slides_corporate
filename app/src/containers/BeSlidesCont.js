import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {BeSlides} from '../components/routes';
import {start_get_beslides} from '../redux/actions/beslides-actions';

function BeSlidesCont(props){
  useEffect(()=>{
    const {match:{params:{company,title}}} = props
    // console.log('company,title',company,title)
    if(company&&title){
      let queryURL = new URLSearchParams()
      queryURL.append('short_name',title)
      queryURL.append('company',company)
      props.start_get_beslides(`?${queryURL.toString()}`)
    }
    // eslint-disable-next-line
  },[])
  const {...rest} = props
  return(
    <BeSlides {...rest}/>
  )
}

const mapStateToProps=({beslidesReducer})=>({
  ...beslidesReducer
})

const mapActionsToProps={
  start_get_beslides
}

export default connect(mapStateToProps,mapActionsToProps)(BeSlidesCont)
