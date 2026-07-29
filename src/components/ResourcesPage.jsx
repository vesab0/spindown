import { useEffect, useState } from 'react'

const navSections = [
  { id: 'surviving', label: 'Surviving a jam' },
  { id: 'tools', label: 'Free tools' },
  { id: 'examples', label: 'Game examples' },
  { id: 'design', label: 'Game design' },
  { id: 'godot', label: 'Learn Godot' },
  { id: 'art', label: '2D art & animation' },
]

function SideNav() {
  const [active, setActive] = useState(navSections[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 xl:flex xl:left-6">
      {navSections.map(({ id, label }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            type="button"
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-3 text-left"
          >
            <span
              className={`h-3 w-3 shrink-0 transition-colors ${
                isActive ? 'bg-[#D93A44]' : 'bg-white/30 group-hover:bg-white/70'
              }`}
            />
            <span
              className={`whitespace-nowrap font-akshar text-[15px] font-bold leading-none transition-colors ${
                isActive ? 'text-white' : 'text-white/50 group-hover:text-white/80'
              }`}
            >
              {label}
            </span>
          </button>
        )
      })}
    </aside>
  )
}

const games = [
  { title: 'lineoff', href: 'https://kultisti.itch.io/lineoff', image: 'https://img.itch.zone/aW1hZ2UvMTE1OTM1MS82NzQwNDA0LmdpZg==/original/twxmU4.gif' },
  { title: 'Little Slime Blows Up', href: 'https://jimmyc5.itch.io/little-sl', image: 'https://img.itch.zone/aW1hZ2UvMjkxMTE5MS8xNzQxMzY5Ny5wbmc=/original/ZwnSIS.png' },
  { title: 'KILLOVER', href: 'https://quentindelvallet.itch.io/killover', image: 'https://img.itch.zone/aW1nLzI1NDExNzAyLmdpZg==/original/rJeWTx.gif' },
  { title: 'Öoo', href: 'https://namatakahashi.itch.io/oo', image: 'https://img.itch.zone/aW1nLzIxNTM5MzY4LmdpZg==/original/%2FNZ%2Fhu.gif' },
  { title: 'Death Spiral', href: 'https://kindanice.itch.io/death-spiral', image: 'https://img.itch.zone/aW1hZ2UvNDcxNjkxNi8yODExOTk3Ni5wbmc=/original/XgfVdv.png' },
  { title: 'Tetris', href: 'https://play.tetris.com/', image: 'https://www.datocms-assets.com/145957/1744284280-tetris-mobile.png?auto=format&fit=max&w=1200' },
  { title: 'Pac-Man', href: 'https://freepacman.org/', image: 'https://freepacman.org/images/pacman-game-card.png' },
]

const tools = [
  {
    name: 'Godot',
    tag: 'Game engine',
    blurb: 'Free and open source engine for 2D and 3D games. Great for jams and totally free to ship with.',
    href: 'https://docs.godotengine.org/en/stable/about/introduction.html',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg',
  },
  {
    name: 'Blender',
    tag: '3D & animation',
    blurb: 'Model, sculpt, rig, and animate in 3D. Handles everything from assets to full cinematics.',
    href: 'https://docs.blender.org/manual/en/latest/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg',
  },
  {
    name: 'Krita',
    tag: '2D art & painting',
    blurb: 'Digital painting built for artists. Perfect for sprites, textures, and concept art.',
    href: 'https://docs.krita.org/en/user_manual.html',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Calligra_Krita_icon.svg',
  },
]

const designFeatured = {
  videoId: '6sZJYA06z7Y',
  title: "Why 'fun'?",
  desc: 'Start here. Raph Koster on what actually makes a game fun, and why that matters more than anything else you build.',
}

