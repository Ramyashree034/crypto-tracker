import { createSlice } from '@reduxjs/toolkit';
import sampleAssets from '../../data/sampleData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: sampleAssets,
  reducers: {
    updatePrices: (state) => {
      return state.map(asset => ({
        ...asset,
        price: +(asset.price * (0.95 + Math.random() * 0.1)).toFixed(2),
        change1h: +(Math.random() * 4 - 2).toFixed(2),
        change24h: +(Math.random() * 6 - 3).toFixed(2),
        change7d: +(Math.random() * 10 - 5).toFixed(2),
        volume24h: asset.volume24h + Math.floor(Math.random() * 100000),
      }));
    }
  }
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;