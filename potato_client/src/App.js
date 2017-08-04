import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ScrollableAnchor, { goToAnchor, removeHash } from 'react-scrollable-anchor'
import ReactMarkdown from 'react-markdown';
import logo from './logo.svg';
import './App.css';
import Austin from './components/Austin.js'
import Travel from './components/Travel.js'


const styles = {
  headerContainer: {
    backgroundColor: '#FEE4CD',
    border: '4px double #D22204',
    width: '95%',
    height: '20%',
    margin: '30px auto',
    textAlign: 'center',
    fontFamily: '"Cormorant SC", serif'
  }
};


class Header extends Component {
  render() {
    return (
      <div className="header">
        <div style={styles.headerContainer}>
          <h1>Madison & Matthew's Wedding Extravaganza</h1>
          <h4>April 28th, 2018 // Austin, TX</h4>
        </div>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="wrappette">
          <div className="box1">
            <h3>Event Details</h3>
            <div className="image" onClick={window.scrollTo(0, 650)}>
              <Link to="/details">
                <img src="static/img/pecan.jpg" />
              </Link>
            </div>
          </div>
          <div className="box2">
            <h3>Travel</h3>
            <div className="image">
              <Link to="/travel">
                <img src="static/img/roadmap.jpg"/>
              </Link>
            </div>
          </div>
          <div className="box3">
            <h3>Around Austin</h3>
            <div className="image" >
              <Link to="/austin">
                <img src="static/img/austin.jpg"/>
              </Link>
            </div>
          </div>
          <div className="box4">
            <Link to="/registry">Registry</Link>
          </div>
        </div>
      </div>
    )
  }
}

class Details extends Component {
  render() {
    return(
      <div className="subwrap">
        <h2>Event Details</h2>
        <h3>Location: Old Pecan Street Cafe</h3>
        <div className="textblock">
          <p>
            The Old Pecan Street Cafe is located in downtown Austin, on Trinity
            Street between 5th and 6th. Both the ceremony and the reception will
            take place in the courtyard room off the main dining area.
          </p>
          <p>Information to come on parking at the Old Pecan Street Cafe.</p>
        </div>
          <br />
          <h3>Ceremony: 6:30 p.m.</h3>
        <div className="textblock">
          <p>
            The ceremony will commence at 6:30 p.m., although guests are welcome
            to arrive as early as 6:00. The venue only seats 15 guests for the
            ceremony; eight of these seats will be reserved for parents and
            grandparents of the bride and groom. Remaining chairs are available
            on a first-come-first-serve basis. For the benefit of our many
            standing guests, the ceremony will not exceed ten minutes in length.
          </p>
        </div>
          <br />
          <h3>Reception</h3>
        <div className="textblock">
          <p>
            The reception will begin immediately following the ceremony and
            continue into the night until 11:00. There will be a seated dinner
            and a full bar.
          </p>
          <p>
            Information to come on the dinner menu and serving times.
          </p>
        </div>
          <br />
          <h3>Additional Information</h3>
        <div className="textblock">
          <p>
            Due to the large number of hotels very close to the venue, there will
            not be transportation provided after the reception.
          </p>
          <p>
            The venue for the ceremony and reception is semi-outdoors, so climate
            control will be limited. Temperatures on an evening in late April
            are usually in the mid-to-high eighties, dropping into the mid-to-high
            seventies as the night wears on. <br />
          </p>
          <p>
            <a href="https://www.wunderground.com/cgi-bin/findweather/getForecast?query=pws:KTXAUSTI646"
               target="_blank">
              Click here to see Austin's current weather conditions
            </a>
          </p>
          <p>Cocktail and festive attire welcome.</p>
        </div>
        <br />
      </div>
    )
  }
}

function Registry() {
  return(
    <div className="subwrap">
      <a href="https://www.amazon.com/wedding/madison-hicks-matthew-planchard-austin-april-2018/registry/21FIX1VLOPLNV">
        <h3>Click here to go to the registry</h3>
      </a>
      <p>The registry will continue to be updated as we get closer to the wedding.</p>
    </div>
  )
}


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(`state: ${this.state}`);
    return (
        <div id="content">
          <Route exact path="/registry" component={Registry} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/travel" component={Travel} />
          <Route exact path="/austin" component={Austin} />
        </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Main/>
          <Content/>
        </div>
      </Router>
    );
  }
}

export default App;
