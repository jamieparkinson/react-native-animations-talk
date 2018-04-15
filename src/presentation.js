// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Layout,
  Fill,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Image,
  Appear,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import me from './assets/headshot.jpg';
import blob1 from './assets/blob-1.svg';
import blob2 from './assets/blob-2.svg';
import blob3 from './assets/blob-3.svg';
import styled from "styled-components";

// Require CSS
require('normalize.css');

const CircleImage = styled(Image)`
  border: 6px solid rgb(80, 50, 180);
  border-radius: 50%;
`;

const AppearingListItem = ({children, ...props}) => (
  <Appear>
    <ListItem padding="10px 0" {...props}>
      {children}
    </ListItem>
  </Appear>
);

const theme = createTheme(
  {
    primary: 'white',
    secondary: 'rgb(80, 50, 180)',
    tertiary: '#ffaac8',
    quartenary: '#CECECE',
  },
  {
    primary: 'Maax',
    secondary: 'Super Grotesk OT',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={1} caps textFont="secondary" lineHeight={1} textColor="primary">
            Animations in React Native
          </Heading>
          <Text margin="40px 0 0" textColor="primary" size={1} fit>
            or: How I Learned to Stop Worrying and Love Native UX
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary">Me</Heading>
          <CircleImage margin="30px auto" src={me} height={300} />
          <Text margin="40px 0 0" textColor="secondary">@jamieparkinson</Text>
          <Text margin="20px 0 0" textColor="secondary">Technology Will Save Us</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary">
            What makes an app feel native?
            <List>
              <AppearingListItem>Works offline?</AppearingListItem>
              <AppearingListItem>Uses device hardware?</AppearingListItem>
              <AppearingListItem>Doesn't need to fetch its layout?</AppearingListItem>
              <AppearingListItem>Gestures?</AppearingListItem>
              <AppearingListItem>Animations?</AppearingListItem>
            </List>
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary">Is this where React Native falls down?</Heading>
          <Appear>
            <Heading margin="50px 0 0" size={3} textColor="tertiary">(No)</Heading>
          </Appear>
        </Slide>
        <Slide bgColor="tertiary" textColor="secondary">
          <Heading size={3} textColor="secondary">
            A tale of two development cultures
          </Heading>
          <Layout>
            <Fill>
              <Heading
                size={4}
                bgColor="primary"
                textColor="secondary"
                padding="50px 25px 37px 25px"
                margin={40}
                lineHeight={2}
              >
                Web
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={4}
                bgColor="primary"
                textColor="secondary"
                padding="50px 25px 37px 25px"
                margin={40}
                lineHeight={2}
              >
                Native
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="primary" transition={['fade']}>
          <Heading size={5} textColor="secondary">
            Animation is not a luxury.
          </Heading>
        </Slide>
        <Slide bgColor="primary" transition={['fade']}>
          <Appear
            startValue={{ opacity: 1, transform: 'translate(-84px)' }}
            endValue={{ opacity: 1, transform: 'translate(0px)' }}
          >
            <Heading size={5} textColor="secondary">
              Animation is easy!
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Image margin="20px auto" src={blob1} />
          <Layout>
            <Fill>
              <Image margin={20} src={blob2} />
            </Fill>
            <Fill>
              <Image margin={20} src={blob3} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['scale']} bgColor="tertiary">
          <Heading size={6} textColor="secondary">Transitions</Heading>

        </Slide>
      </Deck>
    );
  }
}
