import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from './Form';
import Input from '../input/Input';
import Submit from '../button/Submit';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import * as yup from 'yup';
import Fieldset from '../fieldset/Fieldset';
import Reset from '../button/Reset';
import Checkbox from '../checkbox/Checkbox';
import Textarea from '../textarea/Textarea';

const meta: Meta<typeof Form> = {
  title: 'react-forms/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    onSubmit: { control: false },
    method: { control: false },
    schema: { control: false }
  }
};

export default meta;
type Story = StoryObj<typeof Form>;

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string(),
  hobbies: yup.array().required(),
  bio: yup.string()
});

const schemaZod = z
  .object({
    username: z.string().min(1, { message: 'Required' }),
    password: z.string().optional()
  })
  .required({
    username: true
  });

export const YupValidation: Story = {
  render: () => {
    const { handleSubmit, register, ...form } = useForm({
      resolver: yupResolver(schema),
      defaultValues: { bio: 'test' }
    });

    return (
      <Form onSubmit={handleSubmit(action('Form submitted'))} schema={schema} {...form}>
        <Input label="User Name" {...register('username')} />
        <Input label="Password" type="password" {...register('password')} />
        <Checkbox
          label="Hobbies"
          list={[
            {
              label: 'Soccer',
              value: 'soccer'
            },
            {
              label: 'Games',
              value: 'games'
            }
          ]}
          {...register('hobbies')}
        />
        <Textarea label="Bio" {...register('bio')} />
        <Submit label="Register" />
      </Form>
    );
  }
};

export const ZodValidation: Story = {
  render: () => {
    const { handleSubmit, register, ...form } = useForm({
      resolver: zodResolver(schemaZod)
    });

    return (
      <Form onSubmit={handleSubmit(action('Form submitted'))} schema={schemaZod} {...form}>
        <Input label="User Name" {...register('username')} />
        <Input label="Password" type="password" {...register('password')} />
        <Submit label="Send" />
      </Form>
    );
  }
};

export const ColumnsConfiguration: Story = {
  render: () => {
    const { handleSubmit, register, ...form } = useForm({
      values: { username: 'test', password: 'test' }
    });

    return (
      <Form onSubmit={handleSubmit(action('Form submitted'))} {...form}>
        <Fieldset legend="Login" columns={3}>
          <Input label="User Name" colSpan={2} {...register('username')} />
          <Input label="Password" type="password" {...register('password')} />
        </Fieldset>
        <Submit label="Send" />
        <Reset label="Clear" onClick={action('Form reset')} />
      </Form>
    );
  }
};
