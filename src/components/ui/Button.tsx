// src/components/ui/Button.tsx


import React from 'react';

type Props = {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Button({ variant = 'primary', onClick, children }: Props) {
  const base = 'px-4 py-2 rounded font-semibold';

  const styles = {
    primary: `${base} bg-blue-500 text-white hover:bg-blue-600`,
    secondary: `${base} bg-gray-500 text-white hover:bg-gray-600`,
    outline: `${base} border border-gray-500 text-gray-700 hover:bg-gray-100`,
    danger: `${base} bg-red-500 text-white hover:bg-red-600`,
  };

  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
}
