import Navbar from "../components/navbar.jsx";
import { Breadcrumbs, Paper } from "@mui/material";
import { Link } from 'react-router-dom';
import NotificationCard from "../components/list-card.jsx";
import { Divider } from "@mui/material";
import Footer from "../components/footer.jsx";


function NotificationList() {
  return (
    <>
      <Navbar />
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb" separator=">" height="16px" color="#B8B6B6">
        <Link to="/" color="inherit" className="breadcrumb-back" style={{ textDecoration: 'none' }} >
          <img src="/home-icon.svg" alt="Home" width="24" height="21"/> <h6 className="breadcrumb-previous">&nbsp;&nbsp;Home</h6>
        </Link>
        <h6 className="breadcrumb-current">PUSH NOTIFICATIONS</h6>
      </Breadcrumbs>
      <div class="notification-grid-container">
        <div class="notification-grid-item">
          <Paper elevation={3} className="notification-list" >
            <h1 className="notification-card-title">Push Notifications</h1>
            <Divider variant='middle' className="notification-divider-top" />
            <NotificationCard 
              name={"Test Notification"}
              reason={"Test Notification for analysis"}
              to={"All"}
              created={"Jul16 2022, 09:57 AM"}
              status={"Sent on Jul16 2022, 09:57AM"}
            />
            <NotificationCard 
              name={"Test Notification"}
              reason={"Test Notification for analysis"}
              to={"All"}
              created={"Jul16 2022, 09:57 AM"}
              status={"Sent on Jul16 2022, 09:57AM"}
            />
            <NotificationCard 
              name={"Test Notification"}
              reason={"Test Notification for analysis"}
              to={"All"}
              created={"Jul16 2022, 09:57 AM"}
              status={"Sent on Jul16 2022, 09:57AM"}
            />
          </Paper>
        </div>
      </div>
      <Footer />
    </>
  );
}
 
export default NotificationList;