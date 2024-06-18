import { createClient } from '@/supabase/server';
import Navbar from '@/components/navbar';
import CategoryCrumbs from '@/components/category/crumbs';
import CategoryList from '@/components/category/list';
import ProductGrid from '@/components/product/grid';
import Saved from './saved';

export default async function CategoryPage({
  params: { slug },
  searchParams: { q: searchValue },
}: {
  params: { slug: string };
  searchParams: { q: string };
}) {
  const supabase = createClient();

  const ancestors = (await supabase.rpc('get_ancestors', { slug_value: slug })).data!;

  const children = (
    await supabase.from('categories').select('slug, display_name').eq('parent_slug', slug)
  ).data!;

  let content;

  if (slug == 'saved') {
    content = <Saved />;
  } else {
    const products = (await supabase.rpc('get_products_by_category', { category_slug: slug }))
      .data!;
    content = <ProductGrid products={products} />;
  }

  return (
    <main>
      {searchValue && <pre>searchValue: {searchValue}</pre>}
      <Navbar />
      <div className="px-8 pt-2 flex flex-col gap-4">
        <CategoryCrumbs categories={ancestors} />
        <CategoryList categories={children} />
      </div>
      <div className="p-8">{content}</div>
    </main>
  );
}
