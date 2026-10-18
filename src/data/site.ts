export type Mode = "edit" | "beyond";
export type NavItem = { label: string; href: string; mode?: Mode };
export type WorkItem = { type: "image" | "video"; title: string; src: string; subtitle?: string };
export type ContactItem = { label: string; value: string; href: string };
export type Venture = {
  id: string;
  title: string;
  text: string;
  work: WorkItem[];
  contacts: ContactItem[];
};
const editWork: WorkItem[] = [
  { type: "video", title: "Project One", src: "/EDIT vid&img/ifreke.mp4" },
  { type: "video", title: "Project Two", src: "/EDIT vid&img/kunle.mp4" },

  { type: "image", title: "Thumbnail Design", src: "/EDIT vid&img/7.jpeg" },
  { type: "image", title: "4", src: "/EDIT vid&img/4.jpeg" },
  { type: "image", title: "Bachira", src: "/EDIT vid&img/Bachira1.jpg" },
  { type: "image", title: "Barou", src: "/EDIT vid&img/Barou1.jpg" },
  { type: "image", title: "Chigiri", src: "/EDIT vid&img/Chigiri1.jpg" },
  { type: "image", title: "Isagi", src: "/EDIT vid&img/Isagi.jpg" },
  { type: "image", title: "Karasu", src: "/EDIT vid&img/Karasu1.jpg" },
  { type: "image", title: "Kunigami", src: "/EDIT vid&img/Kunigami.jpg" },
  { type: "image", title: "Nagi", src: "/EDIT vid&img/Nagi.jpg" },
  { type: "image", title: "Noel", src: "/EDIT vid&img/Noel Noa.jpg" },
  { type: "image", title: "Aiku", src: "/EDIT vid&img/Oliver Aiku.jpg" },
  { type: "image", title: "Reo", src: "/EDIT vid&img/Reo Mikage.jpg" },
  { type: "image", title: "Rin", src: "/EDIT vid&img/Rin2.jpg" },
  { type: "image", title: "Shido", src: "/EDIT vid&img/Ryuse Shido.jpg" },
  { type: "image", title: "Yukimiya", src: "/EDIT vid&img/Yukimiya.jpg" },
  { type: "image", title: "Hiori", src: "/EDIT vid&img/Hiori1.jpg" },
  { type: "image", title: "Charles", src: "/EDIT vid&img/Charles.jpg" },
  { type: "image", title: "Sae", src: "/EDIT vid&img/Sae1.jpg" },

];

const ventures: Venture[] = [
  {
    id: "framing",
    title: "light big banner",
    text: "describe the framing service here. forgot what you called that work",
    work: [
      { type: "image", title: "Framing One", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgLFOv2aKZrNdhU0GYkyorCWAFQ1NrZaeKs-KlhWsiQ&s=10" }, // e.g. "/work/framing1.jpg"
      { type: "image", title: "Framing Two", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gbZ8LF4l-n-5v6BQLKC1N0xhb6Tzf0UPsXmRgVZSfw&s=10" },
      { type: "image", title: "Framing Three", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFmnkHMyrLgfhPTDmOXRHhJY4HQlnHIrgM1ubbgYMUg&s=10" },
      { type: "image", title: "Four", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoK-HxA98f1NpECqo95nvB-VEEFLQrbOiYVsZoTv_WA&s=10"},
      { type: "image", title: "Five", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2dow4UDq85uISsk9QDP1xn0pUkL9wfX-OtSy876zdw&s=10"},
      { type: "image", title: "six", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7XjgvgFGr0ZYL2VnI61iU5OKQltAeR5g0rHuhP0QriQ&s=10"},
    ],
    contacts: [
      { label: "Email", value: "framing@example.com", href: "mailto:framing@example.com" },
      { label: "WhatsApp", value: "+234 000 000 0000", href: "https://wa.me/2340000000000" },
      { label: "Instagram", value: "@yourhandle", href: "https://instagram.com/yourhandle" },
    ],
  },
  {
    id: "fram-fusion",
    title: "Frame Fusion",
    text: " describe the business here.",
    work: [
      { type: "image", title: "Fusion One", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpt5neB44uC1hkI8yRAhPYgL484i5mwyEKtPuw4gDcA&s=10" },
      { type: "image", title: "Fusion Two", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdyVCWz4M3MEB9aVriPpE4Pb77jF8NKF-HnaHi_81Aw&s" },
      { type: "image", title: "Fusion Three", src: "/EDIT vid&img/three.jpeg" },
      { type: "image", title: "Fusion four", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7L2J2m2my0jy6AZ9z4TNbuiTkf0Omcumx9Vo-vKg63Q&s=10"},
      { type: "image", title: "Fusion five", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWUx0msI3qmcfJOcYT43Ocuw_SFckd2N3O33ul0tYkQ&s"},
      { type: "image", title: "Fusion six", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPiv06Ro2o9XVFDQjUeg1QNlVPXUx6VCe7TgRajR-6Q&s=10"},
    ],
    contacts: [
      { label: "Email", value: "framfusion@example.com", href: "mailto:framfusion@example.com" },
      { label: "WhatsApp", value: "+234 000 000 0000", href: "https://wa.me/2340000000000" },
      { label: "Instagram", value: "@framfusion", href: "https://instagram.com/framfusion" },
    ],
  },
];

export const site = {
  firstName: "Isaiah",
  lastName: "Ifreke",
  role: "Video Editor",
  location: "Nigeria based",
  portrait: "/Profile/lockedin.jpeg",

   nav: [
    { label: "Services", href: "#services", mode: "edit" },
    { label: "Featured Work", href: "#featured" },
    { label: "About Me", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Beyond the Edit", href: "#services", mode: "beyond" },
  ] as NavItem[],
services: {
    edit: [
      { title: "Video Editing", text: "Clean, well-paced cuts for any kind of content." },
      { title: "YouTube Editing", text: "Edits built for retention, from hooks to end screens." },
      { title: "Motion & Titles", text: "Titles, transitions and motion that match your brand." },
      { title: "Graphic Design", text: "Thumbnails and visuals that support the video." },
    ],
  },
  work: { edit: editWork},
  ventures,
contacts: [
    { label: "Email", value: "you@example.com", href: "mailto:you@example.com" },
    { label: "WhatsApp", value: "+234 000 000 0000", href: "https://wa.me/2340000000000" },
    { label: "Instagram", value: "@yourhandle", href: "https://instagram.com/yourhandle" },
    { label: "YouTube", value: "Channel name", href: "https://youtube.com/@yourhandle" },
  ],


highlights: [
    { title: "Sharp Storytelling", text: "Cuts that hold attention, from the first frame to the last." },
    { title: "Creative Work", text: "Pacing, motion and sound design that give each video its own feel." },
    { title: "Reliable Delivery", text: "Freelance-tested workflow with clear communication and on-time exports." },
],
stats: [
{value: "3+", label: "Years of Editing"},
{value: "20+", label: "Happy Clients"},
{value: "40+", label: "Videos Delivered"},
],

skills: [
    { name: "Capcut", level: 90 },
    { name: "After Effects", level: 75 },
    { name: "DaVinci Resolve", level: 70 },
    { name: "Photoshop", level: 65 },
    { name: "Sound Design", level: 70 },
    { name: "Colour Grading", level: 75 },
  ],
};