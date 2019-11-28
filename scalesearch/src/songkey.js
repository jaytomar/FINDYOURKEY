import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './songkey.css'
const spotifyApi = new SpotifyWebApi();
var keylist='C C# D D# E F F# G G# A A# B';
var keyarray = keylist.split(' ');
var modearray=['Minor','Major']

class SongKey extends React.Component {
    constructor(props){
        super(props)
        const params = this.getHashParams();
        console.log(params);
        const token = params.access_token;
        if (token) {
            console.log(token);  
            spotifyApi.setAccessToken(token);
        }
        this.state = {
            trackData : {
                artists : []
            },
            loading : true,
            selectedTrack : {
                loading : true
            }
        }
    }

    componentDidMount(){
        this.getTrackInfo();
    }
    
    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
           e = r.exec(q);
        }
        return hashParams;    
    }

    getTrackInfo = ()=>{
        this.setState({
            loading : true
        })
        spotifyApi.getTrack(this.props.match.params.id)
        .then((res)=>{
            console.log(res);
            this.setState({
                trackData: res,
                loading : false
            },()=>
            this.GetTrackAnalysis(this.state.trackData.id, this.state.trackData.name, this.state.trackData.artists.join(', '))
            )
        })
    }


    GetTrackAnalysis(id , songname, artistnames){
        spotifyApi.getAudioFeaturesForTrack(id)
            .then((data)=> {
                console.log(data);
                this.setState({
                    trackScale : data,
                    selectedTrack : {
                        name : songname,
                        artist : artistnames,
                        loading: false
                    }
                })

            }, function(err) {
                console.error(err);
                window.location.reload();
            });
    }


    render(){
        console.log(this.props);
        console.log(this.state);
        var artistnames = [];
        this.state.trackData.artists.map((item,index)=>{
            artistnames.push(item.name)
        })
        return(
            <div className="App">
                <div className='song'>
                {
                    this.state.loading 
                    ?
                        (
                            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        )
                    :
                        (
                            <div >
                            <div className='img-box'>
                            <img src={this.state.trackData.album.images[1].url} alt=""/>

                            </div>
                                <div className='song-info'>
                                    <h1>{this.state.trackData.name}</h1>
                                    <p>{artistnames.join(', ')}</p>  
                                </div>                  
                            </div>
                        )
  
                }
                    {
                        this.state.selectedTrack.loading 
                        ?
                            (
                                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                            )
                        :
                            (
                                <div className='scale'>
                                    <div className='scale-render'>
                                    <h1>{keyarray[this.state.trackScale.key]+' '+modearray[this.state.trackScale.mode]}</h1>
                                    <p>key</p>
                                    </div>
                                    <div className='scale-render'>
                                    <h1>{Math.round(this.state.trackScale.tempo) + 'bpm'}</h1>
                                    <p>tempo</p>
                                    </div>
                                    <div className='scale-render'>
                                    <h1>{Math.round(this.state.trackScale.acousticness*100) + '%'}</h1>
                                    <p>acousticness</p>
                                    </div>
                                    <div className='scale-render'>
                                    <h1>{Math.round(this.state.trackScale.energy*100) + '%'}</h1>
                                    <p>energy</p>
                                    </div>
                                    <div className='scale-render'>
                                    <h1>{Math.round(this.state.trackScale.liveness*100) + '%'}</h1>
                                    <p>liveness</p>
                                    </div>
                                    <div className='scale-render'>
                                    <h1>{Math.round(this.state.trackScale.instrumentalness*100) + '%'}</h1>
                                    <p>instrumentalness</p>
                                    </div>
                                    <div className='scale-render'>
                                    <h1>{(this.state.trackScale.loudness) + 'db'}</h1>
                                    <p>loudness</p>
                                    </div>
                                </div>    
                            )
                    }
                </div>
          </div>
       
        )
    }
}


export default SongKey