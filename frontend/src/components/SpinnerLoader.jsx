import { Spinner } from "@material-tailwind/react";

export function SpinnerLoading() {
  return (
    <div className="flex items-center justify-center mb-4">
      <Spinner className="h-8 w-8 text-gray-900/50" />
    </div>
  );
}
