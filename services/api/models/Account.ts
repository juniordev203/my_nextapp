/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForumComment } from './ForumComment';
import type { ForumEmotion } from './ForumEmotion';
import type { ForumPost } from './ForumPost';
import type { User } from './User';
export type Account = {
    id?: number;
    email: string;
    passwordHash: string;
    role: string;
    createdAt?: string;
    user?: User;
    posts?: Array<ForumPost> | null;
    emotions?: Array<ForumEmotion> | null;
    comments?: Array<ForumComment> | null;
    refreshToken?: string | null;
    refreshTokenExpiryTime?: string;
};

