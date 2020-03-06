import React, { FunctionComponent } from 'react';
import { StarIcon, CodeIcon, CopyIcon } from '../icons';
interface IRepoItemProps {}

const RepoItem: FunctionComponent<IRepoItemProps> = () => {
  return (
    <div className="repo-item">
      <div className="repo-texts">
        <div className="repo-titles">
          <a className="repo-title">PersianJSONPlaceholder</a>
          <div className="repo-fork-from-wrapper">
            <span className="repo-fork-from-label">Forked from </span>
            <a className="repo-fork-from-user link">{'@kiarash-z'}</a>
          </div>
        </div>
        <div className="repo-desc">Persian Fake REST API for Prototyping</div>
      </div>
      <div className="repo-info">
        <i className="icon">
          <CodeIcon className="code-icon" />
        </i>
        <span className="repo-badges">JavaScript</span>
        <i className="icon">
          <StarIcon class="star-icon" />
        </i>
        <span className="repo-badges">77</span>
        <i className="icon">
          <CopyIcon class="copy-icon" />
        </i>
        <span className="repo-badges">6</span>
      </div>
    </div>
  );
};
export default RepoItem;
