/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from './Account';
import type { Flashcard } from './Flashcard';
import type { FlashcardFolder } from './FlashcardFolder';
import type { UserExam } from './UserExam';
import type { UserExamFavorite } from './UserExamFavorite';
import type { UserFlashcardGame } from './UserFlashcardGame';
import type { UserFlashcardSet } from './UserFlashcardSet';
export type User = {
    id?: number;
    accountId: number;
    account?: Account;
    fullName: string;
    avatarUrl?: string | null;
    createdAt?: string;
    userExams?: Array<UserExam> | null;
    flashcardFolders?: Array<FlashcardFolder> | null;
    userFlashcardSets?: Array<UserFlashcardSet> | null;
    flashcards?: Array<Flashcard> | null;
    userFlashcardGames?: Array<UserFlashcardGame> | null;
    userExamFavorites?: Array<UserExamFavorite> | null;
};

