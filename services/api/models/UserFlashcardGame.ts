/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlashcardSet } from './FlashcardSet';
import type { User } from './User';
export type UserFlashcardGame = {
    id?: number;
    userId?: number;
    setId?: number;
    totalWord?: number;
    durationTime?: number;
    createdAt?: string;
    user?: User;
    flashcardSet?: FlashcardSet;
};

