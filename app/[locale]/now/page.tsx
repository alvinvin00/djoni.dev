const Page = ({params: {locale}}: { params: { locale: string } }) => {

    return (
        <div className={'container'}>
            <div className={'rounded-xl p-2 bg-white dark:bg-gray-700 dark:text-white'}>
                <h4 className={'text-center font-bold text-lg'}>Now</h4>

            </div>
        </div>
    )
}

export const generateMetadata = () => ({
    title: "What I'm doing now | Djoni's Den"
})

export default Page
