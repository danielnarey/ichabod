import Home from './routes/Home.svelte';
import Post from './routes/Post.svelte';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/post/:uri',
    component: Post,
  },
  {
    path: '/*',
    redirect: () => '/',
  },
];
