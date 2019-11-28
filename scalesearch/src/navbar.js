import React from 'react';
import './nav.css'
class NavBar extends React.Component {

    render(){
        return(
            <div>
                <div>
                    <nav>
                        <div id='logo'>
                        <a href="/"><img className='' src={require("./logo.png")} alt="" /></a>
                        </div>
                        <div className='menubtn'>
                        <div className='list-container'>
                        <ul>
                            <a href="/"><li> Home</li></a>
                            <a href="/scales"><li>Scales</li></a>
                            <a href="http://localhost:8888/"><li>Songs</li></a>
                            <a href="/tool"><li>Tool</li></a>
                        </ul>
                        </div>
                        </div>
                    </nav>
                </div>


            </div>
        )
    }
}
export default NavBar