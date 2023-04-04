const createButtonStyleFromCategory = (ctg) => {
    switch (ctg) {
        case 'сунги янгиликлар': return { color: 'rgba(0, 26, 255, 1)', label: 'сунги янгиликлар' };
        case 'Hot news': return { color: 'rgba(0, 26, 255, 1)', label: 'Hot news' };
        case 'Последние новости': return { color: 'rgba(0, 26, 255, 1)', label: 'последние новости' };
        case 'So\'ngi yangiliklar': return { color: 'rgba(0, 26, 255, 1)', label: 'So\'ngi yangiliklar' };

        case 'Мир': return { color: 'rgba(243, 80, 52, 1)', label: 'все мировые новости' };
        case 'Dunyo': return { color: 'rgba(243, 80, 52, 1)', label: 'dunyo yangiliklari' };
        case 'World': return { color: 'rgba(243, 80, 52, 1)', label: 'all world news' };
        case 'дунё': return { color: 'rgba(243, 80, 52, 1)', label: 'дунё янгиликлари' };

        case 'O\'zbekiston': return { color: 'rgba(0, 102, 255, 1)', label: 'Ozbekiston yangiliklari' };
        case 'Uzbekistan': return { color: 'rgba(0, 102, 255, 1)', label: 'uzbekistan news' };
        case 'Узбекистане': return { color: 'rgba(0, 102, 255, 1)', label: 'все новости Узбекистана' };
        case 'узбекистан': return { color: 'rgba(0, 102, 255, 1)', label: 'Узбекистон янгиликлари' };

        case 'Siyosiy': return { color: 'rgba(255, 0, 229, 1)', label: 'Siyosiy yangiliklar' };
        case 'Political': return { color: 'rgba(255, 0, 229, 1)', label: 'Political news' };
        case 'политика': return { color: 'rgba(255, 0, 229, 1)', label: 'все новости политики' };
        case 'Сиёсий': return { color: 'rgba(255, 0, 229, 1)', label: 'Сиёсий янгиликлар' };

        case 'Iqtisodiyot': return { color: 'rgba(181, 96, 17, 1)', label: 'Iqtisodiyot yangiliklari' };
        case 'Economy': return { color: 'rgba(181, 96, 17, 1)', label: 'Economic news' };
        case 'экономика': return { color: 'rgba(181, 96, 17, 1)', label: 'все новости экономики' };
        case 'Иктисодиёт': return { color: 'rgba(181, 96, 17, 1)', label: 'Иктисодиёт zyubkbrkfhb' };

        case 'Biznes': return { color: 'rgba(0, 175, 255, 1)', label: 'Bizness yangiliklari' };
        case 'Business': return { color: 'rgba(0, 175, 255, 1)', label: 'Business news' };
        case 'Бизнес': return { color: 'rgba(0, 175, 255, 1)', label: 'все новости бизнес направлении' };

        case 'Jamiyat': return { color: 'rgba(158, 0, 255, 1)', label: 'Jamiyat yangiliklari' };
        case 'Society': return { color: 'rgba(158, 0, 255, 1)', label: 'Society news' };
        case 'Общество': return { color: 'rgba(158, 0, 255, 1)', label: 'все новости Общества' };
        case 'Жамият': return { color: 'rgba(158, 0, 255, 1)', label: 'Жамият янгиликлари' };

        case 'Sport': return { color: 'rgba(20, 192, 141, 1)', label: 'sport yangiliklari' };
        case 'Спорт': return { color: 'rgba(20, 192, 141, 1)', label: 'все новости спорта' };

        case 'Foydali': return { color: 'rgba(20, 192, 141, 1)', label: 'Foydali yangiliklar' };
        case 'Useful': return { color: 'rgba(20, 192, 141, 1)', label: 'Userful news' };
        case 'Полезна': return { color: 'rgba(20, 192, 141, 1)', label: 'Полезные новости' };
        case 'Фойдалий': return { color: 'rgba(20, 192, 141, 1)', label: 'Фойдалий янгиликлар' };

        case 'Intervyu': return { color: 'rgba(20, 192, 141, 1)', label: 'Intervyu' };
        case 'Interview': return { color: 'rgba(20, 192, 141, 1)', label: 'Interview' };
        case 'Интервью': return { color: 'rgba(20, 192, 141, 1)', label: 'Интервью' };

        case 'hamkorlik': return { color: 'rgba(20, 192, 141, 1)', label: 'hamkorlik' };
        case 'partnership': return { color: 'rgba(20, 192, 141, 1)', label: 'partnership' };
        case 'Партнёрство': return { color: 'rgba(20, 192, 141, 1)', label: 'Партнёрство' };
        case 'Хамкорлик': return { color: 'rgba(20, 192, 141, 1)', label: 'Хамкорлик' };

        case 'Statistika': return { color: 'rgba(20, 192, 141, 1)', label: 'Statistika' };
        case 'Statistics': return { color: 'rgba(20, 192, 141, 1)', label: 'Statistics' };
        case 'Статистика': return { color: 'rgba(20, 192, 141, 1)', label: 'Статистика' };
        
        case 'IT va texnologiya': return { color: 'rgba(20, 192, 141, 1)', label: 'IT va texnologiya yngiliklari' };
        case 'IT and Technology': return { color: 'rgba(20, 192, 141, 1)', label: 'IT and Technology news' };
        case 'IT и Технологии': return { color: 'rgba(20, 192, 141, 1)', label: 'Все новости IT и Технологии' };
        case 'IT и Технология': return { color: 'rgba(20, 192, 141, 1)', label: 'IT и Технология янгиликлари' };

        default: return { color: 'rgba(0, 26, 255, 1)', label: ctg };
    }
}

export default createButtonStyleFromCategory