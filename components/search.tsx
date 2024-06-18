'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const value = (e.target as any).search.value.trim();

    if (!value) return;

    const params = new URLSearchParams();
    params.set('q', value);
    router.push(`/category/all?${params}`);
  }

  return (
    <form onSubmit={onSubmit} className="relative max-w-lg w-80 lg:w-full">
      <Input
        placeholder="Search for products..."
        autoComplete="off"
        type="text"
        name="search"
        defaultValue={searchParams?.get('q') || ''}
      />
      <button type="submit" className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <SearchIcon className="h-4" />
      </button>
    </form>
  );
}
