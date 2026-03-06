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
          <strong>
            Everything you see in the Console can be managed via the CLI.
          </strong>{" "}
          While the Console (UI) is great for a bird's-eye view, the CLI is
          built to live where you do, in the terminal, making it the fastest way
          to branch, test, and deploy without leaving your code.
        </p>
        <h4 className="mt-5 text-lg font-semibold">Next Step</h4>
        <ol className="list-decimal list-outside ml-4 mt-2">
          <li>
            <p className="mb-2 mt-2">
              <strong>Install the Upsun CLI</strong>
            </p>
            <p className="mb-2">
              Choose your package manager to get the toolset on your machine.
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
              <strong>Link your project</strong>
            </p>
            <p className="mb-2">
              Run this to authenticate and download a local copy of your code.
              This command connects your local environment directly to the cloud
              project you just created.
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
