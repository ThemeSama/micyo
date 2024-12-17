import { createContext } from 'react';
import { TPost } from '../types';

export const PostContext = createContext<TPost>({} as TPost);
