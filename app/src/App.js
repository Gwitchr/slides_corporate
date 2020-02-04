// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import {Switch,Route} from 'react-router-dom';
import {
  // Placeholder,
  // Contact,
  Landing,
  NoMatch,
  // BeSlides
} from './components/routes';
import {NavbCont,BeSlidesCont} from './containers'
import {Toaster} from './components/pieces';
// import {CustomerChat} from './components/elements';
import { library } from '@fortawesome/fontawesome-svg-core'
import {fontawesomeIcons} from './config/fontawesome'
// import {Platform} from './components/routes'

// import 'date-input-polyfill-react'
import 'animate.css';
import './App.css';

library.add(...fontawesomeIcons)


type gProps = {
    store:{},
    location:{
      pathname:string
    }
}

class App extends Component<gProps> {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render() {
    const {location} = this.props
    return (
      <main scroll="no" className="App">
        {/* <CustomerChat/> */}
        <NavbCont location={location}/>
        <Toaster/>
        <div>
          <TransitionGroup>
            <CSSTransition
               key={location.pathname}
               timeout={800}
               classNames={"fadeTranslate"}
               mountOnEnter={true}
               unmountOnExit={true}>
              <div className="wrapper">
                <Switch location={location}>
                  <Route exact path="/" component={Landing}/>
                  <Route path="/slides">
                    <Route path="/slides/:company/:title" component={BeSlidesCont}/>
                  </Route>
                  <Route path="*" component={NoMatch}/>
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </main>
    );
  }
}

export default connect(({loginReducer})=>({...loginReducer}))(App);
