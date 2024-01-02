import {getDictionary} from "@/app/[lang]/dictionaries";
import {Card, CardContent, CardHeader} from "@/components/Card";
import Link from "next/link";

const Page = async ({params: {lang}}: { params: { lang: string } }) => {
    const dict = await getDictionary(lang as 'en' | 'id')

    return (
        <main className="w-full text-black dark:text-white">
            <section className="mb-8 rounded-2xl dark:text-black dark:bg-white p-2 w-3/4 mx-auto">
                <h1 className="text-2xl font-bold mb-2">
                    {dict.home.welcome_text}
                </h1>
                <p className="text-lg">
                    {dict.home.welcome_text_2}
                </p>
            </section>
            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <h2 className="text-2xl font-bold mb-4">My Projects</h2>
            </section>
            <section className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Latest Post</h2>
                <div className={'flex md:flex-row md:grid-cols-4 gap-1'}>
                    <Card className={'text-black p-2'}>
                        <CardHeader>
                            <h2 className="text-xl font-bold">Post Title</h2>
                        </CardHeader>
                        <CardContent>
                            <p>Post excerpt goes here...</p>
                            <Link className="text-blue-600 hover:underline" href="#">
                                Read More
                            </Link>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <h2 className="text-xl font-bold">Post Title</h2>
                        </CardHeader>
                        <CardContent>
                            <p>Post excerpt goes here...</p>
                            <Link className="text-blue-600 hover:underline" href="#">
                                Read More
                            </Link>
                        </CardContent>
                    </Card>
                </div>

            </section>
        </main>
    )
}

export const generateMetadata = async ({params: {lang}}: { params: { lang: string } }) => {
    const dict = await getDictionary(lang as 'en' | 'id')

    return {
        title: dict.home.title,
    }
}


export default Page
