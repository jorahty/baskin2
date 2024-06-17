import Image from 'next/image';

export default function ImageSelect({ images, alt }: any) {
  const src = `https://smgaxvzzaljxhpqpejww.supabase.co/storage/v1/object/public/product_images/${images[0]}.jpeg`;

  return (
    <>
      <div className="rounded-xl overflow-hidden relative aspect-square">
        <Image priority className="object-cover" src={src} alt={alt} fill sizes="80vw" />
      </div>
      <div className="flex justify-center">
        {images.map(() => (
          <div>hello</div>
        ))}
      </div>
    </>
  );
}
