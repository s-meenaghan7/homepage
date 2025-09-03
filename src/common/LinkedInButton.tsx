import LinkedIn from "@mui/icons-material/LinkedIn"
import { ContactButton } from "./ContactButton"

export function LinkedInButton() {
  return (
    <ContactButton
      title="LinkedIn"
      icon={<LinkedIn />}
      href="https://linkedin.com/in/seanmeenaghan"
    />
  )
}
