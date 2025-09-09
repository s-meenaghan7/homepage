import Box from "@mui/material/Box"
import DialogContent from "@mui/material/DialogContent"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import { FullScreenDialog } from "../../common"
import { HtmlResume } from "./html-resume"

interface ResumeDialogProps {
  open: boolean
  onClose: () => void
}

export function ResumeDialog({ open, onClose }: ResumeDialogProps) {
  return (
    <FullScreenDialog
      open={open}
      onClose={onClose}
    >
      <DialogContent
        sx={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
          justifyContent: "center",
        }}
      >
        <Box
          display="flex"
          padding="1rem 2rem"
          fontSize="small"
          minHeight="100vh"
          bgcolor="#f4f5f7"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ overflowY: "auto" }}
        >
          <Box justifyItems="center">
            <Typography
              color="grey"
              gutterBottom
              align="center"
              maxWidth="650px"
              fontStyle="italic"
            >
              This HTML resume is included as part of the{" "}
              {
                <Link
                  color="inherit"
                  target="_blank"
                  underline="always"
                  href="https://cloudresumechallenge.dev/docs/the-challenge/aws/"
                  rel="noopener noreferrer"
                  sx={{
                    transition: "color 300ms ease-out",
                    "&:hover": {
                      color: "#0099ff",
                    },
                  }}
                >
                  AWS Cloud Resume Challenge.
                </Link>
              }{" "}
              Download my CV instead to ensure you receive the most current copy.
            </Typography>

            <HtmlResume />
          </Box>
        </Box>
      </DialogContent>
    </FullScreenDialog>
  )
}
