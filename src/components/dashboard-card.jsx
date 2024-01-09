import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import {theme} from "../utils/theme.jsx";
import Typography from '@mui/material/Typography';

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
        <Link to={link} style={{ textDecoration: 'none' }}>
            <Paper elevation={3} className="dashboard-card" >
                <img src={icon.src} alt={icon.alt} width="55" height="60" className="card-icon"  />
                <Divider variant='middle' sx={{ marginLeft: '21.5px', marginRight: '21.5px', borderBottomWidth: 2, color: theme.palette.primary.light, borderColor: theme.palette.primary.light, paddingTop: "19.5px" }} />
                <Typography variant="h1" className="card-text" marginTop="14.5px" color="theme.pallete.primary.dark">{text}</Typography>
            </Paper>
        </Link>
    );
}