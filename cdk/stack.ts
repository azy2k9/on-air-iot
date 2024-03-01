import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";

export class OnAirIotStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    /**
     * @endpoint
     * [GET]
     * /api/on-air      [online, offline]
     */

    const api = new apigateway.RestApi(this, "on-air-api", {
      defaultMethodOptions: {
        apiKeyRequired: true,
      },
    });

    const onAir = api.root.addResource("on-air");
    onAir.addMethod("GET", new apigateway.LambdaIntegration());
  }
}
