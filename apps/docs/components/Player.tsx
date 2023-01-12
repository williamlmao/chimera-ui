export const Player = ({ destructuredProp }: { destructuredProp: string }) => {
  return (
    <div>
      {" "}
      <div className="p-12 bg-base-300">
        <div className="rounded-md w-96 h-64 bg-primary-100 flex items-center p-4">
          <div className="h-32 w-32 rounded-md bg-primary-500 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary-900 flex items-center justify-center text-on-primary-900">
              {">"}
            </div>
          </div>
          <div className="ml-4 ">
            <div className="text-4xl bg-primary-100 text-on-primary-900">
              Song title 1
            </div>
            <div className="text-on-primary-800">Artist</div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-32 h-32 flex flex-col items-center justify-center rounded-md bg-primary-100">
          <p className="text-on-primary-900">Primary content</p>
          <p className="text-sm text-on-primary-800">Secondary content</p>
        </div>

        <div className="w-32 h-32 flex flex-col items-center justify-center rounded-md bg-primary-300 text-on-primary-300">
          <p>Primary content</p>
          <p className="text-sm">Secondary content</p>
        </div>

        <div className="w-32 h-32 flex flex-col items-center justify-center rounded-md bg-primary-500 text-on-primary-500">
          <p>Primary content</p>
          <p className="text-sm">Secondary content</p>
        </div>

        <div className="w-32 h-32 flex flex-col items-center justify-center rounded-md bg-primary-700 text-on-primary-700">
          <p>Primary content</p>
          <p className="text-sm">Secondary content</p>
        </div>

        <div className="w-32 h-32 flex flex-col items-center justify-center rounded-md bg-primary-900">
          <p className="text-on-primary-900">Primary content</p>
          <p className="text-on-primary-700 text-sm">Secondary content</p>
        </div>
      </div>
    </div>
  );
};
