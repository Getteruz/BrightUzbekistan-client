import Aside from 'components/UI/Aside/RightAside/Ads';
import GoToBack from 'components/UI/GoToBack';
import LayoutChildWrapper from 'components/UI/LayoutChildWrapper';
import ShareBanner from 'components/UI/ShareBanner';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import cls from './AboutUs.module.scss'

const tags = ['# Узбекистан', '# Таможня', '# Шавкат Мирзиёев.', '# Экономика']

const AboutUs = () => {
    const { t } = useTranslation('about')

    return (
        <LayoutChildWrapper asideComponent={<Aside />}>
            <GoToBack title={t('О проекте')} />
            <main className={cls.about}>
                <div className={cls.about__image}>
                    <Image
                        src='/Images/BrightUzbekistan.svg'
                        layout='fill'
                        objectFit='cover'
                        alt='Bright Uzbekistan foto'
                    />
                </div>
                <h1 className={cls.about__title}>{t('О проекте')}</h1>
                <p className={cls.about__desc}>{t('Описание')}</p>
                {/* <ShareBanner tags={tags} /> */}
            </main>
        </LayoutChildWrapper>

    );
}

export default AboutUs;
