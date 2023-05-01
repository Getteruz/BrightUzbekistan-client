import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { DownloadJournalIcon, NotificationIcon, ShareIcon } from '../icons';
import Progress from '../Progress';
import cls from './JournalCarousel.module.scss'

const journalCount = 2

const JournalCarousel = () => {
    const { t } = useTranslation()
    const [currentJournal, setCurrentJournal] = useState(1)
    const first = useRef()
    const second = useRef()

    const image = {
        1: '/Images/erdogan.png',
        2: '/Images/mirziyoyev.png'
    }
    const onEnd = () => {
        setCurrentJournal(state => state + 1 <= journalCount ? state + 1 : 1)
    }

    useEffect(() => {
        first.current?.classList?.add(cls.firstAnimation)
        second.current?.classList?.add(cls.secondAnimation)
        setTimeout(() => {
            first.current?.classList?.remove(cls.firstAnimation)
            second.current?.classList?.remove(cls.secondAnimation)
        }, 500)
    }, [currentJournal])

    return (
        <div className={cls.carousel}>
            <div className={cls.carousel__info}>
                <div className={cls.carousel__img}>
                    <div className={cls.carousel__firstImage} ref={first}>
                        <Link href={`/journal/${currentJournal}`}>
                            <div className={cls.image}>
                                <Image
                                    src={image?.[currentJournal]}
                                    layout='fill'
                                    objectFit='cover'
                                    alt='d'
                                />
                            </div>
                        </Link>
                    </div>
                    <div className={cls.carousel__secondImage} ref={second}>
                        <Link href={`/journal/${currentJournal !== 1 ? currentJournal - 1 : journalCount}`}>
                            <div className={cls.image}>
                                <Image
                                    src={currentJournal !== 1 ? image?.[currentJournal - 1] : image?.[journalCount]}
                                    layout='fill'
                                    objectFit='cover'
                                    alt='d'
                                />
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <Progress className={cls.carousel__progress} onEnd={onEnd} duration={20} />
                    <span className={cls.carousel__text}>{t('Выпуск')}: 10.01.2023</span>
                </div>
            </div>
            <div className={cls.carousel__btns}>
                <button className={cls.carousel__btn}>
                    <NotificationIcon />
                </button>
                <button className={cls.carousel__btn}>
                    <ShareIcon />
                </button>
                <button className={cls.carousel__btn}>
                    <DownloadJournalIcon />
                </button>
            </div>
        </div>
    );
}

export default JournalCarousel;
