// JsonLdSchema.tsx content
export default function JsonLdSchema() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "English Learning Site"
        })}
      </script>
    </>
  );
}