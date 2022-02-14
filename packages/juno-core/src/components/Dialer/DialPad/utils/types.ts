export type RcDialPadAction = {
  /**
   *  play key audio
   *  @returns return false if key isn't acceptable
   */
  playAudio: (key: string) => false | Promise<void>;
};

/** inner props ref, should prevent import that directly */
export type RcDialPadControl = {
  handleKeyboardEffect: (value: string, isKeyup: boolean) => void;
};
