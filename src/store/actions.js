
import {LOCALE_SET} from "./types.js";

export const localeSet = lang => ({
  type: LOCALE_SET,
  lang,
})
export const setLocale = lang => (dispatch) => {
  dispatch(localeSet(lang))
}
