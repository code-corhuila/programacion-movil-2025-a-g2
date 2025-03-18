import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';

function InputData() {
  return (
    <IonList>
      <IonItem>
        <IonInput label="Nombre" placeholder="Ingrese su nombre"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Apellido" placeholder="Ingrese su apellido"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Correo Electrónico" placeholder="Ingrese su correo electrónico"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Teléfono" placeholder="Ingrese su número de teléfono"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Dirección" placeholder="Ingrese su dirección"></IonInput>
      </IonItem>
    </IonList>
  );
}
export default InputData;
