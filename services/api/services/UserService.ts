/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserResponse } from '../models/UserResponse';
import type { UserUpdateRequest } from '../models/UserUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * @param accountId
     * @returns UserResponse OK
     * @throws ApiError
     */
    public static getApiUserInfoUser(
        accountId?: number,
    ): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/info-user',
            query: {
                'accountId': accountId,
            },
        });
    }
    /**
     * @param userId
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiUserUserUpdate(
        userId: number,
        requestBody?: UserUpdateRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/User/user/update/{userId}',
            path: {
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
