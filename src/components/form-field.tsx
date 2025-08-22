import { Box, TextField, Typography, type TextFieldProps } from "@mui/material"

export default function FormField(props: TextFieldProps) {
    return (
        <Box>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                {props.name}{props.required ? ' *' : ''}
            </Typography>
            <TextField
                sx={{
                    bgcolor: "#e0e0e0",
                    borderRadius: "8px",
                    "& fieldset": {
                        border: "none",
                    },
                    "& .Mui-focused": {
                        outline: "3px solid #1976d2",
                        transition: "100ms"
                    }
                }}
                name={props.name?.toLowerCase()}
                {...props}
            />
        </Box>
    )
}
