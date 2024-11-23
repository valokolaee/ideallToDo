import React from 'react';
import { Text, View } from 'react-native';
import style from './style';
import { CText } from '../../atoms/Ctext';
import ColorSystem from '../../../configs/color/ColorSystem';

export default (prop: ICSwipeButtonText) => <CText text={_reversText(prop)} color={ColorSystem.White} />

export const _reversText = ({ state, trueText, falseText }: ICSwipeButtonText) => state ? trueText : falseText

export interface ICSwipeButtonText { state: boolean; trueText: string; falseText: string }