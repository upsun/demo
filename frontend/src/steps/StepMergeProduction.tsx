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
      title="5. Merge changes into production & scale up"
      isDisabled={isDisabled}
      hideContent={hideContent}
    >
      <>
        <p className="mb-2">
          Awesome! Your changes are live in{" "}
          <code className="px-1">{environment?.toLocaleLowerCase()}</code>.
        </p>
        <p className="mb-2">
          Now it's time to merge the new Redis service into your production
          environment and ensure your app can handle any traffic spike.
        </p>
        <h4 className="mt-5 text-lg font-semibold">Next Step</h4>
        <ol className="list-decimal list-outside ml-4 mt-2">
          <li>
            <p className="mb-2">
              <span>Deploy staging changes to production</span>
            </p>
            <p className="mb-2">
              Push your infrastructure and code changes to the live environment
              in one go.
            </p>
            <CodeExample
              copyText={`${commands["merge_production"].user.merge} ${environment?.toLocaleLowerCase()}`}
              codeExampleText={`${commands["merge_production"].user.merge} ${environment?.toLocaleLowerCase()}`}
            />
          </li>
          <li>
            <p className="mb-2 mt-2">
              <strong>Optimize your resources</strong>
            </p>
            <p className="mb-2">
              Upsun gives you total control. You can{" "}
              <strong>scale up or down anytime</strong> via the CLI or the
              Console to meet your specific needs. Use this command to
              horizontally scale your backend and vertically scale your
              services:
            </p>
            <CodeExample
              wrapLines
              copyText={commands["merge_production"].user.resources_set}
              codeExampleText={commands["merge_production"].user.resources_set}
            />
          </li>
          <li>
            <p className="mb-2 mt-2">
              <strong>Set it and forget it with Autoscaling</strong>
            </p>
            <p className="mb-2">
              Want to stay ahead of traffic? You can{" "}
              <a
                href="https://docs.upsun.com/manage-resources/autoscaling.html"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                configure autoscaling
              </a>{" "}
              to let Upsun automatically adjust resources for you, ensuring your
              applications always perform at their best without manual
              intervention.
            </p>
          </li>
          <li>
            <p className="mb-2 mt-2">
              <span>Open the production frontend in your browser</span>
              <CodeExample
                copyText={commands["merge_production"].user.get_url}
                codeExampleText={commands["merge_production"].user.get_url}
              />
            </p>
          </li>
        </ol>
      </>
    </FeatureStep>
  );
};

export default StepMergeProduction;
