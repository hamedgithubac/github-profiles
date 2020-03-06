import React, { FunctionComponent } from 'react';
import RepoItem from '../RepoItem/index';
import Loader from './Loader';
import src1 from '../../assets/o.png';
interface IGitHubUserInfoProps {
  theme: 'dark' | 'light';
}
const GitHubUserInfo: FunctionComponent<IGitHubUserInfoProps> = ({ theme }) => {
  return (
    <>
      <div className="result-container">
        <Loader theme={theme} />
      </div>
      <div className="result-container">
        <div className="left">
          <div className="top-avatar">
            <img src={src1} />
          </div>
          <div className="bottom-info">
            <div className="user-name">Mohammadreza Ziadzadeh</div>
            <div className="info-row">
              <span className="key">Company: </span>
              <span className="value">@raychat</span>
            </div>
            <div className="info-row">
              <span className="key">Location: </span>
              <span className="value">Amsterdam</span>
            </div>
            <div className="info-row">
              <span className="key">Website: </span>
              <span className="value link">mzed.ir</span>
            </div>
          </div>
        </div>
        <div className="right">
          <RepoItem />
          <RepoItem />
          <RepoItem />
        </div>
      </div>
    </>
  );
};
export default GitHubUserInfo;
