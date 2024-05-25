import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src=" https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=30310797&nonce=73282&refresh_token=4151020d6c914f4a9d2273a528c35920&x-expires=1716534000&x-signature=ylHx%2BBoVEcwKpPZGvu5nqeCUAhc%3D&shp=30310797&shcp=811c9dc5"
                alt="Hoaa"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>hoaa.hanasii</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Đào Lê Phương Hoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
