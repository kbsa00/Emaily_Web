import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'; 
import Header from '../components/Header';
import Landing from './Landing';
import {connect} from 'react-redux'; 
import * as actions from '../actions'; 


const dashboard = () => <h2>Dashboard</h2>;
const surveynew = () => <h2>SURVEYNEW</h2>;

class App extends Component{
    
    componentDidMount(){
      this.props.fetchUser();
    }
    
    render(){
        return(
            <div className = "container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/surveys" component={dashboard}/>
                        <Route path="/surveys/new" component={surveynew}/>      
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);    