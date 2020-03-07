export const FETCH_USER_STARTED = 'FETCH_USER_STARTED';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';
import GitHubProfilesApi from '../api/github-profiles';

export const getGitHubUserInfo = (username: string) => {
  return dispatch => {
    dispatch(getGitHubUserInfoStarted());
    GitHubProfilesApi.getUserInfo(username).then((res: any) => {
      if (res) {
        GitHubProfilesApi.getUserRepos(username).then((repos: any) => {
          if (repos) {
            const rp = Object.values(repos).slice(0,4);

            dispatch(getGitHubUserInfoSuccess(res, rp));
          } else {
            dispatch(getGitHubUserInfoSuccess(res, []));
          }
        });
      } else {
        dispatch(getGitHubUserInfoFail('User not found :('));
      }
    });
  };
};
// export const getGitHubUserInfo = (username: string) => {
//   return async dispatch => {
//     dispatch(getGitHubUserInfoStarted());
//     const res = await GitHubProfilesApi.getUserInfo(username);
//     if (res) {
//       const repos = await GitHubProfilesApi.getUserRepos(username);
//       if (repos) {
//         const rp = Object.values(repos).slice(0,4);
//         console.log("---------------->", rp);
//         const newFormatRepos = Promise.all(rp.map( (i: any) => {
//           if (i.fork === true) {
//             const repo = GitHubProfilesApi.getUserRepoDetails(
//               username,
//               i.name
//             );
//             i["parent"] = repo["[parent"];
//           }
//         }));
//         alert("");
//         console.log("---------------->", newFormatRepos);
//         dispatch(getGitHubUserInfoSuccess(res, newFormatRepos));
//       } else {
//         dispatch(getGitHubUserInfoSuccess(res, []));
//       }
//     } else {
//       dispatch(getGitHubUserInfoFail('User not found :('));
//     }
//   };
// };
const getGitHubUserInfoStarted = () => ({
  type: FETCH_USER_STARTED,
});
const getGitHubUserInfoSuccess = (userInfo, repos) => ({
  type: FETCH_USER_SUCCESS,
  payload: {
    userInfo,
    repos,
  },
});
const getGitHubUserInfoFail = error => ({
  type: FETCH_USER_SUCCESS,
  payload: {
    error,
  },
});
