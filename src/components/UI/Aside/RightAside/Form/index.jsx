import dynamic from 'next/dynamic';
import BlackButton from 'components/UI/Buttons/BlackButton';
import GreyButton from 'components/UI/Buttons/GreyButton';
import NewsCard from 'components/UI/Cards/NewsCard';
import Flex from 'components/UI/Flex';
import Input from 'components/UI/Forms/Input';
import { RightArrows } from 'components/UI/icons';
import { useTranslation } from 'next-i18next';
import cls from './Aside.module.scss'
import JournalCarousel from 'components/UI/JournalCarousel';
import { useRouter } from 'next/router';

const Aside = ({ news = [] }) => {
    const { t } = useTranslation()
    const router = useRouter()

    return (
        <div className={cls.aside}>
            <Flex
                direction='column'
                gap='20'
            >
                {
                    news?.length > 0 && news?.map(news => (
                        <NewsCard
                            key={news?.id}
                            title={news?.title}
                            category={news?.mainCategory?.[router?.locale]}
                            date={news?.publishedDate || news?.updated_at}
                        />
                    ))
                }
            </Flex>

            <GreyButton
                icon={RightArrows}
                label={t('все новости')}
                style={{ margin: '36px 0' }}
                onClick={() => router.push('/last-news')}
            />

            {/* <form className={cls.aside__form}>
                <Input 
                    label={t('Поиск по сайту')}
                    placeholder={t('Поиск')}
                />
                <BlackButton label={t('Показать результат')} />
            </form> */}
            <JournalCarousel />
        </div>
    );
}

export default Aside;
