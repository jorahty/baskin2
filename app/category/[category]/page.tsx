export default function CategoryPage({ params }: { params: { category: string } }) {
  params.category;

  return <p>{params.category}</p>;
}
