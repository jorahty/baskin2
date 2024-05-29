import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function CategoryCrumbs({ categories }: { categories: any[] }) {
  if (categories.length < 2) return <></>;

  const ancestors = categories.slice(0, -1);
  const category = categories[categories.length - 1];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {ancestors.map(({ slug, display_name }) => (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/category/${slug}`}>{display_name}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{category.display_name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
