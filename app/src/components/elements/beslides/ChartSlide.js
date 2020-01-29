import React,{useRef,useEffect} from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Chartjs from 'chart.js';
import {gradFillFade} from '../../../utils';

function ChartSlide({
  small,
  className,
  config,
  config:{
    source,
    sourceName,
    lightText,
    type,
    datasets,
    labels,
    options,
    chartName,
    hasGradFills
  }}){
  const chartRef = useRef()
  const chartCtrl = useRef()
  useEffect(()=>{
    let updDatasets = []
    if(chartRef.current){
        // chartRef.current.destroy()
        if(lightText){
          Chartjs.defaults.global.defaultFontColor = '#f8f9fa';
        }
        const ctx = chartRef.current.getContext('2d')
        if(hasGradFills){
          updDatasets = datasets.map((el)=>{
            return {...el,backgroundColor:gradFillFade(ctx,el.backgroundColor,hasGradFills.stop)}
          })


        }
        chartCtrl.current = new Chartjs(chartRef.current,{
          type,
          data: {
              labels,
              datasets:hasGradFills?updDatasets:datasets
            },
            options
        })
    }
    return ()=>{
      chartCtrl.current.destroy()
    }
    // eslint-disable-next-line
  },[])
  return(
    <Container>
      <Row className="w-100">
        <Col className={`abs_cont chart_cont ${className}`}>
            <canvas
              ref={chartRef}
              id={chartName}
              width={small?'300':'700'} height={small?'300':'400'}/>
        </Col>
      </Row>
      {source
        ? <Row>
          <Col>
            <a target="_blank"
              rel="noopener noreferrer"
              href={source}>{sourceName}</a>
          </Col>
        </Row>
        :null
      }
    </Container>
  )
}

export default ChartSlide
