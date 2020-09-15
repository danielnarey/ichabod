import { writable } from 'svelte/store';

export const loadedPages = writable(new Map());

export const loadedPosts = writable(new Map());
