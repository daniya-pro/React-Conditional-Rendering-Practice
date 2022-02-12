import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state={text:""}

  }


  saveValues = () => {
    const { setParentState, name, age, gender, city, country } = this.props;
    if (name.length < 1) {
      this.setState({text:"Please write a valid name"})
    }else if(age <18||age>150){
      this.setState({text:"Please write a valid age"})

    
  }else if(city.length < 1){
      this.setState({text:"Please select a valid city"})

    }else if(country.length < 1){
    this.setState({text:"Please select a valid country"})

    }


    else {
      setParentState({ submitted: true });
    }
  };


  setInputValues = (e, title) => {
    const { setParentState}=this.props
      setParentState({ [title]: e.target.value })


    
  }


  render() {
    console.log(this.props);

    const { setParentState, name, age, male, city, country } = this.props;
    return (
      <div style={{ padding: 10 }}>
        <br />
        Name:
        <br />
        <input
          value={name}
          onChange={(e)=> this.setInputValues(e,"name")}
          type="text"
        />
        <br />
        <br />
        Age:(please write a number)
        <br />
        <input
        style={{width:160}}
          value={age}
          onChange={(e)=>this.setInputValues(e,"age")}
          type="number" min='18' max='150'
        />
        <br />
        <br />
        Gender:
        <br />
        <input
          value={male}
          onChange={(e)=>{setParentState({male:e.target.checked})}}
          type="radio" name='gender'
        /><label>male</label>  <input
       checked={!male}
        type="radio" name='gender'
      /><label> female</label>

        <br />
        <br />
        City:
        <br />
        <input
          value={city}
          onChange={(e)=>this.setInputValues(e,"city")}
          type="text"
        />
        <br />
        <br />
        Country:
        <br />
        <input
          value={country}
          onChange={(e)=>this.setInputValues(e,"country")}
          type="text"
        />
        <br />
        <br />
        <br />
        <button onClick={this.saveValues}>submit</button>
<p style={{color:"red"}}>{this.state.text}</p>
      </div>

    );
  }
}
export default Form;
