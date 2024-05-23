# @micyo/react-forms

Basic unstyled form elements for React projects and it's compatible with [react-hook-form](https://www.npmjs.com/package/react-hook-form)

## Project Objective

- Can be directly applied to any react project.
- You won't have to deal with the difficulty of styling over the default styles that come with other libraries.
- Its simple structure allows you to write more readable code.
- The default grid structure makes responsive design manageable and easier with just a few parameters.
- It works in full compatibility with the react-hook-form, yup, and zod libraries.

## Installation

The package can be installed via npm

```bash
npm install @micyo/react-forms --save
```

or via yarn

```bash
yarn add @micyo/react-forms
```

## Configuration

No additional configuration is required. Just remember to install react-hook-form and the validation library you find necessary (yup, zod).

## Components

- Form
- Fieldset
- Label
- Feedback
- Input
- Select
- Datalist
- Radio
- Checkbox
- Textarea
- Legend
- Button
- Submit
- Reset
- Option
- OptionGroup

## Hook

With the useFormContext hook, you can access hookForm, schema, and general columns settings.

**Returns**

```ts
type UseFormReturn<TFieldValues extends FieldValues = FieldValues, TContext = any> = {
  watch: UseFormWatch<TFieldValues>;
  getValues: UseFormGetValues<TFieldValues>;
  getFieldState: UseFormGetFieldState<TFieldValues>;
  setError: UseFormSetError<TFieldValues>;
  clearErrors: UseFormClearErrors<TFieldValues>;
  setValue: UseFormSetValue<TFieldValues>;
  trigger: UseFormTrigger<TFieldValues>;
  formState: FormState<TFieldValues>;
  resetField: UseFormResetField<TFieldValues>;
  reset: UseFormReset<TFieldValues>;
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
  unregister: UseFormUnregister<TFieldValues>;
  control: Control<TFieldValues, TContext>;
  register: UseFormRegister<TFieldValues>;
  setFocus: UseFormSetFocus<TFieldValues>;
};

type TFormContext<TUseFormReturn extends UseFormReturn = UseFormReturn> = {
  hookForm?: TUseFormReturn;
  schema?: any;
  columns?: number;
};
```

## Applying styles to components

All components use the **micyo-** prefix. In addition, all components support the **className** prop. The CSS selector list is as follows:

- .micyo-form
- .micyo-legend
- .micyo-label
- .micyo-field-wrapper.micyo-**${type}**-field ([input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types), select, radio, radio-group, checkbox and checkbox-group)
- .micyo-btn
- .micyo-field-feedback
- .micyo-field-validation-feedback
- .micyo-fieldset

## License

Copyright (c) 2024 themesama and individual contributors. Licensed under MIT license, see [LICENSE](https://github.com/ThemeSama/micyo/tree/main/LICENSE.md) for the full license.
