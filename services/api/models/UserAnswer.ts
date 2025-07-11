/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Question } from './Question';
import type { QuestionSection } from './QuestionSection';
import type { UserExam } from './UserExam';
export type UserAnswer = {
    id?: number;
    userExamId: number;
    questionId: number;
    section: QuestionSection;
    userAnswerChoice: string;
    userExam?: UserExam;
    question?: Question;
};

