<script>
  import { onMount } from 'svelte';
  import { getPageByUri } from '../helpers/get-page-by-uri.js';
  
  let data;
  let error;

  onMount(async () => {
    ({ data, error } = await getPageByUri('/'));
  });

</script>


<template lang="pug">
  +if('data')
    .typeset
      .heading
        h1= '{data.page.title}'
      
      section= '{@html data.page.content}'

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
    
