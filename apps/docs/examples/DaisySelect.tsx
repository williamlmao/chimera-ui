export const DaisySelect = ({
  destructuredProp,
}: {
  destructuredProp: string;
}) => {
  return (
    <select className="select w-full max-w-xs">
      <option disabled selected>
        Pick your favorite Simpson
      </option>
      <option>Homer</option>
      <option>Marge</option>
      <option>Bart</option>
      <option>Lisa</option>
      <option>Maggie</option>
    </select>
  );
};
