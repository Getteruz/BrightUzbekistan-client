import GreenButton from 'components/UI/Buttons/GreenButton';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useTranslation } from 'next-i18next';
import cls from './BookPopup.module.scss'

const BookPopup = ({
    onClickOutside,
    onOk = () => {}
}) => {
    const {t} = useTranslation('journal')
    const ref = useDetectClickOutside({onTriggered: onClickOutside})

    return (
        <div className={cls.popup}>
            <div className={cls.popup__wrapper} ref={ref}>
                <p>{t('Бесплатный доступ закончился. Вы должны подписаться, чтобы продолжить!')}</p>
                <GreenButton onClick={onOk}>
                    {t('Продолжить')}
                </GreenButton>
            </div>
        </div>
    );
}

export default BookPopup;
