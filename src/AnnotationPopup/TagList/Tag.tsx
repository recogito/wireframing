import { ReactNode } from "react"

export const Tag = (props: { children: ReactNode }) => {

  return (
    <span className="annotation-tag">{props.children}</span>
  )

}