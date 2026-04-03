import React, { useState } from "react";
import FeatureStep from "../components/FeatureStep";
import { ReactComponent as KeyStartIcon } from "../assets/utility/key_start.svg";
import commands from "../commands.json";
import CodeExample from "../components/CodeExample";
import { PROJECT_ID } from "../config";

interface StepLocalWorkflowProps {
  isDisabled: boolean;
}

type PackageManager = "homebrew" | "shell" | "scoop";

const StepLocalWorkflow: React.FC<StepLocalWorkflowProps> = ({
  isDisabled,
}) => {
  const [selectedPM, setSelectedPM] = useState<PackageManager>("shell");

  const installCommands: Record<PackageManager, string> = {
    shell: commands.setup.user.install_shell,
    homebrew: commands.setup.user.install_homebrew,
    scoop: commands.setup.user.install_scoop,
  };

  const tabs: { id: PackageManager; label: string }[] = [
    { id: "shell", label: "Shell" },
    { id: "homebrew", label: "Homebrew" },
    { id: "scoop", label: "Scoop" },
  ];

  return (
    <FeatureStep
      data-testid="step-local-workflow"
      icon={<KeyStartIcon className="w-10 h-10 p-1" />}
      title="2. Set up your local workflow"
      isDisabled={isDisabled}
    >
      <>
        <p className="mb-2">
          Next, you'll connect to your new Upsun project. See how the CLI
          brings the Console's power right to your terminal: you can branch,
          test, and deploy without ever leaving your code.
        </p>
        <ol className="list-decimal list-outside ml-4 mt-2">
          <li>
            <p className="mb-2 mt-2">
              <span className="font-semibold">Install the Upsun CLI</span>
            </p>
            <p className="mb-2">
              Select your package manager to get the toolset:
            </p>
            <div className="flex flex-row gap-2 mb-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedPM(tab.id)}
                  className={`px-3 py-1 text-sm rounded transition-colors ${
                    selectedPM === tab.id
                      ? "bg-upsun-violet-600 text-white"
                      : "bg-upsun-black-900 text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <CodeExample
              copyText={installCommands[selectedPM]}
              codeExampleText={installCommands[selectedPM]}
              wrapLines={selectedPM === "scoop"}
            />
          </li>
          <li>
            <p className="mb-2 mt-2">
              <span className="font-semibold">Link to your Upsun project</span>
            </p>
            <p className="mb-2">
              Run this command to authenticate and connect with the project you
              just created.
            </p>
            <CodeExample
              copyText={`${commands.setup.user.link} ${PROJECT_ID}`}
              codeExampleText={
                <>
                  {commands.setup.user.link} <strong>{PROJECT_ID}</strong>
                </>
              }
            />
          </li>
        </ol>
      </>
    </FeatureStep>
  );
};

export default StepLocalWorkflow;
