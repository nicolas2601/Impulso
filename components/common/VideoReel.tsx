import type { WorkVideo } from '@/data/realWork';
import { VideoClip } from './VideoClip';

interface VideoReelProps {
  videos: WorkVideo[];
  title: string;
  kicker: string;
}

/** Real installations on video: a swipeable row on phones, a strip on desktop. */
export const VideoReel = ({ videos, title, kicker }: VideoReelProps) => (
  <section aria-labelledby="video-reel-title" className="bg-zinc-950 py-16 md:py-24">
    <div className="container-impulso">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-impulso-yellow">{kicker}</p>
      <h2 id="video-reel-title" className="mt-3 text-4xl font-black tracking-tighter text-white md:text-6xl">
        {title}
      </h2>
      <p className="mt-4 max-w-lg text-zinc-400">Empiezan sin sonido. Toca el parlante si quieres escucharlos.</p>
    </div>
    <ul className="container-impulso mt-10 flex snap-x snap-mandatory scroll-pl-4 gap-4 overflow-x-auto pb-4 [scrollbar-width:none] sm:scroll-pl-6 lg:grid lg:grid-cols-5 lg:overflow-visible">
      {videos.map((video) => (
        <li key={video.src} className="w-[68vw] max-w-[300px] shrink-0 snap-start lg:w-auto lg:max-w-none">
          <figure>
            <VideoClip video={video} />
            <figcaption className="mt-3 text-sm leading-snug text-zinc-400">{video.title}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  </section>
);
