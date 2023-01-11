import AudioPlayer from '../AudioPlayer';
import Flex from '../Flex';
import { HeadSetIcon } from '../icons';
import cls from './AudioCard.module.scss'

const AudioCard = () => {
    return (
        <div className={cls.card}>
            <Flex gap='10'>
                <h5 className={cls.card__type}>
                    <HeadSetIcon />
                    Аудио новости
                </h5>
                <h5 className={cls.card__category}>
                    Спорт
                </h5>
            </Flex>
            <h4 className={cls.card__title}>Под обломками торгового центра в Денау найден второй погибший</h4>
            <AudioPlayer src='/music.mp3' />
        </div>
    );
}

export default AudioCard;
