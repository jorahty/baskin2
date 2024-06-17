import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CategoryList({ categories }: { categories: any[] }) {
  return (
    <div className="flex gap-3 flex-wrap">
      {categories.map(({ slug, display_name }) => (
        <Button key={slug} variant="secondary" className="rounded-3xl" asChild>
          <Link href={`/category/${slug}`}>{display_name}</Link>
        </Button>
      ))}
    </div>
  );
}
