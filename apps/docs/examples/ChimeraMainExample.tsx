// import { useState } from "react";
// import { Items, Select } from "../components/Select";
// import { Container } from "../components/Container";
// import Button from "chimera-tw";

// const themes: Items = [
//   {
//     label: <span>🧸 Playful</span>,
//     value: "playful",
//   },
//   {
//     label: <span>✒️ Minimal</span>,
//     value: "minimal",
//   },
//   {
//     label: <span>Gallery</span>,
//     value: "gallery",
//   },
// ];

// export const ChimeraMainExample = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [theme, setTheme] = useState(themes[0]);
//   return (
//     <div className={theme.value}>
//       <div className="bg-base-200 h-16 flex items-center p-4 justify-between">
//         <span className="text-2xl text-on-base font-bold">Example Page</span>

//         <div className="flex">
//           <div className="text-sm">Switch the theme!</div>
//           <Select
//             items={themes}
//             selected={theme}
//             setSelected={setTheme}
//             className="w-fit text-xs absolute top-2 right-2"
//           />
//         </div>
//       </div>
//       <div className="bg-base-100 text-on-base p-12 relative flex flex-col gap-8">
//         {children}
//         <hr />
//         <Button>A Button</Button>
//         <Container>
//           <div className="text-2xl">A Container</div>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//             condimentum, nisl ut aliquam aliquet, nunc nisl aliquet nisl, nec
//             tincidunt nunc nisl eget nunc. Nulla facilisi. Nulla facilisi. Nulla
//             facilisi.
//           </p>
//         </Container>
//       </div>
//     </div>
//   );
// };
