/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExamQuestion } from './ExamQuestion';
export type Exam = {
    id?: number;
    examName: string;
    description?: string | null;
    totalQuestions: number;
    examQuestions: Array<ExamQuestion>;
};

