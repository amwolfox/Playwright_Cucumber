import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { APIRequestContext, request } from 'playwright';

let apiContext: APIRequestContext;
let response: any;

Given('I send a GET request to {string}', async (url: string) => {
  // Create a new API request context
  apiContext = await request.newContext();
  response = await apiContext.get(url);

  // Log request and response details
  console.log(`GET Request URL: ${url}`);
  console.log(`Response Status: ${response.status()}`);
});

Given('I send a POST request to {string} with body:', async (url: string, body: string) => {
  // Create a new API request context
  apiContext = await request.newContext();
  response = await apiContext.post(url, {
    data: JSON.parse(body),
    headers: { 'Content-Type': 'application/json' },
  });

  // Log request and response details
  console.log(`POST Request URL: ${url}`);
  console.log(`Request Body: ${body}`);
  console.log(`Response Status: ${response.status()}`);
});

Then('the response status should be {int}', async (status: number) => {
  // Validate the response status code
  expect(response.status()).toBe(status);
});

Then('the response body should contain {string} with value {int}', async (key: string, value: number) => {
  // Parse the response JSON
  const responseBody = await response.json();

  // Validate the key-value pair in the response body
  console.log(`Response Body: ${JSON.stringify(responseBody, null, 2)}`);
  expect(responseBody[key]).toBe(value);
});

Then('the response body should contain {string}', async (key: string) => {
  // Parse the response JSON
  const responseBody = await response.json();

  // Check if the key exists in the response body
  console.log(`Response Body: ${JSON.stringify(responseBody, null, 2)}`);
  expect(responseBody).toHaveProperty(key);
});
