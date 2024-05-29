import { createClient } from '@/supabase/server';
import CategoryCrumbs from '@/components/category/crumbs';
import CategoryList from '@/components/category/list';
import ProductGrid from '@/components/product/grid';

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const supabase = createClient();

  const ancestors = (await supabase.rpc('get_ancestors', { slug_value: params.category })).data!;

  const children = (
    await supabase
      .from('categories')
      .select('slug, display_name')
      .eq('parent_slug', params.category)
  ).data!;

  const products = (
    await supabase.rpc('get_products_by_category', { category_slug: params.category })
  ).data!;

  return (
    <main className="flex flex-col gap-5 p-10">
      <CategoryCrumbs categories={ancestors} />
      <CategoryList categories={children} />
      <ProductGrid products={products} />
    </main>
  );
}
