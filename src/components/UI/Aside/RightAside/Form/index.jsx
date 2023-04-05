import AudioCard from 'components/UI/AudioCard';
import BlackButton from 'components/UI/Buttons/BlackButton';
import GreyButton from 'components/UI/Buttons/GreyButton';
import NewsCard from 'components/UI/Cards/NewsCard';
import Flex from 'components/UI/Flex';
import Input from 'components/UI/Forms/Input';
import { RightArrows } from 'components/UI/icons';
import JurnalCard from 'components/UI/JurnalCard/JurnalCard';
import cls from './Aside.module.scss'

const Aside = () => {
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

            </Flex>

            <GreyButton
                icon={RightArrows}
                label='все новости'
                style={{ margin: '36px 0' }}
            />

            <form className={cls.aside__form}>
                <Input
                    label='Поиск по сайту'
                    placeholder='Поиск'
                />
                <BlackButton label='Показать результат' />
            </form>

            {/* <AudioCard 
                title='Под обломками торгового центра в Денау найден второй погибший'
                src='/music.mp3'
            /> */}

            <JurnalCard />

        </div>
    );
}

export default Aside;
