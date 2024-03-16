import classNames from 'classnames/bind';
import styles from './AccountsItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsrMGjK05vJFN4-9aKtCSD9Sv9-ukv49Pf3w&usqp=CAU"
                alt="Thuan"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Minh Thuan</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>NguyenMinhThuan</span>
            </div>
        </div>
    );
}

export default AccountsItem;
