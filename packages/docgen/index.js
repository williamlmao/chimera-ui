import { parse } from "react-docgen";
import { Copy } from "@chimera-ui/components";

const code = `
/** My first component */
export default ({ name }: { name: string }) => <div>{{name}}</div>;
`;

const documentation = parse(Copy);

console.log(documentation);
