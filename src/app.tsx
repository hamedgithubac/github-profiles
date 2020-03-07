import React, { useEffect, useState, FunctionComponent } from 'react';
import GitHubUserInfo from './components/GithubUserInfo/index';
import { SearchIcon, Preloader } from './components/icons';
import { connect } from 'react-redux';
import { getGitHubUserInfo } from './store/actions';
import './app.sass';

type Theme = 'dark' | 'light';
interface IAppProps {
  onSearchBtnClicked: (username: string) => void;
  state: {
    userInfo: any;
    error: string;
    loading: boolean;
  };
}
const App: FunctionComponent<IAppProps> = ({ onSearchBtnClicked, state }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [username, setUsername] = useState<string>('');
  useEffect(() => {
    function themeInitializer() {
      const theme = localStorage.getItem('theme') as Theme | undefined;
      if (theme === 'dark') {
        setTheme('dark');
        applyTheme('dark');
      }
    }
    themeInitializer();
  }, []);
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  const handleThemeChange = () => {
    document.documentElement.getAttribute('data-theme') === 'dark'
      ? setTheme('light')
      : setTheme('dark');
  };
  const applyTheme = (theme: Theme) => {
    trans();
    document.documentElement.setAttribute('data-theme', theme);
  };
  const trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
      document.documentElement.classList.remove('transition');
    }, 1000);
  };
  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };
  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      onSearchBtnClicked(username);
    }
  };
  return (
    <div className="container">
      <div className="header">
        <h2>GitHub Profiles</h2>
        <i
          onClick={handleThemeChange}
          className="toggle-icon theme-toggle-icon"
        ></i>
      </div>

      <div className="content">
        <h4>Enter a GitHub username, to see the magic.</h4>
        <div className="search-wrapper">
          <label htmlFor="username">GitHub username</label>
          <input
            id="username"
            value={username}
            placeholder="@username"
            type="text"
            onChange={handleUsernameChange}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={() => onSearchBtnClicked(username)}
            disabled={username.length === 0}
            className={
              username.length > 0
                ? 'search-icon search-icon-active'
                : 'search-icon search-icon-inactive'
            }
          >
            {state && !state.loading && <SearchIcon class="search-preloader" />}
            {state && state.loading &&<Preloader class="preloader"/>}
          </button>
        </div>
        {state && state.error && (
          <div className="helper-text">{state.error}</div>
        )}
        <GitHubUserInfo theme={theme} />
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    onSearchBtnClicked: (username: string) => {
      dispatch(getGitHubUserInfo(username));
    },
  };
};
const mapStateToProps = state => {
  return {
    state,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
