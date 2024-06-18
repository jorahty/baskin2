import Link from 'next/link';
import { Button } from '@/components/ui/button';
import UserPlaceholder from '@/components/user/placeholder';
import ThemeSelect from '@/components/theme/theme-select';

import { UserIcon, BookmarkIcon } from '@heroicons/react/24/solid';

export default function UserMenu() {
  return (
    <>
      <UserPlaceholder />
      <div className="pt-8 flex flex-col gap-5">
        <Button variant="secondary" className="w-full" asChild>
          <Link href="/auth">
            <UserIcon className="size-5 mr-2" />
            Sign in
          </Link>
        </Button>

        <Button variant="secondary" className="w-full" asChild>
          <Link href="/category/saved">
            <BookmarkIcon className="size-5 mr-2" />
            Saved
          </Link>
        </Button>

        <div className="flex justify-between items-center">
          <p>Theme</p>

          <ThemeSelect />
        </div>
      </div>
    </>
  );
}
