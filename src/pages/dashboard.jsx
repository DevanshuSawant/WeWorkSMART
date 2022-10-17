import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import Navbar from "../components/navbar.jsx";
import DashboardCard from '../components/dashboard-card.jsx';
import Footer from "../components/footer.jsx";
import {dashboardData} from "../utils/dashboard-data.jsx";
import Container from "@mui/material/Container";


function Dashboard() {
    const dashboardItems = dashboardData.map(dashboard =>
        <DashboardCard 
            id={dashboard.id}
            text={dashboard.text}
            link={dashboard.link}
            icon={{ src: dashboard.icon.src, alt: dashboard.icon.alt  }}
        />
    );

    return (
        <>
            <Navbar />
            <Container maxWidth={false} >
                <div class="grid-container">
                    <Grid2 container rowSpacing={2} className="grid-item" columnSpacing={{ xs: 1 }}>
                        {dashboardItems}
                    </Grid2>
                </div>
            </Container>
            <Footer/>
        </>
    );
}

export default Dashboard;