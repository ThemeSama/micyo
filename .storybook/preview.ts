import type { Preview } from '@storybook/react';
import './global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        order: ['react-can', ['About Library', 'AbilityProvider', '*', 'Changelog']]
      }
    }
  },

  tags: ['autodocs']
};

export default preview;
