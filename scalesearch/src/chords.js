import React, {Component} from 'react'
import * as Chord from 'tonal-chord'
import Chordbox from './chordbox'
var keylist='C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B';
var keyarray = keylist.split(' ');
var data=[]
class Chords extends Component {
    constructor(props){
        super(props)

    }
    state = {
        chordData : []
    }

    componentDidMount(){
        this.chordsearch();
    }
    chordsearch=()=>{
        keyarray.map((item, index)=>{
            for (let i = 0; i < Chord.names().length; i++) {
                data.push(item+Chord.names()[i])
                this.setState({
                    chordData : data
                })         
            }
        })
    }
    
    
    
    render(){
        console.log(this.state);
        var chordboxes = this.state.chordData.map((item,index)=>{
            return(
                <Chordbox data={item} key={index}/>
            )
        })
        return(
            <div className='display'>
                {chordboxes}
            </div>
        )
    }
}

export default Chords