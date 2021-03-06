import React, {FunctionComponent} from 'react';
import {PlayButton} from '../synth/PlaybackButtons';

export const SequencerInstructions: FunctionComponent = () => {
  return <article className="SequencerInstructions">
    <hgroup>
      <h1>Musical Sequencing</h1>
      <h2>Programming a tune using the computer</h2>
    </hgroup>
    <ol>
      <li>Put notes in the boxes below</li>
      <li>Press <PlayButton/> to hear your sequence</li>
      <li>When you are done, click upload to share your tune online!</li>
    </ol>
  </article>
}

export default SequencerInstructions

