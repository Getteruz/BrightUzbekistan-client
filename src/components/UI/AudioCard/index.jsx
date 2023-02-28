import AudioPlayer from '../AudioPlayer';
import Flex from '../Flex';
import { HeadSetIcon } from '../icons';
import cls from './AudioCard.module.scss'

const AudioCard = ({
    title = '',
    category = '',
    src = ''
}) => {
    return (
        <div className={cls.card}>
            <Flex gap='10'>
                <h5 className={cls.card__type}>
                    <HeadSetIcon />
                    Аудио новости
                </h5>
                {category && <h5 className={cls.card__category}>{category}</h5>}
            </Flex>
            <h4 className={cls.card__title}>{title}</h4>
            <AudioPlayer src={src} />
        </div>
    );
}

export default AudioCard;
