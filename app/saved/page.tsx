import { createClient } from '@/supabase/server';
import Navbar from '@/components/navbar';
import CategoryCrumbs from '@/components/category/crumbs';
import CategoryList from '@/components/category/list';
import SavedProducts from './products';

export default async function SavedPage() {
  const supabase = createClient();

  const ancestors = (await supabase.rpc('get_ancestors', { slug_value: 'all' })).data!;

  const children = (
    await supabase.from('categories').select('slug, display_name').eq('parent_slug', 'all')
  ).data!;

  return (
    <>
      <div className="bg-background fixed w-full z-10">
        <Navbar />
        <div className="px-4 pb-1">
          <CategoryCrumbs categories={ancestors} />
          <CategoryList categories={children} />
        </div>
      </div>
      <main className="px-8 pt-44">
        <SavedProducts />
      </main>
    </>
  );
}
