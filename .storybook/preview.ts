import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import './global.css';
import './react-forms.css';
import './react-wp-query.css';

initialize();

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
          'react-wp-query',
          ['About Library', 'usePosts', 'useCategories', 'useTags', 'usePages', '*', 'Changelog'],
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
  loaders: [mswLoader],
  tags: ['autodocs']
};

export default preview;
