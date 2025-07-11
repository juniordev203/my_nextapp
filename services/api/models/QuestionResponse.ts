/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionAnswerResponse } from './QuestionAnswerResponse';
import type { QuestionPart } from './QuestionPart';
import type { QuestionSection } from './QuestionSection';
export type QuestionResponse = {
    id?: number;
    section?: QuestionSection;
    part?: QuestionPart;
    content?: string | null;
    imageUrl?: string | null;
    audioUrl?: string | null;
    explanation?: string | null;
    isMultipleChoice?: boolean;
    questionAnswers?: Array<QuestionAnswerResponse> | null;
};

