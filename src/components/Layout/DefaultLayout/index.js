import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                {/* 19:39 */}
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
