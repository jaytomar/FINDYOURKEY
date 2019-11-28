import React from 'react';
import './chordstyle.css';
import '../node_modules/aos/dist/aos.css'; 
import * as Key from "tonal-key";
import { chord } from 'tonal-dictionary';
var tonal =require('tonal')
var tinycolor = require("tinycolor2");
var harmonicTriads = [];
var harmonicSevenths=[];
var melodicTriads = [];
var melodicSevenths = [];
var harmonicTriadSeq=['m','dim','aug','m','','','dim'];
var harmonicSeventhSeq=['maj7','min7b5','maj7#5','min7','dom7','maj7','dim7']
var melodicTriadSeq= ['m','m','aug','','','dim','dim'];
var melodicSeventhSeq=['maj7','min7','maj7#5','dom7','dom7','min7b5','min7b5']
class Chordcomponent extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
    }

    componentDidMount () {
    }
    
    
    render(){
        
        var error;
        if (this.props.query.includes('harmonic')) {   
            tonal.Scale.notes(this.props.query).map((item,index)=>{
                harmonicTriads.push(item+harmonicTriadSeq[index]);
                harmonicSevenths.push(item+harmonicSeventhSeq[index])
            })
            var triads= harmonicTriads.map((item,index)=>{
                return(
                    <h4 key={index}>{item}</h4>
                )
            })
            var sevenths= harmonicSevenths.map((item,index)=>{
                return(
                    <h4 key={index}>{item}</h4>
                )
            })        
        }
        else if(this.props.query.includes('melodic')){
            tonal.Scale.notes(this.props.query).map((item,index)=>{
                melodicTriads.push(item+melodicTriadSeq[index]);
                melodicSevenths.push(item+melodicSeventhSeq[index])
            })
            var triads= melodicTriads.map((item,index)=>{
                return(
                    <h4 key={index}>{item}</h4>
                )
            })
            var sevenths= melodicSevenths.map((item,index)=>{
                return(
                    <h4 key={index}>{item}</h4>
                )
            })
        }
        else{
            var triads= Key.triads(this.props.query).map((item,index)=>{
                return(
                    <h4 key={index}>{item}</h4>
                )
            })
            var sevenths= Key.chords(this.props.query).map((item,index)=>{
                return(
                    <h4 key={index}>{item}</h4>
                )
            })
        }
        
        if (triads.length==0) {
            return(
                <div className='chord-component' >
                <p>sorry, the harmonic and melodic scales aren't supported yet :)</p>
                </div>
            )
        }
        return(
            <div>
                <div className='title'>
                <h1>{this.props.query.toLowerCase()}</h1>
                </div>
                <div className='notes'>
                    <p>{tonal.Scale.notes(this.props.query).join(' - ')}</p>
                </div>
                <div className='chord-component' >
                    <h2>triads</h2>
                    <div className='chords-container'>
                        {triads}
                    </div>
                </div>
                    <div className='chord-component' >
                        <h2>Sevenths</h2>
                        <div className='chords-container'>
                        {sevenths}
                        </div>
                </div>
            </div>
        )
    }
}


export default Chordcomponent