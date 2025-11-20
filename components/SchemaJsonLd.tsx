import React, { useEffect } from 'react';

interface SchemaJsonLdProps {
  data: Record<string, any>;
}

export const SchemaJsonLd: React.FC<SchemaJsonLdProps> = ({ data }) => {
  useEffect(() => {
    const scriptId = 'json-ld-schema';
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);

    return () => {
      // Optional: Clean up on unmount if strictly necessary, 
      // but usually keeping the last schema is fine until replaced.
    };
  }, [data]);

  return null;
};