import {allProjects} from 'content-collections';
import {createFileRoute, useParams} from '@tanstack/react-router';

export const Route = createFileRoute('/projects/:slug')({
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const {slug} = useParams();

  const project = allProjects.find(
    (blog) => blog.slug === slug && blog.lang === 'en',
  );

  return <div className={'container'}>{project?.body?.raw}</div>;
}
