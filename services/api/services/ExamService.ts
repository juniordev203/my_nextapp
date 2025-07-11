/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExamResponse } from '../models/ExamResponse';
import type { UserAnswerRequest } from '../models/UserAnswerRequest';
import type { UserExamBaseRequest } from '../models/UserExamBaseRequest';
import type { UserExamFavoriteResponse } from '../models/UserExamFavoriteResponse';
import type { UserExamResultResponse } from '../models/UserExamResultResponse';
import type { UserExamScoreResponse } from '../models/UserExamScoreResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ExamService {
    /**
     * @returns ExamResponse OK
     * @throws ApiError
     */
    public static getApiExamExam(): CancelablePromise<Array<ExamResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Exam/exam',
        });
    }
    /**
     * @param examId
     * @returns ExamResponse OK
     * @throws ApiError
     */
    public static getApiExamExamDetail(
        examId: number,
    ): CancelablePromise<ExamResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Exam/exam-detail/{examId}',
            path: {
                'examId': examId,
            },
        });
    }
    /**
     * @param examId
     * @returns ExamResponse OK
     * @throws ApiError
     */
    public static getApiExamExamStart(
        examId: number,
    ): CancelablePromise<ExamResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Exam/exam-start/{examId}',
            path: {
                'examId': examId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param userExamId
     * @returns UserExamScoreResponse OK
     * @throws ApiError
     */
    public static getApiExamUserExamScore(
        userExamId: number,
    ): CancelablePromise<UserExamScoreResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Exam/user-exam/{userExamId}/score',
            path: {
                'userExamId': userExamId,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param userId
     * @returns UserExamFavoriteResponse OK
     * @throws ApiError
     */
    public static getApiExamUserExamFavorite(
        userId: number,
    ): CancelablePromise<UserExamFavoriteResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Exam/user-exam/{userId}/favorite',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param userId
     * @returns UserExamResultResponse OK
     * @throws ApiError
     */
    public static getApiExamUserExamResultExams(
        userId: number,
    ): CancelablePromise<UserExamResultResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Exam/user-exam/{userId}/result-exams',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiExamUserExamStart(
        requestBody?: UserExamBaseRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Exam/user-exam/start',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param userExamId
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiExamUserAnswer(
        userExamId: number,
        requestBody?: UserAnswerRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Exam/user-answer/{userExamId}',
            path: {
                'userExamId': userExamId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param userId
     * @param examId
     * @returns any OK
     * @throws ApiError
     */
    public static postApiExamUserExamFavorite(
        userId?: number,
        examId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Exam/user-exam/favorite',
            query: {
                'userId': userId,
                'examId': examId,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