const designGroups = [
  {
    group: 'Tutorials & talks',
    items: [
      { title: 'How to get ideas fast', desc: 'A practical way to come up with game jam ideas quickly.', href: 'https://www.youtube.com/watch?v=xe2X0WJgI-4', image: 'https://img.youtube.com/vi/xe2X0WJgI-4/hqdefault.jpg' },
      { title: 'A Theory of Fun (PDF)', desc: "Raph Koster's classic early essay on the theory of fun.", href: 'https://www.theoryoffun.com/theoryoffun.pdf', image: 'https://www.theoryoffun.com/images/english-cover-2nd.jpg' },
      { title: 'Best games from GMTK Game Jam 2024', desc: 'A tour of standout entries from a huge game jam.', href: 'https://www.youtube.com/watch?v=gqCAeFjB8Uo', image: 'https://img.youtube.com/vi/gqCAeFjB8Uo/hqdefault.jpg' },
      { title: 'The 100 games that taught me game design', desc: 'Lessons pulled from a hundred influential games.', href: 'https://www.youtube.com/watch?v=gWNXGfXOrro', image: 'https://img.youtube.com/vi/gWNXGfXOrro/hqdefault.jpg' },
      { title: 'Best games from the Very Serious Game Jam', desc: 'Highlights and takeaways from another game jam.', href: 'https://youtu.be/qbZQign1RnM?si=CsmJjC4QbN4AC7PJ', image: 'https://img.youtube.com/vi/qbZQign1RnM/hqdefault.jpg' },
    ],
  },
]

const designExtraGroups = [
  {
    group: 'Go deeper',
    items: [
      { title: 'Meaningful mechanics', desc: 'How designers use mechanics to convey theme and emotion.', href: 'https://www.youtube.com/watch?v=KkdPxZbUNSw&t=1355s', image: 'https://img.youtube.com/vi/KkdPxZbUNSw/hqdefault.jpg' },
      { title: 'Depth vs complexity', desc: 'The difference between depth and complexity, and why it matters.', href: 'https://www.youtube.com/watch?v=VhCrO43wn88', image: 'https://img.youtube.com/vi/VhCrO43wn88/hqdefault.jpg' },
    ],
  },
]

const godotFeatured = {
  videoId: 'QKgTZWbwD1U',
  title: 'Why Godot?',
  desc: 'Start here. A quick pitch on why Godot is a great, genuinely free engine to build your jam game in.',
}

const godotGroups = [
  {
    group: 'Video tutorials',
    items: [
      { title: 'Coding basics for beginners', desc: 'The fundamentals of programming, no prior experience needed.', href: 'https://youtu.be/yjiFwz6mS6k?si=ekQEMEqk2ql4_f8P', image: 'https://img.youtube.com/vi/yjiFwz6mS6k/hqdefault.jpg' },
      { title: 'Beginner series — lesson 1', desc: 'First steps in the editor and the basics of GDScript.', href: 'https://www.youtube.com/watch?v=lGZ4RaC4O2w&list=PLhqJJNjsQ7KEcm-iYJ2a8UCRN62bTneKa&index=2', image: 'https://img.youtube.com/vi/lGZ4RaC4O2w/hqdefault.jpg' },
      { title: 'Beginner series — lesson 2', desc: 'Keep going with scenes, nodes, and how they fit together.', href: 'https://www.youtube.com/watch?v=F53qTyIiZDc&list=PLhqJJNjsQ7KEcm-iYJ2a8UCRN62bTneKa&index=4', image: 'https://img.youtube.com/vi/F53qTyIiZDc/hqdefault.jpg' },
      { title: 'Your first 2D game', desc: 'Build a complete little 2D game from start to finish.', href: 'https://www.youtube.com/watch?v=TkvRsGstk-w', image: 'https://img.youtube.com/vi/TkvRsGstk-w/hqdefault.jpg' },
      { title: 'Animation trees', desc: 'Blend and control animations with AnimationTree.', href: 'https://www.youtube.com/watch?v=iElHZhOxGYA', image: 'https://img.youtube.com/vi/iElHZhOxGYA/hqdefault.jpg' },
    ],
  },
]

