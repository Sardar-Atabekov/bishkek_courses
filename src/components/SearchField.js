import React, { Component } from 'react';
import {Link} from "react-router-dom";

 class SearchField extends Component {

     constructor(props) {
         super(props);
         this.state = {
             courses: [
             ]
         };
     }

     gettingCourse = async (event) => {
         event.preventDefault();
         const course = event.target.elements.course.value;
         const API_URL = await
             fetch(`http://46.101.146.101:8081/courses/search/?search=${course}`);
         const data = await API_URL.json();
         console.log(data);

     };

     render() {
         return (
             <div>
                 <form onSubmit={this.gettingCourse}>
                     <input type="text" name="course" placeholder="City"/>
                     <button>Get course</button>
                 </form>
                 <div>
                     {this.courses}
                 </div>
             </div>
         )
     }
}
 export default SearchField;