// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { meet } from '@googleworkspace/meet-addons/meet.addons';

const CLOUD_PROJECT_NUMBER = '127425301460';
const MAIN_STAGE_URL =
  'https://jesusdalvarado.github.io/meet/addons-web-sdk/samples/dist/hello-world/MainStage.html';

/**
 * Prepares the Add-on Side Panel Client, and adds an event to launch the
 * activity in the main stage when the main button is clicked.
 */
export async function setUpAddon() {
  const session = await meet.addon.createAddonSession({
    cloudProjectNumber: CLOUD_PROJECT_NUMBER,
  });
  const sidePanelClient = await session.createSidePanelClient();
  document
    .getElementById('start-activity')
    .addEventListener('click', async () => {
      await sidePanelClient.startActivity({ mainStageUrl: MAIN_STAGE_URL });
    });
}

/**
 * Prepares the Add-on Main Stage Client, which signals that the add-on has
 * successfully launched in the main stage.
 */
export async function initializeMainStage() {
  const session = await meet.addon.createAddonSession({
    cloudProjectNumber: CLOUD_PROJECT_NUMBER,
  });
  await session.createMainStageClient();
}






// // Import required libraries
// import { meet } from '@googleworkspace/meet-addons/meet.addons';
// // import { ConferenceRecordsServiceClient } from '@google-apps/meet/v2';
// const {ConferenceRecordsServiceClient} = require('@google-apps/meet').v2;
// // import { ConferenceRecordsServiceClient } from '@google-apps/meet/build/src/v2';



// const CLOUD_PROJECT_NUMBER = '127425301460';
// const MAIN_STAGE_URL = 'https://jesusdalvarado.github.io/meet/addons-web-sdk/samples/dist/hello-world/MainStage.html';

// // Instantiate a Meet client for participant management
// const meetClient = new ConferenceRecordsServiceClient();

// /**
//  * Fetches the list of participants from a Google Meet conference.
//  * @param {string} parent - The conference record ID in the format `conferenceRecords/{conference_record}`.
//  */
// async function callListParticipants(parent) {
//   try {
//     const request = {
//       parent,
//       pageSize: 100, // Adjust as needed, max is 250
//     };

//     // Fetch participant data
//     const participantsList = meetClient.listParticipantsAsync(request);
//     for await (const participant of participantsList) {
//       console.log('Participant:', participant);
//     }
//   } catch (error) {
//     console.error('Error fetching participants:', error);
//   }
// }

// /**
//  * Prepares the Add-on Side Panel Client, and adds an event to launch the
//  * activity in the main stage when the main button is clicked.
//  */
// export async function setUpAddon() {
//   try {
//     const session = await meet.addon.createAddonSession({
//       cloudProjectNumber: CLOUD_PROJECT_NUMBER,
//     });

//     const sidePanelClient = await session.createSidePanelClient();

//     // Set up the event listener for starting the main stage activity
//     document.getElementById('start-activity').addEventListener('click', async () => {
//       await sidePanelClient.startActivity({ mainStageUrl: MAIN_STAGE_URL });
//       console.log('Main stage activity started.');

//       // Example: Fetch participant data when starting the activity
//       const conferenceRecordId = 'conferenceRecords/your-conference-id'; // Replace with dynamic ID
//       await callListParticipants(conferenceRecordId);
//     });
//   } catch (error) {
//     console.error('Error setting up the add-on:', error);
//   }
// }

// /**
//  * Prepares the Add-on Main Stage Client, which signals that the add-on has
//  * successfully launched in the main stage.
//  */
// export async function initializeMainStage() {
//   try {
//     const session = await meet.addon.createAddonSession({
//       cloudProjectNumber: CLOUD_PROJECT_NUMBER,
//     });
//     await session.createMainStageClient();
//     console.log('Main stage initialized successfully.');
//   } catch (error) {
//     console.error('Error initializing the main stage:', error);
//   }
// }
