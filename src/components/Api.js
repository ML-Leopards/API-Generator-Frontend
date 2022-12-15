import { React, useState, useEffect } from "react";
import {
  Divider,
  Box,
  Typography,
  Grid,
  IconButton,
  Button,
  TextField,
  Modal,
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hostURL, setHostURL] = useState("");
  const [port, setPort] = useState("");
  const [database, setDatabase] = useState("");
  const [result, setResult] = useState(null);
  const [resultModal, setResultModal] = useState(false);
  const [resultHeader, setResultHeader] = useState(null);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/getapis")
      .then((response) => setData(response.data))
      .catch((error) => setIsError(error.message));
  }, []);

  const handleExecute = (query, head) => {
    const input_array = userInput.split(",");
    const data = {
      username: username,
      password: password,
      database: database,
      host_url: hostURL,
      port: port,
      query_name: query,
      query_info: input_array,
    };
    console.log(data);
    axios.post("http://127.0.0.1:5000/connection", data).then(
      (res) => {
        if (res.status === 200) {
          setResult(res.data.result);
          setResultHeader(head);
          setResultModal(true);
          console.log(res);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 550,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
              marginTop: 2,
              fontFamily: "Fira Sans Extra Condensed",
            }}
          >
            API Generation
            <div style={{ float: "right" }}>
              <Button
                variant="contained"
                startIcon={<FileDownloadIcon />}
                sx={{ backgroundColor: "#08002B", margin: 1 }}
              >
                Export as CSV
              </Button>
            </div>
            <div style={{ float: "right" }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#08002B", margin: 1 }}
                onClick={handleOpen}
              >
                Connection
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ paddingBottom: "10px" }}
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ textAlign: "center" }}
                  >
                    Database Information
                  </Typography>
                  <TextField
                    label="Username"
                    fullWidth
                    value={username}
                    sx={{ mt: 2 }}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <TextField
                    label="Password"
                    fullWidth
                    value={password}
                    sx={{ mt: 2 }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <TextField
                    label="Host Url"
                    fullWidth
                    value={hostURL}
                    sx={{ mt: 2 }}
                    onChange={(e) => setHostURL(e.target.value)}
                  />
                  <TextField
                    label="Port"
                    fullWidth
                    value={port}
                    sx={{ mt: 2 }}
                    onChange={(e) => setPort(e.target.value)}
                  />
                  <TextField
                    label="Database"
                    fullWidth
                    value={database}
                    sx={{ mb: 5, mt: 2 }}
                    onChange={(e) => setDatabase(e.target.value)}
                  />
                  <Button fullWidth variant="contained" onClick={handleClose}>
                    Connect
                  </Button>
                </Box>
              </Modal>
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
                          <IconButton
                            onClick={() => handleExecute(e.name, e.head)}
                          >
                            <PlayArrow />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              ))}
          </Grid>
          <Modal
            open={resultModal}
            onClose={() => setResultModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ paddingBottom: "10px" }}
          >
            <Box sx={style}>
              <Grid className="result">
                <table>
                  <tr>
                    {resultHeader && resultHeader.map((col) => (
                      <th>{col}</th>
                    ))}
                  </tr>
                  {result &&
                    result.map((row) => (
                      <tr>
                        {row.map((col) => (
                          <td>{col}</td>
                        ))}
                      </tr>
                    ))}
                </table>
              </Grid>
            </Box>
          </Modal>
        </Box>
      </Box>
    </>
  );
}
