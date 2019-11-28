import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './songkey.css'

const spotifyApi = new SpotifyWebApi();
class SongID extends React.Component {
    constructor(props){
        super(props)
        const params = this.getHashParams();
        const token = params.access_token;
        if (token) {
            console.log(token);
            spotifyApi.setAccessToken(token);
        }
        this.state = {
            loggedIn: token ? true : false,
            nowPlaying: { name: 'Not Checked', albumArt: '' },
            trackData : [],
            loading : true,
            selectedTrack : {
                name : ['God\'s Plan'],
                artist :['Drake'],
            },
            trackScale : {
                track:{
                    key:[7],
                    mode:[1]
                }
            }
        }
    }
    componentDidMount(){
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







    GetTracks=(e)=>{
        spotifyApi.searchTracks(e)
        .then((data)=> {
            console.log('tracks', data);
            this.setState({
                trackData : data.tracks.items
            })
        }, function(err) {
            console.error(err);
        });
    }  
    
    render(){
        console.log(this.props);

        var songs = this.state.trackData.map((item,index)=>{
            var artistnames=[]
            return(
                <div key={index} className='song-result'>
                    
                    <img src={item.album.images[2].url} alt=""/>
                    <div className='song-text'>
                        <div>
                            <h3>{item.name}</h3>
                            
                            {item.artists.map((item,index)=>{
                                artistnames.push(item.name)
                            })}
                            <p>{artistnames.join(', ')}</p>
                        </div>
                        <div className='get-scale'>
                            <a href={"/song/" + item.id + '/#access_token=' + this.getHashParams().access_token}> <h3>get scale</h3> </a>
                        </div>
                    </div>
                    <hr/>
                </div>
            )
        })
        return(
            <div className="songs-page">
                {
                !this.state.loggedIn &&
                <a href='http://localhost:8888' className='login'> Login to Spotify </a>
                }
            { 
            this.state.loggedIn &&
                <div>
                    <div>
                        <input type="text" placeholder='search for a song' onChange={(e)=>this.GetTracks(e.target.value)}/>
                    </div>
                <div >
                {songs}
                </div>
            </div>
            }
          </div>
       
        )
    }
}


export default SongID