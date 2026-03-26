import Link from "@mui/material/Link"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

interface Props {
  headings: Map<string, string>
}

export function TocLinks({ headings }: Props) {
  return (
    <List>
      {Array.from(headings.entries()).map(([title, slug], index) => (
        <ListItem
          key={index}
          sx={{
            p: 0.5,
          }}
        >
          <Link
            color="#0099ff"
            title={title}
            href={`#${slug}`}
          >
            {title}
          </Link>
        </ListItem>
      ))}
    </List>
  )
}
