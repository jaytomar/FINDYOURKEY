import React from 'react';
import './style.css';
import Scalecard from './scalecard'
import {transpose} from 'tonal'
import SearchResults from './searchresults'
var Tonal = require('tonal');
var tinycolor = require("tinycolor2");



var color;
var input = [];
var truth;
var count=0;
var sharparray = [];

var keylist='C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B';
var keyarray = keylist.split(' ');

var resultnames = [];
var resultnotes = [];



var input;


class Interface extends React.Component {
    state = {
        majornamelist:['major',
            'minor',
            'harmonic minor',
            'melodic minor',
            // 'ionian',
            // 'dorian',
            // 'phrygian',
            // 'lydian',
            // 'mixolydian',
            // 'aeolian',
            // 'locrian',
            // 'blues',
            // 'major pentatonic',
            // 'minor pentatonic'
          ],
        input : [],
        scalenotes : [],
        scalenames : []
    }

    componentDidMount () {
        this.scalesearch();
    }

    checkkey(keyarray, input) {
        for (var i = 0; i < this.state.majornamelist.length; i++) {
              for (var j = 0; j < input.length; j++) {
               if (Tonal.Scale.notes(keyarray + ' ' + this.state.majornamelist[i]).includes(input[j])){                      
                    truth= true;                 
                }        
                else {
                  truth = false;
                  break;
                }
              }
    
              
          if (truth!=false) {
            count++;
            var x = keyarray + ' ' + this.state.majornamelist[i];
            if (!resultnames.includes(x)) {
                resultnames.push(x);
            }
            var z = Tonal.Scale.notes(keyarray + ' ' + this.state.majornamelist[i]);
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


    loadkey =  ((key) => {
        var inputarray = this.state.input;            
        if(!inputarray.includes(key)){
                inputarray.push(key);
                this.setState({
                    input : inputarray
                    
                })
                this.scalesearch();
            }
      }
    )  
    
    delarr(){
        if(this.state.input.length!=0){            
            var deleted = this.state.input
            deleted.pop();
            this.setState({
                input: deleted
            })
            this.scalesearch();
        }
        else if(this.state.input.length==0){
            this.setState({
                input: []
            })
            this.scalesearch();
        }
    }

    resetall(){
        if(this.state.input.length!=0){
            this.setState({
                input: []
            },()=>{
                this.scalesearch();
            })
        }


    }

      
    render(){
        const items = this.state.scalenotes.map((item)=>{
            return 
        })
        return(
            <div>
                <div className="main">
                <div className='headline'>
                <h2>Select the notes to find its <span>scale</span></h2>
                </div>
                <div className='interface-container'>
                <div className="btwrap">
                    <div>
                    <div className="sharps round">
                        <div className="agroup">
                        <button  id="Csinput" onClick={ ()=> {this.loadkey('C#')}}>C#</button>
                        <button  id="Dsinput" onClick={ ()=> {this.loadkey('D#')}}>D#</button>
                        </div>
                        <div className="bgroup">
                        <button  id="Fsinput" onClick={ ()=> {this.loadkey('F#')}}>F#</button>
                        <button  id="Gsinput" onClick={ ()=> {this.loadkey('G#')}}>G#</button>
                        <button  id="Asinput" onClick={ ()=> {this.loadkey('A#')}}>A#</button>
                        </div>
                    </div>
                        <div className="naturals round">
                            <button  id="Cinput" onClick={ ()=> {this.loadkey('C')}}>C</button>
                            <button  id="Dinput" onClick={ ()=> {this.loadkey('D')}}>D</button>
                            <button  id="Einput" onClick={ ()=> {this.loadkey('E')}}>E</button>
                            <button  id="Finput" onClick={ ()=> {this.loadkey('F')}}>F</button>
                            <button  id="Ginput" onClick={ ()=> {this.loadkey('G')}}>G</button>
                            <button  id="Ainput" onClick={ ()=> {this.loadkey('A')}}>A</button>
                            <button  id="Binput" onClick={ ()=> {this.loadkey('B')}}>B</button>
                        </div>
                    </div>
                    <div className="actions">
                        <button  id="del" onClick={()=>{this.delarr()}}>Delete</button>
                        <button  id="reset" onClick={()=>{this.resetall()}}>Reset</button>
                    </div>
                </div>
                    <p id="chosen" className="userinput"> {this.state.input.join(',')} </p>
                    <h2 id="errout" ></h2>
                    <section id="tabout" ></section>
                    <h3 className="resulthead">Possible Scales</h3>
                </div>
                
            <div className="display">
                <Scalecard notes={this.state.scalenotes} names={this.state.scalenames} />
            </div>
            
            </div>
            </div>
        )
    }
}


export default Interface
