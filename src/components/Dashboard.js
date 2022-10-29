import React from "react";
import "./Dashboard.css";
import { Drawer, Box, MenuItem } from "@mui/material";
import logo2 from "../assets/logo2.png";
import { StorageRounded, TimelineSharp } from "@mui/icons-material";
import DataObjectIcon from "@mui/icons-material/DataObject";
import Analysis from "./Analysis";
import Server from "./Server";
import Api from "./Api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [com, setCom] = React.useState(0);
  const navigate = useNavigate();
  return (
    <>
      <div className="back">
        <Box sx={{ display: "flex" }}>
          <Drawer
            variant="permanent"
            open={true}
            sx={{
              ".MuiDrawer-paper": { background: "#08002B" },
              width: "150px",
            }}
          >
            <MenuItem
              divider
              sx={{
                color: "#fff",
                marginY: 4,
                ".MuiMenuItem-divider": { color: "#fff" },
              }}
            >
              <img
                src={logo2}
                alt="not available"
                width={75}
                onClick={() => navigate("/")}
              />
            </MenuItem>
            <MenuItem
              sx={{
                color: com == 0 ? "#879AE0" : "#fff",
                justifyContent: "center",
                marginY: 1,
              }}
              onClick={() => setCom(0)}
            >
              <TimelineSharp></TimelineSharp>
            </MenuItem>
            <MenuItem
              sx={{
                color: com == 1 ? "#879AE0" : "#fff",
                justifyContent: "center",
                marginY: 1,
              }}
              onClick={() => setCom(1)}
            >
              <StorageRounded></StorageRounded>
            </MenuItem>
            <MenuItem
              sx={{
                color: com == 2 ? "#879AE0" : "#fff",
                justifyContent: "center",
                marginY: 1,
              }}
              onClick={() => setCom(2)}
            >
              <DataObjectIcon />
            </MenuItem>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {com === 0 ? <Analysis /> : com === 1 ? <Server /> : <Api />}
          </Box>
        </Box>
      </div>
    </>
  );
}
