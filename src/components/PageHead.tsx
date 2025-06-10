
import { useEffect } from "react";

interface PageHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const PageHead = ({ 
  title, 
  description, 
  keywords, 
  ogImage = "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop",
  canonicalUrl = "https://zaytrix.com"
}: PageHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Zaytrix Management and Technology Group`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Open Graph tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateOrCreateMeta('og:title', `${title} | Zaytrix`);
    updateOrCreateMeta('og:description', description);
    updateOrCreateMeta('og:image', ogImage);
    updateOrCreateMeta('og:url', canonicalUrl);
    updateOrCreateMeta('og:type', 'website');
    updateOrCreateMeta('og:site_name', 'Zaytrix Management and Technology Group');

    // Twitter Cards
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', `${title} | Zaytrix`);
    updateOrCreateMeta('twitter:description', description);
    updateOrCreateMeta('twitter:image', ogImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonical);
    }
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
};

export default PageHead;
