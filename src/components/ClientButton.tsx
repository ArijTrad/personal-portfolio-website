// src/components/ClientButton.tsx
'use client';

import Button from './ui/Button';

export default function ClientButton() {
  return (
    <Button variant="outline" onClick={() => alert('Clicked!')}>
      Contact Me
    </Button>
  );
}
