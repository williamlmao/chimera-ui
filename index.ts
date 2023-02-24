import { parse } from "react-docgen";

const code = `
/** My first component */
export default ({ name }: { name: string }) => <div>{{name}}</div>;
`;

const documentation = parse(code);

console.log(documentation);