const godotExtraGroups = [
  {
    group: 'Guides & references',
    items: [
      { title: 'What is Godot?', desc: 'A plain-English intro to what Godot actually is.', href: 'https://www.perforce.com/blog/vcs/what-is-godot', image: 'https://www.perforce.com/sites/default/files/vcs_blog_godot-game-engine.jpg.jpeg' },
      { title: 'Learn GDScript (interactive)', desc: 'Learn GDScript hands-on in an in-browser app.', href: 'https://school.gdquest.com/courses/learn_2d_gamedev_godot_4/learn_gdscript/learn_gdscript_app#the-learn-gdscript-app', image: 'https://school.gdquest.com/opengraph-image.png' },
      { title: 'Get to know the editor', desc: 'A guided tour of the Godot editor and its panels.', href: 'https://www.gdquest.com/library/gdtour_get_to_know_godot_editor/', image: 'https://www.gdquest.com/library/gdtour_get_to_know_godot_editor/godot-tours-banner.webp' },
      { title: 'Learn Godot GDScript', desc: 'A downloadable interactive GDScript course.', href: 'https://gdquest.itch.io/learn-godot-gdscript', image: 'https://img.itch.zone/aW1nLzgxNTc1ODAucG5n/original/9bBrgO.png' },
      { title: 'Beginner learning path', desc: 'A structured path from zero to comfortable.', href: 'https://www.gdquest.com/tutorial/godot/learning-paths/beginner/', image: 'https://www.gdquest.com/tutorial/godot/learning-paths/beginner/banner.jpg' },
    ],
  },
  {
    group: 'Go deeper',
    items: [
      { title: 'Signals', desc: 'Wire nodes together cleanly with signals.', href: 'https://www.youtube.com/watch?v=Qlq8pBB2htg', image: 'https://img.youtube.com/vi/Qlq8pBB2htg/hqdefault.jpg' },
      { title: 'Event bus', desc: 'A global event bus for decoupled communication.', href: 'https://www.youtube.com/watch?v=lWaLUm3V99Q', image: 'https://img.youtube.com/vi/lWaLUm3V99Q/hqdefault.jpg' },
      { title: 'Composition', desc: 'Build flexible objects by composing behaviours.', href: 'https://www.youtube.com/watch?v=e3H_nw4w5U8', image: 'https://img.youtube.com/vi/e3H_nw4w5U8/hqdefault.jpg' },
      { title: 'Add-ons', desc: 'Extend the editor with plugins and add-ons.', href: 'https://www.youtube.com/watch?v=ff5eNVhnSWQ', image: 'https://img.youtube.com/vi/ff5eNVhnSWQ/hqdefault.jpg' },
    ],
  },
  {
    group: 'Dev resources',
    items: [
      { title: 'Awesome Godot', desc: 'A huge curated list of Godot plugins, tools, and tutorials.', href: 'https://github.com/godotengine/awesome-godot', image: 'https://opengraph.githubassets.com/1/godotengine/awesome-godot' },
      { title: 'GDNotes', desc: 'Quick-reference notes and snippets for Godot.', href: 'https://gdnotes.com/', image: 'https://www.google.com/s2/favicons?domain=gdnotes.com&sz=256' },
    ],
  },
]

const artFeatured = {
  videoId: 'SV1BBtD3hY4',
  start: 88,
  title: 'Why game art matters',
  desc: 'Start here. Why art direction and readability matter more for a jam game than raw drawing skill.',
}

const artGroups = [
  {
    group: 'Watch these first',
    items: [
      { title: 'MVP art', desc: 'Make the minimum art your game actually needs, fast.', href: 'https://www.youtube.com/watch?v=0FbE1jet_DM', image: 'https://img.youtube.com/vi/0FbE1jet_DM/hqdefault.jpg' },
      { title: 'Art as a utility', desc: 'Treat art as a tool that serves the game, not decoration.', href: 'https://www.youtube.com/watch?v=IgJBLXBG1Yc', image: 'https://img.youtube.com/vi/IgJBLXBG1Yc/hqdefault.jpg' },
      { title: 'Animating in Krita', desc: 'Get started animating from scratch in Krita.', href: 'https://www.youtube.com/watch?v=oXMCmiT_wxA', image: 'https://img.youtube.com/vi/oXMCmiT_wxA/hqdefault.jpg' },
    ],
  },
  {
    group: 'More tutorials',
    items: [
      { title: 'Fundamentals of game animation', desc: 'The core principles behind animation that feels good.', href: 'https://www.youtube.com/watch?v=CrOGr8i575k', image: 'https://img.youtube.com/vi/CrOGr8i575k/hqdefault.jpg' },
      { title: 'UI basics', desc: 'The fundamentals of laying out readable game UI.', href: 'https://www.youtube.com/watch?v=Xo5mzi3j204', image: 'https://img.youtube.com/vi/Xo5mzi3j204/hqdefault.jpg' },
      { title: 'What makes great UI', desc: 'GMTK on what separates good game UI from bad.', href: 'https://www.youtube.com/watch?v=4Bv45aPMGyI', image: 'https://img.youtube.com/vi/4Bv45aPMGyI/hqdefault.jpg' },
      { title: 'Pixel art starter', desc: "A beginner's guide to making your first pixel art.", href: 'https://www.youtube.com/watch?v=DKmrBUpd0yw', image: 'https://img.youtube.com/vi/DKmrBUpd0yw/hqdefault.jpg' },
      { title: 'Pixel art animation', desc: 'Bring your pixel art to life with animation.', href: 'https://www.youtube.com/watch?v=J1sFBDQt8J0', image: 'https://img.youtube.com/vi/J1sFBDQt8J0/hqdefault.jpg' },
      { title: 'Standard pixel sizes', desc: 'Common canvas and sprite sizes to work at.', href: 'https://www.youtube.com/shorts/6Z5R7vUyLT0', image: 'https://img.youtube.com/vi/6Z5R7vUyLT0/hqdefault.jpg' },
      { title: 'Hand-drawn animation', desc: 'A written guide to hand-drawn animation.', href: 'https://rightful-milkshake-b41.notion.site/Hand-Drawn-Animation-244e9ce3908180e68ccce73266bd0cd3', image: 'https://app.notion.com/images/meta/default.png' },
      { title: 'Transition trick', desc: 'A quick transition animation in short form.', href: 'https://www.youtube.com/shorts/b2X9jG6FngY', image: 'https://img.youtube.com/vi/b2X9jG6FngY/hqdefault.jpg' },
    ],
  },
]

