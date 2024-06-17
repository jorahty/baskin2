import Image from 'next/image';
import { Button } from '@/components/ui/button';
import UserPlaceholder from '@/components/user/placeholder';
import { Input } from '@/components/ui/input';
import ToggleSaveButton from './toggle-save';
import ShareButton from './share-button';

export default function ProductDetails({
  product: { id, images, title, price, description },
}: any) {
  const src = `https://smgaxvzzaljxhpqpejww.supabase.co/storage/v1/object/public/product_images/${images[0]}.jpeg`;

  return (
    <div className="flex flex-col lg:flex-row justify-center p-8 gap-8 items-center lg:items-start">
      <div className="w-full max-w-md">
        <div className="rounded-xl overflow-hidden relative aspect-square">
          <Image priority className="object-cover" src={src} alt={title} fill sizes="80vw" />
        </div>
        <div className="flex justify-center">
          <h1>{/* TODO */}</h1>
        </div>
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
          <p>Molly Member</p>
        </div>
        <Input placeholder="Is this available?" />
        <Button>Send</Button>
      </div>
    </div>
  );
}
