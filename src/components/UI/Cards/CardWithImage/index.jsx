import cls from './CardWithImage.module.scss'

const CardWithImage = () => {
    return (
        <div className={cls.card}>
            <h2 className={cls.card__title}></h2>
            <div className={cls.card__info}></div>
        </div>
    );
}

export default CardWithImage;