const artExtraGroups = [
  {
    group: 'Go deeper',
    items: [
      { title: 'Animated & dynamic textures', desc: 'Add movement and life with dynamic textures.', href: 'https://www.youtube.com/watch?v=HsOKwUwL1bE', image: 'https://img.youtube.com/vi/HsOKwUwL1bE/hqdefault.jpg' },
      { title: '9 elements of good art', desc: 'Nine things that make game art read well.', href: 'https://www.youtube.com/watch?v=D5BcoOCLur4&t=128s', image: 'https://img.youtube.com/vi/D5BcoOCLur4/hqdefault.jpg' },
      { title: 'More art techniques', desc: 'Extra techniques to push your visuals further.', href: 'https://www.youtube.com/watch?v=cz4rn_xVX2U', image: 'https://img.youtube.com/vi/cz4rn_xVX2U/hqdefault.jpg' },
    ],
  },
]

const artAssets = [
  { title: 'Brackeys platformer bundle', tag: 'Tileset', href: 'https://brackeysgames.itch.io/brackeys-platformer-bundle', image: 'https://img.itch.zone/aW1nLzE1Mzk1MDYyLnBuZw==/original/tvwdSw.png' },
  { title: 'Dungeon tileset II', tag: 'Tileset', href: 'https://0x72.itch.io/dungeontileset-ii', image: 'https://img.itch.zone/aW1hZ2UvMzA5MDI4LzE1MTk3MjcucG5n/original/VCoz5j.png' },
  { title: 'Pixel isometric tiles', tag: 'Tileset', href: 'https://scrabling.itch.io/pixel-isometric-tiles', image: 'https://img.itch.zone/aW1nLzk3MTM3NTMucG5n/original/cLHsBD.png' },
  { title: 'Dungeon platformer tileset', tag: 'Tileset', href: 'https://incolgames.itch.io/dungeon-platformer-tile-set-pixel-art', image: 'https://img.itch.zone/aW1nLzg5ODA2ODMucG5n/original/E2sWuN.png' },
  { title: 'Neo Zero cyberpunk city', tag: 'Tileset', href: 'https://yaninyunus.itch.io/neo-zero-cyberpunk-city-tileset', image: 'https://img.itch.zone/aW1nLzE5MDUxODc5LnBuZw==/original/465Cml.png' },
  { title: 'Sprout Lands UI pack', tag: 'UI pack', href: 'https://cupnooble.itch.io/sprout-lands-ui-pack', image: 'https://img.itch.zone/aW1nLzk0NjEwNTYuZ2lm/original/PrU8Iu.gif' },
  { title: 'Action platformer character', tag: 'Character', href: 'https://ozzbit-games.itch.io/action-platformer-character-template', image: 'https://img.itch.zone/aW1nLzIyMjI0MjIzLmdpZg==/original/mAkxuQ.gif' },
  { title: '2D pixel art character', tag: 'Character', href: 'https://goncalomcoliveira.itch.io/2d-pixel-art-character-template', image: 'https://img.itch.zone/aW1nLzI4NTgxOTA2LmdpZg==/original/VE10pK.gif' },
  { title: '8-directional templates', tag: 'Character', href: 'https://erisesra.itch.io/character-templates-pack', image: 'https://img.itch.zone/aW1nLzI0MTYxNjA1LmdpZg==/original/dzjUoT.gif' },
  { title: 'Free smoke FX pixel 2', tag: 'Smoke FX', href: 'https://bdragon1727.itch.io/free-smoke-fx-pixel-2', image: 'https://img.itch.zone/aW1nLzEyNTc0NjM3LmdpZg==/original/Vn2i8g.gif' },
  { title: 'Smoke FX', tag: 'Smoke FX', href: 'https://jasontomlee.itch.io/smoke-fx', image: 'https://img.itch.zone/aW1nLzEyODU1MzQyLnBuZw==/original/NeBJ%2BD.png' },
]

