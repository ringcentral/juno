import { useEffect, useRef } from 'react';

import { logInDev, useAudio } from '../../../../foundation';
import { DIALER_PAD_PLUS, DialPadSoundMap } from './DialPadUtils';

export type UseKeyAudioOptions = {
  sounds?: DialPadSoundMap;
  /**
   * custom audio process, you can custom audio process when you want to custom audio process
   */
  processor?: (audio: HTMLAudioElement) => void;
};

/**
 * Custom hook that handles playing audio for key presses in a dial pad.
 *
 * @param audioOption - The audio options for configuring the hook.
 * @returns A function that plays the audio for a given key.
 */
export const useKeyAudio = ({ sounds, processor }: UseKeyAudioOptions) => {
  const audio = useAudio();
  const lastPlayRef = useRef<Promise<void>>();

  useEffect(() => {
    processor?.(audio);
  }, [audio, processor]);

  const play = async (src: string) => {
    const lastPlay = lastPlayRef.current;

    /* https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
     * prevent play request interrupted
     */
    if (lastPlay) await lastPlay;

    audio.currentTime = 0;
    audio.src = src;
    lastPlayRef.current = audio.play().catch((reason) => {
      if (process.env.NODE_ENV !== 'production') {
        logInDev({ component: 'RcDialerPad', message: reason });
      }
    });
  };

  const playKeyAudio = (key: string) => {
    if (!sounds) return false;
    const playTarget = key === DIALER_PAD_PLUS ? '0' : key;
    const sound = sounds[playTarget];
    if (sound) {
      return play(sound);
    }
    return false;
  };

  return playKeyAudio;
};
