/**
 * @license
 * Copyright Rismun. All Rights Reserved.
 *
 * Use of this source code is governed by a Rismun private license that can be
 * found in the LICENSE file at http://www.rismun.com/licenses/ris-license
 */

import HttpClient from "../util/http-client";

export const getUrl = (path: string): string => {
    return `${path}`;
};

export interface IResponse<T = object> {
    errors?: { code: number, description: string }[];
    isSuccess: boolean;
    data?: T;
}

export const getHttpClient = () => (new HttpClient({
    baseURL: "https://api.github.com/"
}));
