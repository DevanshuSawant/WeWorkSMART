import Breadcrumbs from '@mui/material/Breadcrumbs';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import NotificationCard from "../components/navigation-list-card.jsx";
import Divider from '@mui/material/Divider';
import {notificationData} from "../utils/notification-data.jsx";
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';


function NotificationList() {
  const notificationItems = notificationData.map(notification =>
    <NotificationCard
      id={notification.id}
      name={"Test Notification"}
      reason={"Test Notification for analysis"}
      to={"All"}
      created={"Jul16 2022, 09:57 AM"}
      status={"Sent on Jul16 2022, 09:57AM"}
    />
  );

  return (
    <>
      <Navbar />
      <div >
        <Breadcrumbs aria-label="breadcrumb" className="breadcrumb" separator=">" height="6vh" color="#B8B6B6">
          <Link to="/" color="inherit" className="breadcrumb-back" style={{ textDecoration: 'none' }} >
            <img src="WeWorkSMART/home-icon.svg" alt="Home" width="24" height="21"/> <h6 className="breadcrumb-previous">&nbsp;&nbsp;Home</h6>
          </Link>
          <h6 className="breadcrumb-current">PUSH NOTIFICATIONS</h6>
        </Breadcrumbs>
        <div class="notification-grid-container">
          <div class="notification-grid-item">
            <Paper elevation={3} className="notification-list" >
              <h1 className="notification-list-title">Push Notifications</h1>
              <Divider className="notification-divider" />
              {notificationItems}
            </Paper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
 
export default NotificationList;