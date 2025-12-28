import Email from "@mui/icons-material/Email"
import { ContactButton } from "./ContactButton"

export function EmailButton() {
  return (
    <ContactButton
      title="Email me"
      icon={<Email />}
      href="mailto:seanmeenaghan@gmail.com"
    />
  )
}
