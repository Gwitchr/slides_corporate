import React from 'react';
import {SEO} from '../elements';
import {
  Jumbo,
  Promises,
  UseCases,
  Features,
  HowItWorks,
  Plans,
  CTASubscribe,
  Footer
} from '../sections'

import '../../style/landing.css';

import sect_trans from '../../assets/img/landing/bg_sections/bg_beslides.png'
import sect_trans_2 from '../../assets/img/sect_trans.svg'
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
import design_1 from '../../assets/img/landing/features/design_1.png';
import design_2 from '../../assets/img/landing/features/design_2.png';
import design_3 from '../../assets/img/landing/features/design_3.png';
import animated_1 from '../../assets/img/landing/features/animated_1.png';
import animated_2 from '../../assets/img/landing/features/animated_2.png';
import animated_3 from '../../assets/img/landing/features/animated_3.png';

import process_1 from '../../assets/img/landing/process/process_1.png';
import process_2 from '../../assets/img/landing/process/process_2.png';
import process_3 from '../../assets/img/landing/process/process_3.png';
import process_4 from '../../assets/img/landing/process/process_4.png';

import standard from '../../assets/img/icons/startup_treatment/standard.svg';
import premium from '../../assets/img/icons/startup_treatment/premium.svg';
import enterprise from '../../assets/img/icons/startup_treatment/enterprise.svg';

const useCases = [
  {
    img:useCasesImg.graph,
    scenario:'Presentaci??n de negocios'
  },
  {
    img:useCasesImg.brand_guidelines,
    scenario:'Gu??as de marca'
  },
  {
    img:useCasesImg.product,
    scenario:'Lanzamiento de producto'
  },
  {
    img:useCasesImg.process,
    scenario:'Explicaci??n de proceso'
  },
  {
    img:useCasesImg.project_presentation,
    scenario:'Presentaci??n de proyecto'
  },
  {
    img:useCasesImg.investment,
    scenario:'Presentaci??n a inversionistas'
  },
  {
    img:useCasesImg.architecture,
    scenario:'Proyecto Arquitect??nico'
  },
  {
    img:useCasesImg.app_usage,
    scenario:'Presentaci??n de App'
  },
  {
    img:useCasesImg.team_present,
    scenario:'Presentaci??n de equipo'
  },
  {
    img:useCasesImg.service,
    scenario:'Explicaci??n de servicio'
  }
]

const sectTr={
  backgroundImage:`linear-gradient(to top, rgba(233,236,239,0),rgba(233,236,239,1) 80%),url(${sect_trans})`,
    // position:'relative',
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    // backgroundPosition:'right',
}

const sectTr_2 = {
  backgroundImage:`url(${sect_trans_2})`
}

const features = [
  {
    title:'Anal??tica',
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
    title:'Auto presentaci??n',
    text:'No es necesario que est??s para que tu historia se cuenta como t?? quieres',
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
    text:'Olv??date de las versiones, el contenido siempre est?? actualizado',
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
  },
  {
    title:'Dise??o profesional',
    text:'Todo hecho por expertos gr??ficos',
    icon:'palette',
    graphs:[
      {
        img:design_3,
        style:{
          width:'50%',
          top:'15vh',
          left:'20%',
        }
      },
      {
        img:design_2,
        style:{
          width:'35%',
          top:'50vh',
          left:'0'
        }
      },
      {
        img:design_1,
        style:{
          width:'35%'
        }
      }
    ]
  },
  {
    title:'Una animaci??n dice lo que mil gr??ficos',
    text:'Explica conceptos complicados con practicidad y facilidad',
    icon:'paper-plane',
    graphs:[
      {
        img:animated_3,
        style:{
          width:'30%'
        }
      },
      {
        img:animated_2,
        style:{
          width:'50%',
          top:'22vh',
          left:'25%'
        }
      },
      {
        img:animated_1,
        style:{
          width:'50%',
          top:'45vh',
          left:'0'
        }
      }
    ]
  }
]

const userProc = [
  {
    title:"Sobre ti",
    text:"Cu??ntanos acerca de tu marca y cu??l es tu objetivo ",
    img:process_1
  },
  {
    title:"Contenido",
    text:"Mu??stranos lo que quieres que transformemos, o empecemos desde 0 como t?? quieras",
    img:process_2
  },
  {
    title:"Mejora",
    text:`Deja que nuestros profesionales te aconsejen para conseguir el mayor impacto.

    Recibe propuestas, crit??calas hasta que est??s contento`,
    img:process_3
  },
  {
    title:"Publica",
    text:"??Comparte, impresiona, impacta y mide el resultado de tu contenido!",
    img:process_4
  }
]

const solutions=[
  {
    icon:'',
    title:'Starter',
    text:'Obt??n una presentaci??n profesional, espectacular y efectiva, hecha por expertos de dise??o y storytelling',
    color:'orange',
    link:'/pricing',
    img:standard
  },
  {
    icon:'',
    title:'Premium',
    text:'Obt??n orientaci??n uno a uno y una presentaci??n profesional, espectacular y efectiva, hecha por expertos',
    color:'red',
    link:'/pricing',
    img:premium
  },
  {
      icon:'',
      title:'Enterprise',
      text:'Obt??n presentaciones para tu empresa profesionales con orientaci??n de expertos de story telling y dise??o',
      color:'purple',
      link:'/pricing',
      img:enterprise
    }
]




function Landing(){
  return (
    <section className="home">
      <SEO title="Home" description="Presentaciones efectivas y elegantes"/>
      <Jumbo heroText={'??Y si mis presentaciones las pudiera hacer un profesional cada vez?'}/>
      <Promises/>
      <UseCases background={sectTr} useCases={useCases}/>
      <Features background={sectTr_2} features={features}/>
      <HowItWorks userProc={userProc}/>
      <Plans solutions={solutions}/>
      <CTASubscribe/>
      <Footer/>
    </section>
  )
}

export default Landing;
