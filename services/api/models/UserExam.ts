/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Exam } from './Exam';
import type { ExamStatus } from './ExamStatus';
import type { User } from './User';
import type { UserAnswer } from './UserAnswer';
export type UserExam = {
    id?: number;
    userId: number;
    examId: number;
    startTime?: string;
    endTime?: string;
    durationSeconds?: number;
    status?: ExamStatus;
    scoreReading?: number;
    scoreListening?: number;
    totalScore?: number;
    readonly isSubmitted?: boolean;
    user?: User;
    exam?: Exam;
    userAnswers?: Array<UserAnswer> | null;
};

