type RcFormProps = React.HTMLAttributes<HTMLFormElement> & {
  isSubmitting: boolean;
  onBeforeSubmit?: () => void;
  onValidateFailed?: () => void;
};

type FieldInfo = { validate: () => string | false };

export type { FieldInfo, RcFormProps };
