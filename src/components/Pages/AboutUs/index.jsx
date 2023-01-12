import GoToBack from 'components/UI/GoToBack';
import LayoutChildWrapper from 'components/UI/LayoutChildWrapper';
import ShareBanner from 'components/UI/ShareBanner';
import Image from 'next/image';
import cls from './AboutUs.module.scss'

const tags = ['# Узбекистан', '# Таможня', '# Шавкат Мирзиёев.', '# Экономика']

const AboutUs = () => {
    return (
        <LayoutChildWrapper>
            <GoToBack title='Последние новости' />
            <main className={cls.about}>
                <div className={cls.about__image}>
                    <Image
                        src='/BrightUzbekistan.png'
                        layout='fill'
                        objectFit='cover'
                        alt='Bright Uzbekistan foto'
                    />
                </div>
                <h1 className={cls.about__title}>Bright Uzbekistan tashkiloti haqida</h1>
                <p className={cls.about__desc}>
                    "Top Business Group" kompaniyasi 2008 yildan buyon nashriyot faoliyati bilan shug'ullanadi, "Top Business", "iste'molchi-istiqbolli" biznes - jurnallari va SMM reklama sohasida xizmat ko'rsatuvchi "ELEVATE" platformasi orqali ishbilarmon doiralarida keng tanilgan.
                    <br />
                    <br />
                    12 yil mobaynida kompaniya uzoqni ko'zlagan rahbariyat va "Top Business Group" jamoasi tufayli sezilarli muvaffaqiyatlarga erishdi va faol rivojlanishda davom etmoqda - bu ishga tushirilgan "Bright Uzbekistan" yangi loyihasi bilan hamohangdir.
                    <br />
                    <br />
                    "Bright Uzbekistan" uchta yo'nalish – eksport, import va investitsiyalarni o'z ichiga oladi. Jurnalda O'zbekistonning investitsiya loyihalari, kompaniyalar faoliyati va rahbarlarning muvaffaqiyatli sirlari haqida ma'lumot mavjud. O'zbekistonning iqtisodiy faoliyatini eksport qilish, import qilish va tahlil qilish to'g'risidagi ma'lumotnomalar ham jurnal sahifalarida chop etilgan. Qo'shimcha ma'lumotlar "Facebook", "Youtube", "Instagram" ijtimoiy tarmoqlarida va "Telegram" yangiliklar kanalida hamda "Bright Uzbekistan" veb-saytida joylashtirilgan.
                    <br />
                    <br />
                    "Bright Uzbekistan" jurnali UzAirways samolyotlari va yuqori tezlikdagi Afrosiyob poyezdlarida, mehmonxonalarda, xalqaro ko'rgazmalarda, respublikamizning MDH, Yevropa, Osiyo va Amerika davlatlaridagi elchixonalari orqali tarqatiladi.
                    "Bright Uzbekistan" loyihasi O'zbekistonning eksport, import va investitsiya faoliyati, hamkorlarimiz haqida fikr olish, o'z biznesini jahon miqyosida namoyish etish, yangi, uzoq kutilgan shartnomalar tuzish va yetkazib berish geografiyasini kengaytirish uchun ajoyib imkoniyatdir. Loyihaning asosiy vazifasi - O'zbekistonda biznes yuritish shartlari haqida gapirish, o'zbek ishbilarmonlarining haqiqiy ijobiy obrazini namoyish etish, xorijiy investorlar e'tiborini jalb qilish, manfaatlarni birlashtirish va yagona biznes loyihalarda hamkorlik aloqalarini kengaytirish va mustahkamlashga xizmat qilishdir.
                </p>
                <ShareBanner tags={tags} />
            </main>
        </LayoutChildWrapper>

    );
}

export default AboutUs;
