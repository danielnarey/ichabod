import Home from './routes/Home.svelte';
import Song from './routes/Post.svelte';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/post/:slug',
    component: Post,
  },
  {
    path: '/*',
    redirect: () => '/',
  },
];
