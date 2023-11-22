import 'Styles/pages/main-background.scss';
import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { getHueState } from 'States/getHueState';

type Dot = {
  x: number;
  y: number;
  h: number;
  w: number;
  c: number;
  m: number;
};

const Background = () => {
  const isMount = useRef(false);

  const hue = useRecoilValue(getHueState);

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let bgg: HTMLDivElement;
  let h: number, w: number;
  let dots: Dot[] = [];
  let maxWidth = 50;
  let minWidth = 5;
  let maxHeight: number, minHeight: number;
  let maxSpeed = 40;
  let minSpeed = 6;
  let hueDif = 50;
  let glow = 10;

  window.onresize = function () {
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    maxHeight = h * 0.9;
    minHeight = h * 0.5;
    dots = [];
    pushDots(w / 15);
    ctx.globalCompositeOperation = 'lighter';
  };

  const pushDots = (count: number) => {
    for (let i = 0; i < count; i++) {
      dots.push({
        x: Math.random() * w!,
        y: (Math.random() * h!) / 2,
        h: Math.random() * (maxHeight - minHeight) + minHeight,
        w: Math.random() * (maxWidth - minWidth) + minWidth,
        c: Math.random() * (hue + hueDif - (hue - hueDif)) + (hue - hueDif),
        m: Math.random() * (maxSpeed - minSpeed) + minSpeed,
      });
    }
  };

  const render = () => {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < dots.length; i++) {
      ctx.beginPath();
      const grd = ctx.createLinearGradient(dots[i].x, dots[i].y, dots[i].x + dots[i].w, dots[i].y + dots[i].h);
      grd.addColorStop(0.0, `hsla(${dots[i].c},50%,50%,.0)`);
      grd.addColorStop(0.3, `hsla(${dots[i].c + 20},50%,50%,.5)`);
      grd.addColorStop(0.5, `hsla(${dots[i].c + 50},70%,60%,.7)`);
      grd.addColorStop(0.7, `hsla(${dots[i].c + 80},50%,50%,.5)`);
      grd.addColorStop(1, `hsla(${dots[i].c + 100},50%,50%,.0)`);
      ctx.shadowBlur = glow;
      ctx.shadowColor = `hsla(${dots[i].c},50%,50%,1)`;
      ctx.fillStyle = grd;
      ctx.fillRect(dots[i].x, dots[i].y, dots[i].w, dots[i].h);
      ctx.closePath();
      if (i < dots.length / 2) {
        dots[i].x += dots[i].m / 100;
      } else if (i > dots.length / 2) {
        dots[i].x -= dots[i].m / 100;
      }
      if (dots[i].x > w + maxWidth) {
        dots[i].x = -maxWidth;
      } else if (dots[i].x < 0 - maxWidth) {
        dots[i].x = w;
      }
    }
    window.requestAnimationFrame(render);
  };

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;

      w = window.innerWidth;
      h = window.innerHeight;
      maxWidth = 15;
      minWidth = 2;
      maxHeight = w * 0.9;
      minHeight = h * 0.5;

      canvas = document.getElementById('canvas') as HTMLCanvasElement;
      ctx = canvas.getContext('2d')!;
      bgg = document.getElementById('bg_glow') as HTMLDivElement;

      canvas.width = w;
      canvas.height = h;

      bgg.style.background = `radial-gradient(ellipse at center, hsla(${hue},50%,50%,.8) 0%,rgba(0,0,0,0) 100%)`;

      ctx.globalCompositeOperation = 'lighter';

      pushDots(w / 15);

      render();
    }
  }, []);

  return (
    <>
      <div id='bg_glow' />
      <div id='overlay' />
      <canvas id='canvas' />
    </>
  );
};

export default Background;
