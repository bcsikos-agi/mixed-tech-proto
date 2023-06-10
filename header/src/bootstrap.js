import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import { createMemoryHistory, createBrowserHistory } from 'history'

const mount = (el,
    {
        onNavigate,
        defaultHistory,
        initialPath
    }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    })
    if (onNavigate) {
        history.listen(onNavigate)
    }
    ReactDOM.render(
        <React.StrictMode>
            <Router navigator={history} location={history.location}>
                <App />
            </Router>
        </React.StrictMode>, el);
    return {
        // MF API upstream
        onParentNavigate({ pathname: nextPathname }) {
            console.log(`onParentNavHeader: ${nextPathname}`)
            const { pathname } = history.location
            if (pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
};

// if (process.env.NODE_ENV === "development") {
//     const rootNode = document.querySelector("#root");
//     if (rootNode) {
//         mount(rootNode, { defaultHistory: createBrowserHistory() });
//     }
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { mount };