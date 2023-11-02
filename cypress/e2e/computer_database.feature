Feature: Computer database automation UI test

  Background: Visit homepage
    Given I visit Computer database page
    Then I will see the home page has loaded

  Scenario: User can Filter by Computer name
    When I input "ASCI Purple" in textfield
    And I click Filter by name button
    Then I will see "ASCI Purple" in the list

  Scenario: User can edit Computer
    When I input "ASCI Purple" in textfield
    And I click Filter by name button
    Then I will see "ASCI Purple" in the list
    When I click computer name
    Then I will see edit data page
    When I input "ASCI Purple new" in textfield Computer name
    And I click Save this computer button
    Then I will see message "Done !  Computer ASCI Purple new has been updated"

  Scenario: User can delete Computer
    When I click first data in the list
    Then I will see edit data page
    When I click Delete this computer button
    Then I will see message "Done !  Computer ACE has been deleted"

  Scenario: User can create a new Computer
    When I click Add a new computer button
    Then I will see create data page
    When I input "ASCI Blackpink" in textfield Computer name
    When I input "2023-01-01" in textfield Introduced
    And I input "2023-11-01" in textfield Discontinued
    And I choose "Netronics" in company dropdown
    And I click Create this computer button
    Then I will see message "Done !  Computer ASCI Blackpink has been created"

  Scenario: User can see error message when input Computer name with empty value
    When I input "ASCI Purple" in textfield
    And I click Filter by name button
    Then I will see "ASCI Purple" in the list
    When I click computer name
    Then I will see edit data page
    When I input empty value in textfield Computer name
    And I click Save this computer button
    Then I will see message error message "Failed to refine type : Predicate isEmpty() did not fail."

  Scenario: User can see error message when input Introduced with invalid value
    When I click first data in the list
    Then I will see edit data page
    When I input "ASCII" in textfield Computer name
    And I input invalid value "november" in textfield Introduced
    And I click Save this computer button
    Then I will see message error message "Failed to decode date : java.time.format.DateTimeParseException: Text 'november' could not be parsed at index 0"

  Scenario: User can see error message when input Discontinued with invalid value
    When I click first data in the list
    Then I will see edit data page
    When I input "ASCII" in textfield Computer name
    And I input invalid value "november" in textfield Discontinued
    And I click Save this computer button
    Then I will see message error message "Failed to decode date : java.time.format.DateTimeParseException: Text 'november' could not be parsed at index 0"