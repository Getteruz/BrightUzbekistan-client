import Link from 'next/link';
import useGetSize from 'hooks/useGetSize';
import Container from '../Container';
import Flex from '../Flex';
import { links, rules } from './data';
import cls from './Footer.module.scss'
import { useTranslation } from 'next-i18next';
import useGetWindowWidth from 'hooks/useGetWindowWidth';
import { GetterLogo } from '../icons';
import { categories, contacts } from '../Banner/data';
import NavLink from '../NavLink';
import { useRouter } from 'next/router';


const Footer = () => {
    const { width } = useGetSize('leftAside')
    const windowWidth = useGetWindowWidth()
    const router = useRouter()
    const { t } = useTranslation()

    return (
        <footer className={cls.footer}>
            <Container className={cls.footer__container} maxWidth={1200} margin={windowWidth > 1324 ? `0 0 0 ${width}px !important` : ''} >
                <div className={cls.banner__footer}>
                    <div className={cls.banner__categories}>
                        {
                            categories?.length > 0 && categories.map(ctg => (
                                <NavLink
                                    key={ctg.id}
                                    label={t(ctg.label)}
                                    link={ctg.link}
                                    isActive={router.asPath == ctg.link + '/'}
                                    activeColor="#F3715B"
                                />
                            ))
                        }
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flexShrink: 0 }}>
                        {
                            contacts?.length > 0 && contacts.map(link => (
                                <a
                                    className={cls.banner__link}
                                    href={link.link}
                                    target='_blank'
                                    rel='noreferrer'
                                    key={link.id}
                                >
                                    {link.icon}
                                    {link.label}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