const learnSections = [
  {
    id: 'design',
    title: 'Game design',
    intro: 'Before you touch an engine, get a feel for what makes a game actually good. Start with the video, then dig in.',
    featured: designFeatured,
    groups: designGroups,
    extraGroups: designExtraGroups,
    align: 'right',
  },
  {
    id: 'godot',
    title: 'Learn Godot',
    intro: 'A path from never opening the editor to shipping something. Watch, read, and jump to whatever you need.',
    featured: godotFeatured,
    groups: godotGroups,
    extraGroups: godotExtraGroups,
  },
  {
    id: 'art',
    title: '2D Art & animation',
    intro: 'From your first sprite to ready-made asset packs. Everything you need to make your jam game look good.',
    featured: artFeatured,
    groups: artGroups,
    extraGroups: artExtraGroups,
    assets: artAssets,
    assetsTitle: 'Free assets',
    assetsIntro: 'Free assets to use or take inspo from. Click any of them to view it bigger.',
    assetsAfter: 0,
    align: 'right',
  },
]

const phases = [
  {
    label: 'Idea phase',
    tips: [
      "Don't be boring. Weird ideas are the best ideas.",
      "Don't be hesitant to troll the organizers by interpreting their theme in an unusual way.",
      "Don't get hung up too long on the \"perfect\" idea. The longer you think, the more you succumb to analysis paralysis. Spontaneous ideas are usually the best anyway.",
    ],
  },
  {
    label: 'Planning phase',
    tips: [
      'Aim to have a submittable game by the time the jam is half over. The second half is for polish, bugfixing, and extra content. It is much less stressful knowing you can hit submit any time.',
      'Prioritize tasks that give the most bang for the time investment. You only have 48 hours, so make every hour count.',
      "If you have no idea how to execute a feature, don't count on figuring it out before the jam ends. Stick to things you know how to do.",
    ],
  },
  {
    label: 'Execution phase',
    tips: [
      'Keep the experience short and easy. Nobody spends more than a few minutes on a jam game, so there is no point building something that needs hours to land its idea.',
      "Don't be a perfectionist. Be sloppy and cut corners. If the idea turns out great and you want to make it real later, you'll start from scratch anyway.",
      'Sleep and eat when you usually do. Take breaks away from the keyboard at regular intervals.',
      "Don't stress. It's all about having fun and trying new game ideas.",
    ],
  },
]

