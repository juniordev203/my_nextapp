/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from './Account';
import type { ForumPost } from './ForumPost';
export type ForumEmotion = {
    id?: number;
    postId: number;
    forumPost?: ForumPost;
    accountId: number;
    account?: Account;
};

