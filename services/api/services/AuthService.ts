/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthLoginRequest } from '../models/AuthLoginRequest';
import type { AuthLoginResponse } from '../models/AuthLoginResponse';
import type { AuthRefreshTokenRequest } from '../models/AuthRefreshTokenRequest';
import type { AuthRegisterRequest } from '../models/AuthRegisterRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiAuthRegister(
        requestBody?: AuthRegisterRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns AuthLoginResponse OK
     * @throws ApiError
     */
    public static postApiAuthLogin(
        requestBody?: AuthLoginRequest,
    ): CancelablePromise<AuthLoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns AuthLoginResponse OK
     * @throws ApiError
     */
    public static postApiAuthRefreshToken(
        requestBody?: AuthRefreshTokenRequest,
    ): CancelablePromise<AuthLoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Auth/refresh-token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
