import * as React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs';

import { SyntaxHighlight } from './utils/syntax';
import {
  Typography,
  TYPOGRAPHY,
  LABEL_VARIANT,
  BODY_VARIANT,
  BUTTON_VARIANT,
  HEADLINE_VARIANT,
  DISPLAY_VARIANT,
} from '../src';

const stories = storiesOf('Typography', module);
stories.addDecorator(withKnobs);

stories.add('Label', () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography typography={TYPOGRAPHY.LABEL} variant={LABEL_VARIANT.LABEL1}>Label1</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.LABEL} variant={LABEL_VARIANT.LABEL1}>Label1</Typography>`}
        syntax={'jsx'}
      />
      <Typography typography={TYPOGRAPHY.LABEL} variant={LABEL_VARIANT.LABEL2}>Label2</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.LABEL} variant={LABEL_VARIANT.LABEL2}>Label2</Typography>`}
        syntax={'jsx'}
      />
      <Typography typography={TYPOGRAPHY.LABEL} variant={LABEL_VARIANT.LABEL3}>Label3</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.LABEL} variant={LABEL_VARIANT.LABEL3}>Label3</Typography>`}
        syntax={'jsx'}
      />
    </div>
  );
});

stories.add('Body', () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography typography={TYPOGRAPHY.BODY} variant={BODY_VARIANT.BODY1}>Body1 Sample</Typography>
      <Typography typography={TYPOGRAPHY.BODY} variant={BODY_VARIANT.BODY1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus sed eu ipsum faucibus et diam. Orci rhoncus, est nibh risus ultricies. Elementum semper morbi pellentesque mattis faucibus lacus tortor at odio. Ornare non, pulvinar sapien ac sit feugiat.</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.BODY} variant={BODY_VARIANT.BODY1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus sed eu ipsum faucibus et diam. Orci rhoncus, est nibh risus ultricies. Elementum semper morbi pellentesque mattis faucibus lacus tortor at odio. Ornare non, pulvinar sapien ac sit feugiat.</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.BODY} variant={BODY_VARIANT.BODY2}>Body2 Sample</Typography>
      <Typography typography={TYPOGRAPHY.BODY} variant={BODY_VARIANT.BODY2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus sed eu ipsum faucibus et diam. Orci rhoncus, est nibh risus ultricies. Elementum semper morbi pellentesque mattis faucibus lacus tortor at odio. Ornare non, pulvinar sapien ac sit feugiat.</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.BODY} variant={BODY_VARIANT.BODY2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus sed eu ipsum faucibus et diam. Orci rhoncus, est nibh risus ultricies. Elementum semper morbi pellentesque mattis faucibus lacus tortor at odio. Ornare non, pulvinar sapien ac sit feugiat.</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.BODY} variant={BODY_VARIANT.BODY3}>Body3 Sample</Typography>
      <Typography typography={TYPOGRAPHY.BODY} variant={BODY_VARIANT.BODY3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus sed eu ipsum faucibus et diam. Orci rhoncus, est nibh risus ultricies. Elementum semper morbi pellentesque mattis faucibus lacus tortor at odio. Ornare non, pulvinar sapien ac sit feugiat.</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.BODY} variant={BODY_VARIANT.BODY3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus sed eu ipsum faucibus et diam. Orci rhoncus, est nibh risus ultricies. Elementum semper morbi pellentesque mattis faucibus lacus tortor at odio. Ornare non, pulvinar sapien ac sit feugiat.</Typography>`}
        syntax={'jsx'}
      />
    </div>
  );
});

stories.add('Button', () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography typography={TYPOGRAPHY.BUTTON} variant={BUTTON_VARIANT.BUTTON1}>Button1 Sample</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.BUTTON} variant={BUTTON_VARIANT.BUTTON1}>Button1 Sample</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.BUTTON} variant={BUTTON_VARIANT.BUTTON2}>Button2 Sample</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.BUTTON} variant={BUTTON_VARIANT.BUTTON2}>Button2 Sample</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.BUTTON} variant={BUTTON_VARIANT.BUTTON3}>Button3 Sample</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.BUTTON} variant={BUTTON_VARIANT.BUTTON3}>Button3 Sample</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.BUTTON} variant={BUTTON_VARIANT.BUTTON4}>Button4 Sample</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.BUTTON} variant={BUTTON_VARIANT.BUTTON4}>Button4 Sample</Typography>`}
        syntax={'jsx'}
      />
    </div>
  );
});

stories.add('Headlines', () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography typography={TYPOGRAPHY.HEADLINE} variant={HEADLINE_VARIANT.HEADLINE1}>Headline1 Sample</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.HEADLINE} variant={HEADLINE_VARIANT.HEADLINE1}>Headline1 Sample</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.HEADLINE} variant={HEADLINE_VARIANT.HEADLINE2}>Headline2 Sample</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.HEADLINE} variant={HEADLINE_VARIANT.HEADLINE2}>Headline2 Sample</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.HEADLINE} variant={HEADLINE_VARIANT.HEADLINE3}>Headline3 Sample</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.HEADLINE} variant={HEADLINE_VARIANT.HEADLINE3}>Headline3 Sample</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.HEADLINE} variant={HEADLINE_VARIANT.HEADLINE4}>Headline4 Sample</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.HEADLINE} variant={HEADLINE_VARIANT.HEADLINE4}>Headline4 Sample</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.HEADLINE} variant={HEADLINE_VARIANT.HEADLINE5}>Headline5 Sample</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.HEADLINE} variant={HEADLINE_VARIANT.HEADLINE5}>Headline5 Sample</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.HEADLINE} variant={HEADLINE_VARIANT.HEADLINE6}>Headline6 Sample</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.HEADLINE} variant={HEADLINE_VARIANT.HEADLINE6}>Headline6 Sample</Typography>`}
        syntax={'jsx'}
      />
    </div>
  );
});

stories.add('Displays', () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY1}>Display1</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY1}>Display1</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY2}>Display2</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY2}>Display2</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY3}>Display3</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY3}>Display3</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY4}>Display4</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY4}>Display4</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY5}>Display5</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY5}>Display5</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY6}>Display6</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY6}>Display6</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY7}>Display7</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY7}>Display7</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY8}>Display8</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY8}>Display8</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY9}>Display9</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY9}>Display9</Typography>`}
        syntax={'jsx'}
      />

      <Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY9}>Display10</Typography>
      <SyntaxHighlight
        codeblock={`<Typography typography={TYPOGRAPHY.DISPLAY} variant={DISPLAY_VARIANT.DISPLAY9}>Display10</Typography>`}
        syntax={'jsx'}
      />
    </div>
  );
});