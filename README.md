# Airbnb-Clone

Airbnb-Clone is a full-stack challenge project that builds Airbnb clone mobile app from scratch, using React Native for frontend UI utilizing Google Map & AutoComplete APIs, and AWS Amplify for backend.

Currently for MacOS & iOS only.

# Initial Setup
> **Warning**
> Before proceeding with installation, you should already have React Native environment setup ready. 
> MacOS & iOS: Node, Watchman, Xcode & Command Line Tools, CocoaPods installations on your local machine is required. Please refer to React Native docs [here](https://reactnative.dev/docs/environment-setup) for environment setup guide

## Installation
Install from source
```bash
$ git clone https://github.com/Skydodle/Airbnb-Clone.git
$ cd Airbnb-Clone/Airbnb
$ npm install
```

## Running the app
### Step 1: Start Metro
Metro is the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."—[Metro Docs](https://facebook.github.io/metro/docs/concepts)

To start Metro, run ```npm run start``` inside your Airbnb folder:
```bash
npm run start
```
It will run the ``react-native start`` script and starts the Metro Bundler as shown in ```package.json``` scripts.

### Step 2: Start the application
Separate from the Metro Bundler terminal, start a new terminal inside the Airbnb folder.<br>
Run the following commmand to start building the app:
```bash
npm run ios
```
You should see the airbnb clone app running in the iOS Simulator shortly.

<img width="360" alt="Airbnb App screenshot" src="https://user-images.githubusercontent.com/69279538/180666188-a6e8512e-dd36-407b-b952-f44e74cabc74.png">
