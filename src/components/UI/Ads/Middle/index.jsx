import Image from 'next/image';
import { useEffect } from 'react';
import { adsActions } from 'store/Ads';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { adsClicked, adsViewed } from 'services/ads';
import useGetWindowWidth from 'hooks/useGetWindowWidth';
import cls from './Middle.module.scss'

const MiddleAds = ({
    id = '',
    link = '',
    imgUrl = '',
    imgMobileUrl = ''
}) => {
    const dispatch = useDispatch()
    const windowWidth = useGetWindowWidth()
    const adsStore = useSelector(state => state.ads)
    const { ref, inView } = useInView({ threshold: 0.9, triggerOnce: true })

    useEffect(() => {
        if (inView && !adsStore.includes(id)) {
            adsViewed(id)
            dispatch(adsActions.addAds(id))
        }
    }, [inView])

    if (!id) {
        return <></>
    } else {
        return (
            <a
                className={cls.ads}
                href={link}
                target='_blank'
                rel='noreferrer'
                ref={ref}
                onClick={() => adsClicked(id)}
            >
                <Image
                    src={windowWidth > 550 ? imgUrl : imgMobileUrl}
                    layout="fill"
                    objectFit='cover'
                    alt='ads'
                />
            </a>
        );
    }
}

export default MiddleAds;