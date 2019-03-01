import React, { Component } from 'react';

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
             <div>
                 <form onSubmit={this.gettingCourse}>
                     <input type="text" name="course" placeholder="City"/>
                     <button>Get course</button>
                 </form>
                 <div>
                     {this.state.data.map((course)=> {
                         return (
                             <div key={course.id}>{course.title}</div>
                         )
                     })}
                 </div>
             </div>
         )
     };
}
 export default SearchField;