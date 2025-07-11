/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Exam } from './Exam';
import type { Question } from './Question';
import type { UserAnswer } from './UserAnswer';
export type ExamQuestion = {
    id?: number;
    examId: number;
    exam?: Exam;
    questionId: number;
    question?: Question;
    questionOrder: number;
    userAnswers?: Array<UserAnswer> | null;
};

