import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp,IonMenu,IonMenuToggle,  IonSplitPane, IonMenuButton,IonIcon,IonList,IonRouterOutlet,IonContent,IonButtons,IonBackButton, IonHeader,IonButton, IonPage,IonLabel, IonTitle, IonToolbar ,IonItem} from '@ionic/react';
import { IonReactRouter, } from '@ionic/react-router';
 import {   Switch,Redirect,Link } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
 
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

const  appPages = [
  {
    title: 'about',
    url: '/about',
    
  }
];



const Menu=()=><IonMenu contentId="main" side="start" type="overlay">
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
    <IonApp >
    <IonReactRouter >
      
	<Menu appPages={appPages} />
      
		 
          <IonRouterOutlet >
            <Route path="/about" component={About} exact={true} /> 
            <Route exact path="/"  component={Home} />
			 <Redirect to={`/`} />
          </IonRouterOutlet>
		   
       
      
    </IonReactRouter>
  </IonApp>
 
 
const Home=({history}) => 
  <IonPage>
    <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent   >
	  {/*
<IonButton
  onClick={e => {
    e.preventDefault();
    history.push('/about');
  }}>
  Go to User 1
	  </IonButton>*/}
	 <Link to="/about">About</Link>
      </IonContent>
  </IonPage>

const About=() =>{
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
		<IonButtons slot="start">
          <IonBackButton />
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