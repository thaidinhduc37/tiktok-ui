import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import {
    CoinIcon,
    HelpIcon,
    InboxIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon,
    ProfileIcon,
    SearchIcon,
    SettingsIcon,
    ShortcutsIcon,
    UploadIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng Việt' },
                { type: 'language', code: 'ko', title: '한국어' },
                { type: 'language', code: 'ar', title: 'عربي' },
                { type: 'language', code: 'zh', title: '中文' },
                { type: 'language', code: 'fr', title: 'Français' },
                { type: 'language', code: 'it', title: 'Italiano' },
                { type: 'language', code: 'es', title: 'Español' },
                { type: 'language', code: 'de', title: 'Deutsch' },
                { type: 'language', code: 'ja', title: '日本語' },
                { type: 'language', code: 'ru', title: 'Русский' },
                { type: 'language', code: 'pt', title: 'Português' },
                { type: 'language', code: 'th', title: 'ไทย' },
                { type: 'language', code: 'hi', title: 'हिन्दी' },
                { type: 'language', code: 'bn', title: 'বাংলা' },
                { type: 'language', code: 'pl', title: 'Polski' },
                { type: 'language', code: 'nl', title: 'Nederlands' },
                { type: 'language', code: 'tr', title: 'Türkçe' },
                { type: 'language', code: 'sv', title: 'Svenska' },
                { type: 'language', code: 'da', title: 'Dansk' },
                { type: 'language', code: 'fi', title: 'Suomi' },
                { type: 'language', code: 'no', title: 'Norsk' },
                { type: 'language', code: 'el', title: 'Ελληνικά' },
                { type: 'language', code: 'he', title: 'עברית' },
                { type: 'language', code: 'hu', title: 'Magyar' },
                { type: 'language', code: 'cs', title: 'Čeština' },
                { type: 'language', code: 'sk', title: 'Slovenčina' },
                { type: 'language', code: 'ro', title: 'Română' },
                { type: 'language', code: 'uk', title: 'Українська' },
                { type: 'language', code: 'bg', title: 'Български' },
                { type: 'language', code: 'hr', title: 'Hrvatski' },
                { type: 'language', code: 'sr', title: 'Српски' },
                { type: 'language', code: 'sl', title: 'Slovenščina' },
                { type: 'language', code: 'lt', title: 'Lietuvių' },
                { type: 'language', code: 'lv', title: 'Latviešu' },
                { type: 'language', code: 'et', title: 'Eesti' },
            ],
        },
    },
    {
        icon: <HelpIcon />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <ShortcutsIcon />,
        title: 'Bàn phím tắt',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change to language
                break;
            default:
            //
        }
    };

    const userMenu = [
        {
            icon: <ProfileIcon />,
            title: 'Xem hồ sơ',
            to: '/@hoa',
        },
        {
            icon: <CoinIcon />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <SettingsIcon />,
            title: 'Cài đặt',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Tải lên video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Tin nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Hộp thư" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>+ Tải lên</Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fc0545bd988f2d80766228eb722da099~c5_100x100.jpeg?lk3s=a5d48078&nonce=18557&refresh_token=7b404884c53db49f859df67abe37275c&x-expires=1716904800&x-signature=NJAJtZjOytbED%2F%2BXLvD%2FYDoZptI%3D&shp=a5d48078&shcp=81f88b70"
                                alt="Đào Lê Phương Hoa"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
