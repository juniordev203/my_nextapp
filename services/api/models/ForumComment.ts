/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from './Account';
import type { ForumPost } from './ForumPost';
export type ForumComment = {
    id?: number;
    content: string;
    createAt?: string;
    postId: number;
    forumPost?: ForumPost;
    accountId: number;
    account?: Account;
};

