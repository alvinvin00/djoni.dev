import {allBlogs} from 'content-collections';
import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/$locale_/blog/$slug')({
  component: BlogContentPage,
});


function BlogContentPage() {
  const {slug} = Route.useParams();

  const blog = allBlogs.find(
    (blog) => blog.slug === slug && blog.lang === 'en',
  );

  return <div className={'container'}>{blog?.content}</div>;
}
