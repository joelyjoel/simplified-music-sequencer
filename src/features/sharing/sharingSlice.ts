import {SequencerState, setSequence} from '../sequencer/sequencerSlice';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState, AppThunk} from '../../app/store';
import {listSequences, fetchSequenceData} from '../../client-api/publishSequence';

export interface PublishedSequence {
  id: string;
  title?: string;
  composer?: string;
  data?: SequencerState;
}

export interface SharingState {
  publishedSequences: PublishedSequence[];
  isRefreshing: boolean;
}

const initialState: SharingState = {
  publishedSequences: [],
  isRefreshing: false,
}

export const sharingSlice = createSlice({
  name: 'sharing',
  initialState,
  reducers: {
    setPublishedSequences: (state, action: PayloadAction<PublishedSequence[]>) => {
      state.publishedSequences = action.payload;
    },
  },
})
export default sharingSlice.reducer;

export const {setPublishedSequences} = sharingSlice.actions;

export const refreshSequencesIndex = ():AppThunk => async (dispatch) => {
  try {
    let result = await listSequences();
    dispatch(setPublishedSequences(result));
  } catch(err) {
    throw err;
  }
}

export const openSequence = (id:string):AppThunk => async (dispatch) => {
  try {
    let result = await fetchSequenceData(id)
    dispatch(setSequence(result));
  } catch(err) {
    throw err;
  }
}

export const selectSharing = (state: RootState) => state.sharing;
