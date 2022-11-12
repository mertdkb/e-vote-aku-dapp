# E-vote dApp Requirements Analysis Document

- [E-vote dApp Requirements Analysis Document](#e-vote-dapp-requirements-analysis-document)
  - [Introduction](#introduction)
    - [1.1 Purpose of the system](#11-purpose-of-the-system)
    - [1.2 Scope of the system](#12-scope-of-the-system)
    - [1.3 Objectives and success criteria of the Project](#13-objectives-and-success-criteria-of-the-project)
    - [1.4 Definitions, Acronyms and Abbreviations](#14-definitions-acronyms-and-abbreviations)
    - [1.5 Used Technologies](#15-used-technologies)
  - [Requirements](#requirements)
    - [2.1 User types](#21-user-types)
    - [2.2 Nonfunctional requirements](#22-nonfunctional-requirements)
    - [2.3 System Models](#23-system-models)
      - [2.3.1 Scenarios](#231-scenarios)
    - [2.4 Project Schedule](#24-project-schedule)
  - [Glossary](#glossary)
  - [References](#references)

## Introduction
E-vote dApp is a platform that allows people to vote securely about opened topics.
### 1.1 Purpose of the system
Signed users can easily and securely vote a topic.

### 1.2 Scope of the system
•	Main purpose of this system is ensure security.
•	Usability

### 1.3 Objectives and success criteria of the Project

•	Users can sign up with metamask account (Metamask is for only development purposes in the future we replace it with university email account)
•	Signed users can vote
•	Allowed users can start a topic to vote.
### 1.4 Definitions, Acronyms and Abbreviations
•	RAD : Requirement Analysis Document

### 1.5 Used Technologies
•	Solidity
•	React

## Requirements
### 2.1 User types
•	Standard User: This user only able to vote.
•	Admin User: This user only able to create a topic.
•	Guest User: This user only able to view current topics


###2.1 Functional Requirements
|Requirement ID   |Use case name   |Requirement statements   |
| ------------ | ------------ | ------------ |
|Reg01   |Register    |•	Guest users must have a metamask account. <br>•	Guest users are able to register via metamask account|
|Login01   |Login   |•	User must be registered   |
|Vote01   |Vote   |•	Standard User must logged in.<br>•	Standard User can vote a topic only once|
|Topic01   |Create a topic   |•	Admin User must be logged in   |

### 2.2 Nonfunctional requirements
- Must have connection to internet
- Must have a metamask account
### 2.3 System Models
#### 2.3.1 Scenarios
*	Scenario name: How can i register?
	*	Use case name: Register
	*	Flow of events
		*	User have to create a metamask account
		*	User opens the platform
		*	User clicks the register button
		*	User signs up via metamask account

*	Scenario name: How can i login?
	*	Use case name: Login
	*	Flow of events
		*	User opens the platform
		*	User clicks the login button
		*	User login with metamask account
		*	If user is not registered, user directed to the register page

*	Scenario name: How can i vote?
	*	Use case name: Vote
	*	Flow of events
		*	User login to the platform
		*	User find a topic to vote
		*	User click the vote button (Up vote or Down vote)

*	Scenario name: How can i create a topic?
	*	Use case name: Create a topic
	*	Flow of events
		*	Admin user login the platform
		*	Admin user clicks the create a topic button
		*	Admin user defines the topic name
		*	Admin user clicks the approve button
### 2.4 Project Schedule
  GHANTCHART
## Glossary
## References
•	https://www.cs.fsu.edu/~lacher/courses/COP3331/rad.html
