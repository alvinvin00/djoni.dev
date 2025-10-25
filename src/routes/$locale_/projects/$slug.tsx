import {allProjects} from 'content-collections';
import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/$locale_/projects/$slug')({
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const {slug} = Route.useParams();

  const project = allProjects.find(
    (blog) => blog.slug === slug && blog.lang === 'en',
  );

  return <div className={'container'}>{project?.content}</div>;
}
