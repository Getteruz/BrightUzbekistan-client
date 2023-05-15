import Image from 'next/image';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import useGetWindowWidth from 'hooks/useGetWindowWidth';
import { adsClicked, adsViewed, getAds } from 'services/ads';
import cls from './Top.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { adsActions } from 'store/Ads';

const TopAds = ({ }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const windowWidth = useGetWindowWidth()
    const adsStore = useSelector(state => state.ads)
    const { ref, inView } = useInView({ threshold: 0.9, triggerOnce: true })
    const { data: ads, refetch } = useQuery(['ads', 'top'], () => getAds('top'), { placeholderData: {} })

    useEffect(() => {
        if (inView && !adsStore.includes(ads?.id)) {
            adsViewed(ads?.id)
            dispatch(adsActions.addAds(ads?.id))
        }
    }, [inView])

    useEffect(() => {
        refetch()
    }, [router?.asPath])

    if (!ads?.id) {
        return <></>
    } else {
        return (
            <a
                className={cls.ads}
                href={ads?.link}
                target='_blank'
                rel='noreferrer'
                ref={ref}
                onClick={() => adsClicked(ads?.id)}
            >
                <Image
                    src={windowWidth > 550 ? ads?.imgUrl : ads?.imgMobileUrl}
                    layout='fill'
                    objectFit='cover'
                    alt='ads'
                />
            </a>
        );
    }
}

export default TopAds;
