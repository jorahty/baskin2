'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';

export default function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  const data: any = {
    light: { label: 'Light', icon: <Sun className="h-5" /> },
    dark: { label: 'Dark', icon: <Moon className="h-5" /> },
    system: { label: 'System', icon: <Monitor className="h-5" /> },
  };

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger className="w-40">
        <div className="flex gap-3 items-center">
          {data[theme!].icon}
          {data[theme!].label}
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}
