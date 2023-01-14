import Flex from 'components/UI/Flex';
import Navigation from '../Navigation';
import cls from './GroupWrapper.module.scss'

const GroupWrapper = ({
    children,
    withNavigation = true,
    button = {},
    category = ''
}) => {
    return (
        <div className={cls.group}>
            {withNavigation && <Navigation {...button} title={category}/>}
            <Flex direction='column' gap='60'>
                {children}
            </Flex>
        </div>
    );
}

export default GroupWrapper;
