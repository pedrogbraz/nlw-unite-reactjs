import { ComponentProps } from "react"

interface NavigationProps extends ComponentProps<'a'> {
  text: string,
  className?: string,
}

export function NavLink(props: NavigationProps) {
  return (
    <a {...props} className={`text-sm font-medium ${props.className}`} > {props.text}</a >
  )
}