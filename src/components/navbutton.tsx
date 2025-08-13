import type React from "react"
import { Box, Button, type ButtonProps } from "@mui/material"

interface NavButtonProps extends ButtonProps {
    icon?: React.ReactNode
}

export default function NavButton({
    icon,
    children,
    ...props
}: NavButtonProps) {
    return (
        <Button
            disableRipple
            {...props}
            sx={{
                textTransform: 'none',
                alignItems: 'center',
                gap: 1,
            }}
        >
            {icon ? <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                {icon}
            </Box> : null}
            {children}
        </Button>
    )
}
