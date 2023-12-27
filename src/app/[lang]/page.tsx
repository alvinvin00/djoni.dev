import {getDictionary} from "@/app/[lang]/dictionaries";
import {CardHeader, CardContent, Card} from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

const Page = async ({params: {lang}}: { params: { lang: string } }) => {
    const dict = await getDictionary(lang as 'en' | 'id')

    return (
        <main className="flex-1 w-full px-6 py-12">
            <section className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Welcome to My Portfolio</h1>
                <p className="text-lg">
                    Here you can find some of my latest projects and blog posts. Feel free to browse around and get in
                    touch if
                    you would like to collaborate!
                </p>
            </section>
            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <h2 className="text-2xl font-bold mb-4">My Projects</h2>
            </section>
            <section className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Latest Post</h2>
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
