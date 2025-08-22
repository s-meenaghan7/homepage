import { Email, LinkedIn, GitHub } from "@mui/icons-material";
import { Grid, Typography, Stack, Tooltip, IconButton } from "@mui/material";

export default function ContactInformation() {
    return (
        <Grid
            size={{ xs: 12, md: 5 }}
        >
            <Typography variant="h6" gutterBottom>
                Contact Information
            </Typography>
            <Stack direction="row" spacing={2}>
                <Tooltip title="Email me">
                    <IconButton
                        component="a"
                        href="mailto:seanmeenaghan@email.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: "text.primary" }}
                    >
                        <Email fontSize="large" />
                    </IconButton>
                </Tooltip>

                <Tooltip title="LinkedIn">
                    <IconButton
                        component="a"
                        href="https://linkedin.com/in/seanmeenaghan"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: "text.primary" }}
                    >
                        <LinkedIn fontSize="large" />
                    </IconButton>
                </Tooltip>

                <Tooltip title="GitHub">
                    <IconButton
                        component="a"
                        href="https://github.com/s-meenaghan7"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: "text.primary" }}
                    >
                        <GitHub fontSize="large" />
                    </IconButton>
                </Tooltip>
            </Stack>
        </Grid>
    )
}
