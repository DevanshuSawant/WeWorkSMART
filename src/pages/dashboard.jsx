import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import Navbar from "../components/navbar.jsx";
import DashboardCard from '../components/dashboard-card.jsx';
import Footer from "../components/footer.jsx";


function Dashboard() {
    return (
        <>
            <Navbar />
            <div class="grid-container">
                <div class="grid-item">
                    <Grid2 container spacing={8}>
                        <DashboardCard 
                            text={"PUSH NOTIFICATIONS"}
                            link={"/notification-list"}
                            icon={{ src: "/Notification_icon.svg", alt: "Notifications", width: "55", height: "60"  }}
                        />
                        <DashboardCard 
                            text={"SURVEYS"}
                            link={"/survey-list"}
                            icon={{ src: "/Survey_icon.svg", alt: "Survey", width: "55", height: "60"  }}
                        />
                    </Grid2>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;