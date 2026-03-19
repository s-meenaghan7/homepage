import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import { CodeBlock } from "./CodeBlock"
import { DetailsAccordion } from "./DetailsAccordion"
import { SectionHeader } from "./SectionHeader"

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
          h1: ({ children }) => <SectionHeader variant="h1">{children}</SectionHeader>,
          h2: ({ children }) => <SectionHeader variant="h2">{children}</SectionHeader>,
          h3: ({ children }) => <SectionHeader variant="h3">{children}</SectionHeader>,
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
              color="#0099ff"
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
          code: (props) => <CodeBlock {...(props as any)} />,
          details({ children }) {
            return <DetailsAccordion>{children}</DetailsAccordion>
          },
          // summary is ignored here and handled by `details` property and DetailsAccordion component.
          summary: ({ children }) => <>{children}</>,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </Box>
  )
}
