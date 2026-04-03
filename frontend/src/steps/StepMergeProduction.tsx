import React from "react";
import FeatureStep from "../components/FeatureStep";
import { ReactComponent as MergeIcon } from "../assets/utility/merge.svg";
import commands from "../commands.json";
import CodeExample from "../components/CodeExample";

interface StepMergeProductionProps {
  isDisabled: boolean;
  hideContent: boolean;
  environment: string | null;
}

const StepMergeProduction: React.FC<StepMergeProductionProps> = ({
  isDisabled,
  hideContent,
  environment,
}) => {
  return (
    <FeatureStep
      data-testid="step-merge-production"
      icon={<MergeIcon className="w-10 h-10" />}
      title="5. Merge changes into production and scale up"
      isDisabled={isDisabled}
      hideContent={hideContent}
    >
      <>
        <p className="mb-2">
          Your changes move from staging to production in seconds. With Upsun,
          your code and infrastructure updates happen in a single, atomic
          operation—meaning zero downtime and zero surprises.
        </p>
        <ol className="list-decimal list-outside ml-4 mt-2">
          <li>
            <p className="mb-2">
              <span className="font-semibold">Go live</span>
            </p>
            <p className="mb-2">
              Merge your staging environment into the main production
              environment. This syncs your code and provisions the new Redis
              service in production instantly.
            </p>
            <CodeExample
              copyText={`${commands["merge_production"].user.merge} ${environment?.toLocaleLowerCase()}`}
              codeExampleText={`${commands["merge_production"].user.merge} ${environment?.toLocaleLowerCase()}`}
            />
            <p className="mb-2 mt-2">
              <span className="font-semibold">Verify the merge:</span> To see
              your new Redis container active in the production environment, run:
            </p>
            <CodeExample
              copyText={commands["merge_production"].user.service_list}
              codeExampleText={commands["merge_production"].user.service_list}
            />
          </li>
          <li>
            <p className="mb-2 mt-2">
              <span className="font-semibold">Scale your resources instantly</span>
            </p>
            <p className="mb-2">
              Adjust your horizontal and vertical scaling in a single step.
              Upsun updates your resources on the fly without taking your
              application offline.
            </p>
            <CodeExample
              wrapLines
              copyText={commands["merge_production"].user.resources_set}
              codeExampleText={commands["merge_production"].user.resources_set}
            />
          </li>
          <li>
            <p className="mb-2 mt-2">
              <span className="font-semibold">Autoscaling: Set it and forget it</span>
            </p>
            <p className="mb-2">
              Want to automate resource adjustments? You can{" "}
              <a
                href="https://docs.upsun.com/manage-resources/autoscaling.html"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                configure autoscaling
              </a>{" "}
              to let Upsun handle adjustments for you based on real-time
              traffic.
            </p>
          </li>
          <li>
            <p className="mb-2 mt-2">
              <span className="font-semibold">View your scaled production app</span>
            </p>
            <p className="mb-2">
              While your app's front end looks the same for this demo, your
              infrastructure just grew. Return to the demo app frontend:
            </p>
            <CodeExample
              copyText={commands["merge_production"].user.get_url}
              codeExampleText={commands["merge_production"].user.get_url}
            />
          </li>
        </ol>
      </>
    </FeatureStep>
  );
};

export default StepMergeProduction;
