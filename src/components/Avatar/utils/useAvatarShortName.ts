import { useMemo } from 'react';

function isValidOnlyLetterOrNumbers(value: string) {
  return /^[0-9A-Za-z\s\-~`!@#$%^&*()-_+=[\]{};:"',<.>/?，。？￥！……【】’“；《》（）]+$/.test(
    value,
  );
}

function getFirstUpperCase(name: string | undefined) {
  return (name && name[0].toUpperCase()) || '';
}

function handleOnlyLetterOrNumbers(firstName: string, lastName: string) {
  const firstLetter = getFirstUpperCase(firstName);
  const lastLetter = getFirstUpperCase(lastName);

  return `${firstLetter}${lastLetter}`;
}

function handleOneOfName(firstName: string, lastName: string) {
  const names =
    (!!firstName && firstName.split(/\s+/)) ||
    (!!lastName && lastName.split(/\s+/));

  const firstLetter = getFirstUpperCase(names[0]);
  const lastLetter = getFirstUpperCase(names[1]);

  return `${firstLetter}${lastLetter}`;
}

export function getAvatarShortName(
  firstName: string = '',
  lastName: string = '',
  email?: string,
) {
  if (lastName || firstName) {
    const firstValid = isValidOnlyLetterOrNumbers(firstName);
    const lastValid = isValidOnlyLetterOrNumbers(lastName);

    if (firstValid && lastValid) {
      return handleOnlyLetterOrNumbers(firstName, lastName);
    }

    if (!firstValid && !lastValid) {
      return '';
    }

    return handleOneOfName(firstName, lastName);
  }

  if (email) {
    return handleOnlyLetterOrNumbers(email, '');
  }

  return '';
}

type UseShortNameParams = {
  firstName: string;
  lastName: string;
  email?: string;
};

/**
 * get sort name from name and email
 */
export const useAvatarShortName = ({
  firstName,
  lastName,
  email,
}: UseShortNameParams) => {
  const result = useMemo(
    () => getAvatarShortName(firstName, lastName, email),
    [email, firstName, lastName],
  );

  return result;
};
