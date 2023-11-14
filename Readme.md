# Simple weather app

## General description

A simple weather app, that uses the api provided by <a href="www.weatherapi.com" >www.weatherapi.com</a>. The application was designed in Spanish language.\
In order to run it, you must be registered (go to the page and fill the forms). Save your key in 2 files inside environments folder with the following format:

```\
export const environment = {
  production: false,
  urlApi : "https://api.weatherapi.com/v1/current.json?key= ",
  apiWeather:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

};
```

The files names must be: `environment.prod.ts` and `environment.ts`.

## Preparing the app building

In order to build the app, you must have installed Node (Javascript runtime) with npm (Node Package manager) and ionic-cli (Command Line Interface for Ionic). The node installation can be done using installer from the official page  <a href="https://nodejs.org/en">https://nodejs.org/en</a> . The following instructions are for Ubuntu systems (execute them after Node was being installed):

```\
npm install -g @ionic/cli

```

## Serving the app

In order to display the app in the browser, follow this steps:

```\
user@system:~/$ git clone <this-repository>
user@system:~/$ cd climaApp
user@system:~/climaApp$ npm install
user@system:~/climaApp$ ionic serve
```

## Building the app for Android systems

For Android development, you must have installed Android Studio (download it from :\
<a href="https://developer.android.com/studio">https://developer.android.com/studio</a>).

```\
user@system:~/$ ionic cap add android
user@system:~/$ ionic cap build android
```

## Icon and Splash Screen

Provide icon and splash screen source images using this folder/filename structure:

```\
resources/
├── icon-only.png
├── icon-foreground.png
├── icon-background.png
├── splash.png
└── splash-dark.png
```
