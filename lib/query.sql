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


INSERT INTO officers (position, abbr, name, school, year_elected, email) VALUES
  ('President', 'president', 'Axumait Yared', 'Staley High', 26, 'motsa@gmail.com'),
  ('Vice President', 'vp', 'Sabrina Bush', 'Hazelwood High', 26, 'motsa@gmail.com'),
  ('Secretary', 'secretary', 'Ayse Demir', 'Staley High', 26, 'motsa@gmail.com'),
  ('Treasurer', 'treasurer', 'Tracy Do', 'Kickapoo High', 26, 'motsa@gmail.com'),
  ('Reporter', 'reporter', 'Manya Karthik', 'Liberty Wentzville High', 26, 'motsa@gmail.com'),
  ('Sergeant-At-Arms', 'sergeant', 'Jason Kogbara', 'Hazelwood Central High', 26, 'motsa@gmail.com'),
  ('Northwest Regional VP', 'nwvp', 'Riley Pederson', 'Staley High', 26, 'motsa@gmail.com'),
  ('Northeast Regional VP', 'nevp', 'Laila Holmes', 'Holt High', 26, 'motsa@gmail.com'),
  ('Southwest Regional VP', 'swvp', 'David Figueroa', 'Carl Junction High', 26, 'motsa@gmail.com'),
  ('Southeast Regional VP', 'sevp', 'Nuriya Hussaini', 'Oakville High', 26, 'motsa@gmail.com');

SELECT * FROM officers;


12
3
7
6

INSERT INTO officer_prompts (prompt) VALUES 
  ('What''s your grade, school, and office?')


INSERT INTO officer_responses (prompt, officer, response) VALUES 
  (12, 11, 'My name is Axum Yared and I am a senior at Staley High School in Kansas City. I am thrilled to be serving as your Missouri TSA President for the upcoming year!'),
  ( 3, 11, 'Outside of TSA, I enjoy reading and spending time with my family. I am also a gymnast and participate in HOSA at school.'),
  ( 7, 11, 'My favorite TSA memory was staying up late to work on my chapter''s submission for On Demand video at nationals the summer before my junior year. While at the time we were all really tired, I look back on it now as one of my favorite times in TSA.'),
  ( 6, 11, 'My favorite TSA event is Webmaster (or Website Design at the Middle School level) as I get to code and be creative in the design/layout of the website I create.'),
  (12, 12, 'My name is Sabrina Bush, I''m a junior at Hazelwood West High School, and I''m honored to be your Vice president!'),
  ( 3, 12, 'Outside of TSA I play double bass for programs such as Gateway Music Outreach- a nonprofit aiming to make music accessible for all- along with Webster''s Young Peoples Symphonic Orchestra.'),
  ( 7, 12, 'My favorite TSA memory is during the state competition when all my friends would laugh and joke in between events.'),
  ( 6, 12, 'My favorite TSA event is digital video production because I love how I can let my creativity guide me through the event and fully showcase my skills.'),
  (12, 14, 'I am a senior at Kickapoo High School, and I am excited to serve as your state Treasurer!'),
  ( 3, 14, 'Outside of TSA, I like to code random projects such as apps, games, websites, and robots. I enjoy spending time outdoors biking, hiking, and stargazing. I love listening to music and I also play the piano. Within my school, I am my FRC robotics team captain, as well as the school''s FBLA and scholar bowl president.'),
  ( 7, 14, 'In my sophomore year, I competed in Video Game Design with two of my closest friends. My favorite memories would definitely be all the times we met up and had hours long coding sessions.'),
  ( 6, 14, 'My favorite event would be Coding because of the adrenaline rush it gives me within the two hours of the competition. I also have been an undefeated state champion since freshman year, but my partner graduated this past year and I am nervous about how I would perform this upcoming year without the same partner.'),
  (12, 15, 'My name is Manya and I''m your Missouri TSA State Reporter! I''m a sophomore at Liberty Wentzville High School.'),
  ( 3, 15, 'My hobbies outside of TSA are classical dance and track. I love how I can creatively express myself through dance and I''ve been learning dance since I was in 1st grade. I am also involved in DECA and Key Club at school.'),
  ( 7, 15, 'My favorite TSA memory is when my chapter and I went to the Fall Leadership Conference because I was able to hang out with my friends and participate in the different workshops.'),
  ( 6, 15, 'My favorite TSA event is Extemporaneous Speech because I really enjoy public speaking events and I like how the event challenges you to make a speech on the spot.'),
  (12, 16, 'I''m a Junior at Hazelwood Central High School and this year I am serving as your state Sergeant-at-Arms.'),
  ( 3, 16, 'Outside of TSA I enjoy lifting, playing Table Tennis, and swimming whenever I get the opportunity.'),
  ( 7, 16, 'My favourite TSA memory is when I became Tarzan for a few minutes at the State Officer Retreat.'),
  ( 6, 16, 'My favourite event is Geospatial Technology because in the last 2 years in which I have competed in it, the event got me closer to my friends and teammates in many different ways.'),
  (12, 17, 'Im a senior at Staley High School and am serving as the Northwest Regional VP.'),
  ( 3, 17, 'I like to read and hang out with friends, and I also love to play video games.'),
  ( 7, 17, 'Shopping at Oprymills in Nashville with my chapter at nationals last year.'),
  ( 6, 17, 'I love Nationals because it is always an opportunity to travel somewhere interesting and see new sights.'),
  (12, 18, 'My name is Laila Holmes, and I am a senior at Holt High School. I am honored to serve as the Northeast Regional Vice President for Missouri TSA.'),
  ( 2, 18, 'I have been a member of TSA since the 10th grade, making this my third and final year. They say the third time is a charm!'),
  ( 3, 18, 'Outside of TSA, I enjoy working part-time at my local nursing home and volunteering at KEEN to help disabled youth.'),
  ( 4, 18, 'A fun fact about me is that I can do the splits!'),
  (12, 19, 'My name is David Figueroa-Quezada, I''m a Junior at Carl Junction High School, and I''m excited to be your 2026-2026 Southwest Regional Vice-President!'),
  ( 3, 19, 'Outside of TSA, I like to: play tennis, listen to music, talk with friends, and play in my school''s band.'),
  ( 7, 19, 'My favorite TSA memory was hanging out with everyone in my chapter.'),
  ( 6, 19, 'My favorite TSA event is Digital Photography because I love taking pictures, and I can make anything, quote in quote boring something cool!'),
  (12, 20, 'Hello my name is Nuriya Hussaini, I am a sophomore in Oakville High School serving as your Southeast Regional VP.'),
  ( 3, 20, 'Outside of TSA I enjoy doing a variety of things, one of them includes playing Lacrosse.'),
  ( 7, 20, 'My favorite TSA memory was working on our Audio Podcasting story with a friend. We spent time brainstorming creative and engaging storylines. Working on developing intriguing plots allowed us to show our creativity while having fun.'),
  ( 6, 20, 'My favorite TSA event is Structural Engineering because it combines creativity, problem solving and hands on design. I enjoy building and creating things and during competition I was amazed by the creative bridge designs that were constructed by using balsa wood. Seeing these unique approaches to their bridge designs showed me possibilities I hadn''t considered. That experience taught me that there is always more than one solution to things and to reinforce the idea with creativity and determination.')

