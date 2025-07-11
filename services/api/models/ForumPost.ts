/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from './Account';
import type { ForumComment } from './ForumComment';
import type { ForumEmotion } from './ForumEmotion';
import type { ForumTopic } from './ForumTopic';
export type ForumPost = {
    id?: number;
    title: string;
    content: string;
    createAt: string;
    topicId: number;
    forumTopic?: ForumTopic;
    accountId: number;
    account?: Account;
    comments?: Array<ForumComment> | null;
    emotions?: Array<ForumEmotion> | null;
};

