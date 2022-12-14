import { React, useState, useEffect } from "react";
import {
  Divider,
  Box,
  Typography,
  Grid,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import axios from "axios";
import { PlayArrow } from "@mui/icons-material";
import "./Api.css";

export default function Api() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState([]);
  const [userInput, setUserInput] = useState("");
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/getapis")
      .then((response) => setData(response.data))
      .catch((error) => setIsError(error.message));
  }, []);
  const handleExecute = () =>{
    const data = {}
    // axios.post("http://127.0.0.1:5000/connection", {
    //   query
    // })
  }
  return (
    <>
      <Box sx={{ marginTop: 3 }}>
        <Typography
          align="left"
          sx={{
            fontWeight: 600,
            fontSize: "30px",
            fontFamily: "Fira Sans Extra Condensed",
          }}
        >
          Dashboard
        </Typography>
        <Divider sx={{ bgcolor: "#08002B", marginRight: 10 }} />
        <Box marginLeft={6} marginTop={2} marginRight={10}>
          <Typography
            align="left"
            sx={{
              fontWeight: 600,
              fontSize: "20px",
              marginTop: "20px",
              fontFamily: "Fira Sans Extra Condensed",
            }}
          >
            API Generation
            <div style={{ float: "right" }}>
              <Button
                variant="contained"
                startIcon={<FileDownloadIcon />}
                sx={{ backgroundColor: "#08002B" }}
              >
                Export as JSON
              </Button>
            </div>
          </Typography>
          <Grid
            container
            marginTop={0}
            spacing={3}
            direction="row"
            maxHeight={"50%"}
            className="api_main"
          >
            {data &&
              data.apis &&
              data.apis.map((e) => (
                <Grid item xs={12}>
                  <Accordion
                    sx={{
                      backgroundColor:
                        e.type === "read"
                          ? "#BDCAF5"
                          : e.type === "create"
                          ? "#BDE3C7"
                          : e.type === "update"
                          ? "#EBE6B8"
                          : "#FCBBBB",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography
                        align="left"
                        sx={{
                          fontFamily: "Fira Sans Extra Condensed",
                          fontWeight: 600,
                        }}
                      >
                        {e.name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        align="left"
                        sx={{
                          fontWeight: 400,
                          fontSize: "15px",
                          fontFamily: "Fira Sans Extra Condensed",
                          marginBottom: "5px",
                        }}
                      >
                        Details- {e.details}
                      </Typography>
                      <Typography
                        align="left"
                        sx={{
                          fontWeight: 400,
                          fontSize: "15px",
                          fontFamily: "Fira Sans Extra Condensed",
                          marginBottom: "15px",
                        }}
                      >
                        Datatype of Input- {e.datatype}
                      </Typography>
                      <Grid container>
                        <Grid item xs={11}>
                          <TextField
                            label="Comma Seperated User Input"
                            fullWidth
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={1}>
                          <IconButton onClick={()=>handleExecute(e.name)}>
                            <PlayArrow />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
