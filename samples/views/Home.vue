<script lang="ts" src="./Home.ts"></script>

<template>
  <div class="home">
    <h1>Home</h1>
    <div>
      <p>{{ token }}</p>
      <p>{{ randomNumber }}</p>
      <button @click="random">Random</button>
    </div>
  </div>
</template>

<style>
</style>
