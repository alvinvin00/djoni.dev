import {allNows} from "contentlayer/generated";
import dayjs from "dayjs";

const NowPage = ({params: {locale}}: { params: { locale: string } }) => {
    const now = allNows.filter((now) => now._raw.flattenedPath === `now/${locale}`).at(0)

    return (
        <div className={'container'}>
            <div className={'flex flex-col gap-1 rounded-xl p-2 bg-white shadow-xl dark:bg-gray-700 dark:text-white'}>
                <h4 className={'text-center font-bold text-lg'}>{now?.title}</h4>
                <p className={'text-center text-sm'}>Last Updated: {dayjs(now?.date).format('DD MM YYYY')}</p>
                <hr/>
                {now?.body.raw}
            </div>
        </div>
    )
}

export const generateMetadata = () => ({
    title: "What I'm doing now | Djoni's Den"
})

export default NowPage
