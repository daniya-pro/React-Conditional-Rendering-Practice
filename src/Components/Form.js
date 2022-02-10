import { Component } from "react"

class Form extends Component{
constructor(props){
super(props)

}
saveValues = ()=>{
    this.props.setParentState({submitted:true})
}

render(){
    console.log(this.props)

    const {setParentState,name,age,gender,city,country}=this.props
return(

<div style={{padding:10}}>
    <br/>
Name:
<br/>
    <input value={name} onChange={(e)=>setParentState({name:e.target.value})} type="text"/>
    <br/>
    <br/>
    Age:
<br/>
<input value = {age} onChange={(e)=>setParentState({age:e.target.value})} type="text"/><br/>
<br/>

    Gender:
<br/>
    <input value = {gender} onChange={(e)=>setParentState({gender:e.target.value})} type="text"/><br/>
    <br/>

    City:
<br/>
    <input value = {city} onChange={(e)=>setParentState({city:e.target.value})} type="text"/><br/>
    <br/>
    Country:
<br/>    <input value = {country} onChange={(e)=>setParentState({country:e.target.value})} type="text"/><br/>
<br/>
<br/>
   <button onClick={this.saveValues}>submit</button>
</div>



)

}

}
export default Form;