import React , { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
class ParentComp extends PureComponent{
    constructor(props){
        super(props)

        this.state = {
            name :'Vishwas'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Vishwas'
            })
        },2000)
    }
    render(){
        console.log(`Parent comp render extends pure component,so it renders only once
        after evy 2seconds bcz,pure component matches string evytime before it 
        renders with the previously rendered string`);
        
        return (
            <div>
                Parent Component
                <PureComp name ={this.state.name}></PureComp>
                <RegComp name={this.state.name}></RegComp>
            </div>
        )
    }
}

export default ParentComp