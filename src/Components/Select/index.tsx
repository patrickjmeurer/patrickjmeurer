'use client'
import { Select as DefaultSelect, SelectProps } from '@headlessui/react'

const Select: React.FC<SelectProps> = ({ children, ...rest }) => {
  return <DefaultSelect {...rest}>{children}</DefaultSelect>
}

export default Select
