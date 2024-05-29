import { createClient } from '@/supabase/server';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
    <main className="flex gap-2 p-2">
      <pre>{JSON.stringify(ancestors, null, 2)}</pre>
      {children.map((category) => (
        <Button variant="secondary" className="rounded-3xl" asChild>
          <Link href={`/category/${category.slug}`}>{category.display_name}</Link>
        </Button>
      ))}
    </main>
  );
}
