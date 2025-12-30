import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useState } from "react"
import { AlertSnackbar } from "../../common"
import { FormField } from "./FormField"
import { SubmitButton } from "./SubmitButton"

export type ContactFormState = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }
  const [formState, setFormState] = useState<ContactFormState>("idle")
  const [formData, setFormData] = useState(initialFormData)
  const [showSnackbar, setShowSnackbar] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setFormState("submitting")
    const CONTACT_API_URL: string = `${import.meta.env.VITE_API_URL}/contact`

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      handleSuccess()
    } catch (error) {
      console.error("Failed to send email:", error)

      handleError()
    } finally {
      setShowSnackbar(true)
    }
  }

  const closeSnackbar = () => {
    setShowSnackbar(false)
  }

  /**
   * Handles the `ContactForm` success state.
   * - Resets the form fields to their initial (empty) state.
   * - sets the `formState` to `"success"`.
   */
  const handleSuccess = () => {
    setFormData(initialFormData)
    setFormState("success")
  }

  /**
   * Handles the `ContactForm` error state.
   * - sets the `formState` to `"error"`.
   */
  const handleError = () => {
    setFormState("error")
  }

  // AlertSnackbar props derived from formState
  const snackBarSeverity = formState === "success" ? "success" : "error"
  const snackBarMessage =
    formState === "success"
      ? "Thanks for reaching out. I'll get back to you as soon as I can."
      : "Your message couldn't be sent. Please try again in a moment."

  return (
    <Grid width={{ sm: "100%", md: "55%" }}>
      <Grid
        display="flex"
        flexDirection="column"
        sx={{
          padding: 3,
          borderRadius: 3,
          border: "3px solid lightgrey",
        }}
      >
        <Typography
          alignSelf={{ xs: "center", sm: "center", md: "flex-start" }}
          sx={{
            marginBottom: 4,
          }}
        >
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
              required
              fullWidth
              name="Name"
              size="small"
              value={formData.name}
              placeholder="Your name"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <FormField
              required
              fullWidth
              name="Email"
              size="small"
              type="email"
              value={formData.email}
              placeholder="your.email@email.com"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <FormField
              required
              fullWidth
              size="small"
              name="Subject"
              value={formData.subject}
              placeholder="What are you reaching out about?"
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
            <FormField
              rows={4}
              required
              fullWidth
              multiline
              size="small"
              name="Message"
              value={formData.message}
              placeholder="Tell me more..."
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <Box>
              <SubmitButton state={formState} />
              {formState === "success" && (
                <Typography
                  variant="caption"
                  fontStyle="italic"
                  color="text.secondary"
                >
                  Need to send another message? Please refresh the page.
                </Typography>
              )}
            </Box>
          </Stack>
        </Box>
      </Grid>
      <AlertSnackbar
        show={showSnackbar}
        onClose={closeSnackbar}
        message={snackBarMessage}
        severity={snackBarSeverity}
      />
    </Grid>
  )
}
