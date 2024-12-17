import { useContext } from 'react';
import { PostContext } from '../context';
import { TPost } from '../types';

export const usePost = (): TPost => useContext(PostContext);
