import React from 'react';

export const withLang = (Component: React.ComponentType<any>, props: object) => {
    return ({params}: { params: { lang: string } }) => {
        return <Component {...params} {...props} />;
    };
}

withLang.displayName = 'withLang';
