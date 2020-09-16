<script>
  import { onMount } from 'svelte';
  import { getPageByUri } from '../helpers/get-page-by-uri.js';
  
  let page;
  let error;

  onMount(async () => {
    const response = await getPageByUri('/');
  
    if (response.data) {
      page = response.data.page;
    } else {
      error = response.error;
    }
  });

</script>


<template lang="pug">
  +if('page')
    .typeset
      .heading
        h1= '{page.title}'
      
      section
        p= '{page.content}'

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
    
