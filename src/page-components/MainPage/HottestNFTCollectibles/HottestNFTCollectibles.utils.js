export const fakeCategories = [
  {
    title: "Music Artists",
    src: "/testImages/music-artists.png",
    id: "1",
  },
  {
    title: "Athletes",
    src: "/testImages/athletes.png",
    id: "2",
  },
  {
    title: "Art & Theater",
    src: "/testImages/art-theater.png",
    id: "3",
  },
  {
    title: "3D Art",
    src: "/testImages/3d-art.png",
    id: "4",
  },
  {
    title: "VIP",
    src: "/testImages/vip.png",
    id: "5",
  },
  {
    title: "Asset-Backed",
    src: "/testImages/asset-backed.png",
    id: "6",
  },
];

export const fakeChartData = new Array(15).fill({}, 0).map(() => {
  return { name: "Page A", price: Math.random() * 100 };
});
