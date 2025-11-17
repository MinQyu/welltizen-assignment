import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  style?: CSSProperties;
}

function Button({ children, style, type = 'button', ...props }: ButtonProps) {
  const buttonStyle: CSSProperties = {
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: 600,
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    transition: 'background-color 0.2s ease',
    ...style,
  };

  return (
    <button type={type} style={buttonStyle} {...props}>
      {children}
    </button>
  );
}

export default Button;
