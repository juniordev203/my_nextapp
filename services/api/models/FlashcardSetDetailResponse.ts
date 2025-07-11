/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlashcardResponse } from './FlashcardResponse';
export type FlashcardSetDetailResponse = {
    id?: number;
    setName?: string | null;
    description?: string | null;
    isPublic?: boolean;
    flashcardFolderId?: number;
    userId?: number;
    createdAt?: string;
    totalCards?: number;
    flashcards?: Array<FlashcardResponse> | null;
};

