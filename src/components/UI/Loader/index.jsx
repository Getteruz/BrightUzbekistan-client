import cls from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={cls.loader}>
            <div className={cls.loader__spin}>
            </div>
        </div>
    );
}

export default Loader;
