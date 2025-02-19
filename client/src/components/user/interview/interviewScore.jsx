import { ChevronRight, CircleCheck } from "lucide-react";
import { Footer } from "../../landing/footer";
import { UserNavbar } from "../navbar/userNavbar";

export const InterviewScore = () => {
  return (
    <div>
      <UserNavbar />

      <div className="tw-min-h-96 tw-flex tw-items-center tw-justify-center">
        <div className="tw-text-center">
          <div className="tw-flex tw-justify-center tw-text-green-500">
            <CircleCheck size={80}  />
          </div>
          <h1 className="tw-text-5xl tw-font-bold">Score 18</h1>
          <h3>Interview Successfully Completed!</h3>
          <p>
            Thank you for your time, I appreciate the opportunity and look
            forward to what’s next!"
          </p>

          <div className="tw-flex tw-justify-center tw-mt-5 ">
            <button
              className="tw-bg-blue-600 tw-text-white tw-px-6 tw-py-2 tw-rounded-full tw-flex tw-items-center tw-gap-2"
              onClick={() => {}}
            >
              Interview Status
              <ChevronRight className="tw-w-4 tw-h-4" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
