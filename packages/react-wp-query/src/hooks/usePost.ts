import { useContext } from 'react';
import PostContext from '../context/PostContext';
import { TPost } from '../types/posts';

const usePost = (): TPost => useContext(PostContext);

export default usePost;
