import Image from 'next/image';
import { Button } from '@/components/ui/button';
import UserPlaceholder from '@/components/user/placeholder';
import { Input } from '@/components/ui/input';
import ToggleSaveButton from './toggle-save';
import ShareButton from './share-button';
import ImageSelect from './image-select';

interface Props {
  product: any;
}

export default function ProductDetails({
  product: { id, images, title, price, description },
}: Props) {
  return (
    <div className="flex flex-col lg:flex-row justify-center p-8 gap-8 items-center lg:items-start">
      <div className="w-full max-w-md">
        <ImageSelect images={images} alt={title} />
      </div>

      <div className="w-full max-w-md lg:max-w-xs flex flex-col gap-5">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="font-semibold text-xl">${price.toLocaleString()}</p>
        <div className="flex gap-4">
          <ShareButton />
          <ToggleSaveButton productId={id} variant="secondary" />
        </div>
        <p>{description}</p>
        <div className="flex gap-3 items-center">
          <UserPlaceholder />
          <p>John Doe</p>
        </div>
        <Input placeholder="Is this available?" />
        <Button>Send</Button>
      </div>
    </div>
  );
}
