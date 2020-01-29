import React,{useRef,useEffect} from 'react';
import Chartjs from 'chart.js';
// import {gradFillFade} from '../../../utils';

function Chart({chartName,data,labels,lightText}){
  const chartRef = useRef()
  useEffect(()=>{
    // if(chartRef.current){
        if(lightText){
          Chartjs.defaults.global.defaultFontColor = '#f8f9fa';
        }
        const ctx = chartRef.current.getContext('2d')
        new Chartjs(ctx,{
          type: 'radar',
          data: {
              labels,
              datasets: [{
                  label: 'Valores seleccionados',
                  data,
                  backgroundColor: [
                      'rgba(255, 255, 255, .2)',
                      // 'rgba(54, 162, 235, 0.2)',
                      // 'rgba(255, 206, 86, 0.2)',
                      // 'rgba(75, 192, 192, 0.2)',
                      // 'rgba(153, 102, 255, 0.2)',
                      // 'rgba(255, 159, 64, 0.2)',
                      // 'rgba(255, 99, 132, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 255, 255, 1)',
                      // 'rgba(255, 99, 132, 1)',
                      // 'rgba(54, 162, 235, 1)',
                      // 'rgba(255, 206, 86, 1)',
                      // 'rgba(75, 192, 192, 1)',
                      // 'rgba(153, 102, 255, 1)',
                      //
                      // 'rgba(255, 99, 132, 1)',
                  ],
                  pointBackgroundColor:'rgba(255,255,255, 1)',
                  borderWidth: 1
              }]
            },
            options: {
                scale: {
                  ticks: {
                      beginAtZero: true
                  }
                },
                title:{
                  display:true,
                  text:'Estilo gráfico'
                },
                legend:{
                  position:'top'
                }
            }
        })
    // }
  },[data,labels,lightText])
  return(
    <canvas
      ref={chartRef}
      id={chartName}
      width="400" height="400"/>
  )
}

export default Chart
