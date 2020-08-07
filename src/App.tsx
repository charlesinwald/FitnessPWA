import React from 'react';
import './App.css';
import {MemoryRouter, Route} from 'react-router-dom';
import {Home} from "./components/pages/Home";
import {Workout} from "./components/pages/Workout";
import {Settings} from './components/pages/Settings';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import lightTheme from "./assets/lightTheme";
import darkTheme from './assets/darkTheme.js';
import {BottomBar} from "./components/ui/Navbar";

// @ts-ignore
const light = createMuiTheme(lightTheme);
// @ts-ignore
const dark = createMuiTheme(darkTheme);

class App extends React.Component {
    constructor() {
        // @ts-ignore
        super();
        this.state = {isThemeLight: false}
    }

    toggleDarkMode = () => {
        // @ts-ignore
        this.setState({isThemeLight : !this.state.isThemeLight});
    };


    render() {
        // @ts-ignore
        const {isThemeLight}: boolean = this.state;
        return (
            <MuiThemeProvider theme={isThemeLight ? light : dark}>
            <div className="App">
                <MemoryRouter>
                    <Route exact path='/' render={(props) => <Home />}/>
                    <Route exact path='/workout'
                           render={(props) => <Workout />}/>
                    <Route exact path='/settings'
                           render={(props) => <Settings {...props} toggleDark={this.toggleDarkMode} isLight={isThemeLight}/>} />
                    <BottomBar theme={isThemeLight ? light : dark}/>
                </MemoryRouter>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
