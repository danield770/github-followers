## github-followers

bootstapped with: npx create-react-app my-app --template redux-typescript

The project is live on github pages at: 

https://danield770.github.io/github-followers/

##Note:
1) I originally used apollo client for the graphql request to the github api.

With that setup, I couldn't find a way to store my github personal access token (PAT) securely when deployed.

So I decided to use my own express server to perform the graphql request to github api and return the response to the client part of the app.

2) Currently, the app stores all of a paricular users' followers in the store's state, so if previously fetched data is requested via the 'previous' pagination link - the state is used and no request is made.
If however a new user is submitted, I clear the state to keep it lean.

If I had some more time to spend on the assignment, I would improve on this by persisting user data to localStorage or indexedDB and instead of resetting a user's data on the addUser action, I would first check the storage and if that user exists there - I would send their data as a payload to the addUser action.

--

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
