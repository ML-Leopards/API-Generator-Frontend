import Donut from "./charts/Donut";
import { Divider, Box, Typography, Grid, Card} from "@mui/material";
import React from "react";
import Area from "./charts/Area";

export default function Server() {
  return (
    <>
      <Box sx={{ marginTop: 1 }}>
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
            Structural Analysis
          </Typography>
          <Grid
            container
            marginTop={0}
            spacing={3}
            direction="row"
            // justifyContent="space-between"
            // alignItems="left"
          >
            <Grid item>
              <Card sx={{ width: "1200px", height: 220, borderRadius: 3 }}>
                <Grid
                  container
                  marginTop={0}
                  spacing={2}
                  direction="row"
                  // justifyContent="space-between"
                  alignItems="top"
                >
                  <Grid item xs={8}>
                    <Typography
                      align="left"
                      sx={{
                        paddingLeft: "20px",
                        fontSize: "20px",
                        fontFamily: "Fira Sans Extra Condensed",
                      }}
                    >
                      Tables
                    </Typography>
                    <Grid
                      container
                      marginTop={0}
                      spacing={3}
                      direction="row"
                      // justifyContent="space-between"
                      alignItems="top"
                    >
                      <Grid item xs={4}>
                        <ul style={{ listStyle: "None" }}>
                          <li>table name 1</li>
                          <li>table name 2</li>
                          <li>table name 3</li>
                          <li>table name 4</li>
                        </ul>
                      </Grid>
                      <Grid item xs={4}>
                        <ul style={{ listStyle: "None" }}>
                          <li>table name 1</li>
                          <li>table name 2</li>
                          <li>table name 3</li>
                          <li>table name 4</li>
                        </ul>
                      </Grid>
                      <Grid item xs={4}>
                        <ul style={{ listStyle: "None" }}>
                          <li>table name 1</li>
                          <li>table name 2</li>
                          <li>table name 3</li>
                          <li>table name 4</li>
                        </ul>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4} marginTop={"10px"}>
                    <Donut />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          <Typography
            align="left"
            sx={{
              fontWeight: 600,
              fontSize: "20px",
              marginTop: "20px",
              fontFamily: "Fira Sans Extra Condensed",
            }}
          >
            Time-Load Analysis
          </Typography>
          <Card
            sx={{ width: "1200px", height: 250, borderRadius: 3, marginTop: 2 , paddingTop:3}}
          >
            <Area />
          </Card>
        </Box>
      </Box>
    </>
  );
}
