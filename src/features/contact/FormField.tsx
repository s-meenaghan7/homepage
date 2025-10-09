import Box from "@mui/material/Box"
import TextField, { type TextFieldProps } from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

export function FormField(props: TextFieldProps) {
  return (
    <Box>
      <Typography
        variant="subtitle2"
        sx={{ mb: 0.5 }}
      >
        {props.name}
        {props.required ? " *" : ""}
      </Typography>
      <TextField
        sx={{
          borderRadius: "8px",
          "& fieldset": {
            border: "none",
          },
          "& .Mui-focused": {
            outline: "3px solid #1976d2",
            transition: "100ms",
          },
          "& .MuiInputBase-root textarea": {
            resize: props.multiline ? "both" : "none",
            overflow: "auto",
          },
        }}
        name={props.name?.toLowerCase()}
        {...props}
      />
    </Box>
  )
}
