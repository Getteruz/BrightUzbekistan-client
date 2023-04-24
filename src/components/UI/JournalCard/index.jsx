import Image from 'next/image';
import { useRouter } from 'next/router';
import WhiteButton from '../Buttons/WhiteButton';
import { DownloadSoftwareIcon, EyeIcon } from '../icons';
import cls from './JournalCard.module.scss'

const JournalCard = ({
    id = '',
    image = '',
    title = '',
    desc = ''
}) => {
    const router = useRouter()

    return (
        <div className={cls.card}>
            <div className={cls.card__img}>
                <Image 
                    src={image}
                    layout='fill'
                    objectFit='cover'
                    alt={title}
                />
            </div>
            <div className={cls.card__info}>
                <h3 className={cls.card__title}>{title}</h3>
                <p className={cls.card__desc}>{desc}</p>
                <div className={cls.card__btns}>
                    <WhiteButton onClick={() => router.push(`/journal/${id}`)}>
                        <EyeIcon /> Интро
                    </WhiteButton>
                    <WhiteButton>
                        <DownloadSoftwareIcon />
                        Заказать журнал
                    </WhiteButton>
                </div>
            </div>
        </div>
    );
}

export default JournalCard;
