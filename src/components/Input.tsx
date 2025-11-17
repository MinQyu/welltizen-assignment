interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type = 'text', placeholder, value, onChange }: InputProps) {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      style={{ padding: '10px', fontSize: '16px' }}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;

