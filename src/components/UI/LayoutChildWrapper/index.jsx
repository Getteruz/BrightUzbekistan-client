import useGetSize from 'hooks/useGetSize';
import RightAside from '../Aside/RightAside';
import Navbar from '../Navbar';
import cls from './LayoutChildWrapper.module.scss';

const LayoutChildWrapper = ({ children, asideComponent }) => {
    const { width } = useGetSize('main')

    return (
        <>
            <div className={cls.layout__main__content} id='main'>
                <div className={cls.layout__main__content__nav}>
                    <Navbar />
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
