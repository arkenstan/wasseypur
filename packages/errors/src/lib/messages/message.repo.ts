import { ErrorNames } from '../error-list';

export const Messages: Record<ErrorNames, string[]> = {
  [ErrorNames.BadGateway]: ['Baap ka, dada ka, bhai ka; sabka badla lega re tera Faisal'],
  [ErrorNames.BadRequest]: ['Insaan jo hai bas do nasal k hote hain: ek hote hai Harami aur doosre bewakoof.'],
  [ErrorNames.NotAuthenticated]: [
    'Saala chaabhi kahan hai?',
    'Ye sab achha thodi na lagta hai, Aapko permission leni chahiye na',
  ],
  [ErrorNames.PaymentError]: ['Aad chahe jitna bhi bada ho jaye.. laad ke neeche hi rahta hai.'],
  [ErrorNames.Forbidden]: ['Beta…Tumse na ho payega!', 'Aapko laga ki matlab jo marzi, Haath laga lenge humko?'],
  [ErrorNames.NotFound]: [
    'Hamara naam hai Perpendicular. Faizal Khan hamare bade bhai hain. Hum aapka dukan lootne aye hain.',
  ],
  [ErrorNames.MethodNotAllowed]: [
    'Jab tak iss desh mein saneema hai, tab tak log chutiye bante rahenge.',
    'Sach bol de bhosdi ke! Ab toh sach bol de bhosdi ke! ',
  ],
  [ErrorNames.NotAcceptable]: ['Khana khao, Taqat aayega… Bahar jaake beizzati mat karana.'],
  [ErrorNames.Timeout]: [
    'Har chedah mein bandook dalo. Aur itna goli maaro ki Faisal Khan ke qila ko Hawa Mahal bana do',
  ],
  [ErrorNames.Conflict]: [
    'Ek hi toh jaan hai. Ya toh Allah lega ya mohalla lega',
    'Jaise loha lohe ko kaat ta hai, waise chutiya hi toh chutiye ko kaatega na?',
  ],
  [ErrorNames.LengthRequired]: [
    'Yeh Wasseypur hai. Yahan kabootar bhi ek pankh se udta hai, aur doosre se apna ijjat bachata hai',
  ],
  [ErrorNames.Unprocessable]: ['Maarenge nahin saale ko. Keh ke lenge uski.'],
  [ErrorNames.TooManyRequests]: ['Tumhein yaad kar kar ke, haath dukh gaya hamara.'],
  [ErrorNames.GeneralError]: [
    'Hum aapka dukna lootne ke liye aaye hain. Police ko phone mat karna, warna goli maar denge.',
  ],
  [ErrorNames.NotImplemented]: ['Hum Ganja peete hain, Charas lete hain, Do-chaar murder kiye hain'],
  [ErrorNames.Unavailable]: ['Hum Ganja peete hain, Charas lete hain, Do-chaar murder kiye hain'],
  [ErrorNames.Gone]: ['Sardar Khan Naam hai Hamara… Bata Dijiyega'],
};
