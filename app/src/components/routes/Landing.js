import React from 'react';
import {SEO} from '../elements';
import {
  Jumbo,
  Promises,
  UseCases,
  Features,
  Footer
} from '../sections'

import '../../style/landing.css';

import sect_trans from '../../assets/img/landing/bg_sections/bg_beslides.png'
import useCasesImg from '../../constants/landing';

import graph_1 from '../../assets/img/landing/features/graph_1.png';
import graph_2 from '../../assets/img/landing/features/graph_2.png';
import graph_3 from '../../assets/img/landing/features/graph_3.png';
import fresh from '../../assets/img/landing/features/fresh.png';
import fresh_2 from '../../assets/img/landing/features/fresh_2.png';
import fresh_3 from '../../assets/img/landing/features/fresh_3.png';
import autoplay from '../../assets/img/landing/features/autoplay.png';
import autoplay_2 from '../../assets/img/landing/features/autoplay_2.png';
import autoplay_3 from '../../assets/img/landing/features/autoplay_3.png';

const useCases = [
  {
    img:useCasesImg.graph,
    scenario:'Presentación de negocios'
  },
  {
    img:useCasesImg.brand_guidelines,
    scenario:'Guías de marca'
  },
  {
    img:useCasesImg.product,
    scenario:'Lanzamiento de producto'
  },
  {
    img:useCasesImg.process,
    scenario:'Explicación de proceso'
  },
  {
    img:useCasesImg.project_presentation,
    scenario:'Presentación de proyecto'
  },
  {
    img:useCasesImg.investment,
    scenario:'Presentación a inversionistas'
  },
  {
    img:useCasesImg.architecture,
    scenario:'Proyecto Arquitectónico'
  },
  {
    img:useCasesImg.app_usage,
    scenario:'Presentación de App'
  },
  {
    img:useCasesImg.team_present,
    scenario:'Presentación de equipo'
  },
  {
    img:useCasesImg.service,
    scenario:'Explicación de servicio'
  }
]

const sectTr={
  backgroundImage:`linear-gradient(to top, rgba(233,236,239,0),rgba(233,236,239,1) 80%),url(${sect_trans})`,
    // position:'relative',
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    // backgroundPosition:'right',
}

const features = [
  {
    title:'Analítica',
    text:'Conocer el comportamiento es crucial para mejorar',
    icon:'chart-bar',
    graphs:[
      {
        img:graph_1,
        style:{
          width:'40%',
          top:'0'
        }
      },
      {
        img:graph_2,
        style:{
          width:'50%',
          top:'45vh',
          left:'10%'
        }
      },
      {
        img:graph_3,
        style:{
          width:'50%',
          top:'30vh',
          left:'30%'
        }
      }
    ]
  },
  {
    title:'Auto presentación',
    text:'No es necesario que estés para que tu historia se cuenta como tú quieres',
    icon:'stopwatch',
    graphs:[
      {
        img:autoplay,
        style:{
          width:'30%'
        }
      },
      {
        img:autoplay_2,
        style:{
          width:'50%',
          top:'12vh',
          left:'20%'
        }
      },
      {
        img:autoplay_3,
        style:{
          width:'35%',
          top:'45vh',
          left:'0'
        }
      }
    ]
  },
  {
    title:'Siempre fresco',
    text:'Olvídate de las versiones, el contenido siempre está actualizado',
    icon:'carrot',
    graphs:[
      {
        img:fresh,
        style:{
          width:'30%'
        }
      },
      {
        img:fresh_2,
        style:{
          width:'50%',
          top:'35vh',
          left:'10%'
        }
      },
      {
        img:fresh_3,
        style:{
          width:'50%',
          top:'45vh',
          left:'10%'
        }
      }
    ]
  }
]

function Landing(){
  return (
    <section className="home">
      <SEO title="Home" description="Presentaciones efectivas y elegantes"/>
      <Jumbo heroText={'¿Y si mis presentaciones las pudiera hacer un profesional cada vez?'}/>
      <Promises/>
      <UseCases background={sectTr} useCases={useCases}/>
      <Features features={features}/>
      <Footer/>
    </section>
  )
}

export default Landing;
