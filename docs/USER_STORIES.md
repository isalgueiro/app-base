# **Scenario 1:** Login as GOD
  ## **Given** there is a GOD user
  - I can login with those credentials
  ## **When** I enter
  - I will be redirected to [/god]() page 
  ## **Then** I can see GOD dashboard
  - [x] Number of Organizations with a link
  - [ ] Number of Users
  - [ ] Number of Events
  - [ ] Number of Bookings

# **Scenario 2:** Manage Organizations 
  ## **Given** I have logged in as GOD
  - I can see GOD Dashboard
  ## **When** I go to ['/god/organizations']() page
  - Clicking on Organizations edit link
  ## **Then** I can manage Organizations
  - [x] Wiew list of Organizations
  - [x] Create new Organization
  - [x] Assing an Admin user to an Organization
  - [ ] Remove an Admin user from an Organization

# **Scenario 3:** User profile and passwords 
  ## **Given** I have logged in
  - I can see my profile
  ## **When** I go to ['/user']() page
  - Clicking on Organizations edit link
  ## **Then** I can manage my profile
  - [x] Log Out
  - [ ] Remove my account
  - [ ] Change my password
  ## **Given** I forgot my password
  - I can ask for a new on
  ## **When** I go to ['/login/forgotpassword']() page
  - Entering my email
  ## **Then** I can manage receibe a password by email
  - [ ] forgotpassword form page
  - [ ] send email with a recovery hash or temp password
  - [ ] Change my password
  
