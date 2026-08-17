// Renders a JSON-LD structured data block. Search engines and AI answer
// engines both use this to understand entities/facts on the page without
// having to parse prose - keep the data here accurate and in sync with the
// visible content, since mismatched structured data can hurt more than help.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
