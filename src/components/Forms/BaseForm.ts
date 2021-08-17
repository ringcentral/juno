import { FilledInputProps } from '@material-ui/core/FilledInput';
import { InputProps } from '@material-ui/core/Input';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput';

type RcBaseFormProps = {
  InputProps?:
    | Partial<InputProps>
    | Partial<FilledInputProps>
    | Partial<OutlinedInputProps>;
  inputProps?: InputProps['inputProps'];
  InputLabelProps?: Partial<InputLabelProps>;

  fullWidth?: boolean;
  readonly?: boolean;
};

export { RcBaseFormProps };
