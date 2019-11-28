                  if(this.state.input[j]=='C#'){
                    if (Tonal.Scale.notes(keyarray + ' ' + arr[i]).includes(this.state.input[j],'Db')){                      
                        truth= true;
                    }
                else if(this.state.input[j]=='D#'){
                    if (Tonal.Scale.notes(keyarray + ' ' + arr[i]).includes(this.state.input[j],'Eb')){                      
                        truth= true;
                    }
                else if(this.state.input[j]=='F#'){
                    if (Tonal.Scale.notes(keyarray + ' ' + arr[i]).includes(this.state.input[j],'Gb')){                      
                        truth= true;
                    }
                else if(this.state.input[j]=='G#'){
                    if (Tonal.Scale.notes(keyarray + ' ' + arr[i]).includes(this.state.input[j],'Ab')){                      
                        truth= true;
                    }
                else if(this.state.input[j]=='A#'){
                    if (Tonal.Scale.notes(keyarray + ' ' + arr[i]).includes(this.state.input[j],'Bb')){                      
                        truth= true;
                    }



                                            <div className="agroup">
                        <button  id="Csinput" onClick={ ()=> {this.loadkey(['C#','Db'])}}>C#</button>
                        <button  id="Dsinput" onClick={ ()=> {this.loadkey(['D#','Eb'])}}>D#</button>
                        </div>
                        <div className="bgroup">
                        <button  id="Fsinput" onClick={ ()=> {this.loadkey(['F#','Gb'])}}>F#</button>
                        <button  id="Gsinput" onClick={ ()=> {this.loadkey(['G#','Ab'])}}>G#</button>
                        <button  id="Asinput" onClick={ ()=> {this.loadkey(['A#','Bb'])}}>A#</button>
                        </div>




                        C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B