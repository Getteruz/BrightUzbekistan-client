import cls from './InfoCard.module.scss'

const InfoCard = ({
    title = '',
    subtitle = '',
    children
}) => {
    return (
        <div className={cls.card}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            {children}
        </div>
    );
}

export default InfoCard;
