<script>
  import { onMount } from 'svelte';
  import { getPostsPaginated } from '../helpers/get-posts-paginated.js';

  export let uri = '';
  
  let edges = [];
  let data;
  let error;

  onMount(async () => {
    ({ data, error } = await getPostsPaginated());
    
    if (data) {
      edges = data.posts.edges;
    }
  });

</script>


<template lang="pug">
  nav
    section.menu
      .heading
        p= 'Latest posts:'
    
      ul
        +each('edges as k')
          li
            a.unstyled(
              href='/post{k.node.uri}'
              class:active='{k.node.uri === uri}'
            )= '{k.node.title}'
    
    +if('error')
      p: code.error= '{error}'
  
</template>

<style lang="postcss">
  nav
    @apply z-10
    @apply w-full
    @apply px-one-and-half-b
    @apply border-darker-orange
    background-color: hsl(45,15%,17%)

  .heading
    @apply pb-1b

  .heading p
    @apply pl-1b
    @apply rounded
    @apply bg-medium-blue-green
    @apply text-white
    @apply font-bold text-sm-wide tracking-wide

  ul
    @apply pl-half-b

  li
    @apply pb-half-b
    @apply font-medium text-sm-narrow

  li a
    @apply text-medium-light-blue-green
  
  li a.active
    @apply text-medium-light-green
    @apply underline

  @screen c11
    nav
      @apply fixed overflow-y-scroll
      @apply w-4c min-h-screen
      @apply pt-6b pb-2b
      @apply border-r

  @screen c17
    nav
      @apply pt-7b pb-3b
  
  @screen c21
    nav
      @apply w-5c
  
  @media print
    nav
      display: none
    
</style>
