import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mdl-layout mdl-js-layout">
          <header className="mdl-layout__header mdl-layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Bloc Jams</span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href='/'>Home</a>
                <a className="mdl-navigation__link" href='/library'>Library</a>
              </nav>
            </div>
          </header>
          <main className="mdl-layout__content">
            <div className="page-content">
              <Route exact path='/' component={Landing} />
              <Route path='/library' component={Library} />
              <Route path='/album/:slug' component={Album} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
