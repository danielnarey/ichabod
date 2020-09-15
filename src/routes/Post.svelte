<script>
  import { getPostByUri } from '../helpers/get-post-by-uri.js';
  
  export let uri;
  
  let data;
  let error;
  let post;

  $: (async () => {
    ({ data, error } = await getPostByUri(uri));
  
    if (data) {
      ({ post } = data);
    }
  })();

</script>


<template lang="pug">
  +if('post')
    .typeset
      .heading
        h1= '{post.title}'
        p= '{post.author}'
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
    
