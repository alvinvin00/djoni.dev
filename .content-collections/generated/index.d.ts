import configuration from '../../content-collections.ts';
import {GetTypeByName} from '@content-collections/core';

export type Blog = GetTypeByName<typeof configuration, 'blog'>;
export declare const allBlogs: Array<Blog>;

export type Project = GetTypeByName<typeof configuration, 'projects'>;
export declare const allProjects: Array<Project>;

export type About = GetTypeByName<typeof configuration, 'about'>;
export declare const allAbouts: Array<About>;

export type Now = GetTypeByName<typeof configuration, 'now'>;
export declare const allNows: Array<Now>;

export {};
