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
  Text,
  Notes,
  Markdown
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
        <Slide transition={['zoom']} bgColor="secondary" viewerScaleMode>
          <Notes>
            Hi! I'm Jamie and I'm going to talk a bit about animations in react native - about why they're so important, and about how to do them.
            <br/>
          </Notes>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Animations in <br/> React Native
          </Heading>
          <Text margin="40px 0 0" textColor="primary" size={1} fit>
            or: How I Learned to Stop Worrying and Love Native UX
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" viewerScaleMode>
          <Notes>
            <p>This is me!</p>
            Tech Will Save Us - we make toys that kids can build & code themselves. We have a digital experience alongside the physical kits that we sell, that's what I work on.
          </Notes>
          <Heading size={6} textColor="secondary">Me</Heading>
          <CircleImage margin="30px auto" src={me} height={300} />
          <Text margin="40px 0 0" textColor="secondary" bold>@jamieparkinson</Text>
          <Text margin="20px 0 0" textColor="secondary" bold>Tech Will Save Us</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary" viewerScaleMode>
          <Notes>
            <p>So I'd like to start off by asking - what makes an app feel native? What makes them different to websites?</p>
            <ul>
              <li>Is it that they can pretty much always do something offline?</li>
              <li>Maybe it's that they can use the device hardware, like bluetooth or the camera</li>
              <li>A big one is that on the web we need to fetch *everything* from somewhere else - apps at least have their layout baked right in</li>
              <li>Is it the use of gestures? Swiping and pinch-to-zoom are *expected* on native apps - not so much on the web</li>
              <li>And perhaps it's animations - we expect stuff to move more!</li>
            </ul>
            <p>
              It's all of these, but I'd argue that the last 2 are the biggest from a user experience perspective.
              We just don't have the same signifiers, like hover effects, available on a touch device!
            </p>
            <p>So I think for a lot of people, hybrid apps, have a bad reputation for 'native' feel, so it's reasonable to ask...</p>
          </Notes>
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
        <Slide transition={['fade']} bgColor="secondary" textColor="primary" viewerScaleMode>
          <Notes>
            No, it's definitely not - React Native is great for animations! So why are they a daunting prospect, and why do hybrid apps have this reputation?
          </Notes>
          <Heading size={5} textColor="primary">Is this where React Native falls down?</Heading>
          <Appear>
            <Image margin="50px auto 0 auto" src="https://media.giphy.com/media/g69ZPJfLy7hD2/giphy.gif" />
          </Appear>
        </Slide>
        <Slide bgColor="tertiary" textColor="secondary" viewerScaleMode>
          <Notes>
            <p>
              In my opinion it's a pretty simple thing - a lot of us who come to React Native are web developers, and apart from the occasional
              CSS hover animation we don't really think about this kind of interactivity: we might have our developer tools set to emulate a small screen size but we're still using our mouse!
            </p>
            <p>
              Native developers have not only pretty impressive APIs for this kind of thing, but they're told to do it from day 1 - both Google's Material
              Design guidelines and Apple's Human Interface Guidelines are very clear about the importance of gestures and animations.
            </p>
            So it's no surprise there's this perception. But there's great news - animations in React Native are really easy!
          </Notes>
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
        <Slide bgColor="primary" transition={['fade']} viewerScaleMode>
          <Notes>
            And so I'd like to evangelise this idea that animations in native apps aren't a luxury - but I'm also not saying that
            you need to spend loads of time on them and *suffer* in order to get them: they're not a luxury because React Native makes
            them so affordable!
          </Notes>
          <Heading size={5} textColor="secondary">
            Animation is not a luxury.
          </Heading>
        </Slide>
        <Slide bgColor="primary" transition={['fade']} viewerScaleMode>
          <Notes>
            <p>So animations aren't a luxury - they're important, and they're *easy*</p>
            <p>And now we're going to go through an example of how you might build your animations within react native</p>
          </Notes>
          <Heading size={5} textColor="secondary" style={{ transform: 'translateX(-99px)' }}>
            Animation is easy!
          </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary" className="big-slide" viewerScaleMode>
          <Notes>
            So we start off with a static layout - all there is is a View with some Text in it, and it looks like this.
          </Notes>
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
        <Slide transition={['scale']} bgColor="secondary" viewerScaleMode>
          <Notes>
            <p>
              And next we get to the core of animations in React Native - an Animated.Value. These are kind of magic in that
              when we use them they bind to the underlying native properties that we're changing (whether that's position, or opacity, or rotation or whatever),
              avoiding the performance cost of changing the values in JavaScript.
            </p>
            <p>
              So we start off just putting this guy in the state of our component, with an initial value of 0.
            </p>
          </Notes>
          <CodePane
            lang="jsx"
            textSize="30px"
            source={examples.animatedValue}
          />
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary" className="big-slide" viewerScaleMode>
          <Notes>
            <p>Now we can swap out the View with an Animated.View, which knows how to take advantage of these magic native bindings</p>
            We can also bind our value to some property of the Animated.View - so let's just go for its vertical position. You'll notice I'm using a weird
            style object here and I'll just briefly explain that
          </Notes>
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
        <Slide transition={['zoom']} bgColor="tertiary" className="big-slide" viewerScaleMode>
          <Notes>
            There's an almost perfect oversimplification for styles in React Native etc etc.
            And you can only use flexbox! Relief as a web dev. No IE compat to worry about!
          </Notes>
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
        <Slide transition={['fade']} bgColor="primary" className="big-slide" viewerScaleMode>
          <Notes>
            Next let's just add a button to start our animation off
          </Notes>
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
        <Slide transition={['scale']} bgColor="secondary" viewerScaleMode>
          <Notes>
            And finally we write that `animate` function - we're using the Animated.timing function, which just takes a duration and an end value
            <br />
            We define the animation and then we immediately run it! And it looks like...
          </Notes>
          <CodePane
            lang="jsx"
            source={examples.animate}
            textSize="27px"
          />
        </Slide>
        <Slide transition={['zoom']} bgColor="tertiary" className="big-slide" viewerScaleMode>
          <Notes>
            Here we are. Basic but pretty straightforward to get to!
            <br />
            Now we've set this up there's more exciting stuff we can add on really easily.
          </Notes>
          <CentredReasonableVid src={screens.basicVid} autoPlay loop />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" className="big-slide" viewerScaleMode>
          <Notes>
            We've got interpolations - so 1 value can be used for changing lots of properties by different amounts. <br />
            (D3 comparison).<br />
            (Explain this code)
          </Notes>
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
        <Slide transition={['fade']} bgColor="secondary" className="big-slide" viewerScaleMode>
          <Notes>
            Or maybe we want to do a totally different type of transformation - let's change the opacity!
            <br />
            It's this simple to animate pretty much anything, but...
          </Notes>
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
          <Notes>
            This is animation but it isn't interaction - what's this telling the user? This does seem a bit like a luxury!
            <br />
            Well, we can do gestures almost as easily as this...
          </Notes>
          <Heading size={4} textColor="secondary" textSize="60px">OK, but this isn't interaction...</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" viewerScaleMode>
          <Notes>
            <p>Concede PanResponder looks terrifying - I'm not sure what these things mean and I wonder if anyone really does.</p>
            All that really matters is `onPanResponderMove`, and what we do here is bind our Animated.Value to the change in y of the touch interaction
          </Notes>
          <CodePane
            lang="jsx"
            source={examples.withGesture}
            textSize="24px"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" className="big-slide" viewerScaleMode>
          <Notes>
            And basically nothing changes in our View code! the style is the same as before and the panResponder provides us with an object
            of all the props that govern touch interactions: our hands stay clean!
          </Notes>
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
        <Slide transition={['scale']} bgColor="tertiary" className="big-slide" viewerScaleMode>
          <Notes>
            We can use literally the same code as before to change the opacity with movement as well
          </Notes>
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
        <Slide transition={['fade']} bgColor="primary" className="big-slide" viewerScaleMode>
          <Notes>
            <p>And we can use one more of these weird props for when the user lets go of the thing they're dragging</p>
            <p>Let's use another one of the built in functions and have our value 'spring' back to zero.</p>
            You can start to see how this sort of thing can really bring an interface to life!
          </Notes>
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
        <Slide bgColor="tertiary" viewerScaleMode>
          <Notes>
            And in a similar vein there's loads more you can do with almost identical code
          </Notes>
          <Heading size={6} textColor="secondary" textSize="55px">We have a pretty big toolbox! 🛠</Heading>
          <List margin="70px 0 0 0" bold>
            <ListItem textSize="27px" margin="10px 0 0 0">Staggered animations</ListItem>
            <ListItem textSize="27px" margin="10px 0 0 0">Parallel animations</ListItem>
            <ListItem textSize="27px" margin="10px 0 0 0">Sequential animations</ListItem>
            <ListItem textSize="27px" margin="10px 0 0 0">Loads of easing functions</ListItem>
            <ListItem textSize="27px" margin="10px 0 0 0">Springs</ListItem>
            <ListItem textSize="27px" margin="10px 0 0 0">Decaying values</ListItem>
            <ListItem textSize="27px" margin="10px 0 0 0">More...</ListItem>
          </List>
        </Slide>
        <Slide className="fullscreen-slide" bgColor="secondary" viewerScaleMode>
          <Notes>
            And here's a taster of what you can achieve using some of those things!
          </Notes>
          <video
            style={{
              width: '98vw',
              height: '98vh'
            }}
            ref={ el => { this.dough = el; }}
            src={require('./assets/doughrn.webm')}
            onClick={ () => this.dough.play() }
          />
        </Slide>
        <Slide transition={['zoom']} bgImage={require('./assets/space.jpg')} bgDarken={0.5} viewerScaleMode>
          <Notes>
            I'd just like to finish with talking about another approach that's really powerful to get your apps to another level with next to no dev time!
          </Notes>
          <Heading size={4} textColor="primary" textSize="100px">Beyond basic animations</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" viewerScaleMode>
          <Notes>
            Export from after effects. Designers can be completely in control.
          </Notes>
          <Text textColor="secondary" bold>
            <S type="bold italic">Lottie</S> is a library from Airbnb that uses ✨magic✨ to render custom animations
          </Text>
          <video src="https://media.giphy.com/media/ntHRTkAOukqYg/giphy.mp4" autoPlay loop style={{ marginTop: '60px' }} />
        </Slide>
        <Slide viewerScaleMode>
          <Notes>
            Here are some nice examples from the Lottie docs that show how much delight you can bring to an interface.
          </Notes>
          <Image src={require('./assets/lottie-examples.gif')} />
        </Slide>
        <Slide className="fullscreen-slide" bgColor="secondary" viewerScaleMode>
          <Notes>
            And so just for a bit of fun I'll finish with this - taking Lottie to its limits in our app.
          </Notes>
          <video
            style={{
              width: '98vw',
              height: '98vh'
            }}
            ref={ el => { this.dough = el; }}
            src={require('./assets/doughlottie.webm')}
            onClick={ () => this.dough.play() }
          />
        </Slide>
        <Slide viewerScaleMode>
          <Notes>
            So that's that, thank you! Any questions?
          </Notes>
          <Heading size={3} textColor="secondary">Thank you!</Heading>
          <Text bold textColor="secondary" textSize="28px" margin="50px 0 0 0">jamieparkinson/react-native-animations-talk</Text>
        </Slide>
      </Deck>
    );
  }
}
