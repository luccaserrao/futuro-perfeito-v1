import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
}

export const Seo: React.FC<SeoProps> = ({ 
  title, 
  description, 
  keywords,
  image = 'https://oconcursoperfeito.com.br/og-image.jpg', // Placeholder URL
  type = 'website'
}) => {
  const location = useLocation();
  const siteName = 'O Concurso Perfeito';
  const fullTitle = `${title} | ${siteName}`;
  const currentUrl = window.location.href; // In SPA, this gets the current URL

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to update meta tags
    const updateMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}='${name}']`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Standard SEO
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    
    // 4. Open Graph (Facebook/LinkedIn)
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:image', image, 'property');
    updateMeta('og:url', currentUrl, 'property');
    updateMeta('og:type', type, 'property');
    updateMeta('og:site_name', siteName, 'property');
    updateMeta('og:locale', 'pt_BR', 'property');

    // 5. Twitter Cards
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // 6. Canonical Link
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentUrl);

  }, [title, description, keywords, image, type, fullTitle, currentUrl]);

  return null;
};