'use client'
import { Button as DefaultButton } from '@headlessui/react'
import Link from 'next/link'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'text' | 'link'
  children: React.ReactNode
  href: string
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
  target?: '_new' | '_blank' | '_self' | '_parent' | '_top' | 'framename'
}

const Button: React.FC<ButtonProps> = ({
  variant = 'text',
  children,
  iconStart,
  iconEnd,
  href,
  target = '_self',
}) => {
  const classes = [
    'inline-flex',
    'items-center',
    'gap-2',
    'rounded-lg',
    'px-5 py-3',
    'color-[rgb(var(--onyx-rgb))]',
  ]

  if (variant === 'primary') {
    classes.push(
      'bg-gradient-to-b',
      'from-[rgb(var(--button-bg-color-1))]',
      'to-[rgb(var(--button-bg-color-2))]',
      'text-white shadow-inner shadow-white/10',
    )
  } else if (variant === 'secondary') {
    classes.push(
      'bg-[rgb(var(--faint-white-rgb))]',
      'text-[rgb(var(--onyx-rgb))]',
      'dark:bg-[rgb(var(--onyx-rgb))]',
      'dark:text-[rgb(var(--dark-grey-rgb))]',
    )
  }

  return (
    <DefaultButton
      as={Link}
      href={href}
      target={target}
      className={classes.join(' ')}
    >
      {iconStart || null}
      {children}
      {iconEnd || null}
    </DefaultButton>
  )
}

export default Button
