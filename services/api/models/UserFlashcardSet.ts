/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlashcardSet } from './FlashcardSet';
import type { User } from './User';
export type UserFlashcardSet = {
    id?: number;
    userId?: number;
    setId?: number;
    totalCards?: number;
    knownCards?: number;
    isCompleted?: boolean;
    lastReviewedAt?: string;
    user?: User;
    set?: FlashcardSet;
};

