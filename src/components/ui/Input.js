import React from 'react';

const Input = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={`px-4 py-2 rounded border ${className}`}
            {...props}
        />
    );
});

export default Input;
