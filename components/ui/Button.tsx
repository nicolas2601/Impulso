'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

// Support for both button and link attributes
type ButtonAsButton = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLink = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  className = '', 
  iconLeft,
  iconRight,
  fullWidth = false,
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-impulso-yellow text-impulso-gray-dark hover:bg-yellow-400 focus:ring-impulso-yellow shadow-md hover:shadow-lg",
    secondary: "bg-impulso-gray-dark text-white hover:bg-black focus:ring-gray-800 shadow-md",
    outline: "border-2 border-impulso-gray-dark text-impulso-gray-dark hover:bg-impulso-gray-dark hover:text-white",
    ghost: "text-impulso-gray-dark hover:bg-gray-100",
  };

  const sizes = "px-6 py-3 text-base md:text-lg";
  const widthClass = fullWidth ? "w-full" : "";

  const content = (
    <>
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes} ${widthClass} ${className}`;

  if (href) {
    // When it's a link
    return (
      <Link href={href} className={combinedClasses} {...(props as any)}>
        {content}
      </Link>
    );
  }

  // When it's a button
  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className={combinedClasses} 
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
};
