import React from 'react';
import './App.css';

function App() {
  return (
    <div id="cspio-content">
        {/* <img id="cspio-logo" alt="logo" src="" /> */}
        <h1 id="cspio-headline">Site under construction.</h1>			    				
        <div id="cspio-description">Get ready! Something really cool is coming!</div>
        <form id="cspio-form" action="#" method="#">
          <div id="cspio-field-wrapper">
            <div className="row">
              <div className="col-md-12 seperate">
                <div className="input-group">
                  <input id="cspio-email" name="email" className="form-control input-lg form-el" type="email" placeholder="Email" required/>
                    <span className="input-group-btn">
                      <button id="cspio-subscribe-btn" type="submit" className="btn btn-lg btn-primary form-el noglow">Notify Me</button>
                      </span>
                </div>
              </div>
            </div>
          </div>
        </form>
        <span id="cspio-privacy-policy-txt">We promise to never spam you.</span>						    			    			    				
        <div id="cspio-socialprofiles">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square fa-2x"></i></a>			
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square fa-2x"></i></a>		
        </div>
        <div id="cspio-credit">
          <div id="cspio-credit-content">
            <a href="https://github.com/vonmicky" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-1x"></i>vonmicky</a>	
          </div>
        </div>
    </div>
  );
}

export default App;
