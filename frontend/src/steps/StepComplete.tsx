import React from "react";
import FeatureStep from "../components/FeatureStep";
import { ReactComponent as DoneIcon } from "../assets/utility/done.svg";

interface StepCompleteProps {
  isDisabled: boolean;
  hideContent: boolean;
}

const StepComplete: React.FC<StepCompleteProps> = ({
  isDisabled,
  hideContent,
}) => {
  return (
    <FeatureStep
      data-testid="step-complete"
      icon={<DoneIcon className="w-10 h-10 p-1" />}
      title="6. You did it!"
      isDisabled={isDisabled}
      hideBorder
      hideContent={hideContent}
    >
      <>
        <h4 className="mb-2 mt-2 text-lg font-semibold">
          Ready for Your Next Project
        </h4>
        <p className="mb-2">
          You've seen the core Upsun workflow: Git-driven infrastructure,
          instant staging environments, and on-the-fly scaling. Now, see how to
          take your next project further.
        </p>
        <h4 className="mt-5 text-lg font-semibold">What's Next?</h4>
        <ul className="list-disc list-outside ml-8 mt-2 space-y-2">
          <li>
            <strong>Deep Performance Insights:</strong> Every Upsun project
            includes Blackfire, using built-in profiling and monitoring to show
            how your code performs.
          </li>
          <li>
            <strong>Automate Everything:</strong> Use Cron jobs to schedule
            tasks directly in your{" "}
            <code className="px-1">.upsun/config.yaml</code> with the same ease
            you used to add Redis.
          </li>
          <li>
            <strong>Flexible Workflows:</strong> Connect your own CI/CD or use
            our API to automate environment creation for every pull request.
          </li>
          <li>
            <strong>AI-Assisted Onboarding:</strong> Use the AI Configuration
            Generator to analyze your code and automatically suggest the best{" "}
            <code className="px-1">.upsun/config.yaml</code> setup for your
            next project.
          </li>
          <li>
            <strong>Vector-Ready Infrastructure:</strong> Deploy GenAI and RAG
            apps instantly by provisioning managed services like Chroma, Qdrant,
            or PostgreSQL with pgvector.
          </li>
          <li>
            <strong>Conversational Ops:</strong> Connect Upsun to your favorite
            AI assistant via our MCP server to query logs, check status, or
            trigger deployments using natural language.
          </li>
        </ul>
        <p className="mb-2 mt-5 font-semibold">Ready to build?</p>
        <div className="flex flex-row gap-3 mb-5">
          <a
            href="https://console.upsun.com/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-upsun-violet-600 text-white rounded hover:bg-upsun-violet-700 transition-colors text-sm font-medium"
          >
            Start your next project
          </a>
          <a
            href="https://docs.upsun.com"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-upsun-black-900 text-white rounded hover:bg-upsun-black-800 transition-colors text-sm font-medium"
          >
            Explore the Docs
          </a>
        </div>
        <p className="mb-2 text-sm text-gray-400">
          If you're finished with this demo, you can remove it anytime with{" "}
          <code className="px-1">upsun project:delete</code>.
        </p>
      </>
    </FeatureStep>
  );
};

export default StepComplete;
