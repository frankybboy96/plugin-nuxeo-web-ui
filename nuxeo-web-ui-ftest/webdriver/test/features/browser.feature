Feature: Browser

  I can browse the repository

  Background:
    Given I login as "Administrator"

  @watch
  Scenario: Browse
    When I click the "browser" button
    Then I can see the browser tree
    And I can see the "Domain" browser tree node

    When I click "Domain" in the browser tree
    Then I can see the "Workspaces" browser tree node

    # XXX - missing href in tree nodes
    When I click "Workspaces" in the browser tree
    Then I can see the "Workspaces" document
