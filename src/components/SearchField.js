import React, { Component } from 'react';

 class SearchField extends Component {
     constructor(props) {
         super(props);
         this.state = {
             data: [],
         };
     }
     componentDidMount() {
         const API = 'http://46.101.146.101:8081/courses/search/?search=';
         fetch(API)
             .then(response => response.json())
             .then(json => this.setState({data: json}))
     }

     addItem() {

         const newItem = document.getElementById("addInput")
         const form = document.getElementById("addItemForm")
     }

     render() {
         const { data } = this.state.data;

         return (
             <div>
                 <form className="form" id="addItemForm">
                     <input
                         type="text"
                         className="input"
                         id="addInput"
                         placeholder="Поиск курсов..."
                     />
                     <button onClick={this.addItem}>
                         Add Item
                     </button>
                 </form>

             </div>
         )
     }
 }

 export default SearchField;