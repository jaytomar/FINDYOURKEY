import React, {Component} from 'react'
import * as Chord from 'tonal-chord'
var Tonal = require('tonal');
var tinycolor = require("tinycolor2");

class Chords extends Component {
    constructor(props){
        super(props)

    }


    random_color= ()=>{
        var colors = ['#247BA0', '#70C1B3', '#B2DBBF', '#8f49c6', '#FF1654'];
        var random = colors[Math.floor(Math.random()*colors.length)];
        var textcolor =  tinycolor(random).darken(40).toString();
        var colorarray = [random, textcolor]
        return colorarray;
      }

    componentDidMount(){
    }

    
    
    render(){
        var color = this.random_color();
        return(
            <div>
                <div className='display'>

                    <a href={'/scales/'}><div 
                     data-aos="fade-up"
                     className='infocard' 
                     style={
                        {
                            background : color[0],
                            color: color[1],
                            width: 'auto'
                        }
                    }>
                    <h3 >{this.props.data}</h3>
                    </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Chords