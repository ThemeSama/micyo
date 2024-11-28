import { WPProvider } from './context/WPProvider';
import { PostProvider } from './context/PostProvider';
import WPContext from './context/WPContext';
import PostContext from './context/PostContext';
import usePosts from './hooks/usePosts';
import usePost from './hooks/usePost';
import useWPContext from './hooks/useWPContext';

import Post from './components/Post';
import Title from './components/Title';
import Meta from './components/Meta';
import FeaturedImage from './components/FeaturedImage';
import Excerpt from './components/Excerpt';
import Content from './components/Content';
import Author from './components/meta/Author';
import Categories from './components/meta/Categories';
import Date from './components/meta/Date';
import Tags from './components/meta/Tags';

export {
  usePost,
  usePosts,
  useWPContext,
  WPProvider,
  PostProvider,
  WPContext,
  PostContext,
  Post,
  Title,
  Meta,
  FeaturedImage,
  Excerpt,
  Content,
  Author,
  Categories,
  Date,
  Tags
};

export * from './types';
