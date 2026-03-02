import React from 'react';

interface InputFieldBaseProps {
    label: React.ReactNode;
    icon?: React.ReactNode;
    children: React.ReactNode;
    error?: string;
    id?: string;
}

export const InputField = ({
    label,
    icon,
    children,
    error,
    id,
}: InputFieldBaseProps) => (
    <div className="space-y-3 text-white">
        <label
            htmlFor={id}
            className="text-[10px] font-black  text-primary flex items-center gap-2"
        >
            {icon} {label}
        </label>
        {children}
        {error && <p className="text-red-500 text-[11px] italic">{error}</p>}
    </div>
);
