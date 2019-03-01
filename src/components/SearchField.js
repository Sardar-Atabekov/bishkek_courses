import React, { Component } from 'react';
import "./css/SearchField.css";
import {Link} from "react-router-dom";
import "./css/Content.css";

 class SearchField extends Component {
     constructor(props) {
         super(props);
         this.state = {
             data: [],
         };
     };

     gettingCourse = async (event) => {
         event.preventDefault();
         const course = event.target.elements.course.value;
         const API_URL = await fetch(`http://46.101.146.101:8081/courses/search/?search=${course}`);
         this.setState({data: await API_URL.json()});
     };

     render() {
         return (
             <div className="searching_form">
                 <form onSubmit={this.gettingCourse}>
                     <input type="text" name="course" placeholder="City"/>
                     <button>Get course</button>
                 </form>
                 <div>
                     <div id='container' className='main'>
                     {this.state.data.map((course)=> {
                         return (
                                 <div className="content" key={course.id}>
                                 <Link to={`/subcategory/${course.id}`}> <img src={course.main_image_url} className="images" alt='course' /></Link>
                                 <h3 className="title">{course.title}</h3>
                                 <div className="description_content">
                                     <p className="description">{course.description} </p>
                                 </div>
                             </div>
                         )
                     })}
                     </div>
                 </div>
             </div>
         )
     };
}

 export default SearchField;