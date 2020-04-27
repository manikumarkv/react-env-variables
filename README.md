

# Setup

# Create config.js file in `src` folder
paste

```
const dev = {
 HostUrl:'localhost'
 };
 
 const prod = {
 HostUrl:'prodUrl'
 };
 
 const config = process.env.REACT_APP_STAGE === 'production'
 ? prod
 : dev;
 
 export default {
 ...config
 };
 ```


# `change in package.json file`

 ```
 "start": "REACT_APP_STAGE=dev react-scripts start",
 "build": "REACT_APP_STAGE=production react-scripts build",
 ```
