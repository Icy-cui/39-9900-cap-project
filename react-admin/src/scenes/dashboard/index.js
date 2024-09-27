import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

export default function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="welcome back!"></Header>
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }}></DownloadOutlinedIcon>
            Download reports
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="20px"
        gridAutoRows={"140px"}
      >
        <Box
          gridColumn="span 3"
          borderColor={colors.primary[400]}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="12,000"
            subtitle="email sent"
            progress="0.75"
            increase="+12%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              ></EmailIcon>
            }
          ></StatBox>
        </Box>
        <Box
          gridColumn="span 3"
          borderColor={colors.primary[400]}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="12,000"
            subtitle="New Client sent"
            progress="0.75"
            increase="+12%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              ></EmailIcon>
            }
          ></StatBox>
        </Box>
        <Box
          gridColumn="span 3"
          borderColor={colors.primary[400]}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="12,000"
            subtitle="Traffic Received"
            progress="0.63"
            increase="+20%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              ></EmailIcon>
            }
          ></StatBox>
        </Box>
        <Box
          gridColumn="span 3"
          borderColor={colors.primary[400]}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="123,000"
            subtitle="Sales"
            progress="0.30"
            increase="+5%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              ></EmailIcon>
            }
          ></StatBox>
        </Box>
      </Box>
      <Box
        gridColumn="span 8"
        gridRow={"span 2"}
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt={"25px"}
          p="14px 30px 0 30px"
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Revenue Generated
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.greenAccent[500]}
            >
              $572,002.32
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadOutlinedIcon
                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
              ></DownloadOutlinedIcon>
            </IconButton>
          </Box>
        </Box>
        <Box height={"250px"} m="-20px 0 0 0">
          <LineChart isDashboard={true}></LineChart>
        </Box>
      </Box>

      <Box
        gridColumn="span 4"
        gridRow={"span 2"}
        backgroundColor={colors.primary[400]}
      >
        <Box
          p="15px"
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          color={colors.grey[100]}
          overflow="auto"
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              variant="h5"
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={`4px solid ${colors.primary[400]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.greenAccent[100]}>
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box>{transaction.date}</Box>
              <Box>
                <Typography color={colors.greenAccent[100]} p="5px 10px">
                  ${transaction.cost}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* row 3 */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography variant="h5" fontWeight="600">
          Campaign
        </Typography>

        <Box
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          mt="25px"
        >
          <ProgressCircle size="125"></ProgressCircle>
          <Typography
            variant="h5"
            color={colors.greenAccent[500]}
            sx={{ mt: "15px" }}
          >
            $48,000 revenue generated
          </Typography>
          <Typography>lorem extra money and cost.</Typography>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ p: "30px 30px 0 30px" }}
          >
            {" "}
            Quality{" "}
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true}></BarChart>
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Geographic data
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true}></GeographyChart>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
