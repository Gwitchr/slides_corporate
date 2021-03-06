import React from 'react';
import {Row,Col} from 'reactstrap';
// import logo from '../../../assets/img/logo/logo.svg'
import {motion} from 'framer-motion'

function First({logo,company,title}){
  return(
    <Row className="justify-content-center align-items-center text-center text-md-left my-5 my-md-auto w-100">
      <Col className="mb-3 text-center text-md-right" xs={12} md={5}>
        <motion.img src={logo}
          className="mr-md-3 img-fluid logo_intro"
          animate={{
            opacity: [0,1,1,1,1],
            x: ['35%', '35%','35%', '0%', '0%'],
            y: ['30%', '0%','0%', '0%', '0%'],
          }}
          transition={{
            duration: 3,
            times: [0, 0.2, 0.3, 0.6, 1]
          }}/>
      </Col>
      <Col xs={12} md={7}>
          <motion.h3
            animate={{
              opacity: [0,0,0,1,1],
              x: ['-30%', '-30%','-30%', '0%', '0%'],
            }}
            transition={{
              duration: 3,
              times: [0, 0.2, 0.3, 0.6, 1]
            }}>
            {company}
          </motion.h3>
          <motion.h1
            animate={{
              opacity: [0,0,0,1,1],
              x: ['-30%', '-30%','-30%', '0%', '0%'],
            }}
            transition={{
              duration: 3,
              times: [0, 0.2, 0.3, 0.6, 1],
              delay:.20
            }}>
            <b>{title}</b>
          </motion.h1>

      </Col>


    </Row>
  )
}

export default First
