import { MoveRight } from "lucide-react";

export const PrimaryButton = ({text = "Submit"}) => {
  return (
    <button className="tw-flex tw-space-x-5 tw-bg-blue-600 tw-text-white tw-px-6 tw-py-2 tw-rounded-full tw-hover:bg-blue-700 tw-transition-colors">
      <span>{text}</span> <MoveRight />
    </button>
  );
};
