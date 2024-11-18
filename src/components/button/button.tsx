import React, { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';
import { type VariantProps } from 'class-variance-authority';
// routes
import { useRouter } from '/src/routes/hooks';
//
import { buttonStyles } from './styles';

// ----------------------------------------------------------------------

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
  component?: 'RouterLink';
  href?: string;
}

// ----------------------------------------------------------------------

const Button: React.FC<ButtonProps> = ({ type = 'button', href = '', className, variant, component, ...props }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(href);
  }, [router, href]);

  if (component === 'RouterLink') return <button onClick={handleClick} type={type} className={twMerge(buttonStyles({ variant }), className)} {...props} />;

  return <button type={type} className={twMerge(buttonStyles({ variant }), className)} {...props} />;
};

export default Button;
