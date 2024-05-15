import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Form from './Form';
import Input from '../input/Input';
import Submit from '../button/Submit';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import * as yup from 'yup';

const meta: Meta<typeof Form> = {
  title: 'react-forms/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof Form>;

const schema = yup.object().shape({
  username: yup.string().min(19).required(),
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

export const Forms: Story = {
  render: () => {
    const { handleSubmit, register, ...form } = useForm({
      resolver: yupResolver(schema)
    });

    const onSubmit = (data: object) => {
      console.log(data);
    };

    return (
      <Form onSubmit={handleSubmit(onSubmit)} schema={schema} {...form}>
        <Input label="User Name" {...register('username')} />
        <Input label="Password" type="password" {...register('password')} />
        <Submit label="Send" />
      </Form>
    );
  }
};
