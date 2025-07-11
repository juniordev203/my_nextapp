/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlashcardSet } from './FlashcardSet';
import type { User } from './User';
export type Flashcard = {
    id?: number;
    termLanguage: string;
    definitionLanguage: string;
    imageUrl?: string | null;
    audioUrl?: string | null;
    isFavorite?: boolean;
    isDeleted?: boolean;
    correctCount?: number;
    wrongCount?: number;
    lastReviewedAt?: string | null;
    userId?: number;
    user?: User;
    flashcardSetId?: number;
    flashcardSet?: FlashcardSet;
    createdAt?: string;
};

