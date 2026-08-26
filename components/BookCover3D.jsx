import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BookCover3D({ book, isLarge = false, href }) {
  const content = (
    <div className={`book-cover-3d ${isLarge ? 'book-cover-large' : ''}`}>
      <img
        src={book.coverImage}
        alt={`${book.title} by Wild Mac`}
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="book-card-wrapper" style={{ textDecoration: 'none' }}>
        {content}
      </Link>
    );
  }

  return (
    <div className="book-card-wrapper">
      {content}
    </div>
  );
}
