# Simple weather app

## General description

A simple weather app, that uses the api provided by ["www.weatherapi.com"]("www.weatherapi.com"). The application was designed in Spanish language.

It has three pages, "home", "city selection" and "Information". In the homepage there are three buttons, one for city selection, other for refresh information and the last one for displaying information of the app and the programmer.

Hope you enjoy it!

## Preparing the app for building

In order to build the app, you must have installed Node (Javascript runtime) with npm (Node Package manager) and ionic-cli (Command Line Interface for Ionic). The node installation can be done using installer from the official page  [https://nodejs.org/en](https://nodejs.org/en) . The following instructions are for Ubuntu systems (execute them after Node was being installed):

```\
npm install -g @ionic/cli
```

For compiling it, you must be registered (go to the page ["www.weatherapi.com"]("www.weatherapi.com") and fill the forms). Save your key in 2 files inside environments folder with the following format:

```\
export const environment = {
  production: false,
  urlApi : "https://api.weatherapi.com/v1/current.json?key= ",
  apiWeather:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

};
```

The files names must be: `environment.prod.ts` and `environment.ts`.

## Serving the app

In order to display the app in the browser, follow this steps:

```\
user@system:~/$ git clone <this-repository>
user@system:~/$ cd climaApp
user@system:~/climaApp$ npm install
user@system:~/climaApp$ ionic serve
```

## Building the app for Android systems

For Android development, you must have installed Android Studio (download it from [https://developer.android.com/studio](https://developer.android.com/studio)).

```\
user@system:~/$ ionic cap add android
user@system:~/$ ionic cap build android
```

Inside Android Studio, generate apk or blunde and deploy to the device or playStore.

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
