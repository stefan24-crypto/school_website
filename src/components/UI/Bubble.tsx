import React, { ReactNode } from 'react';
import { Children } from 'react';

interface BubbleProps{
    children?: ReactNode;
    link?: string;
}

const Bubble: React.FC<BubbleProps> = ({children, link}) => {
    return (
      <div className="p-10 bg-blue-600 text-white text-center flex items-center justify-center rounded-full w-36 h-36">
        <a href={link}>{children}</a>
      </div>
    );
};

export default Bubble;