import React,{useState,useEffect} from 'react';
// import {NavLink} from 'react-router-dom';
import {
  // Collapse,
  Container,
  NavItem,
  Row,
  Col,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink
  // NavItem,
  // NavLink as NvLnk
 } from 'reactstrap';
import {MenuToggle} from '../elements';
import {motion} from 'framer-motion'
// import logo from '../../assets/img/logo/logo_full.svg';
import { ReactComponent as Logo } from '../../assets/img/logo/logo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {debounce} from '../../utils'
// import hero_nav from '../assets/nav_bg_1920.png';
import '../../style/navb.css';

function Navb(){
  const [isBelow, setBelow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const checkOffset=debounce(()=>{
      if(window.scrollY>10){
      setBelow(true)
    } else {
      setBelow(false)
    }
  },100)
  useEffect(()=>{
    window.addEventListener('scroll',checkOffset)
    return ()=>window.removeEventListener('scroll',checkOffset)
    //eslint-disable-next-line
  },[])
  const toggle = () => setIsOpen(!isOpen);
  return(
    <>
      <Navbar className={`nav_bar ${isBelow?'nav_below':''}`}
              fixed={"top"}
              expand={false}>
          <NavbarBrand href="/">
            <Logo className='img-fluid logo' />
          </NavbarBrand>
          <NavbarToggler
            tag={MenuToggle}
            collapse={isOpen}
            className="toggle-icon-white"
            onClick={toggle}>
          </NavbarToggler>
        </Navbar>
        <Menu isOpen={isOpen} toggle={toggle}/>
      </>
  )
}

function Menu({isOpen}){
  const animStates = {
    open:{
      clipPath:`circle(150% at 91% 4.5%)`,
      opacity:1
    },
    closed:{
      clipPath:`circle(0% at 91% 4.5%)`,
      opacity:0
    }
  }
  return(
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={animStates}
      className={`circle_menu d-flex flex-column justify-content-around align-items-start`} >
      <Container>
        <Row>
          <Col>
            <Nav vertical>
              <NavItem>
                <NavLink>
                  <FontAwesomeIcon icon={['far','play-circle']}/>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>


    </motion.div>
  )
}

export default Navb
