type ButtonProps = {
  type?: 'primary' | 'secondary' | 'text' | 'link'
  children: React.ReactNode
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
  onClick?: () => void
  link?: string
}

const Button: React.FC<ButtonProps> = ({
  type = 'text',
  children,
  iconStart,
  iconEnd,
  onClick,
  link,
}) => {
  const classes = ['flex', 'gap-2', 'items-center']

  if (type === 'primary') {
    classes.push('primary', 'rounded-lg', 'p-3', 'pl-5', 'pr-5')
  } else if (type === 'secondary') {
    classes.push('secondary', 'rounded-lg', 'p-3', 'pl-5', 'pr-5')
  }

  if (type === 'link') {
    return (
      <a href={link} target="_NEW" className={classes.join(' ')}>
        {iconStart || null}
        {children}
        {iconEnd || null}
      </a>
    )
  }

  return (
    <button className={classes.join(' ')} onClick={onClick}>
      {iconStart || null}
      {children}
      {iconEnd || null}
    </button>
  )
}

export default Button
