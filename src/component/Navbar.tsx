import { useState } from "react";
import { site, type Mode } from "../data/site";

type Props = { onSelectMode: (mode: Mode) => void };

export default function Navbar({ onSelectMode }: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = (mode?: Mode) => {
    if (mode) onSelectMode(mode);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b0726]/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex text-xl font-bold">
          <span className="flex text-[#12b5ff]"></span>
          Frame
          <span className="flex text-[#12b5ff]">Fusion
            {/* //LOGO IMAGE// */}
            <img className = " h-15" src="" alt="" />
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-[#b9b4e0] md:flex">
          {site.nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => handleClick(item.mode)}
                className={
                  item.mode === "beyond"
                    ? "rounded-full border border-[#12b5ff]/60 px-4 py-1.5 text-[#12b5ff] transition hover:bg-[#12b5ff] hover:text-[#0b0726]"
                    : "transition hover:text-[#12b5ff]"
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-white/5 px-6 py-5 text-[#b9b4e0] md:hidden">
          {site.nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => handleClick(item.mode)}
                className={`block hover:text-[#12b5ff] ${item.mode === "beyond" ? "text-[#12b5ff]" : ""}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

// import { useState } from "react";
// import { site } from "../data/site";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b0726]/70 backdrop-blur-md">
//       <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
//         <a href="#home" className="text-xl font-bold">
//           <span className="text-[#12b5ff]">{site.firstName[0]}</span>
//           {site.lastName[0]}
//           <span className="text-[#12b5ff]">.</span>
//         </a>

//         <ul className="hidden gap-8 text-sm font-medium text-[#b9b4e0] md:flex">
//           {site.nav.map((item) => (
//             <li key={item.href}>
//               <a href={item.href} className="transition hover:text-[#12b5ff]">
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <button
//           aria-label="Toggle menu"
//           onClick={() => setOpen((v) => !v)}
//           className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
//         >
//           <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
//           <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
//           <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
//         </button>
//       </nav>

//       {open && (
//         <ul className="flex flex-col gap-4 border-t border-white/5 px-6 py-5 text-[#b9b4e0] md:hidden">
//           {site.nav.map((item) => (
//             <li key={item.href}>
//               <a href={item.href} onClick={() => setOpen(false)} className="block hover:text-[#12b5ff]">
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </header>
//   );
// }