## Intro

## [Live App](https://lucid-lamarr-98321c.netlify.app)

Thanks for checking out my project. Hope you enjoy :-)

If you'd like to quickly see the app running check it out [here](https://lucid-lamarr-98321c.netlify.app)

## What's new?

### New Fetching API

Added the PerilService to improve the fetching experience of the application. Using this service provides a more fully featured and customizable fetch request. It also has a eye twords the future and can eaisly be added onto for other services, aka not just a "GET" request.

These functions have code comments to help explain what each part is doing and how they could be used or changed.

### `<StatusMessage />` Component

This component displays the current status of the application. It's used to show one of the following application states:

```
export const ApplicationStatus = {
  loading: "LOADING",
  error: "ERROR",
  ready: "READY",
} as const;
```

This is a great example of how I like to use React Context to create components in a way that encourages composability rather than passing props down to compoents for them to render UI elements.

### Close button on Modal

The `<Modal />` component has a new close button. It can be used to close the button along with clicking outside of the modal area or the ESC key.

### TypeScript Support

Added TS to the project!

## Prettier Support

New Scripts `yarn prettier:check` `yarn prettier:fix`

## What this App looks like

### Landing page

![Landing page](./images/landingpage.png)

### Mobile view

![Mobile view](./images/mobile.png)

### Modal view

![Modal view](./images/modal.png)

## Quickstart

### prerequisites

Below you'll find the commands needed to quickly get this project up and running. Before getting started you'll need to have [`yarn`](https://yarnpkg.com/) and the `git` installed.
to check if you have these run the following command: `yarn --version; git --version`. The result should look something like the following:

```
1.22.5
git version 2.21.1 (Apple Git-122.3)
```

### Let's get started!

1. `git clone https://github.com/KarnellSchultz/perils-app.git`
2. `cd perils-app`
3. `yarn install`
4. `yarn dev`

## Scripts

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn prettier:check`

When you want to check if your files are formatted, you can run Prettier with the --check flag (or -c). This will output a human-friendly message and a list of unformatted files, if any.

### `yarn prettier:fix`

This rewrites all processed files in place. This is comparable to the eslint --fix workflow. You can also use -w alias.

[Prettier Docs](https://prettier.io/docs/en/cli.html)
