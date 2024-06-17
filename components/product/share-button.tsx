import { Button } from '@/components/ui/button';
import ShareIcon from '../share-icon';

export default function ShareButton() {
  return (
    <Button variant="secondary" className="grow font-semibold">
      <ShareIcon />
      Share
    </Button>
  );
}
