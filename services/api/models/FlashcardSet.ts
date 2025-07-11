/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Flashcard } from './Flashcard';
import type { FlashcardFolder } from './FlashcardFolder';
import type { User } from './User';
export type FlashcardSet = {
    id?: number;
    setName: string;
    description?: string | null;
    isPublic?: boolean;
    flashcardFolderId?: number;
    flashcardFolder?: FlashcardFolder;
    userId?: number;
    user?: User;
    createdAt?: string;
    flashcards?: Array<Flashcard> | null;
    totalCards: number;
};

