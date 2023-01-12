import RightAside from '../RightAside';
import cls from './LayoutChildWrapper.module.scss';

const LayoutChildWrapper = ({children, asideComponent}) => {
    return (
        <>
            <div className={cls.layout__main__content}>
                {children}
            </div>
            <div className={cls.layout__main__aside}>
                <RightAside>
                    {asideComponent}
                </RightAside>
            </div>
        </>
    );
}

export default LayoutChildWrapper;
