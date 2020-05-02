import React from 'react';

import {storiesOf} from '@storybook/react';
import {withKnobs, text, boolean, number, color} from '@storybook/addon-knobs';
import css from 'styled-jsx/css';
import Button from './index.js';

const styles = css.resolve`
    button {
        border-radius: 2em;
        border: none;
        width: 250px;
        color: #fff;
        background: linear-gradient(to right, #2f0743, #41295a, #2f0743);
        text-transform: uppercase;
    }
    button:hover {
        background: linear-gradient(to right, #2f0743, #41295a, #2f0743);
        box-shadow: 0 0 10px rgba(65, 41, 90, 0.5);
    }
`;

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('Buttons', () => <Button>I'm a button</Button>);

stories.add('Button with overridden styles', () => (
    <Button overrides={styles}>Contact Me</Button>
));
