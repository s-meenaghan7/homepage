import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import { DetailsAccordion } from "./DetailsAccordion"

export interface MarkdownRendererProps {
  markdown: string
}

export function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  return (
    <Box
      sx={{
        "& table": {
          width: "100%",
          borderCollapse: "collapse",
          marginY: 2,
        },
        "& th, & td": {
          border: "1px solid #ccc",
          padding: "8px",
        },
      }}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => (
            <Typography
              variant="h4"
              gutterBottom
            >
              {children}
            </Typography>
          ),
          h2: ({ children }) => (
            <Typography
              variant="h5"
              gutterBottom
              fontWeight="bold"
              pt={2}
            >
              {children}
            </Typography>
          ),
          h3: ({ children }) => (
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              pt={2}
            >
              {children}
            </Typography>
          ),
          p: ({ children }) => (
            <Typography
              pb={1}
              variant="body1"
            >
              {children}
            </Typography>
          ),
          a: ({ href, children }) => (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </Link>
          ),
          li: ({ children }) => (
            <li>
              <Typography
                component="span"
                variant="body1"
              >
                {children}
              </Typography>
            </li>
          ),
          code({ children }) {
            return <code>{children}</code>
          },
          details({ children }) {
            return <DetailsAccordion>{children}</DetailsAccordion>
          },
          summary: ({ children }) => <>{children}</>, // ignored, handled by details
        }}
      >
        {markdown}
      </ReactMarkdown>
    </Box>
  )
}
