# react-native-aws-cognito-userpools

react-native sample application about authenticating users using AWS cognito user pools.This is very simple application which would allow any react-native  developer to add login,signup functionalities rightaway.

## Run application in local environment 

``` bash
# clone project 
git clone https://github.com/99xt/react-native-aws-cognito-userpools.git
# Navigate into directory
cd react-native-aws-cognito-userpools 

# install dependencies
yarn
```

create a user pool from your Cognito dashboard and generate cliend id for this application 

navigate to `src/config/config.js`

replace your user pool id and client id here

```javascript
export default {
  cognito: {
    USER_POOL_ID: 'YOUR_USER_POOL_ID',
    APP_CLIENT_ID: 'YOUR_CLIENT_ID'
  }
};

```
after replacing these values run below commands

``` bash 
# run in android emulator
react-native run-android

# run in ios emulator
react-native run-ios
```

## Project Structure 

```
$/
  android/
  ios/
  src/
    config/
    lib/
  	components/
    	common/
    	- SignupForm.js
    	- LoginForm.js
  	App.js
  index.ios.js
  index.android.js
  package.json
```

- `android/` - Android native code
- `ios/` - iOS native code
- `src/` - Where we place the JS code written by us
- `src/config/` -  configuration file to hold client keys , routes etc
- `src/components` - folder to place your components such as buttons , forms , views etc
- `src/components/common` - common components that can be used in application anywhere
- `index.ios.js` - ios entry file
- `index.android.js` - android entry file