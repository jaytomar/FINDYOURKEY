import React from 'react';
import Scalecard from './scalecard'
import './style.css'
var Tonal = require('tonal');

var color;
var input = [];
var truth;
var count=0;
var sharparray = [];
var majornamelist = ['major',
            'minor',
            'harmonic minor',
            'melodic minor',
            'ionian',
            'dorian',
            'phrygian',
            'lydian',
            'mixolydian',
            'aeolian',
            'locrian',
            // 'blues',
            // 'major pentatonic',
            // 'minor pentatonic'
          ];
var arr = majornamelist;
var keylist='C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B';
var keyarray = keylist.split(' ');

var resultnames = [];
var resultnotes = [];



var input;

class SearchResults extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        input:['C#'],
        scalenotes : [],
        scalenames : []
    }

    componentDidMount(){
        this.scalesearch();
    }
    
    checkkey(keyarray, input) {
        for (var i = 0; i < arr.length; i++) {
              for (var j = 0; j < input.length; j++) {
               if (Tonal.Scale.notes(keyarray + ' ' + arr[i]).includes(input[j])){                      
                    truth= true;                 
                }        
                else {
                  truth = false;
                  break;
                }
              }
    
              
          if (truth!=false) {
            count++;
            var x = keyarray + ' ' + arr[i];
            if (!resultnames.includes(x)) {
                resultnames.push(x);
            }
            var z = Tonal.Scale.notes(keyarray + ' ' + arr[i]);
            if (!resultnotes.includes(z)) {
                resultnotes.push(z);   
            }
            this.setState({
                scalenames : resultnames,
                scalenotes : resultnotes
            })
          }
      
        else if(count==0) {
            this.setState({
                scalenames : [],
                scalenotes : []
            })
        }
      }
      /*-----------------------------------*/
    }
        
    sharps=()=>{
        sharparray=[];
        this.state.input.map((item)=>{
            switch (item) {
                case 'C#': sharparray.push('Db')
                            break;
                case 'D#': sharparray.push('Eb')
                            break;                
                case 'F#': sharparray.push('Gb')
                            break;
                case 'G#': sharparray.push('Ab')
                            break;
                case 'A#': sharparray.push('Bb')
                            break;                                                     
                default : sharparray.push(item)
                            break;
            }
            console.log(sharparray);
            
        })
                
    }
    
    scalesearch() {
        this.sharps();
        count=0;
        resultnotes=[];
        resultnames=[];
        for (var i = 0; i < keyarray.length; i++) {
            this.checkkey(keyarray[i], this.state.input);
            this.checkkey(keyarray[i], sharparray);
        }
    }



    render(){
        console.log(this.state);
        
        return(
            <div>
                
                <Scalecard notes={this.state.scalenotes} names={this.state.scalenames} />
            </div>


        )
    }
}

export default SearchResults