function GameCarousel() {
  const [index, setIndex] = useState(0)

  const go = (direction) => {
    setIndex((current) => (current + direction + games.length) % games.length)
  }

  const game = games[index]

  return (
    <div className="relative">
      <div className="flex items-center gap-4 md:gap-6">
        <button
          type="button"
          aria-label="Previous game"
          onClick={() => go(-1)}
          className="grid h-16 w-16 shrink-0 place-items-center bg-[#60BAFF] font-akshar text-[34px] font-bold leading-none text-[#1a1a1a] transition-transform hover:-translate-y-0.5"
        >
          ‹
        </button>

        <a
          href={game.href}
          target="_blank"
          rel="noreferrer"
          className="group relative block h-[440px] w-full overflow-hidden bg-[#651014] shadow-[0_8px_0_#651014] md:h-[560px]"
        >
          <img
            src={game.image}
            alt={game.title}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-[#1a1a1a] to-transparent p-5">
            <span className="font-akshar text-[30px] font-bold leading-none text-white md:text-[40px]">
              {game.title}
            </span>
          </div>
          <div className="absolute inset-0 grid place-items-center bg-[#1a1a1a]/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <span className="bg-[#D93A44] px-10 py-5 font-akshar text-[32px] font-bold uppercase tracking-wide text-white md:text-[44px]">
              Play now
            </span>
          </div>
        </a>

        <button
          type="button"
          aria-label="Next game"
          onClick={() => go(1)}
          className="grid h-16 w-16 shrink-0 place-items-center bg-[#60BAFF] font-akshar text-[34px] font-bold leading-none text-[#1a1a1a] transition-transform hover:-translate-y-0.5"
        >
          ›
        </button>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {games.map((g, i) => (
          <button
            key={g.title}
            type="button"
            aria-label={`Go to ${g.title}`}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 transition-colors ${i === index ? 'bg-[#D93A44]' : 'bg-white'}`}
          />
        ))}
      </div>
    </div>
  )
}

function AssetGallery({ assets, right }) {
  const [index, setIndex] = useState(0)
  const active = assets[index]

  const thumbs = (
    <div dir={right ? 'rtl' : undefined} className="order-2 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:order-1 lg:h-[520px] lg:grid-cols-3 lg:grid-rows-4 lg:gap-4">
      {assets.map((asset, i) => (
        <button
          key={asset.href}
          type="button"
          onClick={() => setIndex(i)}
          dir="ltr"
          aria-pressed={i === index}
          className={`group relative aspect-square overflow-hidden bg-[#0d0d0d] transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#60BAFF] lg:aspect-auto lg:h-full ${
            i === index ? 'shadow-[0_0_0_4px_#D93A44]' : ''
          }`}
        >
          <img
            src={asset.image}
            alt={asset.title}
            loading="lazy"
            className={`h-full w-full object-contain p-2 transition-[filter] duration-200 group-hover:grayscale-0 ${
              i === index ? '' : 'grayscale-[0.55]'
            }`}
          />
        </button>
      ))}
    </div>
  )

  const preview = (
    <div className="order-1 flex flex-col gap-4 bg-white/[0.03] p-5 shadow-[0_8px_0_#651014] md:p-6 lg:order-2 lg:h-[520px]">
      <div className="flex min-h-[280px] flex-1 items-center justify-center bg-[#0d0d0d] p-4 lg:min-h-0">
        <img
          src={active.image}
          alt={active.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className={`flex items-center justify-between gap-4 ${right ? 'flex-row-reverse text-right' : ''}`}>
        <div>
          <p className="font-akshar text-[13px] font-bold uppercase tracking-[0.14em] text-[#60BAFF]">
            {active.tag}
          </p>
          <h4 className="font-akshar text-[26px] font-bold leading-none text-white md:text-[32px]">
            {active.title}
          </h4>
        </div>
        <a
          href={active.href}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 bg-[#D93A44] px-5 py-3 font-akshar text-[16px] font-bold text-white transition-transform hover:-translate-y-0.5"
        >
          Get it on itch →
        </a>
      </div>
    </div>
  )

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {thumbs}
      {preview}
    </div>
  )
}

function LearnSection({ id, title, intro, featured, groups, extraGroups = [], assets, assetsTitle, assetsIntro, assetsAfter = null, align = 'left', full = false }) {
  const right = align === 'right'
  const renderedGroups = full ? [...groups, ...extraGroups] : groups
  const showViewAll = !full && extraGroups.length > 0

  const assetsBlock = assets ? (
    <div className="mt-16">
      <div className={right ? 'flex flex-col items-end text-right' : ''}>
        <h3 className="font-akshar text-[26px] font-bold leading-none text-white md:text-[34px]">
          {assetsTitle}
        </h3>
        <p className="mt-2 max-w-3xl font-akshar text-[18px] leading-tight text-white/70 md:text-[20px]">
          {assetsIntro}
        </p>
      </div>
      <div className="mt-6">
        <AssetGallery assets={assets} right={right} />
      </div>
    </div>
  ) : null

  const video = (
    <div className={`aspect-video w-full overflow-hidden bg-black shadow-[0_8px_0_#651014] ${right ? 'lg:order-2' : ''}`}>
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${featured.videoId}${featured.start ? `?start=${featured.start}` : ''}`}
        title={featured.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )

  const panel = (
    <div className={`flex flex-col justify-center gap-3 bg-white/[0.03] p-6 md:p-8 ${right ? 'items-end text-right lg:order-1' : ''}`}>
      <span className="inline-flex w-fit bg-[#D93A44] px-3 py-1 font-akshar text-[13px] font-bold uppercase tracking-[0.14em] text-white">
        Start here
      </span>
      <h3 className="font-akshar text-[34px] font-bold leading-none text-white md:text-[42px]">
        {featured.title}
      </h3>
      <p className="font-akshar text-[19px] leading-snug text-white/70 md:text-[21px]">
        {featured.desc}
      </p>
    </div>
  )

  return (
    <section id={id} className="scroll-mt-24 px-5 pb-24 md:px-10 md:pb-36">
      <div className="mx-auto max-w-7xl">
        <div className={right ? 'flex flex-col items-end text-right' : ''}>
          <div className={`flex w-full items-baseline justify-between gap-4 ${right ? 'flex-row-reverse' : ''}`}>
            <h2 className="font-akshar text-[30px] font-bold leading-none text-white md:text-[46px]">
              {title}
            </h2>
            {showViewAll && (
              <a
                href={`#resources/${id}`}
                className="shrink-0 font-akshar text-[17px] font-bold uppercase tracking-[0.14em] text-[#D93A44] hover:text-white md:text-[20px]"
              >
                View all →
              </a>
            )}
          </div>
          <p className="mt-3 max-w-3xl font-akshar text-[22px] leading-tight text-white/75 md:text-[28px]">
            {intro}
          </p>
        </div>

        <div className={`mt-10 grid gap-6 lg:items-stretch ${right ? 'lg:grid-cols-[1fr_1.6fr]' : 'lg:grid-cols-[1.6fr_1fr]'}`}>
          {video}{panel}
        </div>

        <div className="mt-14 flex flex-col gap-12">
          {renderedGroups.map(({ group, items }, groupIndex) => (
            <div key={group}>
              <h3 className={`pb-2 font-akshar text-[16px] font-bold uppercase tracking-[0.16em] text-[#60BAFF] ${right ? 'text-right' : ''}`}>
                {group}
              </h3>
              <div dir={right ? 'rtl' : undefined} className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map(({ title: t, desc, href, image }, itemIndex) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    dir={right ? 'ltr' : undefined}
                    className={`group flex-col overflow-hidden bg-white/[0.03] transition-transform hover:-translate-y-1 ${
                      !full && itemIndex >= 3 ? 'hidden sm:flex' : 'flex'
                    }`}
                  >
                    <div className="aspect-video w-full overflow-hidden bg-[#0d0d0d]">
                      <img
                        src={image}
                        alt={t}
                        loading="lazy"
                        className="h-full w-full object-contain grayscale-[0.55] transition-[filter,transform] duration-200 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    </div>
                    <div className={`flex flex-col gap-2 p-5 ${right ? 'items-end text-right' : ''}`}>
                      <h4 className="font-akshar text-[22px] font-bold leading-tight text-white">
                        {t}
                      </h4>
                      <p className="font-akshar text-[16px] leading-snug text-white/65">
                        {desc}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              {groupIndex === assetsAfter && assetsBlock}
            </div>
          ))}
        </div>

        {assetsAfter === null && assetsBlock}
      </div>
    </section>
  )
}

function SectionDetailPage({ section }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [section.id])

  return (
    <main className="bg-[#1a1a1a]" style={{ zoom: 0.9 }}>
      <section className="px-5 pt-14 md:px-10 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <a
            href="#resources"
            className="inline-flex items-center gap-2 font-akshar text-[18px] font-bold uppercase tracking-[0.14em] text-[#60BAFF] hover:text-white"
          >
            ← All resources
          </a>
        </div>
      </section>

      <LearnSection {...section} full />
    </main>
  )
}

export default function ResourcesPage() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const detailId = hash.startsWith('#resources/') ? hash.slice('#resources/'.length) : null
  const detailSection = learnSections.find((section) => section.id === detailId)

  if (detailSection) {
    return <SectionDetailPage section={detailSection} />
  }

  return (
    <main className="bg-[#1a1a1a]" style={{ zoom: 0.9 }}>
      <SideNav />

      <section className="px-5 py-14 md:px-10 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-5">
          <p className="font-akshar text-[18px] font-bold uppercase tracking-[0.18em] text-[#60BAFF] md:text-[22px]">
            For jammers
          </p>
          <h1 className="font-akshar text-[56px] font-bold leading-[0.92] text-white md:text-[88px]">
            Resources
          </h1>
          <p className="max-w-2xl font-akshar text-[22px] leading-tight text-white/75 md:text-[30px]">
            A hand-picked list of free and open source tools, tutorials, and assets to help you make the most out of the jam.
          </p>
          <p className="font-akshar text-[18px] leading-tight text-white/55 md:text-[20px]">
            Got something worth adding? Let us know in <a href="https://discord.gg/rzBhAQ76jg" className="text-[#60BAFF] underline hover:no-underline">Discord</a>
          </p>
        </div>
      </section>

      <section id="surviving" className="scroll-mt-24 px-5 pb-24 md:px-10 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-akshar text-[30px] font-bold leading-none text-white md:text-[46px]">
            Surviving a game jam
          </h2>
          <p className="mt-3 max-w-3xl font-akshar text-[20px] leading-tight text-white/60 md:text-[24px]">
            24 hours go fast. Here is how to make it through each stage.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {phases.map(({ label, tips }, index) => (
              <div
                key={label}
                className="flex flex-col bg-white shadow-[0_8px_0_#651014]"
              >
                <div className="flex items-center gap-4 bg-[#651014] px-5 py-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#D93A44] font-akshar text-[26px] font-bold leading-none text-white">
                    {index + 1}
                  </span>
                  <span className="font-akshar text-[26px] font-bold uppercase leading-none tracking-[0.03em] text-white md:text-[30px]">
                    {label}
                  </span>
                </div>
                <ul className="flex flex-1 flex-col gap-5 p-6">
                  {tips.map((tip) => (
                    <li key={tip} className="flex gap-3 font-akshar text-[20px] leading-snug text-[#1a1a1a]/85">
                      <span className="mt-[9px] h-2.5 w-2.5 shrink-0 bg-[#60BAFF]" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="scroll-mt-24 px-5 pb-24 md:px-10 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-akshar text-[30px] font-bold leading-none text-white md:text-[46px]">
            Free tools to build with
          </h2>
          <p className="mt-3 max-w-3xl font-akshar text-[22px] leading-tight text-white/75 md:text-[28px]">
            Three open source tools that cover code, 3D, and 2D art. Honestly, the official docs for these are
            incredible and are the best way to learn, so just start there and you will pick everything up fast.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {tools.map(({ name, tag, blurb, href, logo }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-4 bg-white p-6 shadow-[0_8px_0_#651014] transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex w-fit bg-[#D93A44] px-3 py-1 font-akshar text-[13px] font-bold uppercase tracking-[0.14em] text-white">
                    {tag}
                  </span>
                  <img
                    src={logo}
                    alt={`${name} logo`}
                    className="h-16 w-16 shrink-0 object-contain transition-transform duration-150 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-akshar text-[36px] font-bold leading-none text-[#1a1a1a] md:text-[44px]">
                  {name}
                </h3>
                <p className="font-akshar text-[20px] leading-snug text-[#1a1a1a]/80 md:text-[22px]">
                  {blurb}
                </p>
                <span className="mt-auto pt-2 font-akshar text-[18px] font-bold tracking-wide text-[#651014] group-hover:underline">
                  Read the docs →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="scroll-mt-24 px-5 pb-24 md:px-10 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-akshar text-[30px] font-bold leading-none text-white md:text-[46px]">
            Game Examples
          </h2>
          <p className="mt-3 max-w-3xl font-akshar text-[22px] leading-tight text-white/75 md:text-[28px]">
            Get an idea of the scale you are working with. These were all made small and finished, so don't think too big.
          </p>

          <div className="mt-10">
            <GameCarousel />
          </div>
        </div>
      </section>

      {learnSections.map((section) => (
        <LearnSection key={section.id} {...section} />
      ))}
    </main>
  )
}