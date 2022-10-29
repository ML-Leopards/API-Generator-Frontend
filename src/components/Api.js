import React from "react";
import {
  Divider,
  Box,
  Typography,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function Api() {
  const [copied, setCopied] = React.useState(0);
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
            // justifyContent="space-between"
            // alignItems="left"
          >
            <Grid item xs={12}>
              <Accordion sx={{ backgroundColor: "#BDE3C7" }}>
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
                    CreateStudent
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    align="left"
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Creates a Student
                  </Typography>
                  <Typography
                    align="left"
                    sx={{
                      fontWeight: 600,
                      fontSize: "15px",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Syntax
                  </Typography>
                  <pre
                    style={{
                      color: "black",
                      backgroundColor: "#f5f5f5",
                      paddingLeft: "10px",
                      borderRadius: "10px",
                      textAlign: "left",
                      alignContent: "center",
                    }}
                  >
                    <div style={{ display: "inline-block", float: "right" }}>
                      <IconButton>
                        <CopyAllIcon
                          onClick={() => {
                            navigator.clipboard.writeText(
                              this.state.textToCopy
                            );
                          }}
                        />
                      </IconButton>
                    </div>
                    <code>
                      orm.execute("createStudent", ("XYZ","ABC", 12,
                      "01-01-2003"))
                    </code>
                  </pre>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12}>
              <Accordion sx={{ backgroundColor: "#BDCAF5" }}>
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
                    ReadStudentByID
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    align="left"
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Gets the information of a student by it's ID
                  </Typography>
                  <Typography
                    align="left"
                    sx={{
                      fontWeight: 600,
                      fontSize: "15px",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Syntax
                  </Typography>
                  <pre
                    style={{
                      color: "black",
                      backgroundColor: "#f5f5f5",
                      paddingLeft: "10px",
                      borderRadius: "10px",
                      textAlign: "left",
                      alignContent: "center",
                    }}
                  >
                    <div style={{ display: "inline-block", float: "right" }}>
                      <IconButton>
                        <CopyAllIcon
                          onClick={() => {
                            navigator.clipboard.writeText(
                              this.state.textToCopy
                            );
                          }}
                        />
                      </IconButton>
                    </div>
                    <code>orm.execute("readStudentByID", (1))</code>
                  </pre>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12}>
              <Accordion sx={{ backgroundColor: "#EBE6B8" }}>
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
                    UpdateStudentByID
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    align="left"
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Updates Student Information by ID
                  </Typography>
                  <Typography
                    align="left"
                    sx={{
                      fontWeight: 600,
                      fontSize: "15px",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Syntax
                  </Typography>
                  <pre
                    style={{
                      color: "black",
                      backgroundColor: "#f5f5f5",
                      paddingLeft: "10px",
                      borderRadius: "10px",
                      textAlign: "left",
                      alignContent: "center",
                    }}
                  >
                    <div style={{ display: "inline-block", float: "right" }}>
                      <IconButton>
                        <CopyAllIcon
                          onClick={() => {
                            navigator.clipboard.writeText(
                              this.state.textToCopy
                            );
                          }}
                        />
                      </IconButton>
                    </div>
                    <code>orm.execute("updateStudentByID", (1,"XYZAB"))</code>
                  </pre>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12}>
              <Accordion sx={{ backgroundColor: "#FCBBBB" }}>
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
                    DeleteStudentByID
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    align="left"
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Delete Student by ID
                  </Typography>
                  <Typography
                    align="left"
                    sx={{
                      fontWeight: 600,
                      fontSize: "15px",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Syntax
                  </Typography>
                  <pre
                    style={{
                      color: "black",
                      backgroundColor: "#f5f5f5",
                      paddingLeft: "10px",
                      borderRadius: "10px",
                      textAlign: "left",
                      alignContent: "center",
                    }}
                  >
                    <div style={{ display: "inline-block", float: "right" }}>
                      <IconButton>
                        <CopyAllIcon
                          onClick={() => {
                            navigator.clipboard.writeText(
                              this.state.textToCopy
                            );
                          }}
                        />
                      </IconButton>
                    </div>
                    <code>orm.execute("deleteStudentByID", (1))</code>
                  </pre>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
