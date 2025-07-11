/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionAnswer } from './QuestionAnswer';
import type { QuestionPart } from './QuestionPart';
import type { QuestionSection } from './QuestionSection';
export type Question = {
    id?: number;
    section: QuestionSection;
    part: QuestionPart;
    content: string;
    imageUrl?: string | null;
    audioUrl?: string | null;
    explanation?: string | null;
    isMultipleChoice?: boolean;
    questionAnswers?: Array<QuestionAnswer> | null;
};

