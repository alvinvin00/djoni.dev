import { allBlogs } from 'content-collections';
import { useParams } from '@tanstack/react-router';

export function Route() {
  const { slug } = useParams();

  const blog = allBlogs.find(
    (blog) => blog.slug === slug && blog.lang === 'en'
  );

  return <div className={'container'}>{blog?.content}</div>;
}
