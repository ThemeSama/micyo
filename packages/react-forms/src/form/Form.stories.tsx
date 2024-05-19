import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Form, { IForm } from './Form';
import Input from '../input/Input';
import Submit from '../button/Submit';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import * as yup from 'yup';
import Fieldset from '../fieldset/Fieldset';

const meta: Meta<typeof Form> = {
  title: 'react-forms/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    columns: { control: { type: 'number', min: 1, max: 12 } },
    onSubmit: { control: false },
    method: { control: false },
    schema: { control: false }
  }
};

export default meta;
type Story = StoryObj<typeof Form>;

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string()
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
  render: (args: IForm) => {
    const { handleSubmit, register, ...form } = useForm({
      resolver: yupResolver(schema)
    });

    const onSubmit = (data: object) => {
      console.log(data);
    };

    return (
      <Form onSubmit={handleSubmit(onSubmit)} schema={schema} columns={args?.columns} {...form}>
        <Input label="User Name" {...register('username')} />
        <Input label="Password" type="password" {...register('password')} />
        <Submit label="Send" />
      </Form>
    );
  }
};

export const ZodValidation: Story = {
  render: (args: IForm) => {
    const { handleSubmit, register, ...form } = useForm({
      resolver: zodResolver(schemaZod)
    });

    const onSubmit = (data: object) => {
      console.log(data);
    };

    return (
      <Form onSubmit={handleSubmit(onSubmit)} schema={schemaZod} columns={args?.columns} {...form}>
        <Input label="User Name" {...register('username')} />
        <Input label="Password" type="password" {...register('password')} />
        <Submit label="Send" />
      </Form>
    );
  }
};

export const ColumnsConfiguration: Story = {
  render: () => {
    const { handleSubmit, register, ...form } = useForm();

    const onSubmit = (data: object) => {
      console.log(data);
    };

    return (
      <Form onSubmit={handleSubmit(onSubmit)} {...form}>
        <Fieldset columns={3}>
          <Input label="User Name" colSpan={2} {...register('username')} />
          <Input label="Password" type="password" {...register('password')} />
        </Fieldset>
        <Submit label="Send" />
      </Form>
    );
  }
};
