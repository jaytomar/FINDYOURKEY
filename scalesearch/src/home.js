import React,{Component} from 'react'
import './mainpage.css'
import AOS from 'aos';

class Home extends Component{
    componentDidMount(){
        AOS.init();
    }
    render(){
        return(
                <div className='main-page'>
                    <div className='logo-img-container'>
                        <img className='' src={require("./akai-midi-controller-alternate.png")} alt="" height='400px'/>
                    </div>
                    <div>
                        <p>
                        Find musical scales based on the notes you want
                        </p>
                    </div>
                </div>

        )
    }
}
export default Home