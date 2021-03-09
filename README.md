# Quasar Firebase Template 

![Alt text](banner.png?raw=true "Title")


A Quasar framework app template that preloaded with Firebase features. Written from scratch for the upcoming `Quasar v2`.

Features:
- `Quasar v2` - [Documentation](https://next.quasar.dev/)
- `Vue 3 Composition API` - [Documentation](https://v3.vuejs.org/guide/composition-api-introduction.html)
- `Typescript` - [Documentation](https://www.typescriptlang.org/docs/)
- Quasar extension `qenv`: for environment variables to protect firebase login details -  [Documentation](https://www.npmjs.com/package/@quasar/quasar-app-extension-qenv)
- `cross-env`: so Windows machines can also deploy with qenv - [Documentation](https://www.npmjs.com/package/cross-env)
  
How to use:
- Clone the repository and execute `npm install`
- Register to [firebase](https://firebase.google.com/) and create a new web application
- Rename `.quasar.env.template.json` to `.quasar.env.json` and fill your firebase details
- Use `npm run` commands to run provided scripts on `package.json`

Demo android and electron app is [here](https://github.com/vicktorhu/quasar-firebase-template/releases)

