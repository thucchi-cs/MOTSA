DROP TABLE events;

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  lvl TEXT CHECK (lvl IN ('high', 'middle')),
  title TEXT NOT NULL,
  descr TEXT NOT NULL,
  test BOOLEAN NOT NULL DEFAULT FALSE,
  submission BOOLEAN NOT NULL DEFAULT FALSE,
  deadline TEXT,
  rubric TEXT NOT NULL
);

CREATE TABLE event_themes (
  id SERIAL PRIMARY KEY,
  event_id SERIAL,
  theme TEXT NOT NULL,
  FOREIGN KEY (event_id) REFERENCES events(id)
);

-- STRUCTURE DESIGN NEEDS VERIFICATION FORM - INCLUDE IN THEME WEBSITE BUT SHOULD BE REQUIREMENT

INSERT INTO event_themes (event_id, theme) VALUES
  (12, E'Identify and use a "Tourism"- related open-source data set for analysis and research. In the scientific poster, cite the source of the data, including the URL/domain and file format.'),
  (13, E'Artificial Intelligence and Ethics\n\t\tSubtopic 1: AI decision-making in judicial systems introduces bias and undermines human moral judgment.\n\t\tSubtopic 2: The development of artificial general intelligence (AGI) poses a greater existential threat than nuclear weapons.\n\t\tSubtopic 3: AI-generated art and literature diminish the value of human creativity and cultural authenticity.'),
  (14, E'“A Twist in Time” Create a story that alters a key historical moment—or imagines a character from the past suddenly appearing in the modern day.'),
  (16, E'https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2025-2026/2026-hs_uav-drone.pdf?sfvrsn=28e74e45_3'),
  (17, E'Engineering the tools of scientific discovery'),
  (19, E'Villain Era with one element of the main garment being 3-D printed.'),
  (23, E'Urban Heat Islands and Cooling Solutions\nIdentify urban heat island (UHI) hotspots in your area using temperature, vegetation, and land use data. Map areas most affected by heat and propose equitable solutions—such as tree planting zones, reflective surfaces, or community cooling centers—especially in vulnerable neighborhoods.'),
  (24, E'Marble Maze or Puzzle Box'),
  (25, E'The year 2026 marks the 250th birthday of the United States. Create a musical piece that can be played as the opening number at a July 4th fireworks show.'),
  (27, E'Photo Essay Series; Create a series of photos that tell a story'),
  (28, E'Everyone knows the classic game of rock, paper, scissors: rock beats scissors, scissors beat paper, and paper beats rock. At the end of the day, which is the most revolutionary tool? Develop a presentation in which you select one of these three technologies/tools and describe its impact on human civilization.'),
  (29, E'Create promotional materials for a chapter-hosted event in which TSA alumni return to the chapter to share career stories, run workshops, and mentor students. The promotional items must include:\n\t\tan event information flyer\n\t\ta social media promotional graphic\n\t\ta name badge template\n\t\ta promotional item of the participant''s choice\nParticipants should use the following details in the designs:\n\t\tEvent title: “Back to Impact: TSA Alumni Day Celebration”\n\t\tDate of event: June 2-4, 2026\n\t\tChapter name: Bluewater Heights School of Innovation TSA\n\t\tSchool mascot: Jets\n\t\tAddress: 870 Trail Bend Road, Bluewater Heights, MD 21903'),
  (30, E'https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2025-2026/2026-hs-robotics.pdf?sfvrsn=2849ac4c_2'),
  (32, E'Develop a software program that removes barriers and increases accessibility for people with vision or hearing disabilities.'),
  (33, E'Headline: The green past of the Saharo-Arabian Desert: Cave deposits reveal recurring humid periods over eight million years\n\nBackground: A new study led by the Max Planck Institute for Chemistry has uncovered compelling evidence that the Saharo-Arabian Desert—today one of Earth''s driest regions—experienced multiple periods of significantly wetter climate over the past eight million years. Researchers analyzed speleothems, or cave deposits, from seven Saudi Arabian caves and found chemical clues indicating repeated monsoonal rainfall that transformed the desert into a habitable landscape for thousands of years at a time.\nThese wetter intervals likely enabled the migration of mammals, including early human ancestors, between Africa and Eurasia—despite the desert''s role as a natural barrier. The study highlights the powerful influence of climate change on human and animal history, as well as the importance of cave formations as records of ancient weather patterns. Using isotopic analysis and radiometric dating, the team also discovered that the decline of monsoonal rainfall was caused by long-term cooling in the Northern Hemisphere, which shifted rain belts southward.\n\nPrompt: Based on the following headline, develop a news broadcast that includes an introduction of the headline, a summary of the information in the news story, and an explanation of potential future implications of the highlighted work.\nhttps://www.eurekalert.org/news-releases/1079999'),
  (34, E'https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2025-2026/2026-hs-structural-design-and-engineering-problem-statement.pdf?sfvrsn=def98886_1'),
  (38, E'The Sky is Not the Limit- Next-gen space travel.'),
  (39, E'Retro Revival: Reimagine an 8-bit or 16-bit era type of game with a modern twist.\nThe game must be inspired by 8-bit or 16-bit era games, but may not contain any recognizable characters, music, or storylines from these games. Competitors are encouraged to research games from this era but not utilize copyrighted material.'),
  (40, E'Design an interactive, walk-through VR museum based on a topic in art, history, or technology.'),
  (41, E'Community Resource Hub\nCreate a website that will serve as a community resource hub to highlight resources available to residents within the community (e.g., non-profits, support services, community events and programs, etc.). Your entry for this event is an exception to the general rules for the 2026 National TSA Conference regarding identifying information and you may include school or chapter name if it is the same name as the community used.\nYour website should include the following:\n\t\tan interactive directory of community resources (resource hub) that allows users to search and filter the resources.\n\t\ta highlight section that spotlights at least three of the community resources you have listed in your resource hub.\n\t\ta form that users can submit to indicate new resources that should be added to the community resources hub.\n\t\tadditional content to enhance the community resource hub for end users.');