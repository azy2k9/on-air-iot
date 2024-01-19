#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { OnAirIotStack } from "./stack";

const app = new cdk.App();
new OnAirIotStack(app, "OnAirIotStack");
