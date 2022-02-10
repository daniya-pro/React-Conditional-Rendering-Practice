import { Component } from "react"

class Profile extends Component{
constructor(props){
    super(props)
}

render(){
    const {name,age,gender,setParentState,city,country}=this.props
var allData=[
{title:'Name', value:name},
{title:'Age', value:age},
{title:'Gender', value:gender},
{title:'City', value:city},
{title:'Country', value:country}
]
return(
<div style={{padding:10}}>
{allData.map((e)=><p><b>{e.title}:</b> {e.value}</p>)}
<button onClick={()=>setParentState({submitted:false})}>Edit</button>
</div>



)

}

}
export default Profile;