# @micyo/react-can

Simple authorisation library for React projects

## Installation

The package can be installed via npm

```bash
npm install @micyo/react-can --save
```

or via yarn

```bash
yarn add @micyo/react-can
```

## Configuration

AbilityProvider is used to manage the permission list with context API. Wrap the entire project or the part needed for authorization controls with the AbilityProvider component. You can define default permissions with the 'list' prop.

```jsx
import { AbilityProvider } from '@micyo/react-can';

const DEFAULT_ABILITIES = ['READ_POST'];

function App({ children }) {
  return <AbilityProvider list={DEFAULT_ABILITIES}>{children}</AbilityProvider>;
}

export default App;
```

## Components

It is possible to perform authorization control on JSX content with two different components. The Can component renders the content when you have the permission. The Cannot component renders the content when you do not have the specified permission.

**Can** component

```jsx
import { Can } from '@micyo/react-can';

const Page = ({ children }) => {
  return <Can i="READ_POST">{children}</Can>;
};
```

**Cannot** component

```jsx
import { Cannot } from '@micyo/react-can';

const Page403 = () => {
  return <Cannot i="READ_POST">You cannot read posts!</Cannot>;
};
```

## Hook

You can use the useAbility hook to add new permissions to the user, remove some of the existing permissions, or remove all permissions altogether from within the page. You can perform permission control at the JavaScript level using the can method. Additionally, you can perform boolean checks at the prop level using the can method in JSX content.

```jsx
import { useAbility } from '@micyo/react-can';

const Page = () => {
  const {
    abilities,
    setAbilities,
    addAbility,
    addAbilities,
    removeAbility,
    removeAbilities,
    clearAbilities,
    can
  } = useAbility();

  return <>
    {can('READ_POST) && <span>You can read posts!</span>}

    <button type="button" onClick={() => addAbility('DELETE_POST')}>Grant Delete Post</button>

    <ul>
      {abilities.map(ability => <li key={ability}>{ability}</li>)}
    </ul>
  </>
};
```

**Returns**

```ts
export interface UseAbility {
  /** All abilities */
  abilities: string[];

  /** Update abilities state */
  setAbilities(): void;

  /** Add new ability */
  addAbility(ability: string): void;

  /** Add abilities */
  addAbilities(abilities: string[]): void;

  /** Remove ability from abilities */
  removeAbility(ability: string): void;

  /** Remove some abilities from abilities */
  removeAbilities(abilities: string[]): void;

  /** Clear all abilities */
  clearAbilities(): void;

  /** Check has ability */
  can(ability: string): boolean;
}
```

## License

Copyright (c) 2024 themesama and individual contributors. Licensed under MIT license, see [LICENSE](../../LICENSE) for the full license.
