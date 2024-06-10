import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { IRootState, AppDispatch } from '../app/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;