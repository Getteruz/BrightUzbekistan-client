import Image from 'next/image';
import { useQuery } from 'react-query';
import { CloseIcon } from 'components/UI/icons';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { adsClicked, adsViewed, getAds } from 'services/ads';
import useGetWindowWidth from 'hooks/useGetWindowWidth';
import cls from './Popup.module.scss'

const AdsPopup = () => {
    const ref = useRef()
    const windowWidth = useGetWindowWidth()
    const [isOpen, setIsOpen] = useState(false)
    const { ref: inViewRef, inView } = useInView({ threshold: 0.9, triggerOnce: true })
    const { data: ads } = useQuery(['ads', 'vip'], () => getAds('vip'), { placeholderData: {} })

    useEffect(() => {
        if (typeof window !== 'undefined' && ads?.id) {
            setIsOpen(true) 
        } else {    
            setIsOpen(false)
        }
    }, [ads])

    useEffect(() => {
        setTimeout(() => {
            if (isOpen && ads?.id) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'auto'
            }   
        }, 1)
    }, [isOpen])

    useEffect(() => {
        if (inView) {
            adsViewed(ads?.id)
        }
    }, [inView])

    const handleClickOutSide = (e) => {
        if (e.target !== ref.current) {
            setIsOpen(false)
        }
    }

    return isOpen ? (
        ads?.id ? (
            <div className={cls.ads} onClick={handleClickOutSide}>
                <div ref={inViewRef}>
                    <a
                        className={cls.ads__wrapper}
                        href={ads?.link}
                        target='_blank'
                        rel='noreferrer'
                        ref={ref}
                        id='ads_popup'
                        onClick={() => adsClicked(ads?.id)}
                    >
                        <Image
                            src={windowWidth > 550 ? ads?.imgUrl : ads?.imgMobileUrl}
                            layout='fill'
                            objectFit='cover'
                            alt='ads'
                        />
                    </a>
                    <button
                        className={cls.ads__wrapper__btn}
                        onClick={() => setIsOpen(false)}
                    >
                        <CloseIcon />
                    </button>
                </div>
            </div>
        ) : <></>
    ) : <></>;
}

export default AdsPopup;