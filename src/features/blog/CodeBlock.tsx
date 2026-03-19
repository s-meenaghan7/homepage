import {
  Prism as SyntaxHighlighter,
  type SyntaxHighlighterProps,
} from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

interface CodeBlockProps {
  className?: string
  children: React.ReactNode
  node: Element
  inline?: boolean
}

export function CodeBlock({
  className,
  inline,
  children,
  node,
  ...props
}: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className || "")
  const language = match ? match[1] : ""

  return !inline && language ? (
    <SyntaxHighlighter
      style={vscDarkPlus as SyntaxHighlighterProps["style"]}
      language={language}
      PreTag="div"
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code
      className={className}
      {...props}
    >
      {children}
    </code>
  )
}
