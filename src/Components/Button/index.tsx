import { Button as DefaultButton } from '@headlessui/react'
import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'link'
  variant?: 'primary' | 'secondary' | 'text' | 'link'
  href?: string
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
  target?: '_new' | '_blank' | '_self' | '_parent' | '_top' | 'framename'
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  variant = 'text',
  children,
  iconStart,
  iconEnd,
  href,
  target = '_self',
  type = 'button',
  onClick,
  disabled = false,
}) => {
  const classes = [
    'inline-flex',
    'items-center',
    'gap-2',
    'rounded-lg',
    'color-[rgb(var(--onyx-rgb))]',
  ]

  if (variant === 'primary') {
    classes.push(
      'px-5',
      'py-3',
      'bg-gradient-to-b',
      'from-[rgb(var(--button-bg-color-1))]',
      'to-[rgb(var(--button-bg-color-2))]',
      'text-white shadow-inner shadow-white/10',
    )
  } else if (variant === 'secondary') {
    classes.push(
      'px-5',
      'py-3',
      'bg-[rgb(var(--faint-white-rgb))]',
      'text-[rgb(var(--onyx-rgb))]',
      'dark:bg-[rgb(var(--onyx-rgb))]',
      'dark:text-[rgb(var(--dark-grey-rgb))]',
    )
  }

  if (type === 'link') {
    return (
      <DefaultButton
        as={Link}
        href={href || ''}
        target={target}
        className={classes.join(' ')}
        disabled={disabled}
      >
        {iconStart || null}
        {children}
        {iconEnd || null}
      </DefaultButton>
    )
  }

  return (
    <DefaultButton
      className={classes.join(' ')}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {iconStart || null}
      {children}
      {iconEnd || null}
    </DefaultButton>
  )
}

export default Button
