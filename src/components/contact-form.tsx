import { Grid, Typography, Box, Stack, Button } from "@mui/material"
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import FormField from "./form-field"

export default function ContactForm() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // handle form submission logic here
    }

    return (
        <Grid
            size={{ xs: 12, sm: 10, md: 6.5 }}
            sx={{
                padding: 3,
                borderRadius: 3,
                border: "1px solid lightgrey",
            }}
        >
            <Typography sx={{ marginBottom: 4 }}>
                Send me a message!
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    gap: 2,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Stack spacing={3}>
                    <FormField
                        name="Name"
                        required
                        fullWidth
                        size="small"
                        placeholder="Your name"
                    />
                    <FormField
                        required
                        fullWidth
                        name="Email"
                        size="small"
                        type="email"
                        placeholder="your.email@email.com"
                    />
                    <FormField
                        required
                        fullWidth
                        size="small"
                        name="Subject"
                        placeholder="What are you reaching out about?"
                    />
                    <FormField
                        rows={4}
                        required
                        fullWidth
                        multiline
                        size="small"
                        name="Message"
                        placeholder="Tell me more..."
                    />
                    <Button
                        size="large"
                        type="submit"
                        variant="contained"
                        endIcon={<SendRoundedIcon />}
                        sx={{ alignSelf: "flex-start" }}
                    >
                        Send Message
                    </Button>
                </Stack>
            </Box>
        </Grid>
    )
}
