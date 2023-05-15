import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import cls from './Middle.module.scss'

const MiddleAds = () => {
    const { ref } = useInView({ threshold: 0.9 })

    if (false) {
        return <></>
    } else {
        return (
            <a
                className={cls.ads}
                href={'https://google.com'}
                target='_blank'
                rel='noreferrer'
                ref={ref}
            >
                <Image
                    src={'/ads/avto_lizing_short_banner.svg'}
                    layout="fill"
                    objectFit='cover'
                    alt='ads'
                />
            </a>
        );
    }
}

export default MiddleAds;