import { createClient } from '@/supabase/server';
import Navbar from '@/components/navbar';
import CategoryCrumbs from '@/components/category/crumbs';
import CategoryList from '@/components/category/list';
import ProductGrid from '@/components/product/grid';

export default async function CategoryPage({ params: { slug } }: { params: { slug: string } }) {
  const supabase = createClient();

  const ancestors = (await supabase.rpc('get_ancestors', { slug_value: slug })).data!;

  const children = (
    await supabase.from('categories').select('slug, display_name').eq('parent_slug', slug)
  ).data!;

  const products = (await supabase.rpc('get_products_by_category', { category_slug: slug })).data!;

  return (
    <main>
      <Navbar />
      <div className="px-8 pt-2 flex flex-col gap-4">
        <CategoryCrumbs categories={ancestors} />
        <CategoryList categories={children} />
      </div>
      <div className="p-8">
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
