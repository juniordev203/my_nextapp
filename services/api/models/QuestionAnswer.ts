/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Question } from './Question';
export type QuestionAnswer = {
    id?: number;
    questionId?: number | null;
    optionLabel: string;
    optionText: string;
    isAnswer: boolean;
    question?: Question;
};

