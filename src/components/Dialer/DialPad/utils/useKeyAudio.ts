import { useEffect, useRef } from 'react';
import { logInDev } from '../../../../foundation';
import { DIALER_PAD_PLUS, DialPadSoundMap } from './DialPadUtils';

export type audioOption = {
  volume: number;
  muted: boolean;
  sounds?: DialPadSoundMap;
};

export const useKeyAudio = ({ volume, muted, sounds }: audioOption) => {
  const audioRef = useRef(new Audio());
  const lastPlayRef = useRef<Promise<void>>();

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;
    audio.muted = muted;
  }, [muted, volume]);

  // * remove elm prevent memory leak issue after Chrome 92
  useEffect(
    () => () => {
      if (audioRef.current) {
        audioRef.current.remove();
        audioRef.current = null as any;
      }
    },
    [],
  );

  const play = async (src: string) => {
    const lastPlay = lastPlayRef.current;
    const audio = audioRef.current;
    /* https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
     * prevent play request interrupted
     */
    if (lastPlay) await lastPlay;

    audio.currentTime = 0;
    audio.src = src;
    lastPlayRef.current = audio
      .play()
      .catch((reason) =>
        logInDev({ component: 'RcDialerPad', message: reason }),
      );
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
