import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material"
import React, { type ReactNode } from "react"

interface DetailsAccordionProps {
  children: ReactNode
}

export function DetailsAccordion({ children }: DetailsAccordionProps) {
  let summary: ReactNode | null = null
  let content: ReactNode[] = []

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const childProps = child.props as { children?: ReactNode }

      if (typeof childProps.children === "string" && !summary) {
        summary = childProps.children
      } else {
        // else, an array of elements is returned to be rendered by AccordionDetails
        content.push(child)
      }
    }
  })

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  )
}