INSERT INTO officer_bios (officer, bio) VALUES 
  (11, 'Axum joined TSA in 7th grade at Antioch Middle School and her passion for the organization has led her to continue to participate throughout her time in high school. Having spent the past five years as a member competing in events such as Data Science & Analytics and Webmaster, she looks forward to spending the upcoming year serving on the officer team to hopefully make a long-term impact on the organization. After high school she hopes to go to college and double major in mathematics and neuroscience.'),
  (12, 'Sabrina has been in TSA since her freshman year and has found a community as soon as she joined. She is excited that she got the opportunity to be given a leadership position and will use that spot to make sure every member''s voice is heard. After she graduates she plans on majoring in civil engineering to further challenge herself in this world of progress.'),
  (14, 'Tracy joined TSA her 8th grade year looking to gain programming experiences and find more like-minded peers. Over the years, she''s found some of her closest friends and made some of the best memories through TSA and now is looking to bring these experiences to other members as well. She likes attending and hosting hackathons, competing in different competitions, and trying as many new things as she can. After high school, she hopes to attend a 4-year out-of-state college majoring in Computer'),
  (15, 'Manya has been in TSA since 8th grade, and she feels honored to hold a leadership position in this organization. She strives to help others achieve their goals, and she is so excited to meet new members and promote the organization across the state. Manya has improved her own confidence and problem solving skills through TSA, so she wants to encourage others to develop and improve their skills. As a state officer, she hopes to make lasting connections and improve Missouri TSA with her fellow officers. After high school, she plans on pursuing a degree in engineering.'),
  (16, 'Jason was encouraged to join TSA late freshman year and has since grown to love and appreciate the organization. Throughout the years, he found himself slowly yet effectively understanding how to go about different aspects of TSA. He tries his best to learn from his mistakes, help others, and show qualities of a decent leader. After he graduates, he hopes to attend WashU and WashU Law.'),
  (17, 'Riley Pederson joined TSA his sophomore year and has served as his chapter''s Reporter for the past 2 years. He has been motivated by all of the friends who he made through TSA and hopes people can be as welcomed as he feels in TSA. After High School, Riley hopes to attend Northwest Missouri State University and major in computer Science and cybersecurity.'),
  (18, 'Laila Holmes has been a dedicated member of TSA since 10th grade, holding various leadership positions within her chapter. Through TSA, she has found a true sense of belonging and is committed to developing the Northeast Region by pushing Missouri TSA to reach its full potential. Following graduation, Laila plans to attend a top-tier university to pursue a career in nursing and biomedical engineering.'),
  (19, 'David joined Technology Student Association his seventh grade year because his older sister, Valeria, and her friends were in it, and it seemed super fun. He says he is glad his older sister was right because he has loved it ever since. He''s glad he has had the opportunity to grow and mature with this association, and be an officer. After high school he plans to live in a big city like New York City or Los Angeles.'),
  (20, 'Driven by a passion for engineering and personal growth, Nuriya was excited to find the opportunities that TSA offers. TSA gave her the chance to compete in engineering related events while connecting with peers with the same passion. Since becoming a member during her freshman year, she has enjoyed her experience and the valuable skills and relationships that she has gained. Nuriya hopes that every member is able to pursue their goals, reach their full potential, and create lasting positive impacts through their involvement in TSA.')
