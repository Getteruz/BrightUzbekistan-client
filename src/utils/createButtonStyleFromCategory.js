const createButtonStyleFromCategory = (ctg) => {
    switch (ctg?.toLowerCase()) {
        case 'последние новости': return { color: 'rgba(0, 26, 255, 1)', label: 'последние новости' };
        case 'мировые': return { color: 'rgba(243, 80, 52, 1)', label: 'все мировые новости' };
        case 'узбекистан': return { color: 'rgba(0, 102, 255, 1)', label: 'все новости Узбекистана' };
        case 'политика': return { color: 'rgba(255, 0, 229, 1)', label: 'все новости политики' };
        case 'экономика': return { color: 'rgba(181, 96, 17, 1)', label: 'все новости экономики' };
        case 'бизнес': return { color: 'rgba(0, 175, 255, 1)', label: 'все новости бизнес направлении' };
        case 'общество': return { color: 'rgba(158, 0, 255, 1)', label: 'все новости общество' };
        case 'спорт': return { color: 'rgba(20, 192, 141, 1)', label: 'все новости спорта' };
        default: return { color: 'rgba(0, 26, 255, 1)', label: 'последние новости' };
    }
}

export default createButtonStyleFromCategory