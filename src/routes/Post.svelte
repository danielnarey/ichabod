<script>
  import { onMount } from 'svelte';
  import { getPostByUri } from '../helpers/get-post-by-uri.js';
  
  export let uri;

  let data;
  let error;

  $: (async () => {
    ({ data, error } = await getPostByUri(uri));
  })();

</script>


<template lang="pug">
  +if('data')
    .typeset
      .heading
        h1= '{data.post.title}'
        p= '{data.post.date}'
      
      section
        p= '{@html data.post.content}'

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
    
