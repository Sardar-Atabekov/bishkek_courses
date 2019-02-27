import React, { Component } from 'react';
import Universities from "./Universities";
import {Link} from "react-router-dom";

 class SearchField extends Component {
     constructor(props) {
         super(props);
         this.state = {
             data: [],
             courses: '',
         };
         this.handleClick = this.handleClick.bind(this);
     }

     componentDidMount() {
         const API = `http://46.101.146.101:8081/courses/search/?search=${this.state.courses}`;
         fetch(API)
             .then(response => response.json())
             .then(json => this.setState({data: json}))
     }

     handleClick = (event) => {
         this.setState({courses: event.target.value});
     };

     render() {
         return (
             <div>
                 <form>
                     <input placeholder="Поиск курса" />
                     <button onClick={this.componentDidMount} value={this.state.courses}><Link to={'/searchingCourses'}>Поиск</Link></button>
                 </form>
                 <div>
                     {this.state.courses}
                 </div>
             </div>
         )
     }
}
 export default SearchField;