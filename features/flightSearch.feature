Feature: Search available Flight Today

Scenario Outline: As User, I want to search One Way trip
    Given User successfully login in traveloka app
    When User tap "Flight" menu
    And User select location Origin <origin>
    And User select location Destination <destination>
    And User select Departure Date <date>
    And User select total passenger <passenger>
    And User select Seat Class <class>
    And User tap "Search" button
    Then App will display available flight schedule

    Examples:
    |origin |destination|date   |passenger  |class      |
    |JKTA   |PDG        |7 sep  |1          |Economy    |

Scenario Outline: As User, I want to search Round trip
    Given User successfully login in traveloka app
    When User tap "Flight" menu
    And User select location Origin <origin>
    And User select location Destination <destination>
    And User select Departure Date <date>
    And User select Round Trip
    And User select total passenger <passenger>
    And User select Seat Class <class>
    And User tap "Search" button
    Then App will display available flight schedule

    Examples:
    |origin |destination|date   |passenger  |class      |
    |JKTA   |PDG        |7 sep  |1          |Economy    |