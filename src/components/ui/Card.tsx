import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, hoverEffect = true, ...props }) => {
  return (
    <div
      className={`bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700/50 
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''} 
        ${className || ''}`}
      {...props} // Enables onClick, etc.
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <div className={`mb-4 ${className || ''}`}>
      {children}
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return (
    <div className={className || ''}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
  return (
    <div className={`mt-4 pt-4 border-t border-gray-100 dark:border-slate-700/50 ${className || ''}`}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardContent, CardFooter };
