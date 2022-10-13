import Navbar from "../components/navbar.jsx";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Footer from "../components/footer.jsx";


const columns = [
  { field: 'id', headerName: 'S No.', width: 90 },
  { field: 'surveyName', headerName: 'Survey Name', width: 180 },
  { field: 'createdDate', headerName: 'Created Date', width: 200 },
  { field: 'numberOfSubmits', headerName: 'Number Of Submits', width: 200 },
  { field: 'reports', headerName: 'Reports', width: 100 },

];

const rows = [
  { id: 1, surveyName: 'Workforce Survey', createdDate: 'July 09, 2022', numberOfSubmits: 35, reports: 'Download' },
  { id: 2, surveyName: 'Workforce Survey', createdDate: 'July 10, 2022', numberOfSubmits: 42, reports: 'Download' },
  { id: 3, surveyName: 'Workforce Survey', createdDate: 'July 11, 2022', numberOfSubmits: 45, reports: 'Download' },
  { id: 4, surveyName: 'Workforce Survey', createdDate: 'July 12, 2022', numberOfSubmits: 16, reports: 'Download' },
  { id: 5, surveyName: 'Workforce Survey', createdDate: 'July 13, 2022', numberOfSubmits: 45, reports: 'Download' },
  { id: 6, surveyName: 'Workforce Survey', createdDate: 'July 14, 2022', numberOfSubmits: 15, reports: 'Download' },
  { id: 7, surveyName: 'Workforce Survey', createdDate: 'July 15, 2022', numberOfSubmits: 44, reports: 'Download' },
  { id: 8, surveyName: 'Workforce Survey', createdDate: 'July 16, 2022', numberOfSubmits: 65, reports: 'Download' },
  { id: 9, surveyName: 'Workforce Survey', createdDate: 'July 17, 2022', numberOfSubmits: 36, reports: 'Download' },
  { id: 10, surveyName: 'Workforce Survey', createdDate: 'July 09, 2022', numberOfSubmits: 35, reports: 'Download' },
  { id: 11, surveyName: 'Workforce Survey', createdDate: 'July 10, 2022', numberOfSubmits: 42, reports: 'Download' },
  { id: 12, surveyName: 'Workforce Survey', createdDate: 'July 11, 2022', numberOfSubmits: 45, reports: 'Download' },
  { id: 13, surveyName: 'Workforce Survey', createdDate: 'July 12, 2022', numberOfSubmits: 16, reports: 'Download' },
  { id: 14, surveyName: 'Workforce Survey', createdDate: 'July 13, 2022', numberOfSubmits: 45, reports: 'Download' },
  { id: 15, surveyName: 'Workforce Survey', createdDate: 'July 14, 2022', numberOfSubmits: 15, reports: 'Download' },
  { id: 16, surveyName: 'Workforce Survey', createdDate: 'July 15, 2022', numberOfSubmits: 44, reports: 'Download' },
  { id: 17, surveyName: 'Workforce Survey', createdDate: 'July 16, 2022', numberOfSubmits: 65, reports: 'Download' },
  { id: 18, surveyName: 'Workforce Survey', createdDate: 'July 17, 2022', numberOfSubmits: 36, reports: 'Download' },
];

function SurveyList() {
  return (
    <>
      <Navbar />
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb" separator=">" height="16px" color="#B8B6B6">
        <Link to="/" color="inherit" className="breadcrumb-back" style={{ textDecoration: 'none' }} >
            <img src="/home-icon.svg" alt="Home" width="24" height="21"/> <h6 className="breadcrumb-previous">&nbsp;&nbsp;Home</h6>
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
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                density="compact"
              />
            </Box>
          </Paper>
        </div>
      </div>
      <Footer />
    </>
  );
}
 
export default SurveyList;