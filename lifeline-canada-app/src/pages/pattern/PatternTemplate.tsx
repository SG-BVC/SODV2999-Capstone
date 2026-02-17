import { useParams } from "react-router-dom";
import { patternData } from "./patternData";

export default function PatternTemplate() {
  const { slug } = useParams<{ slug: string }>();

  const page = slug ? patternData[slug as keyof typeof patternData] : null;

  if (!page) {
    return (
      <div style={{ padding: 40 }}>
        <h1>Not Found</h1>
        <p>No content for: {slug}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>{page.title}</h1>
      <p>{page.description}</p>
    </div>
  );
}
