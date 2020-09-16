<script>
  import { onMount } from 'svelte';
  import { getPostByUri } from '../helpers/get-post-by-uri.js';
  
  export let uri;

  let post;
  let error;

  onMount(async () => {
    const response = await getPostByUri(uri);
  
    if (response.data) {
      post = response.data.post;
    } else {
      error = response.error;
    }
  });

</script>


<template lang="pug">
  +if('post')
    .typeset
      .heading
        h1= '{post.title}'
        p= '{post.date}'
      
      section
        p= '{post.content}'

    +elseif('error')
      code.error= '{error}'

</template>


<style lang='postcss'>
  .heading
    @apply pb-2b

  .heading h1
    @apply mb-1b

  .heading p
    @apply m-0
    @apply font-medium
 
  .error
    @apply text-medium-red

  @screen c17
    .heading
      @apply pb-3b

</style>
    
