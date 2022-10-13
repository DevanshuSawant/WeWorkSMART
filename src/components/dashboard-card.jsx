import { Paper } from '@mui/material';
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
export default function DashboardCard({ link, icon, text }) {
    return (
        <Grid2 item>
            <Link to={link} style={{ textDecoration: 'none' }}>
                <Paper elevation={3} className="card">
                    <img src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} className="card-icon" />
                    <Divider variant='middle' className="divider" />
                    <h6 className="card-text">{text}</h6>
                </Paper>
            </Link>
        </Grid2>
    );
}