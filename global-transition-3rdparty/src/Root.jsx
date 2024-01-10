import { Link, Outlet, useNavigation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
    barColors: {
        "0": "#ff7f50",
        "1.0": "#ff7f50"
    },
    barThickness: 5,
    shadowBlur: 2
});

export default function Root() {
    const navigation = useNavigation();

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/somepage" className="nav-link">SomePage</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/anotherpage" className="nav-link">AnotherPage</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        
            {/* Loading indicator will apply for all child routes */}
            { navigation.state == "loading" ? <TopBarProgress /> : <Outlet /> }
        </>
    );
}