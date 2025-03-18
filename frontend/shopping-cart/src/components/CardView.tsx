import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function CardView() {
  return (
    <IonCard>
      <IonCardHeader>
      <IonCardTitle>App móvil</IonCardTitle>
      <IonCardSubtitle>Subtítulo de la Tarjeta</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Aquí hay una pequeña descripción del contenido de la tarjeta. Nada más, nada menos.</IonCardContent>
    </IonCard>
  );
}
export default CardView;
