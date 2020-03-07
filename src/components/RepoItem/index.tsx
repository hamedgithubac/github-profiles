import React, { FunctionComponent, useEffect } from 'react';
import { StarIcon, CodeIcon, CopyIcon } from '../icons';
interface IRepoItemProps {
  item: any;
}

const RepoItem: FunctionComponent<IRepoItemProps> = ({ item }) => {
  useEffect(() => {
    console.log(item);
  }, []);
  return (
    <div className="repo-item">
      <div className="repo-texts">
        <div className="repo-titles">
          <a href={item.html_url} target="blank" className="repo-title">
            {item.name}
          </a>
          {item.fork && item.parent && item.parent.owner &&(
            <div className="repo-fork-from-wrapper">
              <span className="repo-fork-from-label">Forked from </span>
              <a href={item.parent.owner.html_url} target="blank" className="repo-fork-from-user link">{item.parent.owner.login}</a>
            </div>
          )}
        </div>
        <div className="repo-desc">{item.description}</div>
      </div>
      <div className="repo-info">
        <i className="icon">
          <CodeIcon className="code-icon" />
        </i>
        <span className="repo-badges">{item.language}</span>
        <i className="icon">
          <StarIcon class="star-icon" />
        </i>
        <span className="repo-badges">{item.stargazers_count}</span>
        <i className="icon">
          <CopyIcon class="copy-icon" />
        </i>
        <span className="repo-badges">{item.forks_count}</span>
      </div>
    </div>
  );
};
export default RepoItem;
