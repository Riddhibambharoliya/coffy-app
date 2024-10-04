import React from 'react';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <textarea
            ref={ref}
            className={`px-4 py-2 rounded border ${className}`}
            {...props}
        />
    );
});

export default Textarea;
