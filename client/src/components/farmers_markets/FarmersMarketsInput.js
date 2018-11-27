import React, { Component } from 'react';

class FarmersMarketsInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.searchParams = [{monday: "", checked: false},
    {tuesday: "", checked: false},
    {wednesday: "", checked: false},
    {thursday: "", checked: false},
    {friday: "", checked: false},
    {saturday: "", checked: false},
    {sunday: "", checked: false}]
  };


  handleOnChange = (event) =>{
    if ([event.target.name] === "search") {
        this.setState({
        [event.target.name]: event.target.value
      })
    } else if (!this.state.hasOwnProperty([event.target.value])){
      this.setState({
        [event.target.name]: event.target.value
      })
    } else {
      delete this.state[event.target.value]
    }
   if (event.target.name !== "search") {
      if (event.target.checked === true) {
        this.searchParams = this.searchParams.map(el => {
              if(Object.keys(el)[0] === [event.target.name][0]) {
                  return {[event.target.name]: event.target.value, checked: true}
                 }
                 return el
           });
     } else {
       this.searchParams = this.searchParams.map(el => {
             if(Object.keys(el)[0] === [event.target.name][0]) {
                   return {[event.target.name]: "", checked: false}
               }
               return el
          });
      }
   }
 }

 handleOnSubmit = (event) => {
  event.preventDefault();
  this.props.handleSubmit(this.state)
  this.props.handleSearch(Object.keys(this.state).filter(m => m !== "search"), this.state)
  this.state = {search: ""}
  console.log(this.state)
  this.searchParams = []
  }

  render() {
    return (
      <div>
       <form onSubmit={this.handleOnSubmit}>
       <label>Search for a Market By ZipCode: </label>
         <input
           type="text"
           name='search'
           value={this.state.search}
           onChange={this.handleOnChange} /><br/><br/>
         <label>Monday</label><input type="checkbox" value="monday" name="monday" onChange={this.handleOnChange} checked={this.searchParams.filter(m => {return Object.keys(m)[0] === "monday"}).checked}></input>
         <label>Tuesday</label><input type="checkbox" value="tuesday" name="tuesday" onChange={this.handleOnChange} checked={this.searchParams.filter(m => {if(Object.keys(m)[0] === "tuesday"){return m}}).checked}></input>
         <label>Wednesday</label><input type="checkbox" value="wednesday" name="wednesday" onChange={this.handleOnChange} checked={this.searchParams.filter(m => {if(Object.keys(m)[0] === "wednesday"){return m}}).checked}></input>
         <label>Thursday</label><input type="checkbox" value="thursday" name="thursday" onChange={this.handleOnChange} checked={this.searchParams.filter(m => {if(Object.keys(m)[0] === "thursday"){return m}}).checked}></input>
         <label>Friday</label><input type="checkbox" value="friday" name="friday" onChange={this.handleOnChange} checked={this.searchParams.filter(m => {if(Object.keys(m)[0] === "friday"){return m}}).checked}></input>
         <label>Saturday</label><input type="checkbox" value="saturday" name="saturday" onChange={this.handleOnChange} checked={this.searchParams.filter(m => {if(Object.keys(m)[0] === "saturday"){return m}}).checked}></input>
         <label>Sunday</label><input type="checkbox" value="sunday" name="sunday" onChange={this.handleOnChange} checked={this.searchParams.filter(m => {if(Object.keys(m)[0] === "sunday"){return m}}).checked}></input><br/><br/>
         <input type="submit" />
       </form><br/>
     </div>
    );
  }
};

export default FarmersMarketsInput;
