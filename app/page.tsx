import { createClient } from '@/supabase/server';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function HomePage() {
  const supabase = createClient();

  const categories = (
    await supabase.from('categories').select('slug, display_name').eq('parent_slug', 'all')
  ).data!;

  return (
    <main className="flex gap-2 p-2">
      {categories.map((category) => (
        <Button variant="secondary" className="rounded-3xl" asChild>
          <Link href={`/category/${category.slug}`}>{category.display_name}</Link>
        </Button>
      ))}
    </main>
  );
}
