import React, { useEffect, useState } from 'react';
import GitHubUserInfo from './components/GithubUserInfo/index';
import { SearchIcon, Preloader } from './components/icons';
import './a.sass';

type Theme = 'dark' | 'light';

const App = () => {
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
    setUsername(e.target.value)
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
          <input id="username" value={username} placeholder="@username" type="text" onChange={handleUsernameChange} />
          <i className={username.length > 0 ? "search-icon search-icon-active" : "search-icon search-icon-inactive"} >
            <SearchIcon class="search-preloader"/>
          </i>
        </div>
        <GitHubUserInfo theme={theme}/>
      </div>
    </div>
  );
};
export default App;
