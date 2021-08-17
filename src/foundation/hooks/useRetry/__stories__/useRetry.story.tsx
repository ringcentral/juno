import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';

import { RcBox } from '../../../../components/Box';
import { RcButton } from '../../../../components/Buttons';
import { RcLoading } from '../../../../components/Loading';
import { Title } from '../../../../storybook/components';
import { useRetry } from '../useRetry';

export default {
  title: '🔧 Foundation/Hooks/useRetry',
  argTypes: {},
} as Meta;

export const useRetryExample: Story<{}> = () => {
  const [showValue, setShowValue] = useState<number | undefined | string>(0);
  const [loading, setLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const { retry, cancel } = useRetry(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, times?: number) => {
      setShowValue(times);
      console.log('retry', times);

      // * when value is three, that retry will stop
      return times === 4;
    },
    {
      retryTimes: 5,
      intervalTime: 300,
      onStart: () => {
        setIsComplete(false);
        setLoading(true);
        setShowValue('Start');
      },
      onSuccess: () => {
        setShowValue('Success');
      },
      onCancel: () => {
        setShowValue('Cancel');
      },
      onComplete: () => {
        setLoading(false);
        setIsComplete(true);
      },
    },
  );

  return (
    <>
      <RcButton onClick={(e) => retry(e)}>Go</RcButton>
      <RcButton disabled={!loading} onClick={cancel} color="danger.b03">
        Cancel
      </RcButton>
      <br />
      <br />
      <RcBox
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100px"
        height="100px"
        bgcolor="neutral.elevation"
      >
        <RcLoading loading={loading}>
          <Title paragraph={false}>{showValue}</Title>
        </RcLoading>
      </RcBox>
      <br />
      <br />
      {isComplete && <Title>Complete</Title>}
    </>
  );
};

useRetryExample.args = {};
useRetryExample.storyName = 'useRetry';

const fetchApi = (susses: boolean) =>
  new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      if (susses) {
        resolve(true);
      } else {
        reject();
      }
    }, 2000);
  });

export const useRetryAsyncExample: Story<{}> = () => {
  const [showValue, setShowValue] = useState<number | undefined | string>(0);
  const [loading, setLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const { retry: retryAsync, cancel } = useRetry(
    async (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      times?: number,
    ) => {
      console.log('do', times);

      if (times !== undefined) {
        setShowValue(times);
      }

      if (times === 2) {
        try {
          const value = await fetchApi(false);
          return value;
        } catch (error) {
          console.log('fail');
          return false;
        }
      }

      if (times === 4) {
        const value = await fetchApi(true);
        return value;
      }

      return times === 5;
    },
    {
      retryTimes: 5,
      intervalTime: 100,
      onStart: () => {
        setIsComplete(false);
        setLoading(true);
        setShowValue('Start');
      },
      onSuccess: () => {
        setShowValue('Success');
      },
      onCancel: () => {
        setShowValue('Cancel');
      },
      onComplete: () => {
        setLoading(false);
        setIsComplete(true);
      },
    },
  );

  const { retry } = useRetry(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, times?: number) => {
      setShowValue(times);
      console.log('retry', times);

      // * when value is three, that retry will stop
      return times === 3;
    },
    {
      retryTimes: 5,
      intervalTime: 150,
    },
  );

  return (
    <>
      <RcButton onClick={(e) => retryAsync(e)}>Go</RcButton>
      <RcButton disabled={!loading} onClick={cancel} color="danger.b03">
        Cancel
      </RcButton>
      <br />
      <br />
      <RcBox
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100px"
        height="100px"
        bgcolor="neutral.elevation"
      >
        <RcLoading loading={loading}>
          <Title paragraph={false}>{showValue}</Title>
        </RcLoading>
      </RcBox>
      <br />
      <br />
      {isComplete && <Title>Complete</Title>}
    </>
  );
};

useRetryAsyncExample.args = {};
useRetryAsyncExample.storyName = 'useRetry with async';
