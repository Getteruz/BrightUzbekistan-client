import GreenButton from 'components/UI/Buttons/GreenButton';
import { useDetectClickOutside } from 'react-detect-click-outside';
import cls from './BookPopup.module.scss'

const BookPopup = ({
    onClickOutside,
    onOk = () => {}
}) => {
    const ref = useDetectClickOutside({onTriggered: onClickOutside})

    return (
        <div className={cls.popup}>
            <div className={cls.popup__wrapper} ref={ref}>
                <p>Бесплатный доступ закончился. Вы должны подписаться, чтобы продолжить!</p>
                <GreenButton onClick={onOk}>
                    Продолжить
                </GreenButton>
            </div>
        </div>
    );
}

export default BookPopup;
