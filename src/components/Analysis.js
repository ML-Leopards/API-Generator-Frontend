import { Divider, Box, Typography, Grid, Card, Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import Line from "./charts/Line";
import Pie from "./charts/Pie";
import axios from "axios";

export default function Analysis() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/numerics")
      .then((response) => setData(response.data))
      .catch((error) => setIsError(isError.message));
  }, []);
  console.log(data.numeric);
  // const renderList = data.numeric.map((item) => <div>{item}</div>);
  return (
    <>
      {/* {data.map((item) => (
        <li>{item}</li>
      ))} */}
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
              marginTop: "40px",
              fontFamily: "Fira Sans Extra Condensed",
            }}
          >
            Numerical Analysis
          </Typography>
          <Grid
            container
            marginTop={2}
            spacing={3}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Card sx={{ width: 180, height: 80, borderRadius: 3 }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  height="100%"
                >
                  <Grid item xs="auto">
                    <Avatar sx={{ bgcolor: "#BDE3C7", marginLeft: "10px" }}>
                      <NoteAddIcon sx={{ color: "#4ECB71" }} />
                    </Avatar>
                  </Grid>

                  <Grid item>
                    <Typography
                      align="left"
                      height="17px"
                      sx={{
                        fontFamily: "Fira Sans Extra Condensed",
                        fontSize: "17px",
                        marginLeft: "10px",
                      }}
                    >
                      100
                    </Typography>
                    <Typography
                      align="left"
                      sx={{
                        fontSize: "12px",
                        marginLeft: "10px",
                        fontFamily: "Fira Sans Extra Condensed",
                        color: "#8B90B6",
                      }}
                    >
                      create
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item>
              <Card sx={{ width: 180, height: 80, borderRadius: 3 }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  height="100%"
                >
                  <Grid item xs="auto">
                    <Avatar sx={{ bgcolor: "#BDCAF5", marginLeft: "10px" }}>
                      <AutoStoriesIcon sx={{ color: "#699BF7" }} />
                    </Avatar>
                  </Grid>

                  <Grid item>
                    <Typography
                      align="left"
                      height="17px"
                      sx={{
                        fontFamily: "Fira Sans Extra Condensed",
                        fontSize: "17px",
                        marginLeft: "10px",
                      }}
                    >
                      1200
                    </Typography>
                    <Typography
                      align="left"
                      sx={{
                        fontSize: "12px",
                        marginLeft: "10px",
                        fontFamily: "Fira Sans Extra Condensed",
                        color: "#8B90B6",
                      }}
                    >
                      read
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item>
              <Card sx={{ width: 180, height: 80, borderRadius: 3 }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  height="100%"
                >
                  <Grid item xs="auto">
                    <Avatar sx={{ bgcolor: "#FCFDC3", marginLeft: "10px" }}>
                      <EditIcon sx={{ color: "#FFD233" }} />
                    </Avatar>
                  </Grid>

                  <Grid item>
                    <Typography
                      align="left"
                      height="17px"
                      sx={{
                        fontFamily: "Fira Sans Extra Condensed",
                        fontSize: "17px",
                        marginLeft: "10px",
                      }}
                    >
                      164
                    </Typography>
                    <Typography
                      align="left"
                      sx={{
                        fontSize: "12px",
                        marginLeft: "10px",
                        fontFamily: "Fira Sans Extra Condensed",
                        color: "#8B90B6",
                      }}
                    >
                      update
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item>
              <Card sx={{ width: 180, height: 80, borderRadius: 3 }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  height="100%"
                >
                  <Grid item xs="auto">
                    <Avatar sx={{ bgcolor: "#FCBBBB", marginLeft: "10px" }}>
                      <DeleteIcon sx={{ color: "red" }} />
                    </Avatar>
                  </Grid>

                  <Grid item>
                    <Typography
                      align="left"
                      height="17px"
                      sx={{
                        fontFamily: "Fira Sans Extra Condensed",
                        fontSize: "17px",
                        marginLeft: "10px",
                      }}
                    >
                      15
                    </Typography>
                    <Typography
                      align="left"
                      sx={{
                        fontSize: "12px",
                        marginLeft: "10px",
                        fontFamily: "Fira Sans Extra Condensed",
                        color: "#8B90B6",
                      }}
                    >
                      delete
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item>
              <Card sx={{ width: 180, height: 80, borderRadius: 3 }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  height="100%"
                >
                  <Grid item xs="auto">
                    <Avatar sx={{ bgcolor: "#E6CCFF", marginLeft: "10px" }}>
                      <BackupTableIcon sx={{ color: "#9747FF" }} />
                    </Avatar>
                  </Grid>

                  <Grid item>
                    <Typography
                      align="left"
                      height="17px"
                      sx={{
                        fontFamily: "Fira Sans Extra Condensed",
                        fontSize: "17px",
                        marginLeft: "10px",
                      }}
                    >
                      10
                    </Typography>
                    <Typography
                      align="left"
                      sx={{
                        fontSize: "12px",
                        marginLeft: "10px",
                        fontFamily: "Fira Sans Extra Condensed",
                        color: "#8B90B6",
                      }}
                    >
                      tables
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={7}>
              <Typography
                align="left"
                sx={{
                  fontWeight: 600,
                  fontSize: "20px",
                  fontFamily: "Fira Sans Extra Condensed",
                  marginTop: "50px",
                }}
              >
                Graphical Analysis
              </Typography>

              <Card
                sx={{
                  width: "100%",
                  height: 270,
                  borderRadius: 3,
                  marginTop: 5,
                  paddingTop: 2,
                }}
              >
                <Grid
                  container
                  marginTop={1}
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Grid item xs={10}>
                    <Line />
                  </Grid>
                  <Grid item xs={1}>
                    <Grid
                      container
                      marginTop={1}
                      direction="column"
                      alignItems="center"
                      BorderLeft="2px solid"
                    ></Grid>
                    <Grid item marginBottom={1}>
                      <Avatar sx={{ bgcolor: "#BDE3C7", marginLeft: "10px" }}>
                        <NoteAddIcon sx={{ color: "#4ECB71" }} />
                      </Avatar>
                    </Grid>
                    <Grid item xs="auto" marginBottom={1}>
                      <Avatar sx={{ bgcolor: "#BDCAF5", marginLeft: "10px" }}>
                        <AutoStoriesIcon sx={{ color: "#699BF7" }} />
                      </Avatar>
                    </Grid>
                    <Grid item xs="auto" marginBottom={1}>
                      <Avatar sx={{ bgcolor: "#FCFDC3", marginLeft: "10px" }}>
                        <EditIcon sx={{ color: "#FFD233" }} />
                      </Avatar>
                    </Grid>
                    <Grid item xs="auto" marginBottom={1}>
                      <Avatar sx={{ bgcolor: "#FCBBBB", marginLeft: "10px" }}>
                        <DeleteIcon sx={{ color: "red" }} />
                      </Avatar>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Typography
                align="left"
                sx={{
                  fontWeight: 600,
                  fontSize: "20px",
                  fontFamily: "Fira Sans Extra Condensed",
                  marginTop: "50px",
                }}
              >
                Query Data
              </Typography>

              <Card
                sx={{
                  width: "100%",
                  height: 270,
                  borderRadius: 3,
                  marginTop: 5,
                  paddingTop: 5,
                }}
              >
                <Pie />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
