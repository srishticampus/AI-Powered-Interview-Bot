import React, { useState, useRef, useEffect } from "react";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { UserNavbar } from "../navbar/userNavbar";
import { Footer } from "../../landing/footer";

const questions = [
  {
    id: 1,
    question:
      "A company wants to develop a mobile app that provides personalized movie recommendations based on user preferences and watch history. Which of the following technologies would be most suitable for implementing the recommendation system?",
    option1: "SQL Database",
    option2: "Machine Learning Model",
    option3: "Static HTML Pages",
    option4: "Manual Tagging by Admins",
    answer: "option2",
  },
  {
    id: 2,
    question: "What is the time complexity of a binary search algorithm?",
    option1: "O(n)",
    option2: "O(log n)",
    option3: "O(n²)",
    option4: "O(1)",
    answer: "option2",
  },
  {
    id: 3,
    question:
      "Which design pattern is most suitable for implementing an undo mechanism in a text editor?",
    option1: "Observer Pattern",
    option2: "Command Pattern",
    option3: "Singleton Pattern",
    option4: "Factory Pattern",
    answer: "option2",
  },
  {
    id: 4,
    question: "What is the main purpose of the Virtual DOM in React?",
    option1: "To improve SEO",
    option2: "To reduce memory usage",
    option3: "To optimize rendering performance",
    option4: "To handle server-side rendering",
    answer: "option3",
  },
  {
    id: 5,
    question: "Which HTTP method is idempotent?",
    option1: "POST",
    option2: "PUT",
    option3: "PATCH",
    option4: "None of the above",
    answer: "option2",
  },
  {
    id: 6,
    question: "What is the difference between 'let' and 'const' in JavaScript?",
    option1: "No difference",
    option2: "'let' is block-scoped, 'const' is function-scoped",
    option3: "'const' cannot be reassigned, 'let' can be",
    option4: "'let' is faster than 'const'",
    answer: "option3",
  },
  {
    id: 7,
    question:
      "Which data structure would be most efficient for implementing an LRU cache?",
    option1: "Array",
    option2: "Hash Map",
    option3: "Linked List",
    option4: "Hash Map with Doubly Linked List",
    answer: "option4",
  },
  {
    id: 8,
    question: "What is the purpose of the 'useCallback' hook in React?",
    option1: "To memoize functions",
    option2: "To handle side effects",
    option3: "To manage state",
    option4: "To create refs",
    answer: "option1",
  },
  {
    id: 9,
    question:
      "Which sorting algorithm has the best average-case time complexity?",
    option1: "Bubble Sort",
    option2: "Quick Sort",
    option3: "Insertion Sort",
    option4: "Selection Sort",
    answer: "option2",
  },
  {
    id: 10,
    question: "What is the main advantage of using TypeScript over JavaScript?",
    option1: "Better performance",
    option2: "Static type checking",
    option3: "Smaller bundle size",
    option4: "Built-in state management",
    answer: "option2",
  },
];

