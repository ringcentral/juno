import { useEffect } from 'react';

import { useResultRef } from '../useResultRef';

/**
 * get Browser `Audio` instance, and auto destroy when component be destroyed.
 *
 *
 * @param init a callback when you init that audio
 *
 * @example
 *
 * ```ts
 * const audio = useAudio((instance) => {
 *   instance.src = 'https://your.audio'
 * });
 *
 * const click = () => audio.play();
 *
 * click();
 * ```
 * @see stories {@link https://ringcentral.github.io/juno/?path=/story/%F0%9F%94%A7-foundation-hooks-useaudio--simple-announcer 🔧-foundation-hooks-useaudio--simple-announcer}
 * @see {@link https://chromium-review.googlesource.com/c/chromium/src/+/2816118}
 */
export const useAudio = (init?: (audio: HTMLAudioElement) => void) => {
  const audioRef = useResultRef(() => {
    const audio = new Audio();

    init?.(audio);

    return audio;
  });

  useEffect(() => {
    return () => {
      audioRef.current.srcObject = null;
      // just for remove ref, confirm browser GC work correctly
      audioRef.current = null as any;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return audioRef.current;
};
