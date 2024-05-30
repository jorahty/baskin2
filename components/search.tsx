'use client';

import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Search() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log((e.target as any).search.value);
  }

  return (
    <form onSubmit={onSubmit} className="relative max-w-lg w-80 lg:w-full">
      <Input placeholder="Search for products..." autoComplete="off" type="text" name="search" />
      <button type="submit" className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <SearchIcon className="h-4" />
      </button>
    </form>
  );
}
