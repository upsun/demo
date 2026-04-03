import React from "react";
import FeatureStep from "../components/FeatureStep";
import { ReactComponent as BranchIcon } from "../assets/utility/branch.svg";
import commands from "../commands.json";
import CodeExample from "../components/CodeExample";

interface StepBranchProps {
  isDisabled: boolean;
}

const StepBranch: React.FC<StepBranchProps> = ({ isDisabled }) => {
  return (
    <FeatureStep
      data-testid="step-branch"
      icon={<BranchIcon className="w-10 h-10 p-1" />}
      title="3. Create your first preview environment"
      isDisabled={isDisabled}
    >
      <>
        <p className="mb-2">
          You can branch any environment to instantly create a byte-for-byte
          replica of the stack (including code, database, and files) to safely
          test changes, features, and bug fixes.
        </p>
        <p className="mb-2">
          Before you make your first revision, create a preview environment
          called <strong>Staging</strong>.
        </p>
        <ol className="list-decimal list-outside ml-4 mt-2">
          <li>
            <p className="mb-2 mt-2">
              <span className="font-semibold">Create an environment</span>
            </p>
            <CodeExample
              copyText={commands.branch.user.branch}
              codeExampleText={commands.branch.user.branch}
            />
          </li>
          <li>
            <p className="mb-2 mt-2">
              <span className="font-semibold">
                When deployment is complete, open it in a browser
              </span>
            </p>
            <CodeExample
              copyText={commands.branch.user.get_url}
              codeExampleText={commands.branch.user.get_url}
            />
          </li>
        </ol>
      </>
    </FeatureStep>
  );
};

export default StepBranch;
