import React, { useContext } from 'react';
import { Context } from '../context/languages';

export const useLocalization = (setterOnly = false) => {
  const ctx = useContext(Context);
  return setterOnly ? [ctx.setLang] : [ctx.lang, ctx.setLang]
}