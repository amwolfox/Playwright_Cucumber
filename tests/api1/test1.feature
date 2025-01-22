Feature: API testing with Playwright
  This feature validates API endpoints using Playwright.

  Scenario: Validate the status of a GET API endpoint
    Given I send a GET request to "https://jsonplaceholder.typicode.com/posts/1"
    Then the response status should be 200
    And the response body should contain "userId" with value 1

  Scenario: Validate a POST request to an API endpoint
    Given I send a POST request to "https://jsonplaceholder.typicode.com/posts" with body:
      """
      {
        "title": "foo",
        "body": "bar",
        "userId": 1
      }
      """
    Then the response status should be 201
    And the response body should contain "id"
