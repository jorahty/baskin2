import { createClient } from '@/supabase/server';
import CategoryCrumbs from '@/components/category/crumbs';
import CategoryList from '@/components/category/list';

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const supabase = createClient();

  const ancestors = (await supabase.rpc('get_ancestors', { slug_value: params.category })).data!;

  const children = (
    await supabase
      .from('categories')
      .select('slug, display_name')
      .eq('parent_slug', params.category)
  ).data!;

  return (
    <main className="flex flex-col gap-2 p-2">
      <CategoryCrumbs categories={ancestors} />
      <CategoryList categories={children} />
    </main>
  );
}
