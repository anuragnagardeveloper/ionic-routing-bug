import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp,IonMenu,IonMenuToggle,  IonSplitPane, IonMenuButton,IonIcon,IonList,IonRouterOutlet,IonContent,IonButtons,IonBackButton, IonHeader,IonButton, IonPage,IonLabel, IonTitle, IonToolbar ,IonItem} from '@ionic/react';
import { IonReactRouter, } from '@ionic/react-router';
 import {   Switch,Redirect } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
const  appPages = [
  {
    title: 'Home',
    url: '/home',
    
  }
];



const Menu=()=><IonMenu contentId="main">
    <IonHeader>
      <IonToolbar >
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent  >
      <IonList   >
        {appPages.map((appPage, index) => {
          return (
            <IonMenuToggle key={index} auto-hide="false">
              <IonItem  href={appPage.url}>
                <IonIcon slot="start" icon={appPage.icon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          );
        })}
      </IonList>
    </IonContent>
  </IonMenu>
export default()=>
    <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonPage id="main">
		 
          <IonRouterOutlet>
            <Route path="/about" component={About} exact={true} /> 
            <Route exact path="/"  component={Home} />
          </IonRouterOutlet>
		   
        </IonPage>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
 
 
const Home=({history}) => 
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

const About=() =>{
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
		<IonButtons slot="start">
          <IonBackButton defaultHref="/" />
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