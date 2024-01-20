import React from "react";
import {getBlogs} from "@/utils/greymatter";
import {Card, CardContent, CardHeader} from "@/components/Card";

const Page = ({params: {locale}}: { params: { locale: string } }) => {
    const blogs = getBlogs(locale)

    return (
        <div className={'container'}>
            <div className="flex flex-col gap-4 my-2">
                <div
                    className="flex flex-col items-center bg-white dark:bg-gray-700 dark:text-white py-2 shadow-lg rounded-xl">
                    <h5 className="text-lg font-bold">
                        Blog
                    </h5>
                    <p className="text-sm">
                        Writing all about programming and video games.
                    </p>
                    <p className='text-yellow-200 font-bold'>
                        DISCLAIMER: All opinions expressed here are solely author&apos;s opinion and not representing
                        anyone
                    </p>
                </div>
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-10">
                    {blogs.map((blog) => {
                        const metadata = blog.data
                        return (
                            <Card key={metadata.slug}
                                  className="flex flex-col gap-2 bg-white dark:bg-gray-700 dark:text-white">
                                <CardHeader>
                                    <h3 className="text-lg font-bold line-clamp-2 overflow-clip overflow-ellipsis">
                                        {metadata.title}
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-md font-light line-clamp-3">
                                        {metadata.description}
                                    </p>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-xs font-light">
                                            {metadata.date}
                                        </p>
                                        {/*<p className="text-xs font-light">*/}
                                        {/*    {metadata.read_time}*/}
                                        {/*</p>*/}
                                    </div>
                                </CardContent>

                            </Card>)
                    })}
                </div>
            </div>
        </div>
    )
}

export const metadata = {
    title: 'Blog'
}

export default Page
