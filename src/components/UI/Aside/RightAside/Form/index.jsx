import AudioCard from 'components/UI/AudioCard';
import BlackButton from 'components/UI/Buttons/BlackButton';
import GreyButton from 'components/UI/Buttons/GreyButton';
import NewsCard from 'components/UI/Cards/NewsCard';
import Flex from 'components/UI/Flex';
import Input from 'components/UI/Forms/Input';
import { RightArrows } from 'components/UI/icons';
import { useTranslation } from 'next-i18next';
import cls from './Aside.module.scss'

const Aside = () => {
    const { t } = useTranslation()

    return (
        <div className={cls.aside}>
            <Flex
                direction='column'
                gap='20'
            >
                <NewsCard 
                    title='«Моя цель — чтобы люди спокойно входили в дом, не запирая машины», — президент о безопасности'
                    category='Спорт'
                    date='12 Fevral  2021'
                />
                <NewsCard 
                    title='Мирзиёев анонсировал ряд изменений в таможенной сфере'
                    category='Узбекистан'
                    date='12 Fevral  2021'
                />
            </Flex>

            <GreyButton 
                icon={RightArrows}
                label={t('все новости')}
                style={{margin: '36px 0'}}
            />

            <form className={cls.aside__form}>
                <Input 
                    label={t('Поиск по сайту')}
                    placeholder={t('Поиск')}
                />
                <BlackButton label={t('Показать результат')} />
            </form>

            <AudioCard 
                title='Под обломками торгового центра в Денау найден второй погибший'
                src='/music.mp3'
            />
        </div>
    );
}

export default Aside;
