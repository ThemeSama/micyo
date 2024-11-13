import { createContext } from 'react';
import { TPost } from '../types/posts';

const PostContext = createContext<TPost>({} as TPost);

export default PostContext;
