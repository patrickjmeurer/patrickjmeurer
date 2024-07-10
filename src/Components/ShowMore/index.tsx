'use client'
import ShowMoreText, { ReactShowMoreTextProps } from 'react-show-more-text'

const ShowMore: React.FC<ReactShowMoreTextProps> = ({ children, ...rest }) => {
  return <ShowMoreText {...rest}>{children}</ShowMoreText>
}

export default ShowMore
