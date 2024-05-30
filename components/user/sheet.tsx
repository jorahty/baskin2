import UserPlaceholder from '@/components/user/placeholder';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import UserMenu from '@/components/user/menu';

export default function UserSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <UserPlaceholder />
      </SheetTrigger>
      <SheetContent>
        <UserMenu />
      </SheetContent>
    </Sheet>
  );
}
