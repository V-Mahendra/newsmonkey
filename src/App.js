 import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsDb from './components/NewsDb'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
 export class App extends Component {
    
    pageSize= 16;
   render() {
     return (
       <div style={{backgroundColor:"#303134"}}>
         <Router>
         <Navbar />
         <Switch>

         <Route exact path="/"><NewsDb  pageSize={this.pageSize} key="" country="in" category="general"/> </Route>
         <Route exact path="/business"><NewsDb pageSize={this.pageSize} key="business" country="in" category="business"/> </Route>
         <Route exact path="/entertainment"><NewsDb  pageSize={this.pageSize} key="entertainment" country="in" category="entertainment"/> </Route>
         <Route exact path="/general"><NewsDb  pageSize={this.pageSize} key="general" country="in" category="general"/> </Route>
         <Route exact path="/health" ><NewsDb pageSize={this.pageSize} key="health" country="in" category="health"/> </Route>
         <Route exact path="/sports" ><NewsDb pageSize={this.pageSize} key="sports" country="in" category="sports"/> </Route>
         <Route exact path="/science"><NewsDb  pageSize={this.pageSize} key="science" country="in" category="science"/> </Route>
         <Route exact path="/technology"><NewsDb  pageSize={this.pageSize} key="technology" country="in" category="technology"/> </Route>

         </Switch>
         </Router>
       </div>
     )
   }
 }
 
 export default App
 