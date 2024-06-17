'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import ShareIcon from '../share-icon';
import { Link } from 'lucide-react';

export default function ShareButton() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.toString());
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="grow font-semibold">
          <ShareIcon />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="cursor-pointer" onClick={copyToClipboard}>
          <Link className="w-4 h-4 mr-2" />
          Copy link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
