<script>
  import navaid from 'navaid';
  import { onMount, afterUpdate, onDestroy } from 'svelte';
  import { routes } from './routes.js';
  import Header from './parts/Header.svelte';
  import Sidebar from './parts/Sidebar.svelte';
  import Main from './parts/Main.svelte';
  import Footer from './parts/Footer.svelte';
  import './styles/index.js';

  let PageContent;
  let Props = {};
  let Navaid = navaid('/');
  let contentLoaded = false;
  
  routes.forEach(({ path, redirect, component, ...routeParams }) => {
    Navaid.on(path, (pathParams) => {
      if (redirect) {
        Navaid.route(redirect(pathParams), true);
      } else {
        PageContent = component;
        Props = { path, ...pathParams, ...routeParams };
      }
    })
  });

  onMount(() => {
    Navaid.listen();
  });
  
  afterUpdate(() => {
    window.scrollTo({ top: 0 });
    contentLoaded = true;
  });

  onDestroy(() => {
    if (Navaid.unlisten) { Navaid.unlisten(); }
  });

</script>


<template lang="pug">
  #app
    Sidebar('{...Props}')
    
    Header

    Main
      +if('PageContent')
        svelte:component(this='{PageContent}' '{...Props}')
    
    Footer

</template>


<style lang="postcss">
  @import 'typeface-ibm-plex-sans'

  #app
    @apply bg-near-white
    @apply text-darker font-ibm-plex-sans font-regular text-sm

</style>
