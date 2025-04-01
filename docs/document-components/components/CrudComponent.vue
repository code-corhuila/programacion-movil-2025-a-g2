<template>
  <ion-button class="naranja">
    <ion-icon slot="start" :icon="add"></ion-icon>
  </ion-button>
  <ion-button class="naranja">
    <ion-icon slot="start" :icon="create"></ion-icon>
  </ion-button>
  <ion-button class="naranja">
    <ion-icon slot="start" :icon="trash"></ion-icon>
  </ion-button>
  <ion-button class="naranja">
    <ion-icon slot="start" :icon="search"></ion-icon>
  </ion-button>
</template>

<script setup lang="ts">
import { IonButton, IonIcon } from '@ionic/vue'
import { add, create, trash, search } from 'ionicons/icons'
</script>

<script lang="ts">
export default {
  name: 'CrudComponent'
}
</script>

<style scoped>
.naranja {
  --background: orange;
  --color: white;
}
</style>
