import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  // NavItem,
  // NavLink as NvLnk
 } from 'reactstrap';
import {MenuToggle} from '../elements';
// import logo from '../../assets/img/logo/logo_full.svg';
import { ReactComponent as Logo } from '../../assets/img/logo/logo.svg';
// import hero_nav from '../assets/nav_bg_1920.png';
import '../../style/navb.css';


export default class Navb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isBelow:false

    }
  }
  componentDidMount=()=>{
    window.addEventListener('scroll',this.checkOffset)
  }
  componentWillUnmount=()=>{
    window.removeEventListener('scroll',this.checkOffset)
  }
  checkOffset=()=>{
    // this.props.getOffsetY(window.scrollY)
    if(window.scrollY>10){
      this.setState(()=>({
        isBelow:true
      }))
    } else {
      this.setState(()=>({
        isBelow:false
      }))
    }
  }
  toggle=()=> {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {isBelow} = this.state
    return (
      <div>
        <Navbar className={`nav_bar ${isBelow?'nav_below':''}`}
                fixed={"top"}
                // color="light"
                expand="md">
          <NavbarBrand tag={NavLink} to="/">

              <Logo className='img-fluid logo' />
          </NavbarBrand>
          <NavbarToggler
            tag={MenuToggle}
            className="toggle-icon-white"
            onClick={this.toggle}>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            {/* <Nav className="ml-auto" navbar>
              <NavItem className="underline_left">
                <NavLink  activeClassName="selected" className="nav-link" to="/cotizador">
                Cotizador
                </NavLink>
              </NavItem>
            </Nav> */}
            <Nav className="ml-auto" navbar>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <NavLink to="/MES">
                    MES
                  </NavLink>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/MES#whatis">
                      MES/MOM
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/MES#benefits">
                    Beneficios
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/MES#advantages">
                    Ventajas
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/MES#features">

                    Características
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              {/* <NavItem className="underline_left">
                <NavLink  activeClassName="selected" className="nav-link" to="/exitos">Casos de éxito</NavLink>
              </NavItem> */}
              {/* <NavItem className="underline_left">
                <NvLnk tag={NavLink} activeClassName="active"  to="/contacto">Contacto</NvLnk>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
