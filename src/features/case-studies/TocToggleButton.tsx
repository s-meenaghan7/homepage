import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded"
import Button from "@mui/material/Button"

interface Props {
  isVisible: boolean
  setIsVisible: (visible: boolean) => void
}

export function TocToggleButton({ isVisible, setIsVisible }: Props) {
  return (
    <Button
      size="small"
      variant="outlined"
      title={isVisible ? "Hide table of contents" : "Table of contents"}
      onClick={() => setIsVisible(!isVisible)}
    >
      {isVisible ? "Hide" : <FormatListBulletedRoundedIcon />}
    </Button>
  )
}
