import * as React from 'react';
import { css, StyleAttribute } from 'glamor';

import { TEXT } from '../../styles/variables';

export enum TYPOGRAPHY {
  LABEL,
  BODY,
  BUTTON,
  HEADLINE,
  DISPLAY,
}

export enum LABEL_VARIANT {
  LABEL1,
  LABEL2,
  LABEL3,
}

export enum BODY_VARIANT {
  BODY1,
  BODY2,
  BODY3,
}

export enum BUTTON_VARIANT {
  BUTTON1,
  BUTTON2,
  BUTTON3,
  BUTTON4,
}

export enum HEADLINE_VARIANT {
  HEADLINE1,
  HEADLINE2,
  HEADLINE3,
  HEADLINE4,
  HEADLINE5,
  HEADLINE6,
}

export enum DISPLAY_VARIANT {
  DISPLAY1,
  DISPLAY2,
  DISPLAY3,
  DISPLAY4,
  DISPLAY5,
  DISPLAY6,
  DISPLAY7,
  DISPLAY8,
  DISPLAY9,
  DISPLAY10,
}

export interface Props {
  typography?: TYPOGRAPHY
  variant?: LABEL_VARIANT | BODY_VARIANT | BUTTON_VARIANT | HEADLINE_VARIANT | DISPLAY_VARIANT;
  style?: StyleAttribute | object;
}

const labelBaseStyle = {
  [LABEL_VARIANT.LABEL1]: css({
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '14px',
    color: TEXT.color,
  }),
  [LABEL_VARIANT.LABEL2]: css({
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '140%',
    letterSpacing: '-0.0025em',
    color: TEXT.color,
  }),
  [LABEL_VARIANT.LABEL3]: css({
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '13px',
    lineHeight: '140%',
    letterSpacing: '-0.0025em',
    color: TEXT.color,
  })
}

export const bodyBaseStyle = {
  [BODY_VARIANT.BODY1]: css({
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '130%',
    letterSpacing: '-0.01em',
    color: TEXT.color,
  }),
  [BODY_VARIANT.BODY2]: css({
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '-0.01em',
    color: TEXT.color,
  }),
  [BODY_VARIANT.BODY3]: css({
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '17px',
    lineHeight: '150%',
    letterSpacing: '-0.01em',
    color: TEXT.color,
  }),
}

export const buttonBaseStyle = {
  [BUTTON_VARIANT.BUTTON1]: css({
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '15px',
    lineHeight: '120%',
    letterSpacing: '-0.01em',
    color: TEXT.color,
  }),
  [BUTTON_VARIANT.BUTTON2]: css({
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '-0.01em',
    color: TEXT.color,
  }),
  [BUTTON_VARIANT.BUTTON3]: css({
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '-0.01em',
    color: TEXT.color,
  }),
  [BUTTON_VARIANT.BUTTON4]: css({
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '-0.01em',
    color: TEXT.color,
  }),
}

export const headlineBaseStyle = {
  [HEADLINE_VARIANT.HEADLINE1]: css({
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '15px',
    lineHeight: '140%',
    color: TEXT.color,
  }),
  [HEADLINE_VARIANT.HEADLINE2]: css({
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '17px',
    lineHeight: '24px',
    letterSpacing: '-0.016em',
    color: TEXT.color,
  }),
  [HEADLINE_VARIANT.HEADLINE3]: css({
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '-0.024em',
    color: TEXT.color,
  }),
  [HEADLINE_VARIANT.HEADLINE4]: css({
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '120%',
    letterSpacing: '-0.016em',
    color: TEXT.color,
  }),
  [HEADLINE_VARIANT.HEADLINE5]: css({
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '120%',
    letterSpacing: '-0.024em',
    color: TEXT.color,
  }),
  [HEADLINE_VARIANT.HEADLINE6]: css({
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '26px',
    lineHeight: '120%',
    letterSpacing: '-0.015em',
    color: TEXT.color,
  }),
}

const displayBaseStyle = {
  [DISPLAY_VARIANT.DISPLAY1]: css({
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '32px',
    lineHeight: '120%',
    letterSpacing: '-0.015em',
    color: TEXT.color,
  }),
  [DISPLAY_VARIANT.DISPLAY2]: css({
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight: '120%',
    letterSpacing: '-0.015em',
    color: TEXT.color,
  }),
  [DISPLAY_VARIANT.DISPLAY3]: css({
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '42px',
    lineHeight: '120%',
    letterSpacing: '-0.015em',
    color: TEXT.color,
  }),
  [DISPLAY_VARIANT.DISPLAY4]: css({
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '48px',
    lineHeight: '120%',
    letterSpacing: '-0.015em',
    color: TEXT.color,
  }),
  [DISPLAY_VARIANT.DISPLAY5]: css({
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '56px',
    lineHeight: '120%',
    letterSpacing: '-0.015em',
    color: TEXT.color,
  }),
  [DISPLAY_VARIANT.DISPLAY6]: css({
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '64px',
    lineHeight: '120%',
    letterSpacing: '-0.024em',
    color: TEXT.color,
  }),
  [DISPLAY_VARIANT.DISPLAY7]: css({
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '72px',
    lineHeight: '120%',
    letterSpacing: '-0.024em',
    color: TEXT.color,
  }),
  [DISPLAY_VARIANT.DISPLAY8]: css({
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '96px',
    lineHeight: '120%',
    letterSpacing: '-0.032em',
    color: TEXT.color,
  }),
  [DISPLAY_VARIANT.DISPLAY8]: css({
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '96px',
    lineHeight: '120%',
    letterSpacing: '-0.032em',
    color: TEXT.color,
  }),
  [DISPLAY_VARIANT.DISPLAY9]: css({
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: '144px',
    lineHeight: '120%',
    letterSpacing: '-0.024em',
    color: TEXT.color,
  }),
  [DISPLAY_VARIANT.DISPLAY10]: css({
    fontStyle: 'normal',
    fontWeight: '100',
    fontSize: '288px',
    lineHeight: '120%',
    letterSpacing: '-0.05em',
    color: TEXT.color,
  }),
}

const Typography: React.SFC<Props> = ({ typography, variant, style, children }) => {
  return {
    [TYPOGRAPHY.LABEL]: (
      <label {...css(labelBaseStyle[variant], style)}>{children}</label>
    ),
    [TYPOGRAPHY.BODY]: (
      <p {...css(bodyBaseStyle[variant], style)}>{children}</p>
    ),
    [TYPOGRAPHY.BUTTON]: (
      <label {...css(buttonBaseStyle[variant], style)}>{children}</label>
    ),
    [TYPOGRAPHY.HEADLINE]: (
      <div {...css(headlineBaseStyle[variant], style)}>{children}</div>
    ),
    [TYPOGRAPHY.DISPLAY]: (
      <div {...css(displayBaseStyle[variant], style)}>{children}</div>
    )
  }[typography]
}

export {
  Typography
}