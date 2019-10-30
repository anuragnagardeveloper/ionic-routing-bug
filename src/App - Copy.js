import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet,IonContent,IonButtons,IonBackButton, IonHeader,IonButton, IonPage,IonLabel, IonTitle, IonToolbar ,IonItem} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
 

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

export default()=>
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Home} exact={true} /> 
		 <Route path="/about" component={About} exact={true} /> 
        
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
 
 
 
const Home=({history}) =>{
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a
            target="_blank"
            rel="noopener"
            href="https://ionicframework.com/docs/"
          >
            docs
          </a>{' '}
          will be your guide.
        </p>
		<IonButton
  onClick={e => {
    e.preventDefault();
    history.push('/about');
  }}>
  Go to User 1
</IonButton>
      </IonContent>
    </IonPage>
  );
};

const About=() =>{
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
		<IonButtons slot="start">
          <IonBackButton defaultHref="/home" />
        </IonButtons>
          <IonTitle>About Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a
            target="_blank"
            rel="noopener"
            href="https://ionicframework.com/docs/"
          >
            docs
          </a>{' '}
          will be your guide.
        </p>
      </IonContent>
    </IonPage>
  );
};