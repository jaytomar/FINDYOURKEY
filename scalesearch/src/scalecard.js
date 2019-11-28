import React from 'react';
import './style.css';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css'; 


var Tonal = require('tonal');
var tinycolor = require("tinycolor2");


class Scalecard extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
    }

    componentDidMount () {
        AOS.init()
    }


    random_color= ()=>{
        var colors = ['#247BA0', '#70C1B3', '#B2DBBF', '#8f49c6', '#FF1654'];
        var random = colors[Math.floor(Math.random()*colors.length)];
        var textcolor =  tinycolor(random).darken(40).toString();
        var colorarray = [random, textcolor]
        return colorarray;
      }

    urlencode(name){
        var string=this.props.names
        var newstring
        newstring = name.replace('#', ' sharp')
        newstring = newstring.split(' ').join('-')
        // console.log(newstring);
        return newstring
    }
    render(){    
        var scalenames = this.props.names.map((item, index)=> {
                var color = this.random_color();
                return (
                    <a href={'/scales/'+ this.urlencode(item)} key= {index}><div 
                     data-aos="fade-up"
                     className='infocard' 
                     style={
                        {
                            background : color[0],
                            color: color[1]
                        }
                    }>
                    <h3 key={index}>{item}</h3>
                    <p>{this.props.notes[index].join('-')}</p>
                    </div>
                    </a>
                )
        })        

        return(
            <div className='display2' >
                <div className='display'>
                {scalenames}
                </div>
            </div>
        )
    }
}


export default Scalecard