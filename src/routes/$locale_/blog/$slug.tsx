import {Container} from '@mantine/core';
import {createFileRoute} from '@tanstack/react-router';
import {allBlogs} from 'content-collections';

export const Route = createFileRoute('/$locale_/blog/$slug')({
  component: BlogContentPage,
});

function BlogContentPage() {
  const {slug, locale} = Route.useParams();

  const blog = allBlogs.find(
    (blog) => blog.slug === slug && blog.lang === locale,
  );

  return <Container>{blog?.content}</Container>;
}
