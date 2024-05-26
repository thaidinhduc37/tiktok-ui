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
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fc0545bd988f2d80766228eb722da099~c5_100x100.jpeg?lk3s=a5d48078&nonce=18557&refresh_token=7b404884c53db49f859df67abe37275c&x-expires=1716904800&x-signature=NJAJtZjOytbED%2F%2BXLvD%2FYDoZptI%3D&shp=a5d48078&shcp=81f88b70"
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
