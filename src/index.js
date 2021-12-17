import * as React from 'react';
import ReactDOM from 'react-dom';
// import {applyMiddleware, createStore} from "redux";
// import {Provider} from "react-redux";
import {HashRouter, Routes, Route} from "react-router-dom";
// import ReduxPromise from "redux-promise";
import './index.css';
import App from './components/App';
// import { rootReducer } from './reducers/root.reducer';
import Homepage from './components/Homepage';
import People from './components/People';
import Chronicle from './components/Chronicle';
import Ethnicity from './components/Ethnicity';
import ProperNoun from './components/ProperNoun';
import Astrogeophy from './components/Astrogeophy';
import Story from './components/Story';
import Entry from './components/Entry';
import reportWebVitals from './reportWebVitals';

/* Use Middleware */
// const createStoreWithMiddle = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddle(rootReducer)}>
    <HashRouter>
      <App>
        <Routes>
          {/* 编年史 */}
          <Route path="/chronicle" element={<Chronicle />} />
          {/* 人物介绍 */}
          <Route path="/people" element={<People />} />
          {/* 民族演变 */}
          <Route path="/ethnicity" element={<Ethnicity />} />
          {/* 专有名词 */}
          <Route path="/propernoun" element={<ProperNoun />} />
          {/* 天文地理 */}
          <Route path="/astrogeophy" element={<Astrogeophy />} />
          {/* 小说正文 */}
          <Route path="/story" element={<Story />} />
          {/* 词条页面 */}
          <Route path="/entry" element={<Entry />} />
          {/* 主页 */}
          <Route path="/*" element={<Homepage />} />
        </Routes>
      </App>
    </HashRouter>
  // </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
