import * as React from 'react';
import { usePost } from '../hooks';

type FeaturedImageProps = {
  size?: string;
  className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const FeaturedImage = ({ size = 'full', className = '', ...props }: FeaturedImageProps) => {
  const { _embedded } = usePost(),
    image = _embedded && _embedded['wp:featuredmedia']?.find((t) => t.media_type === 'image');

  if (!image) return null;

  const imageURL = image?.media_details?.sizes[size]?.source_url;

  return image ? (
    <img
      src={imageURL}
      alt={image.alt_text}
      className={`micyo-article-image ${className}`}
      {...props}
    />
  ) : null;
};
