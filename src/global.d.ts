declare module '*.svg' {
  const content: any;
  export default content;
}

// Или более конкретно для React проектов:
declare module '*.svg' {
  import React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}