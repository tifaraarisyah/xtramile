Feature: JavaScript Alerts automation UI test

  Background: Visit homepage
    Given I visit JavaScript Alerts page
    Then I will see the home page has loaded

  Scenario: User can see result when click JS Alert
    When I click JS Alert
    Then I will see popup JS Alert "I am a JS Alert"
    And I will see result "You successfully clicked an alert"

  Scenario: User can see result when click JS Confirm
    When I click JS Confirm
    Then I will see popup JS Confirm "I am a JS Confirm"
    And I will see result "You clicked: Ok"

  Scenario: User can see result when click cancel in JS Confirm
    When I click JS Confirm
    Then I will see popup JS Confirm "I am a JS Confirm"
    When I click cancel in the popup JS confirm
    Then I will see result "You clicked: Cancel"

  Scenario: User can see result when input in JS Prompt
    When I click JS Prompt and input in popup
    Then I will see result "You entered: xtramile"