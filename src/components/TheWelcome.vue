<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
</script>

<template>
  <WelcomeItem data-testid="welcome-item">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Welcome to AppTrust</template>
    Demo applications for AppTrust
  </WelcomeItem>
</template>
