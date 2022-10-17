import Navbar from "../components/navbar.jsx";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Footer from "../components/footer.jsx";
import surveyData from "../utils/survey-data.jsx";


const columns = [
  { field: 'id', headerName: 'S No.', width: 90 },
  { field: 'surveyName', headerName: 'Survey Name', width: 180 },
  { field: 'createdDate', headerName: 'Created Date', width: 200 },
  { field: 'numberOfSubmits', headerName: 'Number Of Submits', width: 200 },
  { field: 'reports', headerName: 'Reports', width: 100 },

];


function SurveyList() {
  return (
    <>
      <Navbar />
      <div class="main-container">
        <Breadcrumbs aria-label="breadcrumb" className="breadcrumb" separator=">"  color="#B8B6B6">
          <Link to="/" color="inherit" className="breadcrumb-back" style={{ textDecoration: 'none' }} >
              <img src="WeWorkSMART/home-icon.svg" alt="Home" width="24" height="21"/> <h6 className="breadcrumb-previous">&nbsp;&nbsp;Home</h6>
          </Link>
          <h6 className="breadcrumb-current">List Of Surveys</h6>
        </Breadcrumbs>
        <div class="survey-grid-container">
          <div class="survey-grid-item">
            <Paper elevation={3} className="survey-card" >
              <Box sx={{ margin: "5%" }}>
                <h1 className="survey-card-title">List Of Surveys</h1>
                <DataGrid
                  autoHeight 
                  rows={surveyData}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[10]}
                  density="compact"
                />
              </Box>
            </Paper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
 
export default SurveyList;