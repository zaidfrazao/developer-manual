// @flow
/*eslint linebreak-style: ["error", "windows"]*/

import React from 'react';
import ReactDOM from 'react-dom';

import Core from './scenes/Core';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  lightBlue500,
  lightBlue700,
  orange500
} from 'material-ui/styles/colors';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Customise theme to Sportomatic colors
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue500,
    primary2Color: lightBlue700,
    accent1Color: orange500
  }
});

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Core />
      </MuiThemeProvider>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Main />, app);
