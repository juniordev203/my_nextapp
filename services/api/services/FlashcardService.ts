/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlashcardFavoritesResponse } from '../models/FlashcardFavoritesResponse';
import type { FlashcardFolderRequest } from '../models/FlashcardFolderRequest';
import type { FlashcardFolderResponse } from '../models/FlashcardFolderResponse';
import type { FlashcardGameResultBySetResponse } from '../models/FlashcardGameResultBySetResponse';
import type { FlashcardGameResultByUserResponse } from '../models/FlashcardGameResultByUserResponse';
import type { FlashcardGameResultRequest } from '../models/FlashcardGameResultRequest';
import type { FlashcardRequest } from '../models/FlashcardRequest';
import type { FlashcardSetDetailResponse } from '../models/FlashcardSetDetailResponse';
import type { FlashcardSetRequest } from '../models/FlashcardSetRequest';
import type { FlashcardSetResponse } from '../models/FlashcardSetResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FlashcardService {
    /**
     * @param userId
     * @returns FlashcardFolderResponse OK
     * @throws ApiError
     */
    public static getApiFlashcardFlashcardFolders(
        userId: number,
    ): CancelablePromise<FlashcardFolderResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Flashcard/flashcard-folders/{userId}',
            path: {
                'userId': userId,
            },
        });
    }
    /**
     * @param folderId
     * @returns FlashcardSetResponse OK
     * @throws ApiError
     */
    public static getApiFlashcardFlashcardSetsFolder(
        folderId: number,
    ): CancelablePromise<FlashcardSetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Flashcard/flashcard-sets/folder/{folderId}',
            path: {
                'folderId': folderId,
            },
        });
    }
    /**
     * @param userId
     * @returns FlashcardSetResponse OK
     * @throws ApiError
     */
    public static getApiFlashcardFlashcardSetsUser(
        userId: number,
    ): CancelablePromise<FlashcardSetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Flashcard/flashcard-sets/user/{userId}',
            path: {
                'userId': userId,
            },
        });
    }
    /**
     * @param setId
     * @param id
     * @returns FlashcardSetDetailResponse OK
     * @throws ApiError
     */
    public static getApiFlashcardFlashcardSetDetails(
        setId: string,
        id?: number,
    ): CancelablePromise<FlashcardSetDetailResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Flashcard/flashcard-set/details/{setId}',
            path: {
                'setId': setId,
            },
            query: {
                'id': id,
            },
        });
    }
    /**
     * @param setId
     * @returns FlashcardFavoritesResponse OK
     * @throws ApiError
     */
    public static getApiFlashcardFlashcardSet(
        setId: number,
    ): CancelablePromise<FlashcardFavoritesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Flashcard/flashcard/set/{setId}',
            path: {
                'setId': setId,
            },
        });
    }
    /**
     * @param userId
     * @returns FlashcardFavoritesResponse OK
     * @throws ApiError
     */
    public static getApiFlashcardFlashcardFavorites(
        userId: number,
    ): CancelablePromise<FlashcardFavoritesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Flashcard/flashcard/favorites/{userId}',
            path: {
                'userId': userId,
            },
        });
    }
    /**
     * @param userId
     * @returns FlashcardGameResultByUserResponse OK
     * @throws ApiError
     */
    public static getApiFlashcardFlashcardGameResultUser(
        userId: number,
    ): CancelablePromise<FlashcardGameResultByUserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Flashcard/flashcard/game-result/user/{userId}',
            path: {
                'userId': userId,
            },
        });
    }
    /**
     * @param setId
     * @returns FlashcardGameResultBySetResponse OK
     * @throws ApiError
     */
    public static getApiFlashcardFlashcardGameResultSet(
        setId: number,
    ): CancelablePromise<FlashcardGameResultBySetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Flashcard/flashcard/game-result/set/{setId}',
            path: {
                'setId': setId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiFlashcardFlashcardFolder(
        requestBody?: FlashcardFolderRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Flashcard/flashcard-folder',
            body: requestBody,
            mediaType: 'application/json',
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
    public static postApiFlashcardFlashcardSet(
        requestBody?: FlashcardSetRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Flashcard/flashcard-set',
            body: requestBody,
            mediaType: 'application/json',
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
    public static postApiFlashcardFlashcard(
        requestBody?: FlashcardRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Flashcard/flashcard',
            body: requestBody,
            mediaType: 'application/json',
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
    public static postApiFlashcardFlashcardGameResult(
        requestBody?: FlashcardGameResultRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Flashcard/flashcard/game/result',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static putApiFlashcardFlashcardFavorite(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Flashcard/flashcard/{id}/favorite',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param name
     * @returns any OK
     * @throws ApiError
     */
    public static putApiFlashcardFlashcardFolderName(
        id: number,
        name?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Flashcard/flashcard/folder-name/{id}',
            path: {
                'id': id,
            },
            query: {
                'name': name,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param id
     * @param name
     * @returns any OK
     * @throws ApiError
     */
    public static putApiFlashcardFlashcardSetName(
        id: number,
        name?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Flashcard/flashcard/set-name/{id}',
            path: {
                'id': id,
            },
            query: {
                'name': name,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiFlashcardFlashcardFolderDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Flashcard/flashcard-folder-delete/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiFlashcardFlashcardSetDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Flashcard/flashcard-set-delete/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiFlashcardFlashcardDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Flashcard/flashcard-delete/{id}',
            path: {
                'id': id,
            },
        });
    }
}
