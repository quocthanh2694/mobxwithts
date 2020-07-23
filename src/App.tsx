import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodoList from "./screens/todo/todoList";
// import I18n from "./i18n/I18n";
// import AppStore from './AppStore';
import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// i18next.use(LanguageDetector).init(i18nextOptions);

// let language = 'vi-VN';
// const LanguageContext = React.createContext(I18n.t);

const App = () => {
  // console.log(props)
  // const appStore = useContext(AppStore);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // const [lng, setLng] = useState(language);
  // appStore.lang = lng;
  // console.log("App -> lng", lng)
  // console.log("App -> language", language)


  return (
    // <LanguageContext.Provider value={appStore.lang as any}>
    <div className="container">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home  {t('title')}</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <button onClick={() => changeLanguage('vi')}>vi</button>
          <button onClick={() => changeLanguage('en')}>en</button>
          {/* <button onClick={() => setLng('vi-VN')}>
              {I18n.t[language]['vietnam']}
            </button>
            <button onClick={() => setLng('en-US')}>
              {I18n.t[language]['english']}
            </button> */}

          <Switch>
            <Route path="/about">
              about
            </Route>
            <Route path="/users">
              user
            </Route>
            <Route path="/">
              home
            </Route>
          </Switch>
        </div>
      </Router>

      <h1>helo  </h1>
      <i className="fa fa-home"></i>
      <TodoList />
    </div>
    // </LanguageContext.Provider>
  );
};

export default App;
