// src/router.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Daddy’s Oxtail (Landing Site)
import App from "./App";
import MenuPage from "./pages/MenuPage";
import MenuItemPage from "./pages/MenuItemPage";
import ContactPage from "./pages/ContactPage";
import EventsPage from "./pages/EventsPage"; // NEW landing-page events section

// Agape Layout
import AgapeLayout from "./agape/layout/AgapeLayout";

// Agape Home
import AgapeHome from "./agape/home/AgapeHome";

// Agape Journeys
import JourneyIndex from "./agape/journeys/JourneyIndex";
import JourneyMeditation from "./agape/journeys/JourneyMeditation";
import JourneyMovement from "./agape/journeys/JourneyMovement";
import JourneyStillness from "./agape/journeys/JourneyStillness";
import JourneyBreath from "./agape/journeys/JourneyBreath";
import JourneyIntegration from "./agape/journeys/JourneyIntegration";

// Agape Studies
import StudyIndex from "./agape/studies/StudyIndex";
import StudyConsciousness from "./agape/studies/StudyConsciousness";
import StudyPlantMedicine from "./agape/studies/StudyPlantMedicine";
import StudyMindBody from "./agape/studies/StudyMindBody";
import StudyMovementScience from "./agape/studies/StudyMovementScience";

// Agape Community
import CommunityHome from "./agape/community/CommunityHome";
import CommunityStories from "./agape/community/CommunityStories";
import CommunityCircles from "./agape/community/CommunityCircles";
import CommunityActions from "./agape/community/CommunityActions";
import CommunityReflections from "./agape/community/CommunityReflections";

// Agape Events
import EventsIndex from "./agape/events/EventsIndex";
import EventsRetreats from "./agape/events/EventsRetreats";
import EventsWorkshops from "./agape/events/EventsWorkshops";
import EventsGatherings from "./agape/events/EventsGatherings";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Daddy’s Oxtail (Landing Site) */}
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:itemId" element={<MenuItemPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events" element={<EventsPage />} /> {/* NEW landing-page events */}

        {/* Agape Sanctuary */}
        <Route path="/agape" element={<AgapeLayout />}>
          <Route index element={<AgapeHome />} />

          {/* Journeys */}
          <Route path="journeys" element={<JourneyIndex />} />
          <Route path="journeys/meditation" element={<JourneyMeditation />} />
          <Route path="journeys/movement" element={<JourneyMovement />} />
          <Route path="journeys/stillness" element={<JourneyStillness />} />
          <Route path="journeys/breath" element={<JourneyBreath />} />
          <Route path="journeys/integration" element={<JourneyIntegration />} />

          {/* Studies */}
          <Route path="studies" element={<StudyIndex />} />
          <Route path="studies/consciousness" element={<StudyConsciousness />} />
          <Route path="studies/plant-medicine" element={<StudyPlantMedicine />} />
          <Route path="studies/mind-body" element={<StudyMindBody />} />
          <Route path="studies/movement-science" element={<StudyMovementScience />} />

          {/* Community */}
          <Route path="community" element={<CommunityHome />} />
          <Route path="community/stories" element={<CommunityStories />} />
          <Route path="community/circles" element={<CommunityCircles />} />
          <Route path="community/actions" element={<CommunityActions />} />
          <Route path="community/reflections" element={<CommunityReflections />} />

          {/* Agape Events */}
          <Route path="events" element={<EventsIndex />} />
          <Route path="events/retreats" element={<EventsRetreats />} />
          <Route path="events/workshops" element={<EventsWorkshops />} />
          <Route path="events/gatherings" element={<EventsGatherings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
