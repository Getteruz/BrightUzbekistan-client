import AudioCard from 'components/UI/AudioCard';
import BlackButton from 'components/UI/Buttons/BlackButton';
import GreyButton from 'components/UI/Buttons/GreyButton';
import NewsCard from 'components/UI/Cards/NewsCard';
import Flex from 'components/UI/Flex';
import Input from 'components/UI/Forms/Input';
import { RightArrows } from 'components/UI/icons';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getLastNews } from 'services/news';
import cls from './Aside.module.scss'

const Aside = () => {
    const router = useRouter()
    const { data } = useQuery('last-news', () => getLastNews(router.locale))

    return (
        <div className={cls.aside}>
            <Flex
                direction='column'
                gap='20'
            >

                {
                    data?.length > 0 && data?.map(news => (
                        <NewsCard
                            title={news?.[router?.locale]?.title}
                            category={news?.categories?.[0]?.[router?.locale]}
                            time={news?.publishDate}
                        />
                    ))
                }
            </Flex>

            {/* <GreyButton 
                icon={RightArrows}
                label='все новости'
                style={{margin: '36px 0'}}
            /> */}

            {/* <form className={cls.aside__form}>
                <Input 
                    label='Поиск по сайту'
                    placeholder='Поиск'
                />
                <BlackButton label='Показать результат' />
            </form> */}

            {/* <AudioCard 
                title='Под обломками торгового центра в Денау найден второй погибший'
                src='/music.mp3'
            /> */}
        </div>
    );
}

export default Aside;
