import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {waitFor} from '@motion-canvas/core/lib/flow';
import { all } from '@motion-canvas/core/lib/flow';
import {Circle} from '@motion-canvas/2d/lib/components';



export default makeScene2D(function* (view) {
  // Create your animations here

  view.add(
    <Circle
      ref={myCircle}
      x={-300}
      width={240}
      height={240}
      fill="#e13238"
    />,
  );











  


  yield* waitFor(6);
});


