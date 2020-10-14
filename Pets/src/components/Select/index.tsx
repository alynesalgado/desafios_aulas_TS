import React from 'react';

type SelectProps = {
  id: string;
  children: React.ReactNode;
  handleChange: (eventValue: number) => void;
};

const Select: React.FC<SelectProps> = ({ children, id, handleChange }) => {
  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange(+event.target.value);
  };

  return (
    <select id={id} onChange={onHandleChange}>
      {children}
    </select>
  );
};

export default Select;
