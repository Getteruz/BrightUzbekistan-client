import React from 'react';

const Markup = ({html = ''}) => {
    function createMarkup(c) {
        return { __html: c };
    }
    return (
        <div dangerouslySetInnerHTML={createMarkup(html)}>
            
        </div>
    );
}

export default Markup;
