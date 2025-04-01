# Definir componente para botones

```js
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
```

# Usar componente

```js
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Empleado</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Empleado</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
    <div id="container">
        <strong>Gestión de Empleados</strong>
        <p>Utilice los botones a continuación para gestionar empleados.</p>
        <crud-component></crud-component>
      </div>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import CrudComponent from '@/components/CrudComponent.vue';
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0 0 20px 0;
}

#container ion-button {
  margin: 5px;
}
</style>



<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Estudiante</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Estudiante</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
    <div id="container">
        <strong>Gestión de Estudiantes</strong>
        <p>Utilice los botones a continuación para gestionar estudiantes.</p>
        <crud-component></crud-component>
      </div>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import CrudComponent from '@/components/CrudComponent.vue';
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0 0 20px 0;
}

#container ion-button {
  margin: 5px;
}
</style>
```


# Tener en cuenta las rutas

```js
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import EstudiantePage from '../views/EstudiantePage.vue'
import ProfesorPage from '../views/ProfesorPage.vue';
import EmpleadoPage from '../views/EmpleadoPage.vue';  

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/estudiante',
    name: 'Estudiante',
    component: EstudiantePage
  },
  {
    path: '/profesor',
    name: 'Profesor',
    component: ProfesorPage
  },
  {
    path: '/empleado',
    name: 'Empleado',
    component: EmpleadoPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
```