import React, { Component, useRef, useEffect, useState } from 'react';
import useSound from 'use-sound';
import lawnmowerSound from './lawnmower.mp3';
import bliss2 from './bliss1.1.jfif'
import bliss3 from './bliss1.0.jfif'
import bliss4 from './bliss1.2.jfif'
import taskbar from './xptaskbar.png'
import './App.css'

const App = () => {
  const [play, { stop }] = useSound(lawnmowerSound);

  const canvasRef = React.useRef(null)
  const canvasRef2 = React.useRef(null)
  const canvasRef3 = React.useRef(null)


  var isPress = false;
  var old = null;

  useEffect(() => {
    if (isPress) {
      play()
    }
  }, [isPress])




  const mouseMove = (e) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    if (isPress) {
      var x = e.clientX;
      var y = e.clientY;
      ctx.globalCompositeOperation = 'destination-out';

      ctx.beginPath();
      ctx.arc(x, y, 10, 0, 2 * Math.PI);
      ctx.fill();

      ctx.lineWidth = 15;
      ctx.beginPath();
      ctx.moveTo(old.x, old.y);
      ctx.lineTo(x, y);
      ctx.stroke();

      old = { x: x, y: y };

    }
  }
  const mouseMove2 = (e) => {
    const canvas = canvasRef3.current
    const ctx = canvas.getContext('2d')

    if (isPress) {
      var x = e.clientX;
      var y = e.clientY;
      ctx.globalCompositeOperation = 'destination-out';

      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.fill();

      ctx.lineWidth = 20;
      ctx.beginPath();
      ctx.moveTo(old.x, old.y);
      ctx.lineTo(x, y);
      ctx.stroke();



      old = { x: x, y: y };

    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const canvas2 = canvasRef2.current
    const canvas3 = canvasRef3.current
    const ctx = canvas.getContext('2d')
    const ctx2 = canvas2.getContext('2d')
    const ctx3 = canvas3.getContext('2d')
    var img = new Image();
    var img2 = new Image();
    var img3 = new Image();
    img.src = bliss2;
    img2.src = bliss3;
    img3.src = bliss4;
    img.onload = function () {
      ctx.drawImage(img, 0, 0, img.width, img.height,     // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle
    };
    img2.onload = function () {
      ctx2.drawImage(img2, 0, 0, img.width, img.height,     // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle
    };
    img3.onload = function () {
      ctx3.drawImage(img3, 0, 0, img.width, img.height,     // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle
    };

    setTimeout(() => {
      ctx3.clearRect(0, 0, canvas.width, canvas.height);
    }, 5000);
  }, [])

  return (
    <>
      <img style={{ zIndex: 200, position: 'absolute', bottom: 0 }} src={taskbar} height={40} width={'100%'} />
      <div style={{
        position: 'relative'
      }}>
        <canvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0
          }}
          width={window.innerWidth}
          height={window.innerHeight}
          ref={canvasRef2}
        />
        <canvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2
          }}
          width={window.innerWidth}
          height={window.innerHeight}
          ref={canvasRef}
        />
        <canvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2
          }}
          width={window.innerWidth}
          height={window.innerHeight}
          ref={canvasRef3}
          onMouseUp={() => {
            // stop()
            isPress = false
          }}
          onMouseDown={(e) => {
            // play()
            isPress = true;
            old = { x: e.clientX, y: e.clientY };
          }}
          onMouseMove={e => {
            mouseMove2(e)
            mouseMove(e)
          }}
        />
      </div>
    </>
  );

}

export default App