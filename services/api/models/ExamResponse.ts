/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExamQuestionResponse } from './ExamQuestionResponse';
export type ExamResponse = {
    id?: number;
    examName?: string | null;
    description?: string | null;
    totalQuestions?: number;
    examQuestion?: Array<ExamQuestionResponse> | null;
};

