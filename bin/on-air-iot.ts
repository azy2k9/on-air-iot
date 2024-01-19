#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { OnAirIotStack } from '../lib/on-air-iot-stack';

const app = new cdk.App();
new OnAirIotStack(app, 'OnAirIotStack');
