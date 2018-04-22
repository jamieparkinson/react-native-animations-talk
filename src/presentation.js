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
  CodePane,
  Code,
  S,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import me from './assets/headshot.jpg';
import * as examples from './code/';
import * as screens from './screens';
import styled from "styled-components";

// Require CSS
require('normalize.css');

const CircleImage = styled(Image)`
  border: 6px solid rgb(80, 50, 180);
  border-radius: 50%;
`;

const ReasonableShot = styled(Image)`
  height: 750px;
  margin: 0 230px !important;
`;

const ReasonableVid = styled.video`
  height: 750px;
  margin: 0 230px !important;
`;

const CentredReasonableVid = styled.video`
  height: 750px;
  margin: 0 auto !important;
`;

const TinyButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 10px;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  width: 10px;
  height: 10px;
`

const AppearingListItem = ({children, ...props}) => (
  <Appear>
    <ListItem padding="10px 0" {...props}>
      {children}
    </ListItem>
  </Appear>
);

const theme = createTheme(
  {
    primary: '#f7f7f7',
    secondary: 'rgb(80, 50, 180)',
    tertiary: '#ffaac8',
    quartenary: '#CECECE',
  },
  {
    primary: { name: "Open Sans", googleFont: true, styles: [ "400", "800" ] }
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
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Animations in <br/> React Native
          </Heading>
          <Text margin="40px 0 0" textColor="primary" size={1} fit>
            or: How I Learned to Stop Worrying and Love Native UX
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary">Me</Heading>
          <CircleImage margin="30px auto" src={me} height={300} />
          <Text margin="40px 0 0" textColor="secondary" bold>@jamieparkinson</Text>
          <Text margin="20px 0 0" textColor="secondary" bold>Technology Will Save Us</Text>
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
            <Image margin="50px auto 0 auto" src="https://media.giphy.com/media/g69ZPJfLy7hD2/giphy.gif" />
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
          <Heading size={5} textColor="secondary" style={{ transform: 'translateX(-99px)' }}>
            Animation is easy!
          </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary" className="big-slide">
          <Layout>
            <Fill>
              <CodePane
                lang="jsx"
                source={examples.plain}
                textSize="28px"
                className="big-pane"
              />
            </Fill>
            <Fill>
              <ReasonableShot src={screens.basicPng} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['scale']} bgColor="secondary">
          <CodePane
            lang="jsx"
            textSize="30px"
            source={examples.animatedValue}
          />
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary" className="big-slide">
          <Layout>
            <Fill>
              <CodePane
                lang="jsx"
                source={examples.animatedView}
                textSize="28px"
                className="big-pane"
              />
            </Fill>
            <Fill>
              <ReasonableShot src={screens.basicPng} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary" className="big-slide">
          <Heading size={6} textColor="secondary" margin="0 0 50px 0">👩🏽‍🎨 Styles in React Native 🎨</Heading>
          <Text bold textColor="secondary" textSize="35px">Almost perfect oversimplification:</Text>
          <Text bold textColor="secondary" textSize="35px" margin="10px 0 0 0"><S type="bold italic">they're just objects with camelCased CSS properties</S></Text>
          <Text textColor="secondary" margin="35px 0 0 0" textSize="30px">(and you can only use flexbox for layout)</Text>
          <CodePane
            lang="jsx"
            source={examples.styles}
            textSize="27px"
            margin="30px 0 0 0"
            className="inline-pane"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" className="big-slide">
          <Layout>
            <Fill>
              <CodePane
                lang="jsx"
                source={examples.withButton}
                textSize="25px"
                className="big-pane"
              />
            </Fill>
            <Fill>
              <ReasonableShot src={screens.buttonPng} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['scale']} bgColor="secondary">
          <CodePane
            lang="jsx"
            source={examples.animate}
            textSize="27px"
          />
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary" className="big-slide">
          <CentredReasonableVid src={screens.basicVid} autoPlay loop />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" className="big-slide">
          <Layout>
            <Fill>
              <CodePane
                lang="jsx"
                source={examples.withInterpolate}
                textSize="25px"
                className="big-pane"
              />
            </Fill>
            <Fill>
              <ReasonableVid src={screens.xyInterpVid} autoPlay loop />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" className="big-slide">
          <Layout>
            <Fill>
              <CodePane
                lang="jsx"
                source={examples.withInterpolateOpacity}
                textSize="25px"
                className="big-pane"
              />
            </Fill>
            <Fill>
              <ReasonableVid src={screens.opacityInterpVid} autoPlay loop />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary" viewerScaleMode>
          <Heading size={4} textColor="secondary" textSize="60px">OK, but this isn't interaction...</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <CodePane
            lang="jsx"
            source={examples.withGesture}
            textSize="24px"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" className="big-slide">
          <Layout>
            <Fill>
              <CodePane
                lang="jsx"
                source={examples.animatedViewGesture}
                textSize="25px"
                className="big-pane"
              />
            </Fill>
            <Fill>
              <ReasonableVid src={screens.gestureVid} autoPlay loop />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['scale']} bgColor="tertiary" className="big-slide">
          <Layout>
            <Fill>
              <CodePane
                lang="jsx"
                source={examples.withInterpolateOpacity}
                textSize="25px"
                className="big-pane"
              />
            </Fill>
            <Fill>
              <ReasonableVid src={screens.gestureOpacityVid} autoPlay loop />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" className="big-slide">
          <Layout>
            <Fill>
              <CodePane
                lang="jsx"
                source={examples.withSpring}
                textSize="24px"
                className="big-pane"
              />
            </Fill>
            <Fill>
              <ReasonableVid src={screens.gestureSpringVid} autoPlay loop />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="secondary" textSize="55px">We have a pretty big toolbox! 🛠</Heading>
          <List margin="70px 0 0 0" bold>
            <ListItem textSize="27px" margin="10px 0 0 0">Staggered animations</ListItem>
            <ListItem textSize="27px" margin="10px 0 0 0">Parallel animations</ListItem>
            <ListItem textSize="27px" margin="10px 0 0 0">Sequential animations</ListItem>
            <ListItem textSize="27px" margin="10px 0 0 0">Loads of easing functions</ListItem>
            <ListItem textSize="27px" margin="10px 0 0 0">Springs</ListItem>
            <ListItem textSize="27px" margin="10px 0 0 0">Decaying values</ListItem>
            <ListItem textSize="27px" margin="10px 0 0 0">Maths with <Code textSize="27px">Animated.Values</Code></ListItem>
            <ListItem textSize="27px" margin="10px 0 0 0">More...</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgImage={require('./assets/space.jpg')} bgDarken={0.5} viewerScaleMode>
          <Heading size={4} textColor="primary" textSize="100px">Beyond basic animations</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Text textColor="secondary" bold>
            <S type="bold italic">Lottie</S> is a library from Airbnb that uses ✨magic✨ to render custom animations
          </Text>
          <video src="https://media.giphy.com/media/ntHRTkAOukqYg/giphy.mp4" autoPlay loop style={{ marginTop: '60px' }} />
        </Slide>
        <Slide>
          <Image src={require('./assets/lottie-examples.gif')} />
        </Slide>
        <Slide className="fullscreen-slide" bgColor="secondary">
          <video
            style={{
              width: '98vw',
              height: '98vh'
            }}
            preload="auto"
            controls
            src={require('./assets/dough.webm')}
          />
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">Thank you!</Heading>
        </Slide>
      </Deck>
    );
  }
}
