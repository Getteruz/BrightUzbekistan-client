import { DownloadIcon } from 'components/UI/icons';
import cls from './DownloadButton.module.scss'

const DownloadButton = ({label = '', src = ''}) => {
    return (
        <a
            className={cls.btn}
            href={src}
            download
            target='_blank'
            rel="noreferrer"
        >
            <span>{label}</span>
            <DownloadIcon />
        </a>
    );
}

export default DownloadButton;
