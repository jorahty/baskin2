export default async function ProductPage({ params }: { params: { product: string } }) {
  return (
    <main>
      <pre>{params.product}</pre>
    </main>
  );
}
