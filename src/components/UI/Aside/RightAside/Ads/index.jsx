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
                subtitle="Медакит для размещения модульных реклам и пиар статьей в журнале Bright Uzbekistan"
            >
                <DownloadButton label='Скачать медия кит' src='/media-kit.pdf' />
            </InfoCard>
            <InfoCard
                title='Полезные ссылки'
                subtitle="Проект Bright Uzbekistan осуществляется при поддержке Администрации Президента Республики Узбекистан, Министерства инвестиций, промышленности и торговли и Агентства стратегических Реформ при Президенте Республики Узбекистан."
            >
                <Flex gap='10' direction='column'>
                    <Link href='https://president.uz'><a className={cls.link} target='_blank'>www.president.uz</a></Link>
                    <Link href='https://miit.uz'><a className={cls.link} target='_blank'>www.miit.uz</a></Link>
                    <Link href='https://pasr.gov.uz'><a className={cls.link} target='_blank'>www.asr.gov.uz</a></Link>
                </Flex>
            </InfoCard>

        </div>
    );
}

export default Aside;
