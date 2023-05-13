import Input from './Input';

// NOTE: This pattern is called compounded component
const Form = ({ children }: { children: React.ReactNode }) => children;

Form.Input = Input;

export default Form;
