import useGetSize from 'hooks/useGetSize';
import useGetWindowWidth from 'hooks/useGetWindowWidth';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';
import RightAside from '../Aside/RightAside';
import MobileNavbar from '../MobileNavbar';
import Navbar from '../Navbar';
import Rate from '../Rate';
import cls from './LayoutChildWrapper.module.scss';

const LayoutChildWrapper = ({ children, asideComponent }) => {
    const { width } = useGetSize('main')
    const windowWidth = useGetWindowWidth()
    const queryClient = useQueryClient()
    const router = useRouter()
    const rate = queryClient.getQueryData('rate')

    return (
        <>
            <div className={cls.layout__main__content} id='main'>
                <div className={cls.layout__main__content__nav}>
                    <Navbar />
                </div>
                {router.pathname === '/' && windowWidth < 670 && <Rate rate={rate} />}
                <div className={cls.layout__main__mobile__nav}>
                    <MobileNavbar />
                </div>
                {children}
            </div>
            <div className={cls.layout__main__aside} style={{maxWidth: `calc(100% - ${width}px)`}}>
                <RightAside>
                    {asideComponent}
                </RightAside>
            </div>
        </>
    );
}

export default LayoutChildWrapper;
