import { IResponse, getHttpClient } from './client';

export default class DashboardApi {
  public static async getUserInfo(username: string): Promise<IResponse<any>> {
    const url = `users/${username}`;
    let ret;

    try {
      ret = await getHttpClient().get(url);
    } catch (e) {
      const resp = e && e.reponse && e.response.data;
      return resp;
    }

    return {
      ...(ret.data || { isSuccess: true }),
    };
  }
  public static async getUserRepos(username: string): Promise<IResponse<any>> {
    const url = `users/${username}/repos?sort=created`;
    let ret;

    try {
      ret = await getHttpClient().get(url);
    } catch (e) {
      const resp = e && e.reponse && e.response.data;
      return resp;
    }

    return {
      ...(ret.data || { isSuccess: true }),
    };
  }
  public static async getUserRepoDetails(username: string, repoName: string): Promise<IResponse<any>> {
    const url = `repos/${username}/${repoName}`;
    let ret;

    try {
      ret = await getHttpClient().get(url);
    } catch (e) {
      const resp = e && e.reponse && e.response.data;
      return resp;
    }

    return {
      ...(ret.data || { isSuccess: true }),
    };
  }
}
