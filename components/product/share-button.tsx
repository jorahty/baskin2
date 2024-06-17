import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import ShareIcon from '../share-icon';

export default function ShareButton() {
  // return (
  //   <DropdownMenu>
  //     <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  //     <DropdownMenuContent>
  //       <DropdownMenuLabel>My Account</DropdownMenuLabel>
  //       <DropdownMenuSeparator />
  //       <DropdownMenuItem>Profile</DropdownMenuItem>
  //       <DropdownMenuItem>Billing</DropdownMenuItem>
  //       <DropdownMenuItem>Team</DropdownMenuItem>
  //       <DropdownMenuItem>Subscription</DropdownMenuItem>
  //     </DropdownMenuContent>
  //   </DropdownMenu>
  // );

  return (
    <Button variant="secondary" className="grow font-semibold">
      <ShareIcon />
      Share
    </Button>
  );
}
