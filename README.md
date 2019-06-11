# Water Your Plants at the Right Time

I own multiple plants that run on different watering schedules and as a busy working person I tend to miss my reminders and put off watering my plants until a few days later (which is quite fine because cacti can cope well with this). 

Common reminders and calendar apps are great because I can create custom repeat reminders (e.g. remind me to do X every 12 days), but they're not so helpful for my specific use case. I want an app that generates a new custom reminder to water my plants only *after* I have watered said plant, instead of simply sending a reminder every 12 days from the very first time I created the custom repeat reminder.

See [my website here](https://valenlyn.com/water-your-plants-at-the-right-time) for my explanation of this problem with illustrations.

## Problems

1. Death of cacti and succulents due to **overwatering**.
2. Common reminder or calendar apps fail to generate timely custom reminders to prevent (1). This often results in having to manually create a new reminder or calendar event again, after watering a plant.

## Solution

This app only generates a new reminder *after* a plant has been watered, and fires that reminder to users on the date the plant needs to be watered.

The app collects information about users' plants (i.e. how frequently a specific plant needs to be watered) once, so users don't need to manually calculate and update/create reminders themselves every time.

### User story
As a owner of many cacti and succulents, I want an app that generates a new custom reminder to water my plants only after I have watered said plant, so that I can be sure that I am not overwatering my plants.

## Features

* **Stores records of plants users own** – Names, species/genus, a photograph, instructions on how to care for the plant, how often the plant requires watering.
* **Homepage displays a date and the plants that require watering for the day** – helps users to quickly identify which plants need watering *today*. Instructions on how to water / care for the plant is also displayed here, making it convenient for the user to get to their task without having to reference it elsewhere
* **Sends email reminder on the day the plant requires watering**
* **Creates a Google calendar event for the day thr plant requires watering** (this is created in advance as opposed to the email feature—i.e. suppose today is the 1st of the month and you set a reminder for 10th. The app creates a calendar event immediately, but the event's date is set to the 10th)
* **All Plants page provides an overview of all plants**, their information, and how many days until they're due for watering. Plants that are "overdue" are highlighted red and bumped to the top of the list, to help users get right on their tasks
* **Edit plant information**
* **Delete plant**

## Technologies used
* Node.js – server environment
* Express – used with MVC framework
* PostgreSQL – database
* BootStrap – styling
* Cloudinary API – image storage, used with Multer
* Airtable API – database for storing reminders
* Zapier, Google calendar, Gmail – sending reminders

## What I’d like to improve on

* An elegant way for users to ask their family or friends to help care for specific plants
* Ability to put off watering / set a new reminder for the reminder easily—"remind me again tonight", "remind me again tomorrow"
* Integrate with Reminders (iOS app)
