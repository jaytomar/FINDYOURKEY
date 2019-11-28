import React from 'react';
import './style.css';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css'; 
import Chordcomponent from './chordcomponent'

var Tonal = require('tonal');
var tinycolor = require("tinycolor2");


class ScaleSearch extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
    }

    componentDidMount () {
    }
    
    urldecode(name){        
        var newstring
        newstring = name.replace('sharp', '#')
        newstring = newstring.split('-').join(' ')
        if(newstring.includes('#')){
            newstring = newstring.slice(0, 1) +newstring.slice(2, newstring.length)
        }
        console.log(newstring);
        return newstring
    }

    render(){
        return(
            <div className='' >
                <Chordcomponent query={this.urldecode(this.props.match.params.scale)}/>
                <br/>
                <div>
                    <p style={{textAlign:'center'}}>check out more scales below</p> 
                   <br/>
                </div>
            </div>
        )
    }
}


export default ScaleSearch
