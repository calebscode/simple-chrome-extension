# simple-chrome-extension
Provides a basic, extensible chrome extension outline project.

## Contents
`simple-chrome-extension-vanilla` is built in basic JS and HTML whose functionality is to generate an alert on the page.

`simple-chrome-extension-react` is built with TypeScript and React using Vite, and allows the user to change the background color of any page using a color picker.

## How to try it out
If you want to try these out:
- Clone this repository
- If you want to run the React version, `cd` into `simple-chrome-extension-react` and run `npm install` and then `npm run build`.
- Open Chrome and go to [chrome://extensions/](chrome://extensions/).
- Toggle Developer Mode to "on".
- Click on the "Load unpacked" button in the top-left corner.
- To run the React version, choose the `dist` folder that the build command generated.
- To run the Vanilla version, just choose the folder `simple-chrome-extension-vanilla`.
- Go to [example.com](example.com) or any other site to test functionality.

## How to extend this example

### Vanilla Example
Just add more script functionality using JS and display it using HTML, linking the two with a `<script>` tag. Save and press refresh on the Chrome Extensions page to test your new functionality.

### React Example
Add functionality using your vast knowledge of TS and React (add more state, manipulate the DOM, etc). Once you have something you want to test, save and run `npm run build` and then refresh the extension. Once again, the `dist` folder is the one that Chrome reads, so just saving will not update anything. You have to rebuild it.

## References

- [YouTube Tutorial from Learn to Code](https://www.youtube.com/watch?v=GGi7Brsf7js)

- [Manifest File Format Documentation](https://developer.chrome.com/docs/extensions/reference/manifest)