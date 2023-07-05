import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'next-i18next';
import Aside from 'components/UI/Aside/RightAside/Ads';
import GoToBack from 'components/UI/GoToBack';
import LayoutChildWrapper from 'components/UI/LayoutChildWrapper';
import cls from './AboutUs.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const AboutUs = () => {
    const { t } = useTranslation('about')

    return (
        <LayoutChildWrapper asideComponent={<Aside />}>
            <GoToBack title={t('О проекте')} />
            <main className={cls.about}>
                <Carousel 
                    showArrows={false} 
                    stopOnHover={false}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop 
                    autoPlay
                >
                    <div className={cls.about__image}>
                        <Image
                            src='/Images/BrightUzbekistan.png'
                            layout='fill'
                            objectFit='cover'
                            alt='Bright Uzbekistan foto'
                        />
                    </div>
                    <div className={cls.about__image}>
                        <Image
                            src='/Images/BrightUzbekistan.png'
                            layout='fill'
                            objectFit='cover'
                            alt='Bright Uzbekistan foto'
                        />
                    </div>
                </Carousel>
                <h1 className={cls.about__title}>{t('О проекте')}</h1>
                <p className={cls.about__desc} dangerouslySetInnerHTML={{ __html: t('Описание') }}></p>
            </main>
        </LayoutChildWrapper>

    );
}

export default AboutUs;
