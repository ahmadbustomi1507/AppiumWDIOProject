Feature: Search available Flight Today

Scenario Outline: As User, I want to search One Way trip
    Given User successfully login in traveloka app
    When User tap "Flight" menu
    When User select location Origin <origin>
    When User select location Destination <destination>
    When User select Departure Date <date>
    When User select total passenger <passenger>
    When User select Seat Class <class>
    When User tap "Search" button
    Then App will display available flight schedule

    Examples:
    |origin |destination|date   |passenger  |class      |
    |JKTA   |PDG        |7 sep  |1          |Economy    |

Scenario Outline: As User, I want to search Round trip
    Given User successfully login in traveloka app
    When User tap "Flight" menu
    When User select location Origin <origin>
    When User select location Destination <destination>
    When User select Departure Date <date>
    When User select Round Trip
    When User select total passenger <passenger>
    When User select Seat Class <class>
    When User tap "Search" button
    Then App will display available flight schedule

    Examples:
    |origin |destination|date   |passenger  |class      |
    |JKTA   |PDG        |7 sep  |1          |Economy    |