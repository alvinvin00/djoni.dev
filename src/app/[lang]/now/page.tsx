const Page = ({params: {lang}}: { params: { lang: string } }) => {

    return (
        <div className={'container'}>
            <div className={'rounded-xl p-2 bg-white'}>
                <h4 className={'text-center font-bold text-lg'}>Now</h4>

            </div>
        </div>
    )
}

export default Page
