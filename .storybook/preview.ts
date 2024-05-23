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
        order: [
          'About Micyo',
          'react-forms',
          [
            'About Library',
            'Form',
            'Fieldset',
            'Input',
            'Select',
            'Datalist',
            'Radio',
            'Checkbox',
            'Textarea',
            'Submit',
            '*',
            'Changelog'
          ],
          'react-can',
          ['About Library', 'AbilityProvider', '*', 'Changelog']
        ]
      }
    }
  },

  tags: ['autodocs']
};

export default preview;
