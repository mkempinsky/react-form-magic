import {configure} from '@storybook/react';
// import { setDefaults } from "@storybook/addon-info";

// // addon-info
// setDefaults({
//     header: true, // Toggles display of header with component name and description
//     inline: true, // Displays info inline vs click button to view
//     source: true // Displays the source of story Component
// });

// automatically import all files ending in *.stories.js
const req = require.context(
    '../src/components',
    true,
    /(__stories__\/.*|\.*stories)\.[tj]sx?$/
);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
