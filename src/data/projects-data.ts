export interface Project {
  title: string;
  tag: string;
  desc: string;
  image: string;
  href: string;
}

export const projectsData: Project[] = [
  {
    title: "SLAM3R 3D Reconstruction",
    tag: "Python / Data",
    desc: "Modified in-development Python repository to work with alternate hardware. Fixed bugs and corrected data from libraries that convert images to accurate 3D point clouds.",
    image: `${import.meta.env.BASE_URL}images/project_images/slam3r.jpg`,
    href: "https://www.youtube.com/watch?v=29UQXbXoMCk"
  },
  {
    title: "Inbrowser Head Tracking",
    tag: "OpenCV / Systems",
    desc: "Combined OpenCV webassembly with GDscript using Godot Game engine Javascript Bridge. Implemented real-time head tracking for realistic perspective warping.",
    image: `${import.meta.env.BASE_URL}images/project_images/head-tracking.jpg`,
    href: "https://github.com/williamsokol/HeadTrackingInGodotHTML5"
  },
  {
    title: "XOR BackProp NN",
    tag: "Algorithm Design",
    desc: "Built a Deep Neural Network from vanilla JavaScript to run in browser. Created custom tensor math library with gradient descent & backpropagation algorithms.",
    image: `${import.meta.env.BASE_URL}images/project_images/neural-network.jpg`,
    href: "https://github.com/williamsokol/NN"
  },
  {
    title: "WebRTC P2P Lobby",
    tag: "Godot / WebAssembly",
    desc: "Engineered a decentralized multiplayer lobby system utilizing Godot's JavaScript bridge and WebRTC. Facilitates seamless browser-based peer-to-peer networking without dedicated server overhead.",
    image: `${import.meta.env.BASE_URL}images/project_images/webrtc.jpg`,
    href: "https://github.com/williamsokol/godot-webrtc-lobby-demo"
  },
  {
    title: "Pixel Sort Processor",
    tag: "Javascript / Graphics",
    desc: "Developed a high-performance image manipulation tool utilizing pixel-sorting algorithms. Implemented custom color-thresholding logic to programmatically reorder data and generate generative glitch-art textures.",
    image: `${import.meta.env.BASE_URL}images/project_images/pixel-sort.jpg`,
    href: "https://github.com/williamsokol/ImageSortEffect"
  },
  {
    title: "Many Games!",
    tag: "Unity / C# / Godot",
    desc: "A collection of 15+ published browser based titles and technical demos. Features explorations in procedural generation, custom physics solvers, and optimized state-machine architectures for real-time environments.",
    image: `${import.meta.env.BASE_URL}images/project_images/games.jpg`,
    href: "https://bobojo.itch.io/"
  },
];