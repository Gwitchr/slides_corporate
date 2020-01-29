import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {Plans} from '../../components/pieces/beslides';
import {start_get_products} from '../../redux/actions/products-actions';

function PlansCont(props){
  useEffect(()=>{
    let queryURL = new URLSearchParams()
    queryURL.append('group',props.productGroup)
    props.start_get_products(`?${queryURL.toString()}`)
    //eslint-disable-next-line
  },[])
  const {setPlan,...rest} = props
  return (
    <Plans
      setPlan={setPlan}
      {...rest}/>
  )
}

const matStateToProps=({productsReducer})=>({...productsReducer})
const mapActionsToProps = {
  start_get_products
}

export default connect(matStateToProps,mapActionsToProps)(PlansCont)
