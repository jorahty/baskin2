'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { BookmarkIcon } from '@radix-ui/react-icons';
import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function ToggleSaveButton({ productId, variant }: any) {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  // Check if the product is already saved in localStorage on component mount
  useEffect(() => {
    const savedProducts: string[] = JSON.parse(localStorage.getItem('savedProducts') || '[]');
    setIsSaved(savedProducts.includes(productId));
  }, [productId]);

  // Toggle save state and update localStorage
  const toggleSave = () => {
    const savedProducts: string[] = JSON.parse(localStorage.getItem('savedProducts') || '[]');
    if (isSaved) {
      const updatedSavedProducts = savedProducts.filter((id) => id !== productId);
      localStorage.setItem('savedProducts', JSON.stringify(updatedSavedProducts));
    } else {
      savedProducts.push(productId);
      localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
    }
    setIsSaved(!isSaved);
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button size="icon" className="rounded-full" onClick={toggleSave} variant={variant}>
            {isSaved ? (
              <BookmarkFilledIcon className="w-5 h-5 text-[#08f]" />
            ) : (
              <BookmarkFilledIcon className="w-5 h-5" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isSaved ? 'Unsave' : 'Save'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
