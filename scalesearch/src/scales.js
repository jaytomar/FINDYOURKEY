import React from 'react';
import './style.css';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css'; 
import Chordcomponent from './chordcomponent'
import './Interface'
import SearchResults from './searchresults'
var Tonal = require('tonal');
var tinycolor = require("tinycolor2");


class Scales extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
    }

    componentDidMount () {
    }


    render(){
        return(
            <div className='' >
            <SearchResults/>
            </div>
        )
    }
}


export default Scales