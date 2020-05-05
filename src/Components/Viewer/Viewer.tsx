import React, { useEffect } from 'react'
import { viewer } from './ViewerService';

export default function Viewer() {
  useEffect(() => {
    viewer.initialize(document.getElementById("target") as HTMLElement);

    viewer
      .load(
        "cloud.js",
        "https://cdn.rawgit.com/potree/potree/develop/pointclouds/lion_takanawa/"
      )
      .then(pco => {
        // Make the lion shows up at the center of the screen.
        pco.translateX(-1);
        pco.rotateX(-Math.PI / 2);

        // The point cloud octree already comes with a material which
        // can be customized directly. Here we just set the size of the
        // points.
        pco.material.size = 1.0;
      })
      .catch(err => console.error(err));
  }, [])
  return (
    <div id="target">
    </div>
  )
}
