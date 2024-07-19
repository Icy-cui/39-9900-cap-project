import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useNavigate } from "react-router-dom";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const nav = (title, to) => {
    setSelected(title);
    navigate(to);
  };

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => nav(title, to)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to}></Link>
    </MenuItem>
  );
};

export default function MenuBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .ps-menu-root:hover": {
          backgroundColor: "transparent !important",
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
          backgroundColor: "transparent !important",
        },
        "& .ps-menu-label.ps-active": {
          color:
            theme.palette.mode === "dark"
              ? colors.blueAccent[400]
              : colors.blueAccent[500],
        },
        "& .ps-menu-icon.ps-active": {
          color:
            theme.palette.mode === "dark"
              ? colors.blueAccent[400]
              : colors.blueAccent[500],
        },
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        backgroundColor={colors.primary[400]}
        rootStyles={{ border: "none" }}
      >
        <Menu
          border="none"
          rootStyles={{
            root: { backgroundColor: "trasparent" },
            button: ({ active }) => {
              return { color: active ? "#344CFF" : undefined };
            },
          }}
        >
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "0 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINSide
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile"
                  src="../../assets/user.jpg"
                  style={{
                    width: "100px",
                    height: "100px",
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                ></img>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  mt="10px"
                >
                  Sam
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  System Manager
                </Typography>
              </Box>
            </Box>
          )}

          <Box padding={isCollapsed ? undefined : "5%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon></HomeOutlinedIcon>}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 25px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon></PeopleOutlinedIcon>}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="Contact Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon></ContactsOutlinedIcon>}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon></ReceiptOutlinedIcon>}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 25px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon></PersonOutlinedIcon>}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon></CalendarTodayOutlinedIcon>}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon></HelpOutlineOutlinedIcon>}
              selected={selected}
              setSelected={setSelected}
            ></Item>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 25px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon></BarChartOutlinedIcon>}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon></PieChartOutlineOutlinedIcon>}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="Timeline"
              to="/timeline"
              icon={<TimelineOutlinedIcon></TimelineOutlinedIcon>}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="Geographical Map"
              to="/geography"
              icon={<MapOutlinedIcon></MapOutlinedIcon>}
              selected={selected}
              setSelected={setSelected}
            ></Item>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}
