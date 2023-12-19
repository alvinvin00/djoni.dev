import React from 'react';

type BlogContentProps = {
    params: {
        lang: string,
        slug: string
    }
};

export const generateStaticParams = () => {

}

const Page = ({params: {lang, slug}}: BlogContentProps) => {
    return <></>
}

export default Page;
