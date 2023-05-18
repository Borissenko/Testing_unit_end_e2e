//https://jestjs.io/docs/next/es6-class-mocks#an-es6-class-example
//sound-player.js, Donor
export default class SoundPlayer {
  constructor() {
    this.foo = 'bar';
  }

  playSoundFile(fileName) {
    console.log('Playing sound file ' + fileName);
  }
}

//sound-player-consumer.js, Acceptor.
import SoundPlayer from './sound-player';

export default class SoundPlayerConsumer {
  constructor() {
    this.soundPlayer = new SoundPlayer();
  }

  playSomethingCool() {
    const coolSoundFileName = 'song.mp3';
    this.soundPlayer.playSoundFile(coolSoundFileName);
  }
}

//https://jestjs.io/docs/next/es6-class-mocks#mocking-a-specific-method-of-a-class
import {describe, it, expect, beforeEach, afterEach, vi} from 'vitest'

import SoundPlayer from './sound-player';
import SoundPlayerConsumer from './sound-player-consumer';

const playSoundFileMock = vi.spyOn(SoundPlayer.prototype, 'playSoundFile')
  .mockImplementation(() => console.log('mocked function'))  // comment this line if just want to "spy"

it('player consumer plays music', () => {
  //arrange
  const player = new SoundPlayerConsumer()

  //act
  player.playSomethingCool()

  //asserts
  expect(playSoundFileMock).toHaveBeenCalled()
})