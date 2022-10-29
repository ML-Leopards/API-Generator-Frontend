import React from "react";
import Navbar from "./Navbar";
import Files from "./Files";
import { Card, Grid, Typography, Divider, Slider, Button } from "@mui/material";
import { ArrowForward, ArrowForwardIos, Insights } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// import FilePreviewer from "react-file-previewer";
export default function Parameters() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "rgba(216, 222, 244, 1)",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Navbar />

      <Grid
        container
        marginTop={2}
        spacing={2}
        direction="row"
        justifyContent="space-around"
        // alignItems="center"
      >
        <Grid item xs={4}>
          <Typography
            align="center"
            sx={{
              fontFamily: "fira sans extra condensed",
              fontSize: 30,
              marginBottom: 3,
            }}
          >
            File Preview
          </Typography>
          <Card
            sx={{ width: 1, height: 530, borderRadius: 3, marginX: 4 }}
          ></Card>
        </Grid>
        <Divider
          orientation={"vertical"}
          sx={{ bgcolor: "#08002b", height: 660, padding: 0, marginX: 3 }}
        />
        <Grid item xs={6} marginRight={4}>
          <Typography
            align="center"
            sx={{
              fontFamily: "fira sans extra condensed",
              fontSize: 30,
              marginBottom: 3,
            }}
          >
            Hyperparameter Tuning
          </Typography>

          <Grid
            container
            marginTop={2}
            spacing={5}
            direction="row"
            justifyContent="space-between"
            // alignItems="center"
          >
            <Grid item sx={4}>
              <Typography
                align="left"
                sx={{
                  fontFamily: "fira sans extra condensed",
                  fontSize: 20,
                }}
              >
                Number of Epochs
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Slider
                size="small"
                defaultValue={90}
                aria-label="Small"
                valueLabelDisplay="on"
                min={10}
                max={150}
                sx={{ color: "#08002b" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            marginTop={2}
            spacing={5}
            direction="row"
            justifyContent="space-between"
            // alignItems="center"
          >
            <Grid item sx={4}>
              <Typography
                align="left"
                sx={{
                  fontFamily: "fira sans extra condensed",
                  fontSize: 20,
                }}
              >
                Learning Rate
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Slider
                size="small"
                step={0.00000001}
                defaultValue={0.001}
                aria-label="Small"
                valueLabelDisplay="on"
                min={0.00000001}
                max={0.01}
                sx={{ color: "#08002b" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            marginTop={2}
            spacing={5}
            direction="row"
            justifyContent="space-between"
            // alignItems="center"
          >
            <Grid item sx={4}>
              <Typography
                align="left"
                sx={{
                  fontFamily: "fira sans extra condensed",
                  fontSize: 20,
                }}
              >
                Epsilon
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Slider
                size="small"
                step={0.0000001}
                defaultValue={0.0000001}
                aria-label="Small"
                valueLabelDisplay="on"
                min={0.00000001}
                max={0.0001}
                sx={{ color: "#08002b" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            marginTop={2}
            spacing={5}
            direction="row"
            justifyContent="space-between"
            // alignItems="center"
          >
            <Grid item sx={4}>
              <Typography
                align="left"
                sx={{
                  fontFamily: "fira sans extra condensed",
                  fontSize: 20,
                }}
              >
                Beta 1
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Slider
                size="small"
                defaultValue={0.9}
                aria-label="Small"
                valueLabelDisplay="on"
                min={0.7}
                max={1}
                step={0.01}
                sx={{ color: "#08002b" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            marginTop={2}
            spacing={5}
            direction="row"
            justifyContent="space-between"
            // alignItems="center"
          >
            <Grid item sx={4}>
              <Typography
                align="left"
                sx={{
                  fontFamily: "fira sans extra condensed",
                  fontSize: 20,
                }}
              >
                Beta 2
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Slider
                size="small"
                defaultValue={0.999}
                aria-label="Small"
                valueLabelDisplay="on"
                min={0.9}
                max={1}
                step={0.001}
                sx={{ color: "#08002b" }}
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            endIcon={<Insights fontSize="small"/>}
            sx={{
              marginTop: 5,
              backgroundColor: "#08002b",
              "&:hover": { backgroundColor: "#08002b" },
            }}
            onClick={()=>{navigate('/dashboard/analysis')}}
          >
            Analyse
          </Button>
        </Grid>
      </Grid>
      {/* <FilePreviewer file={getRootsprop} /> */}
      {/* Files.getRootProps */}
    </div>
  );
}
