/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlashcardSet } from './FlashcardSet';
import type { User } from './User';
export type FlashcardFolder = {
    id?: number;
    folderName: string;
    userId?: number;
    user?: User;
    createdAt?: string;
    updatedNameAt?: string;
    flashcardSets?: Array<FlashcardSet> | null;
};

