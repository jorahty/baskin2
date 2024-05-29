import { Button } from '@/components/ui/button';
import { createClient } from '@/supabase/server';

export default async function Notes() {
  const supabase = createClient();

  const categories = (
    await supabase.from('categories').select('slug, display_name').eq('parent_slug', 'all')
  ).data!;

  return (
    <main className="flex gap-2 p-2">
      {categories.map((category) => (
        <Button variant="secondary" className="rounded-3xl">
          {category.display_name}
        </Button>
      ))}
    </main>
  );
}
