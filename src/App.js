import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Grid, ThemeProvider,  } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { AboutPage, HomePage,} from './pages';
import { Text,} from './components/Text'
import './assets/styles.css';
import "@fontsource/vidaloka";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ['Vidaloka', 'serif',].join(','),
    }
  },
});

const fullpageOptions = {
  anchors: ['', 'about',],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['Home', 'About',],
  scrollOverflow: true,
  slidesNavigation: true,
  slidesNavPosition: 'bottom',
  showActiveTooltip: true,
  animateAnchor: false,
};

const App = fullpageProps => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <ReactFullpage
        {...fullpageProps}
        {...fullpageOptions}
        licenseKey='F550853E-F3C140E2-A178EE0E-0F8A4135'
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <div className="section">
                <Grid container direction="column" justifyContent="center" alignItems="center">
                  <Grid item>
                    <HomePage />
                  </Grid>
                </Grid>
              </div>
              <div className="section">
                <div className="slide" onClick={() => fullpageApi.moveTo('about', 1)} >
                  <Text text={"You can share information about yourself here."} />
                </div>
                <div className="slide" onClick={() => fullpageApi.moveTo('about', 0)}>
                  <AboutPage />
                </div>
              </div>
            </div>
          );
        }}
      />
      </ThemeProvider>
    </div>
  );
}

export default App;
