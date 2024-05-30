'use client';

import { Button } from '@/components/ui/button';
import { BookmarkIcon } from '@radix-ui/react-icons';
import { BookmarkFilledIcon } from '@radix-ui/react-icons';

import React, { useState, useEffect } from 'react';

interface ToggleSaveButtonProps {
  productId: string;
}

const ToggleSaveButton: React.FC<ToggleSaveButtonProps> = ({ productId }) => {
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
    <Button size="icon" className="rounded-full" onClick={toggleSave} variant="outline">
      {isSaved ? (
        <BookmarkFilledIcon className="w-5 h-5 text-blue-500" />
      ) : (
        <BookmarkIcon className="w-5 h-5" />
      )}
    </Button>
  );
};

export default ToggleSaveButton;
