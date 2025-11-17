import type { CSSProperties, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  style?: CSSProperties;
}

function Input({ type = 'text', placeholder, style, ...props }: InputProps) {
  const inputStyle: CSSProperties = {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #d0d5dd',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
    ...style,
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      style={inputStyle}
      {...props}
    />
  );
}

export default Input;
