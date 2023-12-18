const Page = () => {
    return (
        <div className="container bg-white shadow-lg flex flex-col items-center my-1 p-1 rounded-lg">
            <h1 className={"text-xl"}>Hello There</h1>
            <h1 className={"text-xl font-bold"}>This is home page</h1>
            <h1 className={"text-xl underline"}>Coming Soon</h1>
        </div>
    )
}

export const metadata = {
    title: "Halaman Utama",
}

export default Page
