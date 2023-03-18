import cls from './Markup.module.scss'

const Markup = ({html = ''}) => {
    function createMarkup(c) {
        return { __html: c };
    }
    return (
        <div dangerouslySetInnerHTML={createMarkup(html)} className={cls.markup}>
            
        </div>
    );
}

export default Markup;
