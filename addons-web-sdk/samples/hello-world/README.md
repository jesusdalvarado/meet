# Hello, World: The Add-on

This is approximately the simplest possible Meet add-on. The only requirements to get started here are npm and GitHub. The intent of publishing this add-on is to demonstrate how easy it is to get started with rendering custom content using an add-on. Please see other samples at <https://github.com/googleworkspace/meet/tree/main/addons-web-sdk/samples> to learn more advanced functionality!

You can view a deployed version of this Add-on at <https://googleworkspace.github.io/meet/hello-world/SidePanel.html> and its corresponding [MainStage.html](https://googleworkspace.github.io/meet/hello-world/MainStage.html).


Building and Deploying the Project

Navigate to the meet/addons-web-sdk/samples/hello-world directory.

Run the following command to create a production build:
```
npm run build
```
This will generate the production build in the meet/addons-web-sdk/samples/dist directory.
Commit the changes and push them to the repository to include the build:
```
git add .
git commit -m "Add production build"
git push origin main
```

Note: Pushing changes will automatically trigger a deployment using GitHub Actions.
Once the deployment process is complete, the application will be accessible via GitHub Pages at the following URLs:
https://jesusdalvarado.github.io/meet/addons-web-sdk/samples/dist/hello-world/index.html
https://jesusdalvarado.github.io/meet/addons-web-sdk/samples/dist/hello-world/MainStage.html

For more information about the deploy process check the files in meet/.github/workflows

