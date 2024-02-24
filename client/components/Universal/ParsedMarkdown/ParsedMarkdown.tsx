import Markdown from "react-markdown";
import "./parsedMarkdown.css";

export default function ParsedMarkdown({ children }) {
  return <Markdown className="parsedMarkdown prose flex flex-col gap-5">{children}</Markdown>;
}
