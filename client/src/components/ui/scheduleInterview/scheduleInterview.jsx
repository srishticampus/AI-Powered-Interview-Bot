import { X } from "lucide-react";

export const ScheduleInterview = () => {
  return (
    <div className="tw-w-5/12 tw-mx-auto tw-rounded-md tw-shadow-md tw-p-6">
      <div className="tw-flex tw-justify-between">
        <h1 className="tw-text-2xl tw-font-bold "> Schedule HR Round</h1>
        <span>
          <X />
        </span>
      </div>
      <form className="tw-flex tw-mt-5 tw-items-start  tw-flex-col ">
        <label htmlFor="dateAndTime" className="tw-text-lg">
          Interview Date and time
        </label>
        <input
          type="datetime-local"
          name="dateAndTime"
          className="tw-px-3 tw-rounded-md tw-w-full tw-h-10"
        />

        <label htmlFor="duration" className=" tw-text-lg tw-mt-3">
          Interview duration (hour)
        </label>
        <input
          name="duration"
          type="number"
          className="tw-px-3 tw-rounded-md tw-w-full tw-h-10"
          placeholder="Interview duration eg: 1 hr"
        />
        <div className="tw-flex tw-items-center tw-justify-center tw-w-full tw-mt-5">
          <button className="tw-bg-lexiBlue-500 tw-text-white tw-border-none tw-rounded-full tw-px-5 tw-py-3">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};
