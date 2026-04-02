import React from "react";
import FeatureStep from "../components/FeatureStep";
import { ReactComponent as RedisIcon } from "../assets/utility/service_redis.svg";
import CodeBlock from "../components/CodeBlock";
import CopyButton from "../components/CopyButton";
import commands from "../commands.json";
import CodeExample from "../components/CodeExample";

interface StepRedisProps {
  isDisabled: boolean;
  hideContent: boolean;
  environment: string | null;
}

const StepRedis: React.FC<StepRedisProps> = ({
  isDisabled,
  hideContent,
  environment,
}) => {
  const servicesText = `###############################################################
# Step 4: Add a service. Uncomment this section.
###############################################################
        relationships:
            redis_session: "redis_service:redis"

services:
    redis_service:
        type: "redis:7.0"
###############################################################`;

  return (
    <FeatureStep
      data-testid="step-redis"
      icon={<RedisIcon className="w-10 h-10" />}
      title="4. Add Redis to Staging"
      isDisabled={isDisabled}
      hideContent={hideContent}
    >
      <>
        <p className="mb-2">
          Great! Your <code className="px-1">staging</code> environment is live
          and is a complete, isolated copy of your production setup. You can now
          test changes, add services, and debug without any risk to your main
          site.
        </p>
        <p className="mb-2">
          Because Upsun uses Infrastructure as Code, you just need to update a
          configuration file to provision the new service. Then, commit the
          changes and merge them into production.
        </p>
        <ol className="list-decimal list-outside ml-4 mt-2">
          <li>
            <p className="mb-2">
              <span className="font-semibold">Update your configuration</span>
            </p>
            <p className="mb-2">
              Open{" "}
              <CopyButton
                className="inline-block"
                copyText=".upsun/config.yaml"
              >
                <code className="px-2">.upsun/config.yaml</code>
              </CopyButton>{" "}
              and uncomment lines 83–88 to define the Redis service and its
              relationship to your app.
            </p>
            <div className="mb-2 code-block">
              <CodeBlock
                text={servicesText}
                language="yaml"
                showLineNumbers
                startingLineNumber={83}
              />
            </div>
          </li>
          <li>
            <p className="mb-2 mt-2">
              <span className="font-semibold">Commit the change</span>
            </p>
            <p className="mb-2">
              Save the file and commit it to your local Git history:
            </p>
            <CodeExample
              copyText={commands.redis.user.commit}
              codeExampleText={commands.redis.user.commit}
            />
          </li>
          <li>
            <p className="mb-2 mt-2">
              <span className="font-semibold">
                Deploy to the staging environment
              </span>
            </p>
            <p className="mb-2">
              By pushing this change, Upsun instantly provisions a Redis
              container in your staging environment.
            </p>
            <CodeExample
              copyText={commands.redis.user.push}
              codeExampleText={commands.redis.user.push}
            />
            <p className="mb-2 mt-2">
              <span className="font-semibold">Verify the push:</span> To see
              your new Redis container active in the staging environment, run:
            </p>
            <CodeExample
              copyText={commands.redis.user.service_list}
              codeExampleText={commands.redis.user.service_list}
            />
          </li>
          <li>
            <p className="mb-2 mt-2">
              Refresh this page after the push is complete.
            </p>
          </li>
        </ol>
      </>
    </FeatureStep>
  );
};

export default StepRedis;
