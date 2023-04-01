import Flex from 'components/UI/Flex';
import { useGetWindowWidth } from 'hooks/useGetWindowWith';
import Navigation from '../Navigation';
import cls from './GroupWrapper.module.scss'

const GroupWrapper = ({
    children,
    withNavigation = true,
    button = {},
    category = ''
}) => {
    const windowWidth = useGetWindowWidth()
    return (
        <div className={cls.group}>
            {withNavigation && <Navigation {...button} title={category} />}
            <Flex direction='column' gap={windowWidth > 500 ? "60" : '25'}>
                {children}
            </Flex>
        </div>
    );
}

export default GroupWrapper;
