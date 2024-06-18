'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ImageSelect({ images, alt }: any) {
  const [image, setImage] = useState(images[0]);

  const src = (img: string) =>
    `https://smgaxvzzaljxhpqpejww.supabase.co/storage/v1/object/public/product_images/${img}.jpeg`;

  return (
    <>
      <div className="rounded-xl overflow-hidden relative aspect-square">
        <Image
          priority
          className="object-cover"
          src={src(image)}
          alt={alt}
          fill
          sizes="(max-width: 520px) 80vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, (max-width: 1280px) 25vw, 20vw"
        />
      </div>
      <div className="flex justify-center gap-5 p-5">
        {images.map((img: string) => (
          <div
            className={
              'bg-secondary w-20 aspect-square rounded overflow-hidden relative cursor-pointer border-2 hover:border-blue-600 ' +
              (img == image && 'border-blue-600')
            }
            onClick={() => setImage(img)}>
            <Image
              className="object-cover"
              src={src(img)}
              fill
              alt={alt}
              sizes="(max-width: 520px) 80vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, (max-width: 1280px) 25vw, 20vw"
            />
          </div>
        ))}
      </div>
    </>
  );
}