export const AttendInterview = () => {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [stream, setStream] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(40 * 60); // 40 minutes in seconds
  const [videoDevices, setVideoDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState("");
  const [showDeviceMenu, setShowDeviceMenu] = useState(false);
  const menuRef = useRef(null);

  const videoRef = useRef(null);

  const toggleDeviceMenu = () => {
    setShowDeviceMenu(!showDeviceMenu);
  };
  const handleDeviceChange = (deviceId) => {
    setSelectedDeviceId(deviceId);
    setShowDeviceMenu(false);
  };
  useEffect(() => {
    const getVideoDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoInputs = devices.filter(
          (device) => device.kind === "videoinput"
        );
        setVideoDevices(videoInputs);
        if (videoInputs.length > 0 && !selectedDeviceId) {
          setSelectedDeviceId(videoInputs[0].deviceId);
        }
      } catch (err) {
        console.error("Error getting video devices:", err);
      }
    };

    getVideoDevices();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowDeviceMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const setupMedia = async () => {
      try {
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: selectedDeviceId
            ? { deviceId: { exact: selectedDeviceId } }
            : true,
          audio: true,
        });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error("Error accessing media devices:", err);
      }
    };

    if (selectedDeviceId || videoDevices.length === 0) {
      setupMedia();
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [selectedDeviceId]);

  useEffect(() => {
    if (stream) {
      stream.getAudioTracks().forEach((track) => {
        track.enabled = audioEnabled;
      });
      stream.getVideoTracks().forEach((track) => {
        track.enabled = videoEnabled;
      });
    }
  }, [audioEnabled, videoEnabled, stream]);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const toggleAudio = () => setAudioEnabled(!audioEnabled);
  const toggleVideo = () => setVideoEnabled(!videoEnabled);

  const getOptions = (question) => [
    { key: "option1", value: question.option1 },
    { key: "option2", value: question.option2 },
    { key: "option3", value: question.option3 },
    { key: "option4", value: question.option4 },
  ];

  return (
    <>
      <UserNavbar />
      <div className="tw-min-h-screen tw-bg-gray-50 tw-p-6">
        <div className="tw-container tw-mx-auto">
          <div className="tw-grid tw-grid-cols-[1fr,300px] tw-gap-6">
            {/* Main Content */}
            <div className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-8">
              <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
                <div className="tw-text-gray-600">
                  Question {currentQuestion.id}/10
                </div>
                <div className="tw-text-blue-600 tw-font-semibold">
                  Time remaining: {formatTime(timeRemaining)}
                </div>
              </div>

              <div className="tw-mb-8">
                <h2 className="tw-text-xl tw-font-semibold tw-mb-6">
                  {currentQuestion.question}
                </h2>
                <div className="tw-space-y-4">
                  {getOptions(currentQuestion).map(({ key, value }) => (
                    <label
                      key={key}
                      className={`tw-flex tw-items-center tw-p-4 tw-border tw-rounded-lg tw-cursor-pointer tw-transition-colors
                      ${
                        selectedOption === key
                          ? "tw-border-blue-500 tw-bg-blue-50"
                          : "tw-border-gray-200 hover:tw-bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="answer"
                        className="tw-h-4 tw-w-4 tw-text-blue-600"
                        checked={selectedOption === key}
                        onChange={() => setSelectedOption(key)}
                      />
                      <span className="tw-ml-3">{value}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                className="tw-bg-blue-600 tw-text-white tw-px-6 tw-py-2 tw-rounded-lg tw-flex tw-items-center tw-gap-2"
                onClick={() => {
                  const nextId = (currentQuestion.id % 10) + 1;
                  setCurrentQuestion(questions.find((q) => q.id === nextId));
                  setSelectedOption(null);
                }}
              >
                Next
                <ChevronRight className="tw-w-4 tw-h-4" />
              </button>
            </div>

            {/* Right Sidebar */}
            <div className="tw-space-y-6">
              {/* Video Preview */}
              <div className="tw-bg-gray-800 tw-rounded-xl tw-overflow-hidden">
                <div className="tw-aspect-video tw-relative">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className={`tw-h-full tw-w-full tw-object-cover ${
                      !videoEnabled ? "tw-hidden" : ""
                    }`}
                  />
                  {!videoEnabled && (
                    <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-gray-900">
                      <div className="tw-h-20 tw-w-20 tw-rounded-full tw-bg-blue-600 tw-flex tw-items-center tw-justify-center">
                        <span className="tw-text-2xl tw-font-bold tw-text-white">
                          A
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="tw-absolute tw-bottom-4 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-flex tw-gap-2">
                    <button
                      onClick={toggleAudio}
                      className={`tw-rounded-full tw-p-2 tw-transition ${
                        audioEnabled ? "tw-bg-blue-600" : "tw-bg-red-600"
                      }`}
                    >
                      {audioEnabled ? (
                        <Mic className="tw-h-5 tw-w-5 tw-text-white" />
                      ) : (
                        <MicOff className="tw-h-5 tw-w-5 tw-text-white" />
                      )}
                    </button>

                    <div className="tw-relative" ref={menuRef}>
                      <div className="tw-flex tw-gap-1">
                        <button
                          onClick={toggleVideo}
                          className={`tw-rounded-full tw-p-2 tw-transition ${
                            videoEnabled ? "tw-bg-blue-600" : "tw-bg-red-600"
                          }`}
                        >
                          {videoEnabled ? (
                            <Video className="tw-h-5 tw-w-5 tw-text-white" />
                          ) : (
                            <VideoOff className="tw-h-5 tw-w-5 tw-text-white" />
                          )}
                        </button>
                        <button
                          onClick={toggleDeviceMenu}
                          className={`tw-rounded-r-full tw-border-l tw-border-l-gray-700 tw-p-3 tw-transition ${
                            videoEnabled ? "tw-bg-blue-600" : "tw-bg-red-600"
                          }`}
                        >
                          <ChevronDown className="tw-h-6 tw-w-6 tw-text-white" />
                        </button>
                      </div>
                      {showDeviceMenu && (
                        <div className="tw-absolute tw-h-40 tw-overflow-auto tw-bottom-full tw-mb-2 tw-w-64 tw-rounded-lg tw-bg-white tw-shadow-lg">
                          <div className="tw-p-2">
                            <div className="tw-mb-2 tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-500">
                              Select Camera
                            </div>
                            {videoDevices.map((device) => (
                              <button
                                key={device.deviceId}
                                onClick={() =>
                                  handleDeviceChange(device.deviceId)
                                }
                                className="tw-flex tw-w-full tw-items-center tw-gap-3 tw-rounded-lg tw-px-3 tw-py-2 tw-text-left tw-text-sm tw-text-gray-700 hover:tw-bg-gray-100"
                              >
                                <Video className="tw-h-4 tw-w-4" />
                                <span className="tw-flex-1">
                                  {device.label ||
                                    `Camera ${
                                      videoDevices.indexOf(device) + 1
                                    }`}
                                </span>
                                {selectedDeviceId === device.deviceId && (
                                  <div className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-blue-600"></div>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="tw-p-4 tw-text-white">
                  <h3 className="tw-font-medium">Anand R P</h3>
                </div>
              </div>

              {/* Question Navigation */}
              <div className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-4">
                <h3 className="tw-text-gray-600 tw-mb-4">
                  Question Navigation
                </h3>
                <div className="tw-grid tw-grid-cols-5 tw-gap-2">
                  {questions.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => {
                        setCurrentQuestion(q);
                        setSelectedOption(null);
                      }}
                      className={`tw-h-10 tw-w-10 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-font-medium tw-transition
                      ${
                        currentQuestion.id === q.id
                          ? "tw-bg-blue-600 tw-text-white"
                          : "tw-border tw-border-gray-200 tw-text-gray-600 hover:tw-bg-gray-50"
                      }`}
                    >
                      {q.id}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
