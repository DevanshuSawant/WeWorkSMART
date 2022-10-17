import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';


{/*
Component for cards on dashboard,
EXAMPLE:-

<DashboardCard 
text={"PUSH NOTIFICATIONS"}
link={"/notification-list"}
icon={{ src: "/Notification_icon.svg", alt: "Notifications", width: "55", height: "60"  }}
/>

*/}
export default function DashboardCard({ link, icon, text, id }) {
    return (
        <Grid2 item xs={12} sm={12} md={6} key={id}>
            <Link to={link} style={{ textDecoration: 'none' }}>
                <Paper elevation={3} className="dashboard-card">
                    <img src={icon.src} alt={icon.alt} width="55" height="60" className="card-icon" />
                    <Divider variant='middle' className="dashboard-divider" />
                    <h6 className="card-text">{text}</h6>
                </Paper>
            </Link>
        </Grid2>
    );
}