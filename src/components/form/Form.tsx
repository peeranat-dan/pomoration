import Input from './input';
import Label from './label';

// NOTE: This pattern is called compounded component
const Form = ({ children }: { children: React.ReactNode }) => children;

Form.Input = Input;
Form.Label = Label;

export default Form;
