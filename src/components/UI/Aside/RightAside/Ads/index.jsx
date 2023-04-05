import DownloadButton from 'components/UI/Buttons/DownloadButton';
import InfoCard from 'components/UI/Cards/InfoCard';
import Flex from 'components/UI/Flex';
import Link from 'next/link';
import cls from './Ads.module.scss'

const Aside = () => {
    return (
        <div className={cls.cards__wrapper}>
            <InfoCard
                title='Для рекламодателей!'
                subtitle="If you keep moving in the right direction you'll get your dream or something better."
            >
                <DownloadButton label='Скачать медия кит' src='/media-kit.pdf' />
            </InfoCard>
            <InfoCard
                title='Полезные ссылки'
                subtitle="If you keep moving in the right direction you'll get your dream or something better."
            >
                <Flex gap='20' direction='column'>
                    <Link href='https://lex.uz'><a className={cls.link} target='_blank'>Lex.uz</a></Link>
                    <Link href='https://mygov.uz'><a className={cls.link} target='_blank'>mygov.uz</a></Link>
                    <Link href='https://prezident.uz'><a className={cls.link} target='_blank'>Preziden.uz</a></Link>
                </Flex>
            </InfoCard>
        </div>
    );
}

export default Aside;
