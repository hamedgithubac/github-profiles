import React, { FunctionComponent, useEffect } from 'react';
import RepoItem from '../RepoItem/index';
import Loader from './Loader';
import src1 from '../../assets/o.png';
import { connect } from 'react-redux';
interface IGitHubUserInfoProps {
  theme: 'dark' | 'light';
  state: any;
}
const GitHubUserInfo: FunctionComponent<IGitHubUserInfoProps> = ({
  theme,
  state,
}) => {

  return (
    <>
      {state && state.loading && (
        <div className="result-container">
          <Loader theme={theme} />
        </div>
      )}
      {state && !state.loading && state.userInfo.login && (
        <div className="result-container">
          <div className="left">
            <div className="top-avatar">
              <img
                src={state.userInfo.avatar_url}
                className="avatar"
                width="240"
                height="240"
              />
            </div>
            <div className="bottom-info">
              <div className="user-name">{state.userInfo.name}</div>
              <div className="info-row">
                <span className="key">Company: </span>
                <span className="value">{state.userInfo.company}</span>
              </div>
              <div className="info-row">
                <span className="key">Location: </span>
                <span className="value">{state.userInfo.location}</span>
              </div>
              <div className="info-row">
                <span className="key">Website: </span>
                <a
                  target="blank"
                  href={state.userInfo.blog}
                  className="value link"
                >
                  {state.userInfo.blog}
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            {state &&
              state.repos &&
              state.repos.map((item: any, index: number) => {
                return <RepoItem key={index} item={item}/>
              })}
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = state => {
  return {
    state,
  };
};
export default connect(mapStateToProps)(GitHubUserInfo);
