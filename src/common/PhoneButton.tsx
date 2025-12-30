import PhoneIcon from "@mui/icons-material/Phone"
import { ContactButton } from "./ContactButton"

export function PhoneButton() {
  return (
    <ContactButton
      title="Phone"
      icon={<PhoneIcon />}
      href="tel:+13603911345"
    />
  )
}
