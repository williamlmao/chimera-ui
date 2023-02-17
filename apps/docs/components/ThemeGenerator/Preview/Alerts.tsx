export const Alerts = () => {
  return (
    <div className="flex flex-col gap-2" id="alerts">
      <div className="w-full h-12 rounded-md bg-success border-2 border-success text-success-content flex items-center px-4">
        success alert
      </div>
      <div className="w-full h-12 rounded-md bg-success-subtle border-2 border-success text-success-content-inverse flex items-center px-4">
        success alert inverse
      </div>
      <div className="w-full h-12 rounded-md bg-danger border-2 border-danger text-danger-content flex items-center px-4">
        danger alert
      </div>
      <div className="w-full h-12 rounded-md bg-danger-subtle border-2 border-danger text-danger-content-inverse flex items-center px-4">
        danger alert inverse
      </div>
      <div className="w-full h-12 rounded-md bg-warning border-2 border-warning text-warning-content flex items-center px-4">
        warning alert
      </div>
      <div className="w-full h-12 rounded-md bg-warning-subtle border-2 border-warning text-warning-content-inverse flex items-center px-4">
        warning alert inverse
      </div>
    </div>
  );
};
