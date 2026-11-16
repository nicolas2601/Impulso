'use client';

import { useState } from 'react';
import Image from 'next/image';
import { VideoClip } from '@/components/common/VideoClip';
import { WORK_CATEGORIES, WORK_PHOTOS, WORK_VIDEOS, type WorkCategory, type WorkPhoto, type WorkVideo } from '@/data/realWork';

type Filter = WorkCategory | 'Todos';
type Tile = { kind: 'photo'; photo: WorkPhoto } | { kind: 'video'; video: WorkVideo };

const FILTERS: Filter[] = ['Todos', ...WORK_CATEGORIES];
/** A clip after every few photos keeps the wall moving without stacking videos together. */
const PHOTOS_PER_CLIP = 5;
const COLUMN_SIZES = '(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw';

function tilesFor(filter: Filter): Tile[] {
  const match = <T extends { category: WorkCategory }>(item: T) => filter === 'Todos' || item.category === filter;
  const clips = WORK_VIDEOS.filter(match);
  return WORK_PHOTOS.filter(match).flatMap((photo, i): Tile[] => {
    const tile: Tile = { kind: 'photo', photo };
    const clip = (i + 1) % PHOTOS_PER_CLIP === 0 ? clips.shift() : undefined;
    return clip ? [tile, { kind: 'video', video: clip }] : [tile];
  }).concat(clips.map((video): Tile => ({ kind: 'video', video })));
}

const PhotoTile = ({ photo }: { photo: WorkPhoto }) => (
  <figure className="group relative overflow-hidden rounded-[1.5rem] bg-zinc-200 md:rounded-[2rem]">
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      sizes={COLUMN_SIZES}
      className="h-auto w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:scale-105"
    />
    <figcaption className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-impulso-yellow">{photo.category}</span>
      <span className="mt-1 text-sm font-semibold leading-snug text-white">{photo.alt}</span>
    </figcaption>
  </figure>
);

const VideoTile = ({ video }: { video: WorkVideo }) => (
  <figure>
    <VideoClip video={video} className="rounded-[1.5rem] md:rounded-[2rem]" />
    <figcaption className="mt-2 px-1 text-sm leading-snug text-zinc-600">{video.title}</figcaption>
  </figure>
);

export const ProjectsCollage = () => {
  const [filter, setFilter] = useState<Filter>('Todos');
  const tiles = tilesFor(filter);

  return (
    <section aria-label="Trabajos realizados" className="bg-zinc-50 py-24">
      <div className="container-impulso">
        <div className="mb-16 flex flex-wrap justify-center gap-3 md:gap-4">
          {FILTERS.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={filter === cat}
              onClick={() => setFilter(cat)}
              className={`min-h-11 rounded-full px-7 py-3 text-[10px] font-black uppercase tracking-widest transition-colors duration-200 ${
                filter === cat ? 'bg-black text-white' : 'border border-zinc-200 bg-white text-zinc-500 hover:bg-zinc-100 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="columns-1 gap-4 sm:columns-2 md:gap-6 lg:columns-3 xl:columns-4">
          {tiles.map((tile) => (
            <li key={tile.kind === 'photo' ? tile.photo.src : tile.video.src} className="mb-4 break-inside-avoid md:mb-6">
              {tile.kind === 'photo' ? <PhotoTile photo={tile.photo} /> : <VideoTile video={tile.video} />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
