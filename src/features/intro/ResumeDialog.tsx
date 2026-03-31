import Box from "@mui/material/Box"
import DialogContent from "@mui/material/DialogContent"
import Typography from "@mui/material/Typography"
import { FullScreenDialog, StyledLink } from "../../common"
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
          padding="1rem 0.75rem"
          fontSize="small"
          minHeight="100vh"
          bgcolor="#f4f5f7"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ overflowY: "auto" }}
        >
          <Box
            display="grid"
            justifyItems="center"
          >
            <Typography
              color="grey"
              gutterBottom
              align="center"
              maxWidth="650px"
              fontSize={{ xs: "0.75rem", sm: "0.875rem", md: "1rem" }}
              fontStyle="italic"
            >
              This HTML resume is included as part of the{" "}
              <StyledLink
                text="Cloud Resume Challenge"
                href="https://cloudresumechallenge.dev/docs/the-challenge/aws/"
              />
              . Download my CV instead to ensure you receive the most current copy.
            </Typography>

            <HtmlResume />
          </Box>
        </Box>
      </DialogContent>
    </FullScreenDialog>
  )
}
