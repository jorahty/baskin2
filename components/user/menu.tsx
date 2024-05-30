import { Button } from '@/components/ui/button';
import UserPlaceholder from '@/components/user/placeholder';
import ThemeSelect from '@/components/theme/theme-select';

export default function UserMenu() {
  return (
    <>
      <UserPlaceholder />
      <div className="pt-8 flex flex-col gap-5">
        <Button variant="secondary" className="w-full">
          Sign in
        </Button>

        <div className="flex justify-between items-center">
          <p>Theme</p>

          <ThemeSelect />
        </div>
      </div>
    </>
  );
}
