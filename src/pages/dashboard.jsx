import DashboardCard from '../components/dashboard-card.jsx';
import {dashboardData} from "../utils/dashboard-data.jsx";
import { ThemeProvider } from "@mui/material/styles";
import {theme} from "../utils/theme.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";


function Dashboard() {
    const dashboardItems = dashboardData.map(dashboard =>
        <div className="grid-item" >                    
            <DashboardCard 
                id={dashboard.id}
                text={dashboard.text}
                link={dashboard.link}
                icon={{ src: dashboard.icon.src, alt: dashboard.icon.alt  }}
            />
        </div>
    );

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <div className="grid-container-container">
                <div class="grid-container">
                    {dashboardItems}
                </div>
            </div>
            <Footer />
        </ThemeProvider>
    );
}

export default Dashboard;