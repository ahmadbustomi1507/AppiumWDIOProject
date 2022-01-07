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
    |origin |destination|date               |passenger  |class          |
    |JKTA   |PDG        |8 January 2022     |1          |Economy        |
    |JKTA   |PDG        |8 January 2022     |1          |Premium Economy|
    |JKTA   |PDG        |8 January 2022     |1          |Business       |
    |JKTA   |PDG        |8 January 2022     |1          |Economy        |
    |JKTA   |PDG        |8 January 2022     |2          |Economy        |
    |JKTA   |PDG        |8 January 2022     |7          |Economy        |
    |JKTA   |PDG        |1 Desember 2022    |1          |Economy        |
    |JKTA   |PDG        |7 January 2023     |1          |Economy        |
    |JKTA   |MELA       |9 January 2022     |1          |Business       |


Scenario Outline: As User, I want to search Round trip
    Given User successfully login in traveloka app
    When User tap "Flight" menu
    When User select location Origin <origin>
    When User select location Destination <destination>
    When User select Departure Date <departure_date>
    When User select Round Trip
    When User select Return Date <return_date>
    When User select total passenger <passenger>
    When User select Seat Class <class>
    When User tap "Search" button
    Then App will display available flight schedule

    Examples:
    |origin |destination|departure_date    |return_date          |passenger  |class          |
    |JKTA   |PDG        |8 January 2022    |10 January 2022      |1          |Economy        |
    |JKTA   |PDG        |8 January 2022    |10 January 2022      |1          |Premium Economy|
    |JKTA   |PDG        |8 January 2022    |10 January 2022      |1          |Business       |
    |JKTA   |PDG        |8 January 2022    |10 January 2022      |1          |Economy        |
    |JKTA   |PDG        |8 January 2022    |10 January 2022      |2          |Economy        |
    |JKTA   |PDG        |8 January 2022    |10 January 2022      |7          |Economy        |
    |JKTA   |PDG        |1 Desember 2022   |15 Januari 2023      |1          |Economy        |
    |JKTA   |PDG        |8 January 2022    |7 January 2023       |1          |Economy        |
    |JKTA   |MELA       |8 January 2022    |10 January 2022      |1          |Business       |
