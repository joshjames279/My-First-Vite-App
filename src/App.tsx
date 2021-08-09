import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import { theme } from "./otherTheme";
import { QueryClient, QueryClientProvider } from "react-query";

import { Home } from "./components/home/Home";
import { FormikAttempt } from "./components/formikAttempt/FormikAttempt";
import { Hook } from "./components/hookAttempt/HookAttempt";
import { Weather } from "./components/weather/Weather";
import Weather3 from "./components/weather3/weather3";

const queryClient = new QueryClient();

export default function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/formik">Formik</Link>
                </li>
                <li>
                  <Link to="/hook">Hook</Link>
                </li>
                <li>
                  <Link to="/weather">Weather</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/formik">
                <FormikAttempt />
              </Route>
              <Route path="/hook">
                <Hook />
              </Route>
              <Route path="/weather">
                <Weather3 />
              </Route>
              <Route path="/">
                <Home />
                <Weather />
              </Route>
            </Switch>
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
}
