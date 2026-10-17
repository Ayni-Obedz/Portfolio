export type Mode = "edit" | "beyond";
export type NavItem = { label: string; href: string; mode?: Mode };
export type WorkItem = { type: "image" | "video"; title: string; src: string; subtitle?: string };
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

const beyondWork: WorkItem[] = [
  { type: "image", title: "Framing Work One", src: "" },
  { type: "image", title: "Framing Work Two", src: "" },
  { type: "image", title: "Fram Fusion", src: "" },
];

export const site = {
  firstName: "Isaiah",
  lastName: "Ifreke",
  role: "Video Editor",
  location: "Nigeria based",
  portrait: "",

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
    beyond: [
      { title: "!!!", text: "Placeholder: describe the framing service here." },
      { title: "Frame Fusion", text: "Placeholder: describe the business here." },
    ],
  },
  work: { edit: editWork, beyond: beyondWork },
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