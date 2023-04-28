import GreenButton from 'components/UI/Buttons/GreenButton';
import Input from 'components/UI/Form/Input';
import InputWithMask from 'components/UI/Form/InputWithMask';
import { CloseIcon, SuccessIcon } from 'components/UI/icons';
import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useForm } from 'react-hook-form';
import { sendOrder } from 'services/bot';
import cls from './OrderForm.module.scss'

const OrderForm = ({
    onClose = () => { },
    onOk = () => { },
}) => {
    const { register, formState: { isValid }, handleSubmit, control } = useForm({ mode: 'onChange' })
    const [success, setSuccess] = useState()
    const [isLoading, setIsLoading] = useState()

    const submitForm = async (data) => {
        try {
            setIsLoading(true)
            const res = await sendOrder(data)

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
            <div className={cls.popup__wrapper}>
                <button className={cls.popup__btn} onClick={onClose}>
                    <CloseIcon />
                </button>
                <form className={cls.popup__form} onSubmit={handleSubmit(submitForm)}>
                    <h3 className={cls.popup__form__title}>Подписатся на выпуск</h3>
                    <span className={cls.popup__form__desc}>Подписывайтесь на новый выпуск журнала «Bright Uzbekistan», оставьте свои данные</span>
                    {!success ? <div className={cls.popup__form__inputs}>
                        <Input placeholder='Имя' name='firstName' register={{ ...register('firstName', { required: true }) }} />
                        <Input placeholder='Фамилия' name='lastName' register={{ ...register('lastName', { required: true }) }} />
                        <InputWithMask placeholder='+998' mask='+\9\9\8 (99) 999-99-99' name='phoneNumber' control={control} rules={{ required: true }} />
                        <Input placeholder='E-mail' name='email' register={{ ...register('email') }} />
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
                                Отправить
                            </GreenButton>
                        )
                    }
                </form>
            </div>
        </div>
    );
}

export default OrderForm;