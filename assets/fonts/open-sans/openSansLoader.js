import regularEOT from 'assets/fonts/open-sans/opensans-regular-webfont.eot';
import regularTTF from 'assets/fonts/open-sans/opensans-regular-webfont.ttf';
import regularWOFF from 'assets/fonts/open-sans/opensans-regular-webfont.woff';

import lightEOT from 'assets/fonts/open-sans/opensans-light-webfont.eot';
import lightTTF from 'assets/fonts/open-sans/opensans-light-webfont.ttf';
import lightWOFF from 'assets/fonts/open-sans/opensans-light-webfont.woff';

import semiBoldEOT from 'assets/fonts/open-sans/opensans-semibold-webfont.eot';
import semiBoldTTF from 'assets/fonts/open-sans/opensans-semibold-webfont.ttf';
import semiBoldWOFF from 'assets/fonts/open-sans/opensans-semibold-webfont.woff';

import boldEOT from 'assets/fonts/open-sans/opensans-bold-webfont.eot';
import boldTTF from 'assets/fonts/open-sans/opensans-bold-webfont.ttf';
import boldWOFF from 'assets/fonts/open-sans/opensans-bold-webfont.woff';

import extraBoldEOT from 'assets/fonts/open-sans/opensans-extrabold-webfont.eot';
import extraBoldTTF from 'assets/fonts/open-sans/opensans-extrabold-webfont.ttf';
import extraBoldWOFF from 'assets/fonts/open-sans/opensans-extrabold-webfont.woff';

import { absoluteUrl } from 'assets/assetLoader';

const createFontFace = (style, weights, eot, woff, ttf) => {
  const fontWeight = weights.
    map(weight => `font-weight: ${weight};`).
    join('\n    ');

  return `
  @font-face {
    font-family: "Open Sans";
    font-style: ${style};
    ${fontWeight}
    src: url("${absoluteUrl(eot)}");
    src: url("${absoluteUrl(eot)}?#iefix") format("embedded-opentype"),
    url("${absoluteUrl(woff)}") format("woff"),
    url("${absoluteUrl(ttf)}") format("truetype")
  }`;
};

export default () => {
  const fonts = [
    createFontFace('normal', ['normal', 400], regularEOT, regularWOFF, regularTTF),
    createFontFace('normal', [200], lightEOT, lightWOFF, lightTTF),
    createFontFace('normal', [500], semiBoldEOT, semiBoldWOFF, semiBoldTTF),
    createFontFace('normal', ['bold', 700], boldEOT, boldWOFF, boldTTF),
    createFontFace('normal', [900], extraBoldEOT, extraBoldWOFF, extraBoldTTF),
  ];

  return fonts.join('\n');
};
