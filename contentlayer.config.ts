import {defineDocumentType, makeSource} from 'contentlayer/source-files';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/**/*.md`,
  fields: {
    author: {type: 'string', required: true},
    categories: {type: 'list', of: {type: 'string'}, required: true},
    date: {type: 'date', required: true},
    description: {type: 'string'},
    slug: {type: 'string', required: true},
    tags: {type: 'list', of: {type: 'string'}},
    thumbnail: {type: 'string', required: true},
    title: {type: 'string', required: true},
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `${doc._raw.flattenedPath}`,
    },
    lang: {
      type: 'enum',
      options: ['en', 'id'],
      resolve: (doc) => doc._raw.flattenedPath.split('/')[1],
    },
  },
}));

export const Projects = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.md`,
  fields: {
    author: {type: 'string', required: true},
    categories: {type: 'list', of: {type: 'string'}, required: true},
    date: {type: 'date', required: true},
    description: {type: 'string', required: true},
    github: {type: 'string'},
    link: {type: 'string'},
    images: {type: 'list', of: {type: 'string'}},
    slug: {type: 'string', required: true},
    status: {type: 'enum', options: ['active', 'inactive', 'archived']},
    tags: {type: 'list', of: {type: 'string'}},
    thumbnail: {type: 'string'},
    title: {type: 'string', required: true},
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `${doc._raw.flattenedPath}`,
    },
    lang: {
      type: 'enum',
      options: ['en', 'id'],
      resolve: (doc) => doc._raw.flattenedPath.split('/')[1],
    },
  },
}));

export const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: `about/**/*.md`,
  fields: {
    title: {type: 'string', required: true},
    date: {type: 'date', required: true},
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `${doc._raw.flattenedPath}`,
    },
    lang: {
      type: 'enum',
      options: ['en', 'id'],
      resolve: (doc) => doc._raw.flattenedPath.split('/')[1],
    },
  },
}));

export const Now = defineDocumentType(() => ({
  name: 'Now',
  filePathPattern: `now/**/*.md`,
  fields: {
    title: {type: 'string', required: true},
    date: {type: 'date', required: true},
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `${doc._raw.flattenedPath}`,
    },
    lang: {
      type: 'enum',
      options: ['en', 'id'],
      resolve: (doc) => doc._raw.flattenedPath.split('/')[1],
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/contents',
  documentTypes: [Blog, Projects, About, Now],
});
