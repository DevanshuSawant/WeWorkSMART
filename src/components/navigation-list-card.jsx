import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Divider from '@mui/material/Divider';

{/*
Component for cards on notification list,
EXAMPLE:-

<NotificationCard 
    name={"Test Notification"}
    reason={"Test Notification for analysis"}
    to={"All"}
    created={"Jul16 2022, 09:57 AM"}
    status={"Sent on Jul16 2022, 09:57AM"}
/>

*/}

export default function NotificationCard({ to, name, reason, created, status, id }) {
    return (
        <Grid2 item className="notification-card" key={id}>
            <img src="WeWorkSMART/Delete_icon.svg" alt="Delete" width="47px" height="47px" className="notification-card-icon" />
            <h4 className="notification-data-texth1">{name}</h4>
            <h5 className="notification-data-texth2">{reason}</h5>
            <h6 className="notification-header-text">For:</h6><h6 className="notification-data-text">{to}</h6>
            <h6 className="notification-header-text">Created:</h6><h6 className="notification-data-text">{created}</h6>
            <h6 className="notification-header-text">Status:</h6><h6 className="notification-data-text">{status}</h6>
            <Divider className="notification-divider" />
        </Grid2>
    );
}