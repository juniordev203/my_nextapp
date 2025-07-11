/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForumCategory } from './ForumCategory';
import type { ForumPost } from './ForumPost';
export type ForumTopic = {
    id?: number;
    title: string;
    categoryId: number;
    forumCategory?: ForumCategory;
    posts?: Array<ForumPost> | null;
};

