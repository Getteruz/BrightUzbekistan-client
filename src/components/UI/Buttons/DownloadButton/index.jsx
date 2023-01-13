import { DownloadIcon } from 'components/UI/icons';
import cls from './DownloadButton.module.scss'

const DownloadButton = ({label = ''}) => {
    return (
        <a 
            className={cls.btn}
            href='/Example.docx'
            download
        >
            <span>{label}</span>
            <DownloadIcon />
        </a>
    );
}

export default DownloadButton;
