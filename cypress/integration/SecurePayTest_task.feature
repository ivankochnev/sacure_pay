Feature:  SecurePay test task.
    Scenario Outline: As a internet surder I would like to find SecurePay web site and fill the form.
        Given I vizit Google web site
        And I click on SecurePay link
        Then I go to Pricing Standard Pricing
        And I click on Learn more button under POLi and Verify POLi site is opened & loaded
        And I Navigate to Sell, Make a sales enquiry on the POLi site
        Then I fill Merchant Enquiry form with "<company>", "<first_name>", "<last_name>", "<message>", "<phone>", "<website>", "<email>"

        Examples:
            |company    |first_name |last_name   |message                   |phone        |website                |email                   |
            |Jabbercube |Brock      |Nabarro     |faucibus orci luctus et   |962-374-4526 |https://privacy.gov.au |bnabarro0@linkedin.com  |
            |Bluejam    |Willem     |Beglin      |non mi                    |819-750-5510 |http://phoca.cz        |wbeglin1@last.fm        |
            |Realcube   |Gael       |Craighead   |aenean sit                |312-557-8977 |https://geocities.com  |gcraighead2@npr.org     |
            |Flashset   |Burtie     |De Gogay    |molestie sed justo        |537-957-3607 |http://bloomberg.com   |bdegogay3@fotki.com     |
            |Eire       |Brooks     |Brownscombe |odio curabitur convallis  |919-439-9189 |https://army.mil       |bbrownscombe4@nifty.com |
            |Reallinks  |Saunder    |Neary       |cursus urna ut tellus     |195-568-5838 |https://rediff.com     |sneary5@latimes.com     |
            |Agivu      |Leta       |Winchcomb   |blandit ultrices          |981-705-1011 |https://vk.com         |lwinchb6@google.com.au  |
            |Yambee     |Leeanne    |Dulwitch    |morbi porttitor lorem     |559-690-7446 |http://techcrunch.com  |ldulwitch7@hp.com       |
            |Edgeify    |Adrienne   |Oertzen     |aliquam quis turpis       |153-405-3295 |https://ameblo.jp      |aoertzen8@ftc.gov       |
            |Linkbuzz   |Ramon      |Strick      |eros elementum            |398-962-3806 |https://paypal.com     |rstrick9@bluehost.com   |
