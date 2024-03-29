import * as React from 'react';
import ReactDOM from 'react-dom';
// import {applyMiddleware, createStore} from "redux";
// import {Provider} from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
// import ReduxPromise from "redux-promise";
import './index.css';
import App from './components/App.jsx';
import { Provider } from "react-redux";
// import { rootReducer } from './reducers/root.reducer';
import Homepage from './components/navigations/Homepage.jsx';
import People from './components/navigations/People.jsx';
import Genealogy from './components/navigations/Genealogy.jsx';
import Chronicle from './components/navigations/Chronicle.jsx';
import Ethnicity from './components/navigations/Ethnicity.jsx';
import ProperNoun from './components/navigations/ProperNoun.jsx';
import Astrogeophy from './components/navigations/Astrogeophy.jsx';
import Story from './components/navigations/Story.jsx';
import Entry from './components/navigations/Entry.jsx';
import Categories from './components/navigations/Categories.jsx';
import store from './redux/store.jsx';
import Sequence from './components/navigations/Sequence';

/* Use Middleware */
// const createStoreWithMiddle = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddle(rootReducer)}>
  <HashRouter>
    <Provider store={store}>

      <App>
        <Routes>
          {/* 编年史 */}
          <Route path="/chronicle" element={<Chronicle />} />
          {/* 家族谱系 */}
          <Route path="/genealogy" element={<Genealogy />} />
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
          {/* 组金游戏 */}
          <Route path="/sequence" element={<Sequence />} />
          {/* 分类 */}
          <Route path="/categories/:id" element={<Categories />} />
          {/* 词条 */}
          <Route path="/entry/:id" element={<Entry />} />
          {/* 主页 */}
          <Route path="/*" element={<Homepage />} />
        </Routes>
      </App>
    </Provider>
  </HashRouter>
  // </Provider>
  ,
  document.getElementById('root')
);
