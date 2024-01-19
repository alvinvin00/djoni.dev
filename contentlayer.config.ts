import {defineDocumentType, makeSource} from 'contentlayer/source-files'

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `blog/**/*.md`,
    fields: {
        title: {type: 'string', required: true},
        date: {type: 'date', required: true},
        categories: {type: 'list', of: {type: 'string'}, required: true},
        slug: {type: 'string', required: true},
        author: {type: 'string', required: true},
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `${doc._raw.flattenedPath}`
        },
    },
}))

export const Projects = defineDocumentType(() => ({
    name: 'Projects',
    filePathPattern: `projects/**/*.md`,
    fields: {
        author: {type: 'string', required: true},
        categories: {type: 'list', of: {type: 'string'}, required: true},
        date: {type: 'date', required: true},
        description: {type: 'string', required: true},
        github: {type: 'string'},
        link: {type: 'string'},
        slug: {type: 'string', required: true},
        status: {type: 'enum', options: ['active', 'inactive', 'archived']},
        tags: {type: 'list', of: {type: 'string'}},
        thumbnail: {type: 'string'},
        title: {type: 'string', required: true},
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `${doc._raw.flattenedPath}`
        },
    },
}))

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
            resolve: (doc) => `${doc._raw.flattenedPath}`
        },
    },
}))

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
            resolve: (doc) => `${doc._raw.flattenedPath}`
        },
    },
}))

export default makeSource({contentDirPath: 'src/contents', documentTypes: [Blog, Projects, About, Now]})
