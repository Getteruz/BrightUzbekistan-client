import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import GreenButton from 'components/UI/Buttons/GreenButton';
import Input from 'components/UI/Form/Input';
import InputWithMask from 'components/UI/Form/InputWithMask';
import { CloseIcon, SuccessIcon } from 'components/UI/icons';
import { sendOrder } from 'services/bot';
import cls from './OrderForm.module.scss'
import { journals } from 'components/Pages/Journals/data';
import Loader from 'components/UI/Loader';

const OrderForm = ({
    onClose = () => { },
    onOk = () => { },
}) => {
    const router = useRouter()
    const { t } = useTranslation('journal')
    const [success, setSuccess] = useState()
    const [isLoading, setIsLoading] = useState()
    const { register, formState: { isValid }, handleSubmit, control } = useForm({ mode: 'onChange' })

    const submitForm = async (data) => {
        try {
            setIsLoading(true)
            const res = await sendOrder({
                ...data,
                title: journals?.filter(journal => journal.id == router?.query?.id)?.[0]?.title
            })

            if (res?.ok === true) {
                setSuccess(true)
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={cls.popup}>
            {isLoading && <Loader />}
            <div className={cls.popup__wrapper}>
                <button className={cls.popup__btn} onClick={onClose}>
                    <CloseIcon />
                </button>
                <form className={cls.popup__form} onSubmit={handleSubmit(submitForm)}>
                    <h3 className={cls.popup__form__title}>{t('Подписатся на выпуск')}</h3>
                    <span className={cls.popup__form__desc}>{t('Подписывайтесь на новый выпуск журнала «Bright Uzbekistan», оставьте свои данные')}</span>
                    {!success ? <div className={cls.popup__form__inputs}>
                        <Input placeholder={t('Имя')} name='firstName' register={{ ...register('firstName', { required: true }) }} />
                        <Input placeholder={t('Фамилия')} name='lastName' register={{ ...register('lastName', { required: true }) }} />
                        <InputWithMask placeholder='+998' mask='+\9\9\8 (99) 999-99-99' name='phoneNumber' control={control} rules={{ required: true }} />
                        <Input placeholder='E-mail' name='email' register={{ ...register('email', { pattern: /^\S+@\S+$/i }) }} />
                    </div> : (
                        <div className={cls.success}>
                            <SuccessIcon />
                        </div>
                    )}
                    {
                        success ? (
                            <GreenButton
                                className={cls.popup__form__btn}
                                onClick={onOk}
                            >
                                Ok
                            </GreenButton>

                        ) : (
                            <GreenButton
                                className={cls.popup__form__btn}
                                disabled={!isValid}
                                type='submit'
                            >
                                {t('Отправить')}
                            </GreenButton>
                        )
                    }
                </form>
            </div>
        </div>
    );
}

export default OrderForm;
